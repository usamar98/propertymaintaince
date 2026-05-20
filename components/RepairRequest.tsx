import { Container, Section, SectionHeader } from "@/components/ui";
import { RepairRequestForm } from "@/components/RepairRequestForm";

export function RepairRequest() {
  return (
    <Section id="repair-request" className="bg-paper">
      <Container>
        <div className="mb-10">
          <SectionHeader
            label="Request a Repair"
            title="A serious enquiry form for real maintenance workflows."
            body="The form asks the questions a contractor or letting agent needs before booking a visit, including category, urgency, access time, address, postcode, and photo evidence."
          />
        </div>
        <RepairRequestForm />
      </Container>
    </Section>
  );
}
