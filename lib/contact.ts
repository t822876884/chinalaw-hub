import type { Lawyer } from "./data";
import { cityName, practiceName } from "./data";

export function whatsappLink(lawyer: Lawyer, practice?: string) {
  if (!lawyer.contact.whatsapp) return null;
  const topic = practice ? practiceName(practice) : "a legal matter";
  const text =
    `Hi ${lawyer.name}, I found your profile on ChinaLaw Hub. ` +
    `I need help with ${topic} in ${cityName(lawyer.city)}. ` +
    `Could you tell me whether this is something you handle?`;
  return `https://wa.me/${lawyer.contact.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function mailtoLink(lawyer: Lawyer, practice?: string) {
  if (!lawyer.contact.email) return null;
  const topic = practice ? practiceName(practice) : "a legal matter";
  const subject = `Enquiry via ChinaLaw Hub: ${topic} in ${cityName(lawyer.city)}`;
  return `mailto:${lawyer.contact.email}?subject=${encodeURIComponent(subject)}`;
}

export const TRACK_EVENT = "lawyer_contact_click";
