"use client";

import { FormEvent, useState } from "react";
import {
  CheckCircle,
  ClipboardText,
  UploadSimple,
} from "@phosphor-icons/react/dist/ssr";
import { repairCategories } from "@/data/site";

const urgencyLevels = ["Low", "Medium", "High", "Emergency"];
const customerTypes = ["Landlord", "Tenant", "Letting agent", "Homeowner"];

type Ticket = {
  id: string;
  name: string;
  address: string;
  category: string;
  urgency: string;
  status: "New Request";
};

function getValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" && value.trim() ? value.trim() : "";
}

export function RepairRequestForm() {
  const [ticket, setTicket] = useState<Ticket | null>(null);
  const [isSending, setIsSending] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = getValue(formData, "name") || "NorthStar Customer";
    const address = getValue(formData, "address") || "Manchester property";
    const category = getValue(formData, "category") || "General Handyman Services";
    const urgency = getValue(formData, "urgency") || "Medium";

    setIsSending(true);

    window.setTimeout(() => {
      setTicket({
        id: `NS-${new Date().getFullYear()}-${Math.floor(1200 + Math.random() * 7800)}`,
        name,
        address,
        category,
        urgency,
        status: "New Request",
      });
      setIsSending(false);
      form.reset();
    }, 420);
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-start">
      <form
        onSubmit={handleSubmit}
        className="rounded-[8px] border border-north p-5 shadow-tight sm:p-6"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Name" name="name" autoComplete="name" required />
          <Field label="Phone" name="phone" type="tel" autoComplete="tel" required />
          <Field label="Email" name="email" type="email" autoComplete="email" required />
          <Field label="Postcode" name="postcode" autoComplete="postal-code" required />
          <Field
            label="Property address"
            name="address"
            className="md:col-span-2"
            autoComplete="street-address"
            required
          />

          <SelectField label="Repair category" name="category" required>
            <option value="">Select category</option>
            {repairCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </SelectField>

          <SelectField label="Urgency level" name="urgency" required>
            <option value="">Select urgency</option>
            {urgencyLevels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </SelectField>

          <SelectField
            label="Are you a landlord, tenant, letting agent, or homeowner?"
            name="customerType"
            required
          >
            <option value="">Select one</option>
            {customerTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </SelectField>

          <Field
            label="Preferred access time"
            name="accessTime"
            placeholder="Example: weekday morning"
          />

          <label className="md:col-span-2">
            <span className="mb-2 block text-sm font-semibold text-north">
              Upload photos
            </span>
            <span className="flex min-h-32 cursor-pointer flex-col items-center justify-center rounded-[8px] border border-dashed border-north/45 px-4 py-6 text-center transition hover:border-north">
              <UploadSimple size={28} weight="bold" className="text-north" />
              <span className="mt-3 text-sm font-semibold text-north">
                Upload repair photos
              </span>
              <span className="mt-1 text-xs leading-5 text-north/62">
                Add photos of leaks, damp, boiler faults, locks, gutters, or property damage.
              </span>
            </span>
            <input className="sr-only" type="file" name="photos" multiple />
          </label>

          <label className="md:col-span-2">
            <span className="mb-2 block text-sm font-semibold text-north">
              Message/details
            </span>
            <textarea
              name="message"
              rows={5}
              className="w-full resize-y rounded-[6px] border border-north/30 bg-paper px-4 py-3 text-sm text-north outline-none transition placeholder:text-north/42 focus:border-north focus:ring-2 focus:ring-north/16"
              placeholder="Describe the issue, access notes, tenant availability, or landlord approval details."
              required
            />
          </label>
        </div>

        <button
          type="submit"
          disabled={isSending}
          className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[6px] border border-north bg-north px-5 py-3 text-sm font-semibold text-paper transition duration-300 ease-out hover:bg-paper hover:text-north disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          <ClipboardText size={18} weight="bold" />
          {isSending ? "Creating repair ticket..." : "Submit Repair Request"}
        </button>
      </form>

      <aside className="rounded-[8px] border border-north bg-north p-6 text-paper shadow-line">
        <div className="flex items-start gap-3">
          <CheckCircle size={28} weight="bold" />
          <div>
            <h3 className="text-xl font-semibold">Repair request captured</h3>
            <p className="mt-2 text-sm leading-6 text-paper/76">
              When submitted, the form creates a repair ticket preview so customers know their request has been captured.
            </p>
          </div>
        </div>

        {ticket ? (
          <div className="mt-6 rounded-[8px] border border-paper bg-paper p-5 text-north">
            <p className="font-semibold">
              Repair request received. Our team will contact you shortly.
            </p>
            <dl className="mt-5 grid gap-3 text-sm">
              <TicketRow label="Job ID" value={ticket.id} />
              <TicketRow label="Customer" value={ticket.name} />
              <TicketRow label="Address" value={ticket.address} />
              <TicketRow label="Category" value={ticket.category} />
              <TicketRow label="Urgency" value={ticket.urgency} />
              <TicketRow label="Status" value={ticket.status} />
            </dl>
          </div>
        ) : (
          <div className="mt-6 rounded-[8px] border border-paper/35 p-5">
            <p className="text-sm font-semibold text-paper">
              Submit the form to generate a repair job ticket.
            </p>
            <p className="mt-2 text-sm leading-6 text-paper/72">
              The ticket keeps the enquiry organised from first contact through scheduling.
            </p>
          </div>
        )}
      </aside>
    </div>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
  className?: string;
};

function Field({
  label,
  name,
  type = "text",
  placeholder,
  autoComplete,
  required,
  className = "",
}: FieldProps) {
  return (
    <label className={className}>
      <span className="mb-2 block text-sm font-semibold text-north">{label}</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        className="w-full rounded-[6px] border border-north/30 bg-paper px-4 py-3 text-sm text-north outline-none transition placeholder:text-north/42 focus:border-north focus:ring-2 focus:ring-north/16"
      />
    </label>
  );
}

type SelectFieldProps = {
  label: string;
  name: string;
  required?: boolean;
  children: React.ReactNode;
};

function SelectField({ label, name, required, children }: SelectFieldProps) {
  return (
    <label>
      <span className="mb-2 block text-sm font-semibold text-north">{label}</span>
      <select
        name={name}
        required={required}
        className="w-full rounded-[6px] border border-north/30 bg-paper px-4 py-3 text-sm text-north outline-none transition focus:border-north focus:ring-2 focus:ring-north/16"
      >
        {children}
      </select>
    </label>
  );
}

function TicketRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1 border-b border-north/12 pb-3 last:border-b-0 last:pb-0 sm:grid-cols-[0.7fr_1fr]">
      <dt className="font-semibold text-north/66">{label}</dt>
      <dd className="font-semibold text-north">{value}</dd>
    </div>
  );
}
