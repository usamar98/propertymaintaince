import Image from "next/image";
import { ArrowRight, PaintBrush, SealCheck } from "@phosphor-icons/react/dist/ssr";
import { projects } from "@/data/site";
import { Container, Section, SectionHeader } from "@/components/ui";

export function ProjectCards() {
  return (
    <Section className="bg-paper">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <SectionHeader
            label="Before and after"
            title="Visible outcomes make repair work easier to sell."
            body="The project cards now pair structured repair notes with real job-style photography, giving prospects a stronger sense of quality and evidence capture."
          />

          <div className="grid gap-5">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="grid overflow-hidden rounded-[8px] border border-north bg-paper shadow-tight transition duration-300 ease-out hover:-translate-y-1 md:grid-cols-[0.86fr_1.14fr]"
              >
                <div className="relative min-h-64 bg-north md:min-h-full">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 34vw, 100vw"
                    className="object-cover grayscale"
                  />
                  <div className="absolute inset-0 bg-north/16" />
                  <span className="absolute left-4 top-4 rounded-[6px] border border-paper bg-paper px-3 py-1 text-xs font-semibold text-north">
                    {project.area}
                  </span>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-north/62">
                        Evidence-led repair card
                      </p>
                      <h3 className="mt-2 text-xl font-semibold leading-tight text-north">
                        {project.title}
                      </h3>
                    </div>
                    <span className="grid h-11 w-11 place-items-center rounded-[6px] border border-north bg-north text-paper">
                      {index === 2 ? (
                        <PaintBrush size={22} weight="bold" />
                      ) : (
                        <SealCheck size={22} weight="bold" />
                      )}
                    </span>
                  </div>

                  <div className="mt-5 grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
                    <div className="rounded-[6px] border border-north/18 p-4">
                      <p className="text-sm font-semibold text-north">Before</p>
                      <p className="mt-2 text-sm leading-6 text-north/70">
                        {project.before}
                      </p>
                    </div>
                    <span className="hidden items-center text-north md:flex">
                      <ArrowRight size={22} weight="bold" />
                    </span>
                    <div className="rounded-[6px] border border-north bg-north p-4 text-paper">
                      <p className="text-sm font-semibold">After</p>
                      <p className="mt-2 text-sm leading-6 text-paper/78">
                        {project.after}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
