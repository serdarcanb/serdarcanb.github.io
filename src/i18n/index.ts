import { en, type Content } from "./en";
import { tr } from "./tr";
import { es } from "./es";

export type Lang = "en" | "tr" | "es";

export const content: Record<Lang, Content> = { en, tr, es };

export const locales: { lang: Lang; label: string; name: string; path: string }[] = [
  { lang: "en", label: "EN", name: "English", path: "/" },
  { lang: "tr", label: "TR", name: "Türkçe", path: "/tr/" },
  { lang: "es", label: "ES", name: "Español", path: "/es/" },
];

export const site = {
  url: "https://serdarcanb.github.io",
  name: "Serdarcan Büyükdereli",
  email: "serdarcanbuyukdereli@gmail.com",
  linkedin: "https://www.linkedin.com/in/serdarcanbuyukdereli/",
  github: "https://github.com/serdarcanb",
  medium: "https://medium.com/@serdarcanbuyukdereli",
};

export function googleInvite(t: Content): string {
  const q = new URLSearchParams({
    action: "TEMPLATE",
    text: t.contact.inviteTitle,
    details: t.contact.inviteDetails,
    add: site.email,
  });
  return `https://calendar.google.com/calendar/render?${q.toString()}`;
}

export function outlookInvite(t: Content): string {
  const q = new URLSearchParams({
    path: "/calendar/action/compose",
    rru: "addevent",
    subject: t.contact.inviteTitle,
    // Outlook renders the body as HTML, so plain newlines collapse into one line.
    body: t.contact.inviteDetails.replaceAll("\n", "<br>"),
    to: site.email,
  });
  return `https://outlook.office.com/calendar/0/deeplink/compose?${q.toString()}`;
}
