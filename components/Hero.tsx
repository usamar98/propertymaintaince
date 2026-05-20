import Image from "next/image";
import {
  ArrowRight,
  ClipboardText,
  ClockCountdown,
  ShieldCheck,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import { business } from "@/data/site";
import { ButtonLink, Container, Tag } from "@/components/ui";

const heroStats = [
  { label: "Local coverage", value: "7 areas" },
  { label: "Client focus", value: "Landlords" },
  { label: "Demo status", value: "Tracker ready" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-north/12 bg-paper"
    >
      <div className="absolute inset-0 bg-blueprint bg-[length:42px_42px] opacity-100" />
      <Container className="relative grid gap-10 py-12 sm:py-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:py-20">
        <div className="min-w-0">
          <div className="mb-6 flex flex-wrap gap-2 overflow-hidden">
            <Tag>Manchester property repairs</Tag>
            <Tag className="hidden sm:inline-flex">Landlord and HMO ready</Tag>
          </div>
          <h1 className="max-w-full text-3xl font-semibold leading-[1.08] text-north sm:text-5xl sm:leading-[1.04] lg:text-6xl">
            Rental repairs handled before they become tenant complaints.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-north/76">
            A professional maintenance website demo for landlords, HMO owners,
            letting agents, and Manchester homeowners who need fast repair
            requests, clear service areas, and a visible job pipeline.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#repair-request">
              Request a Repair
              <ArrowRight size={19} weight="bold" />
            </ButtonLink>
            <ButtonLink href={business.whatsapp} variant="outline" target="_blank">
              <WhatsappLogo size={20} weight="bold" />
              WhatsApp Us
            </ButtonLink>
          </div>

          <dl className="mt-10 grid max-w-2xl grid-cols-1 border-y border-north/14 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="border-b border-north/12 py-4 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
              >
                <dt className="text-sm text-north/65">{stat.label}</dt>
                <dd className="mt-1 text-xl font-semibold text-north">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative min-w-0">
          <div className="min-w-0 rounded-[8px] border border-north bg-paper shadow-line">
            <div className="flex flex-col items-start gap-3 border-b border-north/14 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-north">Emergency desk</p>
                <p className="text-xs text-north/62">Live demo repair intake</p>
              </div>
              <span className="rounded-[6px] border border-north px-3 py-1 text-xs font-semibold text-north">
                New Request
              </span>
            </div>
            <div className="grid gap-5 p-5">
              <Image
                src="/northstar-van.svg"
                alt="NorthStar maintenance van line illustration"
                width={640}
                height={360}
                priority
                className="h-auto w-full rounded-[6px] border border-north/14 bg-paper"
              />
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-[6px] border border-north/14 p-4">
                  <ClockCountdown size={24} weight="bold" className="text-north" />
                  <p className="mt-3 text-sm font-semibold text-north">
                    Triage urgency
                  </p>
                </div>
                <div className="rounded-[6px] border border-north/14 p-4">
                  <ClipboardText size={24} weight="bold" className="text-north" />
                  <p className="mt-3 text-sm font-semibold text-north">
                    Ticket preview
                  </p>
                </div>
                <div className="rounded-[6px] border border-north/14 p-4">
                  <ShieldCheck size={24} weight="bold" className="text-north" />
                  <p className="mt-3 text-sm font-semibold text-north">
                    Landlord notes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}



