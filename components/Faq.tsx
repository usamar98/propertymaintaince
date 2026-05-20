import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import { faqs } from "@/data/site";
import { Container, Section, SectionHeader } from "@/components/ui";

export function Faq() {
  return (
    <Section className="border-y border-north/12 bg-paper">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <SectionHeader
            label="FAQ"
            title="Questions landlords and agents ask before booking."
            body="The answers are honest about what is mocked today and what can become a paid integration later."
          />

          <div className="divide-y divide-north/14 rounded-[8px] border border-north">
            {faqs.map((faq) => (
              <details key={faq.question} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 text-left text-base font-semibold text-north">
                  {faq.question}
                  <CaretDown
                    size={20}
                    weight="bold"
                    className="shrink-0 transition group-open:rotate-180"
                  />
                </summary>
                <p className="px-5 pb-5 text-sm leading-6 text-north/70">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
