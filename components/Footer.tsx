import { business, navItems } from "@/data/site";
import { Container } from "@/components/ui";

export function Footer() {
  return (
    <footer className="border-t border-north bg-north text-paper">
      <Container className="py-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-start">
          <div>
            <p className="text-xl font-semibold">{business.name}</p>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-paper/72">
              Responsive demo website for UK property maintenance companies,
              landlord repair services, HMO maintenance firms, and letting-agent
              repair contractors.
            </p>
          </div>
          <nav className="flex flex-wrap gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-paper/78 transition hover:text-paper"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-paper/20 pt-6 text-sm text-paper/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {business.name}. Demo website project.</p>
          <p>{business.location}</p>
        </div>
      </Container>
    </footer>
  );
}
