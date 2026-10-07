import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BrandWordmark } from "@/components/brand-wordmark";

const links = [
  { href: "#parte-problema", label: "O problema" },
  { href: "#parte-app", label: "Como funciona" },
  { href: "#parte-impacto", label: "Impacto" },
  { href: "#parte-comunidade", label: "Comunidade" },
];

export function SiteHeader() {
  return (
    <header className="relative z-20 border-b border-[#20191215] bg-[#f8f2e8]/80 backdrop-blur-sm">
      <div className="mx-auto flex h-[78px] max-w-[1440px] items-center justify-between px-5 md:px-10">
        <Link href="#inicio" aria-label="HarmonIA, início" className="flex items-center"><BrandWordmark className="text-[13px]" /></Link>
        <nav aria-label="Navegação principal" className="hidden items-center gap-9 md:flex">{links.map((link) => <Link key={link.href} href={link.href} className="header-link text-[12px] font-medium text-[#554c3d]">{link.label}</Link>)}</nav>
        <Link href="#conheca" className="button-inverse-label hidden items-center gap-2 rounded-full bg-[#201912] px-5 py-3 text-[11px] font-semibold transition hover:bg-[#4d3a2d] sm:flex">Conheça o projeto <ArrowUpRight size={14} aria-hidden="true" /></Link>
        <Link href="#conheca" aria-label="Conheça a HarmonIA" className="site-header__mobile-cta sm:hidden"><ArrowUpRight size={18} aria-hidden="true" /></Link>
      </div>
      <nav id="navegacao" aria-label="Navegação mobile" className="flex justify-center gap-5 border-t border-[#20191212] bg-[#f7f0e3]/80 px-4 py-3 md:hidden">{links.map((link) => <Link key={link.href} href={link.href} className="text-[10px] font-medium text-[#554c3d]">{link.label}</Link>)}</nav>
    </header>
  );
}
