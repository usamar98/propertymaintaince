import { Buildings, CheckCircle, HouseLine } from "@phosphor-icons/react/dist/ssr";
import { landlordHighlights } from "@/data/site";
import { Container, Section, SectionHeader, Tag } from "@/components/ui";

export function LandlordHmo() {
  return (
    <Section id="landlords" className="bg-paper">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <SectionHeader
              label="Landlord and HMO support"
              title="Made for people managing more than one repair at a time."
              body="Letting agents and HMO operators need more than a phone number. This demo positions the company as organised, responsive, and ready for repeat maintenance work."
            />
            <div className="mt-8 flex flex-wrap gap-2">
              <Tag>Landlords</Tag>
              <Tag>HMO owners</Tag>
              <Tag>Letting agents</Tag>
              <Tag>Rental managers</Tag>
            </div>
          </div>

          <div className="rounded-[8px] border border-north p-6 shadow-tight">
            <div className="flex items-start gap-4 border-b border-north/14 pb-5">
              <span className="grid h-12 w-12 place-items-center rounded-[6px] bg-north text-paper">
                <Buildings size={24} weight="bold" />
              </span>
              <div>
                <p className="text-xl font-semibold text-north">Portfolio-ready repairs</p>
                <p className="mt-2 text-sm leading-6 text-north/70">
                  A clear message for clients who want a reliable contractor
                  rather than a one-off tradesperson.
                </p>
              </div>
            </div>

            <ul className="mt-5 grid gap-3">
              {landlordHighlights.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-north/76">
                  <CheckCircle
                    size={20}
                    weight="bold"
                    className="mt-0.5 shrink-0 text-north"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-[6px] border border-north/18 bg-north p-5 text-paper">
              <HouseLine size={24} weight="bold" />
              <p className="mt-3 text-sm font-semibold">
                Demo upsell path: website today, repair dashboard next.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
