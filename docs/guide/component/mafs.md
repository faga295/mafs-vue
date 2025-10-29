# mafs

This component is the entrypoint into rendering visualizations. It must wrap all other Mafs components. On its own, it renders a blank canvas.

## basic

:::demo

mafs/basic

:::

## Hello f(x)

Try to drag it to view more.
:::demo

mafs/fx

:::

## View Box

you can specify the data range of the coordinate axis using `view box`.
:::demo

mafs/viewBox
:::

## Props

- `viewBox` – `{ x: [min, max], y: [min, max], padding?: number }`, controls the visible coordinate range and optional padding (defaults to `[-6, 6]`, `[-3, 3]`, `0.5`).
