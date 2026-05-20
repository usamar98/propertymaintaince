import { ArrowRight, PaintBrush, SealCheck } from "@phosphor-icons/react/dist/ssr";
import { projects } from "@/data/site";
import { Container, Section, SectionHeader } from "@/components/ui";

export function ProjectCards() {
  return (
    <Section className="bg-paper">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.74fr_1.26fr]">
          <SectionHeader
            label="Before and after"
            title="Project cards turn vague repairs into visible outcomes."
            body="Each card frames the problem, the fix, and the landlord-facing evidence. That makes the maintenance offer feel concrete."
          />

          <div className="grid gap-5">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="rounded-[8px] border border-north p-5 transition duration-300 ease-out hover:-translate-y-1 hover:shadow-tight"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-north/62">
                      {project.area}
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
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
