/**
 * Prefix a path with the basePath for GitHub Pages compatibility.
 * Locally (no basePath) this returns the path unchanged.
 */
export function assetPath(path: string): string {
  // Next.js injects this at build time from the config
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${basePath}${path}`;
}
