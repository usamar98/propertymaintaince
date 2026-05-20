import {
  ArrowRight,
  PhoneCall,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import { business, navItems } from "@/data/site";
import { ButtonLink, Container } from "@/components/ui";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-north/12 bg-paper">
      <Container className="flex min-h-20 items-center justify-between gap-4">
        <a href="#top" className="group flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-[6px] border border-north bg-north text-lg font-semibold text-paper">
            NS
          </span>
          <span className="leading-tight">
            <span className="block text-base font-semibold text-north">
              NorthStar
            </span>
            <span className="block text-xs font-medium text-north/65">
              Property Maintenance
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-north/72 transition hover:text-north"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={business.phoneHref}
            className="inline-flex min-h-11 items-center gap-2 rounded-[6px] border border-north/18 px-4 text-sm font-semibold text-north transition hover:border-north"
          >
            <PhoneCall size={18} weight="bold" />
            <span>{business.phone}</span>
          </a>
          <ButtonLink href="#repair-request" className="min-h-11 px-4">
            Request a Repair
            <ArrowRight size={18} weight="bold" />
          </ButtonLink>
        </div>

        <a
          href={business.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-11 w-11 items-center justify-center rounded-[6px] border border-north bg-north text-paper transition hover:bg-paper hover:text-north md:hidden"
          aria-label="WhatsApp NorthStar Property Maintenance"
        >
          <WhatsappLogo size={22} weight="bold" />
        </a>
      </Container>
    </header>
  );
}
