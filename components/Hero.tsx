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
  { label: "Response route", value: "Phone, form, WhatsApp" },
  { label: "Client focus", value: "Landlords and agents" },
  { label: "Upgrade path", value: "Repair tracker" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-north/12 bg-paper"
    >
      <div className="absolute inset-0 bg-blueprint bg-[length:42px_42px] opacity-100" />
      <Container className="relative grid gap-10 py-12 sm:py-16 lg:grid-cols-[1fr_1fr] lg:items-center lg:py-20">
        <div className="min-w-0">
          <div className="mb-6 flex flex-wrap gap-2 overflow-hidden">
            <Tag>Manchester property repairs</Tag>
            <Tag className="hidden sm:inline-flex">Landlord and HMO ready</Tag>
          </div>
          <h1 className="max-w-full text-3xl font-semibold leading-[1.08] text-north sm:text-5xl sm:leading-[1.04] lg:text-6xl">
            Premium repair enquiries for landlords who cannot afford silence.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-north/76">
            NorthStar gives property owners a sharper way to capture urgent
            repairs, show trusted local coverage, and preview the dashboard
            upgrade that keeps every job visible.
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
                className="border-b border-north/12 py-4 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 sm:pr-4"
              >
                <dt className="text-sm text-north/65">{stat.label}</dt>
                <dd className="mt-1 text-lg font-semibold leading-tight text-north">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative min-w-0">
          <div className="grid min-w-0 gap-4 rounded-[8px] border border-north bg-paper p-4 shadow-line">
            <div className="grid gap-4 sm:grid-cols-[1.22fr_0.78fr]">
              <div className="relative min-h-80 overflow-hidden rounded-[6px] border border-north bg-north sm:min-h-[440px]">
                <Image
                  src="/images/wall-repair.jpg"
                  alt="Maintenance worker repairing an interior property wall"
                  fill
                  priority
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="object-cover grayscale"
                />
                <div className="absolute inset-0 bg-north/18" />
                <div className="absolute bottom-4 left-4 right-4 rounded-[6px] border border-paper bg-paper p-4 text-north">
                  <p className="text-sm font-semibold">Photo-led repair proof</p>
                  <p className="mt-1 text-xs leading-5 text-north/68">
                    Real work imagery makes the website feel like a serious
                    contractor site, not a template.
                  </p>
                </div>
              </div>

              <div className="grid gap-4">
                <MiniImage
                  src="/images/boiler-repair.jpg"
                  alt="Technician working on heating controls"
                  label="Heating faults"
                />
                <MiniImage
                  src="/images/landlord-keys.jpg"
                  alt="Hand holding keys inside a property"
                  label="Landlord ready"
                />
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <HeroCue icon={<ClockCountdown size={24} weight="bold" />} label="Urgency triage" />
              <HeroCue icon={<ClipboardText size={24} weight="bold" />} label="Ticket preview" />
              <HeroCue icon={<ShieldCheck size={24} weight="bold" />} label="Approval notes" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function MiniImage({
  src,
  alt,
  label,
}: {
  src: string;
  alt: string;
  label: string;
}) {
  return (
    <div className="relative min-h-40 overflow-hidden rounded-[6px] border border-north bg-north sm:min-h-0">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 18vw, 50vw"
        className="object-cover grayscale"
      />
      <div className="absolute inset-0 bg-north/22" />
      <span className="absolute bottom-3 left-3 rounded-[6px] border border-paper bg-paper px-3 py-1 text-xs font-semibold text-north">
        {label}
      </span>
    </div>
  );
}

function HeroCue({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="rounded-[6px] border border-north/14 p-4">
      <span className="text-north">{icon}</span>
      <p className="mt-3 text-sm font-semibold text-north">{label}</p>
    </div>
  );
}
