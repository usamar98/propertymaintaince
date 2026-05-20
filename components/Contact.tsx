import {
  EnvelopeSimple,
  MapPin,
  PhoneCall,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import { business } from "@/data/site";
import { ButtonLink, Container, Section, SectionHeader, Tag } from "@/components/ui";

export function Contact() {
  return (
    <Section id="contact" className="bg-paper">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeader
              label="Contact"
              title="Ready for Manchester repair enquiries."
              body="The contact section keeps the conversion paths visible at the bottom of the page, with phone, WhatsApp, email, and local service areas."
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#repair-request">Request a Repair</ButtonLink>
              <ButtonLink href={business.whatsapp} variant="outline" target="_blank">
                <WhatsappLogo size={18} weight="bold" />
                WhatsApp Us
              </ButtonLink>
            </div>
          </div>

          <div className="rounded-[8px] border border-north p-6 shadow-tight">
            <div className="grid gap-4">
              <ContactRow
                icon={<PhoneCall size={22} weight="bold" />}
                label="Phone"
                value={business.phone}
                href={business.phoneHref}
              />
              <ContactRow
                icon={<EnvelopeSimple size={22} weight="bold" />}
                label="Email"
                value={business.email}
                href={business.emailHref}
              />
              <ContactRow
                icon={<MapPin size={22} weight="bold" />}
                label="Location"
                value={business.location}
              />
            </div>

            <div className="mt-6 border-t border-north/14 pt-6">
              <p className="mb-3 text-sm font-semibold text-north">
                Service areas
              </p>
              <div className="flex flex-wrap gap-2">
                {business.serviceAreas.map((area) => (
                  <Tag key={area}>{area}</Tag>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-4 rounded-[8px] border border-north/16 p-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[6px] bg-north text-paper">
        {icon}
      </span>
      <span>
        <span className="block text-xs font-semibold text-north/58">{label}</span>
        <span className="mt-1 block text-sm font-semibold text-north">{value}</span>
      </span>
    </div>
  );

  return href ? (
    <a href={href} className="block transition hover:-translate-y-1">
      {content}
    </a>
  ) : (
    content
  );
}
