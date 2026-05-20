import { ClipboardText } from "@phosphor-icons/react/dist/ssr";
import { demoJobs } from "@/data/site";
import { Container, Section, SectionHeader } from "@/components/ui";

export function RepairTrackerPreview() {
  return (
    <Section id="tracker" className="border-y border-north/12 bg-paper">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div>
            <SectionHeader
              label="Demo Repair Tracker Preview"
              title="A website that opens the door to a repair dashboard upsell."
              body="This preview shows how job visibility could look after the enquiry. It is intentionally simple, but it gives prospects a reason to ask for the bigger system."
            />
          </div>

          <div className="overflow-hidden rounded-[8px] border border-north shadow-tight">
            <div className="grid grid-cols-[1.4fr_0.7fr_1fr] border-b border-north bg-north px-4 py-3 text-sm font-semibold text-paper sm:px-5">
              <span>Job</span>
              <span>Urgency</span>
              <span>Status</span>
            </div>
            <div className="divide-y divide-north/12">
              {demoJobs.map((job) => (
                <div
                  key={`${job.title}-${job.status}`}
                  className="grid grid-cols-1 gap-2 px-4 py-4 sm:grid-cols-[1.4fr_0.7fr_1fr] sm:items-center sm:px-5"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[6px] border border-north/18">
                      <ClipboardText size={18} weight="bold" className="text-north" />
                    </span>
                    <span className="font-semibold text-north">{job.title}</span>
                  </div>
                  <span className="w-fit rounded-[6px] border border-north/18 px-3 py-1 text-sm font-semibold text-north">
                    {job.urgency}
                  </span>
                  <span className="text-sm font-medium text-north/72">{job.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
