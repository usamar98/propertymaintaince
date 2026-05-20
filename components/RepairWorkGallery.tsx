import Image from "next/image";
import { ArrowRight, MapPin } from "@phosphor-icons/react/dist/ssr";
import { repairWork } from "@/data/site";
import { Container, Section, SectionHeader } from "@/components/ui";

export function RepairWorkGallery() {
  return (
    <Section id="work" className="bg-paper">
      <Container>
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            label="Recent repair work"
            title="Real job cards that show the work landlords actually buy."
            body="Each card is written like a maintenance update: location, job type, status, and the practical result a landlord or letting agent cares about."
          />
          <a
            href="#repair-request"
            className="inline-flex w-fit items-center gap-2 border-b border-north pb-1 text-sm font-semibold text-north transition hover:gap-3"
          >
            Book a similar repair
            <ArrowRight size={18} weight="bold" />
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {repairWork.map((job) => (
            <article
              key={`${job.title}-${job.area}`}
              className="group overflow-hidden rounded-[8px] border border-north bg-paper shadow-tight transition duration-300 ease-out hover:-translate-y-1"
            >
              <div className="relative min-h-64 bg-north">
                <Image
                  src={job.image}
                  alt={job.alt}
                  fill
                  sizes="(min-width: 1280px) 32vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover grayscale transition duration-500 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-north/18" />
                <span className="absolute left-4 top-4 rounded-[6px] border border-paper bg-paper px-3 py-1 text-xs font-semibold text-north">
                  {job.status}
                </span>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold leading-tight text-north">
                      {job.title}
                    </h3>
                    <p className="mt-2 flex items-center gap-2 text-xs font-semibold text-north/62">
                      <MapPin size={15} weight="bold" />
                      {job.area}
                    </p>
                  </div>
                  <ArrowRight
                    size={20}
                    weight="bold"
                    className="mt-1 shrink-0 text-north transition group-hover:translate-x-1"
                  />
                </div>
                <p className="mt-4 text-sm leading-6 text-north/72">
                  {job.summary}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
