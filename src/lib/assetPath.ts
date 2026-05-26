// Prefix absolute asset paths with the production basePath so that <img src="..">
// and SVG <image href=".."> tags resolve correctly when served under
// https://shantanukudva.github.io/SoundBloom-Phonics/. next/image and next/link
// already handle this automatically, but plain HTML/SVG image tags do not.
// Mirrors basePath in next.config.ts.

const basePath = process.env.NODE_ENV === "production" ? "/SoundBloom-Phonics" : "";

export function asset(path: string): string {
  if (!path) return path;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  if (!path.startsWith("/")) return path;
  return `${basePath}${path}`;
}
