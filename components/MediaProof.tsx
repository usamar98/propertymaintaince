import Image from "next/image";
import { Camera, CheckCircle, HouseLine } from "@phosphor-icons/react/dist/ssr";
import { mediaFeatures } from "@/data/site";
import { Container, Section, SectionHeader } from "@/components/ui";

export function MediaProof() {
  return (
    <Section className="bg-paper">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHeader
              label="Real job imagery"
              title="A premium site needs proof you can see."
              body="Real maintenance photography is tinted and framed to stay inside the NorthStar white and dark-green identity."
            />
            <div className="mt-8 rounded-[8px] border border-north bg-north p-6 text-paper">
              <Camera size={30} weight="bold" />
              <p className="mt-5 text-2xl font-semibold leading-tight">
                Photos now support the sales story.
              </p>
              <p className="mt-4 text-sm leading-6 text-paper/78">
                Landlords see evidence capture, agents see professionalism, and
                maintenance companies see a website they can sell as a serious
                package.
              </p>
            </div>
          </div>

          <div className="grid gap-5">
            {mediaFeatures.map((feature, index) => (
              <article
                key={feature.title}
                className={`grid overflow-hidden rounded-[8px] border border-north bg-paper shadow-tight md:grid-cols-[0.88fr_1.12fr] ${
                  index === 1 ? "md:grid-cols-[1.12fr_0.88fr]" : ""
                }`}
              >
                <div className={`${index === 1 ? "md:order-2" : ""} relative min-h-64 bg-north`}>
                  <Image
                    src={feature.image}
                    alt={feature.alt}
                    fill
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    className="object-cover grayscale"
                  />
                  <div className="absolute inset-0 bg-north/18" />
                </div>
                <div className="flex flex-col justify-between gap-8 p-6">
                  <div>
                    <span className="grid h-11 w-11 place-items-center rounded-[6px] border border-north bg-north text-paper">
                      {index === 2 ? (
                        <HouseLine size={22} weight="bold" />
                      ) : (
                        <CheckCircle size={22} weight="bold" />
                      )}
                    </span>
                    <h3 className="mt-5 text-2xl font-semibold leading-tight text-north">
                      {feature.title}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-north/70">
                      {feature.body}
                    </p>
                  </div>
                  <p className="border-t border-north/14 pt-4 text-xs font-semibold text-north/58">
                    Photo evidence supports clear landlord updates.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
