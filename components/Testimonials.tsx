import { Quotes } from "@phosphor-icons/react/dist/ssr";
import { testimonials } from "@/data/site";
import { Container, Section, SectionHeader } from "@/components/ui";

export function Testimonials() {
  return (
    <Section className="border-y border-north/12 bg-paper">
      <Container>
        <div className="mb-10">
          <SectionHeader
            label="Testimonials"
            title="Proof points written for the buyers you want to impress."
            body="These testimonials speak to speed, tenant communication, and portfolio maintenance confidence."
          />
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr_1fr]">
          {testimonials.map((testimonial, index) => (
            <figure
              key={testimonial.name}
              className={`rounded-[8px] border border-north p-6 ${
                index === 1 ? "bg-north text-paper lg:mt-10" : "bg-paper text-north"
              }`}
            >
              <Quotes
                size={28}
                weight="bold"
                className={index === 1 ? "text-paper" : "text-north"}
              />
              <blockquote
                className={`mt-5 text-lg font-semibold leading-8 ${
                  index === 1 ? "text-paper" : "text-north"
                }`}
              >
                "{testimonial.quote}"
              </blockquote>
              <figcaption
                className={`mt-6 text-sm ${
                  index === 1 ? "text-paper/74" : "text-north/66"
                }`}
              >
                <span className="block font-semibold">{testimonial.name}</span>
                <span className="mt-1 block">{testimonial.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}
