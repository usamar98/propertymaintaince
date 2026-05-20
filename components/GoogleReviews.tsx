import { GoogleLogo, Star } from "@phosphor-icons/react/dist/ssr";
import { googleReviews } from "@/data/site";
import { Container, Section, SectionHeader } from "@/components/ui";

export function GoogleReviews() {
  return (
    <Section id="reviews" className="border-y border-north/12 bg-paper">
      <Container>
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.76fr_0.24fr] lg:items-end">
          <SectionHeader
            label="Client Google reviews"
            title="Review proof that feels ready for a real maintenance brand."
            body="This static demo section is shaped like a Google reviews panel and can later be replaced with live Google Business Profile embeds or API-backed reviews."
          />
          <div className="rounded-[8px] border border-north bg-north p-5 text-paper">
            <div className="flex items-center gap-3">
              <GoogleLogo size={26} weight="bold" />
              <div>
                <p className="text-sm font-semibold">Google rating demo</p>
                <p className="mt-1 text-2xl font-semibold">5.0</p>
              </div>
            </div>
            <div className="mt-4 flex gap-1 text-paper">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={18} weight="fill" />
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {googleReviews.map((review) => (
            <figure
              key={review.name}
              className="rounded-[8px] border border-north bg-paper p-5 shadow-tight"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-semibold text-north">{review.name}</p>
                  <p className="mt-1 text-xs font-medium text-north/58">
                    {review.role}
                  </p>
                </div>
                <GoogleLogo size={22} weight="bold" className="shrink-0 text-north" />
              </div>

              <div className="mt-4 flex items-center gap-3">
                <div className="flex gap-1 text-north">
                  {Array.from({ length: review.rating }).map((_, index) => (
                    <Star key={index} size={16} weight="fill" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-north/56">
                  {review.date}
                </span>
              </div>

              <blockquote className="mt-5 text-sm leading-6 text-north/72">
                "{review.quote}"
              </blockquote>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}
