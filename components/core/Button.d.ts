import * as React from 'react';

export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** Visual style. @default "primary" */
  variant?: 'primary' | 'ghost' | 'soft';
  /** Size. @default "md" */
  size?: 'sm' | 'md';
  /** Render as an anchor with this href instead of a <button>. */
  href?: string;
  children?: React.ReactNode;
}

/**
 * ENOMIS Coffee brand button — playful, hand-drawn coffee-shop feel.
 * @startingPoint section="Core" subtitle="Brand button — primary, ghost, soft" viewport="700x180"
 */
export function Button(props: ButtonProps): JSX.Element;
