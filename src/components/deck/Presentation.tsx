import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize, Minimize, NotebookPen } from "lucide-react";
import { slides, type Slide } from "./slides";
import { Globe } from "./Globe";

function SlideBody({ s }: { s: Slide }) {
  if (s.layout === "cover" || s.layout === "closing") {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-6 text-center">
        <Globe className="h-28 w-28 text-un md:h-40 md:w-40 animate-[spin_60s_linear_infinite]" />
        <p className="kicker">{s.kicker}</p>
        <h1 className="font-display text-4xl font-semibold leading-tight text-navy md:text-7xl max-w-4xl">{s.title}</h1>
        <div className="h-1 w-24 rounded-full bg-gold" />
        <p className="text-lg text-muted-foreground md:text-2xl">{s.lead}</p>
      </div>
    );
  }
  return (
    <div className="flex h-full flex-col justify-center gap-6 md:gap-8">
      <div>
        <p className="kicker">{s.kicker}</p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-navy md:text-6xl">{s.title}</h2>
        {s.lead && <p className="mt-4 max-w-3xl text-base text-foreground/80 md:text-2xl">{s.lead}</p>}
      </div>
      {s.layout === "refs" ? (
        <ul className="grid gap-3 md:grid-cols-2">
          {s.points?.map((p) => (
            <li key={p.text} className="card-un">
              <p className="font-semibold text-navy">{p.title}</p>
              <a href={p.text} target="_blank" rel="noreferrer" className="break-all text-sm text-un underline underline-offset-4">{p.text}</a>
            </li>
          ))}
        </ul>
      ) : (
        <div className={s.layout === "grid" ? `grid gap-4 sm:grid-cols-2 ${(s.points?.length ?? 0) > 4 ? "lg:grid-cols-3" : ""}` : "grid gap-4 md:grid-cols-3"}>
          {s.points?.map((p, i) => (
            <div key={p.title} className="card-un" style={{ animationDelay: `${i * 80}ms` }}>
              <p className="font-display text-xl font-semibold text-navy md:text-2xl">{p.title}</p>
              <p className="mt-2 text-sm text-foreground/75 md:text-lg">{p.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function Presentation({ index, onChange }: { index: number; onChange: (i: number) => void }) {
  const [notes, setNotes] = useState(false);
  const [full, setFull] = useState(false);
  const touch = useRef<number | null>(null);
  const total = slides.length;
  const s = slides[index] ?? slides[0]!;
  const go = useCallback((d: number) => onChange(Math.min(total - 1, Math.max(0, index + d))), [index, onChange, total]);

  useEffect(() => {
    const k = (e: KeyboardEvent) => {
      if (["ArrowRight", "PageDown", " "].includes(e.key)) { e.preventDefault(); go(1); }
      else if (["ArrowLeft", "PageUp"].includes(e.key)) { e.preventDefault(); go(-1); }
      else if (e.key === "Home") onChange(0);
      else if (e.key === "End") onChange(total - 1);
      else if (e.key.toLowerCase() === "n") setNotes((v) => !v);
      else if (e.key.toLowerCase() === "f") toggleFull();
    };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [go, onChange, total]);

  useEffect(() => {
    const f = () => setFull(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", f);
    return () => document.removeEventListener("fullscreenchange", f);
  }, []);
  useEffect(() => { document.title = `${index + 1}/${total} — ${s.title}`; }, [index, s.title, total]);

  function toggleFull() {
    if (document.fullscreenElement) void document.exitFullscreen();
    else void document.documentElement.requestFullscreen?.();
  }

  return (
    <div className="flex min-h-dvh flex-col bg-background"
      onTouchStart={(e) => (touch.current = e.touches[0]?.clientX ?? null)}
      onTouchEnd={(e) => { const x = e.changedTouches[0]?.clientX; if (touch.current != null && x != null && Math.abs(x - touch.current) > 50) go(x < touch.current ? 1 : -1); touch.current = null; }}>
      <header className="flex items-center justify-between gap-3 bg-navy px-4 py-3 text-navy-foreground md:px-8">
        <div className="flex items-center gap-2 font-display font-semibold"><Globe className="h-7 w-7" /> ONU · Juan Guilherme</div>
        <div className="flex items-center gap-1">
          <button onClick={() => setNotes((v) => !v)} aria-pressed={notes} aria-label="Notas do apresentador" className="icon-btn"><NotebookPen className="h-5 w-5" /></button>
          <button onClick={toggleFull} aria-label="Tela cheia" className="icon-btn">{full ? <Minimize className="h-5 w-5" /> : <Maximize className="h-5 w-5" />}</button>
        </div>
      </header>
      <div className="h-1.5 bg-muted"><div className="h-full bg-gold transition-all duration-500" style={{ width: `${((index + 1) / total) * 100}%` }} role="progressbar" aria-valuenow={index + 1} aria-valuemin={1} aria-valuemax={total} /></div>

      <main className="relative flex-1 overflow-hidden">
        <Globe className="pointer-events-none absolute -right-24 -bottom-24 h-96 w-96 text-un/10 md:h-[36rem] md:w-[36rem]" />
        <section key={index} aria-live="polite" className="slide-enter relative mx-auto h-full max-w-6xl px-5 py-8 md:px-12 md:py-12">
          <SlideBody s={s} />
        </section>
      </main>

      {notes && (
        <aside className="border-t border-border bg-secondary px-5 py-4 text-sm md:px-12 md:text-base">
          <p className="kicker mb-1">Notas do apresentador</p>
          <p>{s.notes}</p>
          {slides[index + 1] && <p className="mt-2 text-muted-foreground">Próximo: {slides[index + 1]!.title}</p>}
        </aside>
      )}

      <nav className="flex items-center justify-between gap-3 border-t border-border px-4 py-3 md:px-8">
        <button onClick={() => go(-1)} disabled={index === 0} className="nav-btn"><ChevronLeft className="h-5 w-5" /> Anterior</button>
        <div className="flex flex-col items-center gap-2">
          <div className="hidden gap-1.5 sm:flex">
            {slides.map((sl, i) => (
              <button key={i} onClick={() => onChange(i)} aria-label={`Ir para slide ${i + 1}: ${sl.title}`} className={`h-2.5 rounded-full transition-all ${i === index ? "w-6 bg-un" : "w-2.5 bg-border hover:bg-un/50"}`} />
            ))}
          </div>
          <span className="text-sm font-medium text-muted-foreground">{index + 1} / {total}</span>
        </div>
        <button onClick={() => go(1)} disabled={index === total - 1} className="nav-btn">Próximo <ChevronRight className="h-5 w-5" /></button>
      </nav>
    </div>
  );
}
