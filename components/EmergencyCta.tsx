import { ArrowRight, PhoneCall, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { business } from "@/data/site";
import { ButtonLink, Container, Section } from "@/components/ui";

export function EmergencyCta() {
  return (
    <Section className="bg-north py-12 text-paper sm:py-16">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold text-paper/72">Emergency repair CTA</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">
              Leaks, locks, heating faults, and unsafe electrics need a direct
              route to action.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-paper/78">
              The page gives urgent visitors two obvious choices: submit a
              structured repair request or message the team on WhatsApp.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <ButtonLink href="#repair-request" variant="light">
              Request a Repair
              <ArrowRight size={18} weight="bold" />
            </ButtonLink>
            <ButtonLink href={business.phoneHref} variant="light">
              <PhoneCall size={18} weight="bold" />
              Call Now
            </ButtonLink>
            <ButtonLink href={business.whatsapp} variant="light" target="_blank">
              <WhatsappLogo size={18} weight="bold" />
              WhatsApp Us
            </ButtonLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
