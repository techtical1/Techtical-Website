import {
  createImageUrlBuilder,
  type SanityImageSource,
} from "@sanity/image-url";

import { client } from "@/lib/sanity.client";

const builder = createImageUrlBuilder(client);

type ImageOptions = {
  width?: number;
  height?: number;
  quality?: number;
};

export function urlFor(source: SanityImageSource | null | undefined) {
  if (!source) return null;

  return builder.image(source);
}

export function getImageUrl(
  image: SanityImageSource | null | undefined,
  options: ImageOptions = {}
) {
  if (!image) return null;

  let url = builder.image(image).auto("format");

  if (options.width) {
    url = url.width(options.width);
  }

  if (options.height) {
    url = url.height(options.height);
  }

  if (options.quality) {
    url = url.quality(options.quality);
  }

  return url.url();
}