import React from 'react';

/**
 * ENOMIS Coffee brand button — soft, hand-drawn feel.
 * Variants mirror the website: solid orange "primary", outlined wobbly "ghost".
 */
export function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  style = {},
  ...rest
}) {
  const pad = size === 'sm' ? '11px 22px' : '14px 28px';
  const fontSize = size === 'sm' ? 18 : 20;

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 9,
    fontFamily: "'Gaegu', ui-rounded, 'Comic Sans MS', system-ui, sans-serif",
    fontWeight: 700,
    fontSize,
    lineHeight: 1,
    cursor: 'pointer',
    border: 'none',
    padding: pad,
    borderRadius: 999,
    textDecoration: 'none',
    transition: 'transform .18s cubic-bezier(.2,.8,.2,1), box-shadow .18s, background .2s',
  };

  const variants = {
    primary: {
      background: 'var(--orange, #F48F68)',
      color: '#fff',
      boxShadow: '0 10px 22px rgba(244,143,104,.4)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--cocoa, #7A5638)',
      border: '3px solid var(--cocoa, #7A5638)',
      borderRadius: 'var(--wob, 225px 18px 200px 18px/18px 200px 18px 225px)',
      padding: size === 'sm' ? '9px 20px' : '12px 26px',
    },
    soft: {
      background: 'var(--yellow, #FFE394)',
      color: 'var(--cocoa, #7A5638)',
      boxShadow: '0 10px 22px rgba(74,53,38,.10)',
    },
  };

  const cls = { ...base, ...(variants[variant] || variants.primary), ...style };
  const Tag = href ? 'a' : 'button';
  return (
    <Tag className={`enomis-btn enomis-btn--${variant}`} href={href} style={cls} {...rest}>
      {children}
    </Tag>
  );
}
