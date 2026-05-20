import { MapPin, NavigationArrow, PhoneCall } from "@phosphor-icons/react/dist/ssr";
import { business } from "@/data/site";
import { ButtonLink, Container, Section, SectionHeader, Tag } from "@/components/ui";

export function ServiceAreaMap() {
  return (
    <Section id="map" className="bg-paper">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <SectionHeader
              label="Google Map"
              title="Manchester coverage with a clear local footprint."
              body="A live Google Maps embed gives the demo a real local signal without needing a paid API key or backend integration."
            />
            <div className="mt-8 flex flex-wrap gap-2">
              {business.serviceAreas.map((area) => (
                <Tag key={area}>{area}</Tag>
              ))}
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <ButtonLink href={business.phoneHref}>
                <PhoneCall size={18} weight="bold" />
                Call NorthStar
              </ButtonLink>
              <ButtonLink href="#repair-request" variant="outline">
                <NavigationArrow size={18} weight="bold" />
                Send a repair
              </ButtonLink>
            </div>
          </div>

          <div className="overflow-hidden rounded-[8px] border border-north bg-north shadow-line">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-paper/20 p-5 text-paper">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-[6px] border border-paper">
                  <MapPin size={22} weight="bold" />
                </span>
                <div>
                  <p className="font-semibold">NorthStar Property Maintenance</p>
                  <p className="mt-1 text-sm text-paper/72">{business.location}</p>
                </div>
              </div>
              <span className="rounded-[6px] border border-paper px-3 py-1 text-xs font-semibold">
                Greater Manchester
              </span>
            </div>
            <iframe
              title="NorthStar Property Maintenance Google Map"
              src={business.mapEmbed}
              className="h-[420px] w-full bg-paper grayscale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
