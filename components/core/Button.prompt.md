The ENOMIS Coffee brand button — use for any call-to-action (order, view menu, find us). Playful, rounded, hand-drawn coffee-shop feel.

```jsx
<Button variant="primary" href="#meniu">Descopera meniul</Button>
<Button variant="ghost">Vezi limonadele</Button>
<Button variant="soft" size="sm">Comanda ✦</Button>
```

Variants: `primary` (solid orange, the default CTA), `ghost` (outlined with a wobbly hand-drawn border, hovers to yellow), `soft` (warm yellow fill). Sizes: `sm`, `md`. Pass `href` to render an `<a>`; otherwise it's a `<button>`. Relies on the design-system color tokens (`--orange`, `--cocoa`, `--yellow`, `--wob`).
