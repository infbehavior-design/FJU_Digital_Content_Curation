import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.fade-in').forEach((element) => {
  gsap.fromTo(
    element,
    { opacity: 0, y: 30 },          // 起點
    {
      opacity: 1,                   // 終點
      y: 0,
      duration: 2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    }
  );
});
