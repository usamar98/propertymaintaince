import {
  ArrowRight,
  Clock,
  HouseLine,
  ShieldCheck,
  Users,
} from "@phosphor-icons/react/dist/ssr";
import { reasons } from "@/data/site";
import { Container, Section } from "@/components/ui";

const icons = [Clock, Users, HouseLine, ShieldCheck];

export function WhyChooseUsPanel() {
  return (
    <Section className="border-y border-north/12 bg-north text-paper">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="mb-3 text-sm font-semibold text-paper/72">Why choose us</p>
            <h2 className="text-3xl font-semibold leading-tight text-paper sm:text-4xl">
              A maintenance website should sell trust before the first call.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-paper/78">
              This demo is written around practical buyer concerns: response
              speed, access, evidence, approvals, and portfolio visibility.
            </p>
          </div>

          <div className="grid gap-4">
            {reasons.map((reason, index) => {
              const Icon = icons[index] ?? ShieldCheck;

              return (
                <article
                  key={reason.title}
                  className="grid gap-4 rounded-[8px] border border-paper/24 p-5 sm:grid-cols-[auto_1fr_auto] sm:items-start"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-[6px] border border-paper text-paper">
                    <Icon size={22} weight="bold" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-paper">{reason.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-paper/78">{reason.body}</p>
                  </div>
                  <ArrowRight
                    size={20}
                    weight="bold"
                    className="hidden text-paper/70 sm:block"
                  />
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
