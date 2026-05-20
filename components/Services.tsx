import { CheckCircle, Wrench } from "@phosphor-icons/react/dist/ssr";
import { services } from "@/data/site";
import { Container, Section, SectionHeader } from "@/components/ui";

export function Services() {
  const primaryServices = services.slice(0, 4);
  const remainingServices = services.slice(4);

  return (
    <Section id="services" className="bg-paper">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHeader
              label="Services"
              title="Repair categories that match how landlords search."
              body="The page covers emergency work, planned maintenance, HMO support, and end-of-tenancy repairs without making visitors dig through separate pages."
            />
            <div className="mt-8 rounded-[8px] border border-north bg-north p-6 text-paper">
              <Wrench size={30} weight="bold" />
              <p className="mt-5 text-2xl font-semibold leading-tight">
                Built for urgent calls and routine property care.
              </p>
              <p className="mt-4 text-sm leading-6 text-paper/78">
                Clear service labels help convert Google traffic from landlords,
                HMO owners, homeowners, and letting agents.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              {primaryServices.map((service) => (
                <article
                  key={service}
                  className="rounded-[8px] border border-north p-6 transition duration-300 ease-out hover:-translate-y-1 hover:shadow-tight"
                >
                  <CheckCircle size={24} weight="bold" className="text-north" />
                  <h3 className="mt-5 text-xl font-semibold text-north">{service}</h3>
                  <p className="mt-3 text-sm leading-6 text-north/70">
                    Request details, urgency, address, and access preferences
                    are captured in one structured repair flow.
                  </p>
                </article>
              ))}
            </div>

            <div className="rounded-[8px] border border-north/18">
              {remainingServices.map((service, index) => (
                <div
                  key={service}
                  className="flex items-center justify-between gap-4 border-b border-north/12 px-5 py-4 last:border-b-0"
                >
                  <span className="text-sm font-semibold text-north">{service}</span>
                  <span className="text-xs font-medium text-north/58">
                    {String(index + 5).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
