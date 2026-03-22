export function normalizeCompanyDomain(raw?: string): string | undefined {
  if (!raw?.trim()) return undefined;
  return raw
    .replace(/^https?:\/\//i, "")
    .split("/")[0]
    .trim()
    .toLowerCase();
}

/** Website screenshot proxy (public preview service). Falls back to logo if blocked or slow. */
export function websiteThumbUrl(domain: string): string {
  const page = `https://${domain}`;
  return `https://image.thum.io/get/width/900/crop/1400/noanimate/${encodeURIComponent(page)}`;
}

/** Company logo from Clearbit’s public logo CDN */
export function clearbitLogoUrl(domain: string): string {
  return `https://logo.clearbit.com/${domain}`;
}
