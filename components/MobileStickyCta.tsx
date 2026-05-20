import {
  ClipboardText,
  PhoneCall,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import { business } from "@/data/site";

export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-north bg-paper px-3 py-3 shadow-line md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-3 gap-2">
        <a
          href={business.phoneHref}
          className="inline-flex min-h-12 flex-col items-center justify-center gap-1 rounded-[6px] border border-north bg-north px-2 text-xs font-semibold text-paper active:translate-y-[1px]"
          aria-label="Call NorthStar Property Maintenance now"
        >
          <PhoneCall size={18} weight="bold" />
          Call Now
        </a>
        <a
          href={business.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-12 flex-col items-center justify-center gap-1 rounded-[6px] border border-north bg-paper px-2 text-xs font-semibold text-north active:translate-y-[1px]"
          aria-label="Message NorthStar Property Maintenance on WhatsApp"
        >
          <WhatsappLogo size={18} weight="bold" />
          WhatsApp
        </a>
        <a
          href="#repair-request"
          className="inline-flex min-h-12 flex-col items-center justify-center gap-1 rounded-[6px] border border-north bg-north px-2 text-xs font-semibold text-paper active:translate-y-[1px]"
          aria-label="Request a repair"
        >
          <ClipboardText size={18} weight="bold" />
          Request
        </a>
      </div>
    </div>
  );
}
