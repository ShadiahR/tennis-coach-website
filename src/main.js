import { createApp } from "vue";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";
import tennisBallIcon from "@/assets/img/tennis-ball-icon.jpg";

import App from "@/App.vue";

const revealRegistry = new WeakMap();
let revealObserver;

const getRevealObserver = () => {
  if (revealObserver || !("IntersectionObserver" in window)) {
    return revealObserver;
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
        revealRegistry.delete(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -12% 0px",
      threshold: 0.18,
    }
  );

  return revealObserver;
};

const revealDirective = {
  mounted(el, binding) {
    const options =
      typeof binding.value === "string"
        ? { effect: binding.value }
        : binding.value || {};
    const effect = options.effect || "fade-up";
    const delay = options.delay || 0;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    el.classList.add("reveal", `reveal--${effect}`);

    if (delay) {
      el.style.setProperty("--reveal-delay", `${delay}ms`);
    }

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      el.classList.add("is-visible");
      return;
    }

    revealRegistry.set(el, options);
    getRevealObserver().observe(el);
  },
  beforeUnmount(el) {
    const observer = getRevealObserver();

    if (observer && revealRegistry.has(el)) {
      observer.unobserve(el);
    }

    revealRegistry.delete(el);
  },
};

const applyBranding = () => {
  document.documentElement.lang = "nl";
  document.title = "Rodney Eelst Tennis";

  const links = [
    { rel: "icon", type: "image/jpeg" },
    { rel: "apple-touch-icon", type: "image/jpeg", sizes: "180x180" },
  ];

  links.forEach(({ rel, type, sizes }) => {
    let link = document.querySelector(`link[rel="${rel}"]`);

    if (!link) {
      link = document.createElement("link");
      link.rel = rel;
      document.head.appendChild(link);
    }

    link.type = type;
    link.href = tennisBallIcon;

    if (sizes) {
      link.sizes = sizes;
    }
  });
};

applyBranding();

const app = createApp(App);

app.directive("reveal", revealDirective);
app.mount("#app");
