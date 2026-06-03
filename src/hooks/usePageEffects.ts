import { useEffect } from 'react';

type PageEffectsOptions = { timeline?: boolean };

export function usePageEffects(options: PageEffectsOptions = {}) {
  useEffect(() => {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

    const animateCounter = (el: Element) => {
      const target = Number.parseInt((el as HTMLElement).dataset.target || '0', 10);
      const start = Number.parseInt((el as HTMLElement).dataset.start || '0', 10);
      const duration = 1800;
      const startTime = performance.now();
      let frame = 0;
      const update = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        el.textContent = String(Math.round(start + (target - start) * ease));
        if (progress < 1) frame = requestAnimationFrame(update);
      };
      frame = requestAnimationFrame(update);
      return () => cancelAnimationFrame(frame);
    };

    const counterCleanups: Array<() => void> = [];
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.count').forEach((el) => counterCleanups.push(animateCounter(el)));
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    document.querySelectorAll('.metrics').forEach((el) => counterObserver.observe(el));

    const timeouts: number[] = [];
    const processGrid = document.getElementById('processGrid');
    const processLine = document.getElementById('processLine');
    let stepObserver: IntersectionObserver | undefined;
    if (processGrid && processLine) {
      stepObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            processLine.classList.add('animated');
            processGrid.querySelectorAll('.step').forEach((step, index) => {
              timeouts.push(window.setTimeout(() => step.classList.add('lit'), index * 300 + 200));
            });
            stepObserver?.unobserve(entry.target);
          }
        });
      }, { threshold: 0.3 });
      stepObserver.observe(processGrid);
    }

    let timelineObserver: IntersectionObserver | undefined;
    if (options.timeline) {
      timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      }, { threshold: 0.3 });
      document.querySelectorAll('.tl-item').forEach((el) => timelineObserver?.observe(el));
    }

    const bull = document.getElementById('heroBull') as HTMLImageElement | null;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let removeBullScroll: (() => void) | undefined;
    if (bull) {
      if (!prefersReducedMotion) {
        bull.style.transform = 'translateX(40px)';
        bull.style.transition = 'opacity 1s cubic-bezier(0,0,.2,1),transform 1s cubic-bezier(0,0,.2,1)';
      }
      const introTimer = window.setTimeout(() => {
        bull.style.opacity = '1';
        if (!prefersReducedMotion) bull.style.transform = 'translateX(0)';
        const liveTimer = window.setTimeout(() => {
          bull.classList.add('bull-live');
          if (!prefersReducedMotion) {
            bull.style.transition = '';
            const onBullScroll = () => {
              bull.style.transform = `translateY(${Math.min(window.scrollY * 0.12, window.innerHeight * 0.15)}px)`;
            };
            window.addEventListener('scroll', onBullScroll, { passive: true });
            removeBullScroll = () => window.removeEventListener('scroll', onBullScroll);
          }
        }, 1100);
        timeouts.push(liveTimer);
      }, 200);
      timeouts.push(introTimer);
    }

    return () => {
      revealObserver.disconnect();
      counterObserver.disconnect();
      stepObserver?.disconnect();
      timelineObserver?.disconnect();
      counterCleanups.forEach((cleanup) => cleanup());
      timeouts.forEach((timeout) => window.clearTimeout(timeout));
      removeBullScroll?.();
    };
  }, [options.timeline]);
}
