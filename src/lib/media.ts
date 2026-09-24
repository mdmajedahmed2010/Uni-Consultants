/**
 * UNI CONSULTANTS (ইউআই কনসালট্যান্টস) — Official Verified Media & Brand Assets.
 *
 * Verified from:
 *  - Official Logo: /logo.jpg (Vivid Orange stylized "uni" with Graduation Cap on the 'i' & bold "CONSULTANTS")
 *  - Official Banner: /banner.png ("ONE STOP SOLUTION FOR STUDY ABROAD EDUCATION" · "HONESTY IS OUR COMMITMENT")
 *      Featuring 30+ Real Student Visa Success Photos & Flags: Cyprus, UK, Malaysia, Malta
 *  - Official Facebook Page: https://www.facebook.com/UNIConsultantsbd/ (@UNIConsultantsbd)
 *  - Dhaka Principal Office: 92, Ali Bhaban, 7th Floor, Kazi Nazrul Islam Avenue, Dhaka 1215, Bangladesh
 *  - Hotlines: +880 1335-065544 · +880 1335-065540
 *  - Official Email: application@uniconsultants.co.uk
 */

export const mediaUrls: Record<string, string> = {
  // Official UNI Consultants Brand Assets
  logo: "/logo.jpg",
  "logo-fallback": "/logo.jpg",
  banner: "/banner.png",
  "hero-banner": "/banner.png",
  "hero-banner-brand": "/banner.png",
};

export function getMediaUrl(key: string, fallback?: string): string {
  return mediaUrls[key] || fallback || "/logo.jpg";
}
