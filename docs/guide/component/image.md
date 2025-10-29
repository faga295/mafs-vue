# Image

Display external images inside the Mafs coordinate system.

## Basic

:::demo

image/basic

:::

## Props

- `href` – image source, accepts URLs and data URIs.
- `x`, `y` – anchor point coordinates in Mafs units.
- `width`, `height` – rendered size in Mafs units.
- `anchor` – optional anchor position (`tl`/`cc`/`br`, etc.), defaults to `bl`.
- `preserveAspectRatio` – forwarded to the underlying SVG `image` element.
- `svgImageProps` – additional attributes forwarded to the SVG `image` element.
