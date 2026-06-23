/* @ds-bundle: {"format":3,"namespace":"ENOMISCoffeeDesignSystem_6341b2","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"}],"sourceHashes":{"components/core/Button.jsx":"0b7625ab7975","enomis-site.js":"f638a43c229d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ENOMISCoffeeDesignSystem_6341b2 = window.ENOMISCoffeeDesignSystem_6341b2 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ENOMIS Coffee brand button — soft, hand-drawn feel.
 * Variants mirror the website: solid orange "primary", outlined wobbly "ghost".
 */
function Button({
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
    transition: 'transform .18s cubic-bezier(.2,.8,.2,1), box-shadow .18s, background .2s'
  };
  const variants = {
    primary: {
      background: 'var(--orange, #F48F68)',
      color: '#fff',
      boxShadow: '0 10px 22px rgba(244,143,104,.4)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--cocoa, #7A5638)',
      border: '3px solid var(--cocoa, #7A5638)',
      borderRadius: 'var(--wob, 225px 18px 200px 18px/18px 200px 18px 225px)',
      padding: size === 'sm' ? '9px 20px' : '12px 26px'
    },
    soft: {
      background: 'var(--yellow, #FFE394)',
      color: 'var(--cocoa, #7A5638)',
      boxShadow: '0 10px 22px rgba(74,53,38,.10)'
    }
  };
  const cls = {
    ...base,
    ...(variants[variant] || variants.primary),
    ...style
  };
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: `enomis-btn enomis-btn--${variant}`,
    href: href,
    style: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// enomis-site.js
try { (() => {
const nav = document.getElementById('nav'),
  totop = document.getElementById('totop');
function onScroll() {
  const y = window.scrollY || document.documentElement.scrollTop || 0;
  nav.classList.toggle('scrolled', y > 20);
  totop.classList.toggle('show', y > 700);
}
addEventListener('scroll', onScroll, {
  passive: true
});
totop.onclick = () => scrollTo({
  top: 0,
  behavior: 'smooth'
});
const io = new IntersectionObserver(es => {
  es.forEach(e => {
    if (e.isIntersecting) {
      const el = e.target,
        sibs = [...el.parentElement.children].filter(c => c.classList.contains('reveal')),
        i = sibs.indexOf(el);
      el.style.transitionDelay = Math.max(0, i) * 90 + 'ms';
      el.classList.add('in');
      io.unobserve(el);
    }
  });
}, {
  threshold: .16
});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
// safety net so nothing stays hidden if scroll/IO can't be observed
setTimeout(() => document.querySelectorAll('.reveal:not(.in)').forEach(el => el.classList.add('in')), 2200);
})(); } catch (e) { __ds_ns.__errors.push({ path: "enomis-site.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

})();
