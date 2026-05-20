import { ArrowRight, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { packages } from "@/data/site";
import { ButtonLink, Container, Section, SectionHeader } from "@/components/ui";

export function Pricing() {
  return (
    <Section id="pricing" className="bg-paper">
      <Container>
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            label="Pricing and maintenance packages"
            title="Package the offer so prospects know what to ask for."
            body="A property maintenance company can use these tiers for real services, or as a demo structure for monthly website and dashboard upsells."
          />
          <ButtonLink href="#repair-request" className="w-fit">
            Start with a request
            <ArrowRight size={18} weight="bold" />
          </ButtonLink>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.15fr_0.95fr]">
          {packages.map((item, index) => (
            <article
              key={item.name}
              className={`rounded-[8px] border p-6 ${
                index === 1
                  ? "border-north bg-north text-paper shadow-line"
                  : "border-north bg-paper text-north"
              }`}
            >
              <p
                className={`text-sm font-semibold ${
                  index === 1 ? "text-paper/72" : "text-north/62"
                }`}
              >
                {item.name}
              </p>
              <p className="mt-4 text-4xl font-semibold">{item.price}</p>
              <p
                className={`mt-4 text-sm leading-6 ${
                  index === 1 ? "text-paper/76" : "text-north/70"
                }`}
              >
                {item.summary}
              </p>
              <ul className="mt-6 grid gap-3">
                {item.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm">
                    <CheckCircle
                      size={19}
                      weight="bold"
                      className={index === 1 ? "text-paper" : "text-north"}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
