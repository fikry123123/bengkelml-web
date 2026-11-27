import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { animate } from 'motion';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

function initializeSiteEffects() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  document.documentElement.style.scrollBehavior = 'auto';

  const lenis = new Lenis({
    autoRaf: false,
    anchors: true,
    prevent: (node) => node instanceof HTMLElement && Boolean(node.closest('.hero-horizontal-scroll, .site-drawer'))
  });

  lenis.on('scroll', () => ScrollTrigger.update());
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
  window.bengkelLenis = lenis;

  gsap.utils.toArray('.page-hero, .page-section, .section-card').forEach((element, index) => {
    gsap.fromTo(element, {
      autoAlpha: 0,
      y: 18
    }, {
      autoAlpha: 1,
      y: 0,
      duration: 0.55,
      delay: index < 3 ? index * 0.04 : 0,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 88%',
        once: true
      }
    });
  });

  if (window.matchMedia('(hover: hover)').matches) {
    document.querySelectorAll('.page-card, .why-card, .process-card, .service-option-card, .step-card').forEach((element) => {
      let activeAnimation;

      element.addEventListener('pointerenter', () => {
        activeAnimation?.stop();
        activeAnimation = animate(element, { scale: 1.015 }, { duration: 0.18, ease: 'easeOut' });
      });

      element.addEventListener('pointerleave', () => {
        activeAnimation?.stop();
        activeAnimation = animate(element, { scale: 1 }, { duration: 0.2, ease: 'easeOut' });
      });
    });
  }

  window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
  ScrollTrigger.refresh();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeSiteEffects, { once: true });
} else {
  initializeSiteEffects();
}
