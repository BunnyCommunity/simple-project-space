import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Presentation } from "@/components/deck/Presentation";
import { slides } from "@/components/deck/slides";

export const Route = createFileRoute("/")({
  validateSearch: (s: Record<string, unknown>): { slide?: number } => {
    const n = Number(s["slide"]);
    return Number.isInteger(n) && n >= 1 && n <= slides.length ? { slide: n } : {};
  },
  head: () => ({
    meta: [
      { title: "Organização das Nações Unidas — Apresentação de Juan Guilherme" },
      { name: "description", content: "Apresentação escolar sobre a ONU: origem, objetivos, órgãos, agências, ODS e desafios. Colégio Carvalho, 9º ano." },
      { property: "og:title", content: "Organização das Nações Unidas — Apresentação escolar" },
      { property: "og:description", content: "12 slides sobre a história, estrutura e desafios da ONU." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const { slide } = Route.useSearch();
  const navigate = useNavigate({ from: "/" });
  return (
    <Presentation
      index={(slide ?? 1) - 1}
      onChange={(i) => navigate({ search: i === 0 ? {} : { slide: i + 1 }, replace: true })}
    />
  );
}
