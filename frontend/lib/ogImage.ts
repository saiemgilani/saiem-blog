/**
 * The site's one default share image: constants shared between the image route itself
 * (`app/opengraph-image.tsx`, which re-exports `size`/`alt` from here so Satori and this
 * module never disagree on the pixel size or the alt text) and `lib/metadata.ts` (which
 * needs the same numbers to advertise the image in `openGraph.images`/`twitter.images`
 * without importing a `.tsx` route module into `node --test`).
 */
export const OG_IMAGE_PATH = "/opengraph-image";
export const OG_IMAGE_SIZE = { width: 1200, height: 630 } as const;
export const OG_IMAGE_ALT = "Saiem Gilani — sports, data, software";
