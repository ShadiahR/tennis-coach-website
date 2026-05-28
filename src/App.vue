<template>
  <div id="app" class="site-shell">
    <site-header
      :active-section="activeSection"
      :is-scrolled="isScrolled"
    />
    <main class="site-main">
      <home-section />
      <about-section />
      <lessons-section />
      <pricing-section />
      <contact-section />
    </main>
    <site-footer />
  </div>
</template>

<script>
import AboutSection from "@/components/AboutSection.vue";
import ContactSection from "@/components/ContactSection.vue";
import HomeSection from "@/components/HomeSection.vue";
import LessonsSection from "@/components/LessonsSection.vue";
import PricingSection from "@/components/PricingSection.vue";
import SiteFooter from "@/components/SiteFooter.vue";
import SiteHeader from "@/components/SiteHeader.vue";

const sectionOrder = ["home", "about", "lessons", "pricing", "contact"];

export default {
  components: {
    AboutSection,
    ContactSection,
    HomeSection,
    LessonsSection,
    PricingSection,
    SiteFooter,
    SiteHeader,
  },
  data() {
    return {
      activeSection: "home",
      isScrolled: false,
      observedSections: [],
      sectionObserver: null,
    };
  },
  mounted() {
    this.handleScroll();
    window.addEventListener("scroll", this.handleScroll, { passive: true });
    window.addEventListener("resize", this.syncActiveSection, { passive: true });

    this.$nextTick(() => {
      this.setupSectionObserver();
    });
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.syncActiveSection);

    if (this.sectionObserver) {
      this.sectionObserver.disconnect();
    }
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 18;
      this.syncActiveSection();
    },
    setupSectionObserver() {
      this.observedSections = sectionOrder
        .map((id) => document.getElementById(id))
        .filter(Boolean);

      if (!this.observedSections.length) {
        return;
      }

      if (!("IntersectionObserver" in window)) {
        this.syncActiveSection();
        return;
      }

      this.sectionObserver = new IntersectionObserver(
        () => {
          this.syncActiveSection();
        },
        {
          rootMargin: "-20% 0px -52% 0px",
          threshold: [0, 0.15, 0.35, 0.6],
        }
      );

      this.observedSections.forEach((section) => {
        this.sectionObserver.observe(section);
      });

      this.syncActiveSection();
    },
    syncActiveSection() {
      if (!this.observedSections.length) {
        return;
      }

      const anchorLine = Math.max(120, window.innerHeight * 0.32);
      const active = this.observedSections.reduce((bestMatch, section) => {
        const rect = section.getBoundingClientRect();

        if (rect.bottom <= 0) {
          return bestMatch;
        }

        const distance = Math.abs(rect.top - anchorLine);

        if (!bestMatch || distance < bestMatch.distance) {
          return {
            distance,
            id: section.id,
          };
        }

        return bestMatch;
      }, null);

      if (active && active.id !== this.activeSection) {
        this.activeSection = active.id;
      }
    },
  },
};
</script>

<style>
:root {
  --site-bg: #f4f7fb;
  --site-surface: rgba(255, 255, 255, 0.9);
  --site-surface-strong: #ffffff;
  --site-text: #0f172a;
  --site-text-soft: #475569;
  --site-header-footer: #111c45;
  --site-button: #dfff4f;
  --site-card: #4a7c59;
  --site-accent: #68b0ab;
  --site-muted: #eef3f8;
  --site-border: rgba(15, 23, 42, 0.08);
  --site-shadow: 0 24px 60px rgba(15, 23, 42, 0.09);
  --site-scroll-offset: clamp(5.25rem, 6vw, 6.5rem);
  --site-section-space: clamp(3.6rem, 7vw, 5rem);
  --site-container-width: 76rem;
  --font-sans: "Avenir Next", "Trebuchet MS", sans-serif;
  --font-display: "Iowan Old Style", "Palatino Linotype", "Book Antiqua",
    Georgia, serif;
  --motion-ease: cubic-bezier(0.22, 1, 0.36, 1);
  --motion-duration: 720ms;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: var(--site-scroll-offset);
}

body {
  margin: 0;
  background: var(--site-bg);
  color: var(--site-text);
  font-family: var(--font-sans);
  line-height: 1.5;
}

h1,
h2,
h3,
h4 {
  font-family: var(--font-display);
  letter-spacing: -0.03em;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
}

button,
input,
textarea {
  font: inherit;
}

#app {
  min-height: 100vh;
  background: var(--site-bg);
  color: var(--site-text);
}

.site-shell {
  position: relative;
  overflow: hidden;
}

.site-main {
  position: relative;
  overflow-x: clip;
}

.site-main::before,
.site-main::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.site-main::before {
  z-index: 0;
  background:
    radial-gradient(circle at 12% 14%, rgba(104, 176, 171, 0.18), transparent 28%),
    radial-gradient(circle at 84% 10%, rgba(223, 255, 79, 0.16), transparent 20%),
    linear-gradient(180deg, #f8fbff 0%, #ffffff 24%, #f5f8fc 62%, #ffffff 100%);
}

.site-main::after {
  z-index: 0;
  background:
    radial-gradient(circle at 88% 68%, rgba(104, 176, 171, 0.12), transparent 26%),
    radial-gradient(circle at 14% 82%, rgba(17, 28, 69, 0.06), transparent 24%);
}

.site-main > * {
  position: relative;
  z-index: 1;
}

section[id] {
  scroll-margin-top: var(--site-scroll-offset);
}

.site-container {
  width: 100%;
  max-width: var(--site-container-width);
  margin: 0 auto;
  padding: 0 1.25rem;
}

.site-section {
  position: relative;
  padding: var(--site-section-space) 0;
}

.site-section--muted {
  background: linear-gradient(180deg, rgba(238, 243, 248, 0.68), rgba(255, 255, 255, 0.72));
}

.site-section-header {
  max-width: 37rem;
  margin: 0 auto clamp(2rem, 4vw, 2.75rem);
  text-align: center;
}

.site-section-label {
  display: inline-block;
  margin-bottom: 0.7rem;
  color: var(--site-accent);
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.site-section-title {
  margin: 0;
  color: var(--site-text);
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.05;
}

.site-section-copy {
  margin-top: 1rem;
  color: var(--site-text-soft);
  font-size: 1rem;
  line-height: 1.75;
}

.site-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 9999px;
  background: var(--site-button);
  color: #000000;
  box-shadow: 0 18px 40px rgba(223, 255, 79, 0.28);
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 700;
  line-height: 1;
  padding: 0.9rem 1.5rem;
  transition:
    transform 220ms ease,
    box-shadow 220ms ease,
    background-color 220ms ease,
    border-color 220ms ease;
}

.site-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 22px 46px rgba(223, 255, 79, 0.34);
}

.site-button--ghost {
  background: rgba(255, 255, 255, 0.58);
  border: 1px solid rgba(15, 23, 42, 0.12);
  box-shadow: none;
  color: var(--site-text);
}

.site-button--ghost:hover {
  background: rgba(255, 255, 255, 0.9);
  box-shadow: none;
}

.site-panel {
  background: var(--site-surface);
  border-radius: 1.5rem;
  border: 1px solid var(--site-border);
  box-shadow: var(--site-shadow);
  backdrop-filter: blur(18px);
}

.site-card {
  background: var(--site-card);
  border-radius: 1.5rem;
  box-shadow: 0 24px 60px rgba(74, 124, 89, 0.22);
  color: #ffffff;
}

.site-interactive {
  transition:
    transform 240ms var(--motion-ease),
    box-shadow 240ms var(--motion-ease),
    border-color 240ms var(--motion-ease);
}

.site-interactive:hover {
  transform: translateY(-4px);
  box-shadow: 0 30px 70px rgba(15, 23, 42, 0.13);
  border-color: rgba(104, 176, 171, 0.28);
}

.site-input,
.site-textarea {
  width: 100%;
  border: 1px solid rgba(104, 176, 171, 0.28);
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.94);
  color: var(--site-text);
  font-size: 0.95rem;
  line-height: 1.5;
  padding: 0.92rem 1rem;
  transition:
    border-color 220ms ease,
    box-shadow 220ms ease,
    background-color 220ms ease;
}

.site-input::placeholder,
.site-textarea::placeholder {
  color: #94a3b8;
}

.site-input:focus,
.site-textarea:focus {
  outline: none;
  border-color: rgba(104, 176, 171, 0.9);
  background: #ffffff;
  box-shadow:
    0 0 0 4px rgba(104, 176, 171, 0.16),
    0 14px 30px rgba(104, 176, 171, 0.12);
}

.site-textarea {
  min-height: 9.5rem;
  resize: vertical;
}

.reveal {
  --reveal-x: 0px;
  --reveal-y: 24px;
  --reveal-scale: 0.985;
  opacity: 0;
  filter: blur(10px);
  transform: translate3d(var(--reveal-x), var(--reveal-y), 0)
    scale(var(--reveal-scale));
  transition:
    opacity var(--motion-duration) var(--motion-ease),
    transform var(--motion-duration) var(--motion-ease),
    filter var(--motion-duration) var(--motion-ease);
  transition-delay: var(--reveal-delay, 0ms);
  will-change: opacity, transform, filter;
}

.reveal.is-visible {
  opacity: 1;
  filter: blur(0);
  transform: translate3d(0, 0, 0) scale(1);
}

.reveal--fade-up {
  --reveal-y: 26px;
}

.reveal--slide-left {
  --reveal-x: 30px;
  --reveal-y: 0px;
}

.reveal--slide-right {
  --reveal-x: -30px;
  --reveal-y: 0px;
}

.reveal--scale {
  --reveal-y: 0px;
  --reveal-scale: 0.94;
}

@media (min-width: 768px) {
  .site-container {
    padding: 0 1.5rem;
  }
}

@media (max-width: 767px) {
  .site-section-header {
    margin-bottom: 2rem;
  }

  .site-button {
    width: 100%;
  }

  .site-interactive:hover {
    transform: none;
  }
}

@media (min-width: 640px) and (max-width: 767px) {
  .site-button {
    width: auto;
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  .reveal {
    opacity: 1 !important;
    filter: none !important;
    transform: none !important;
    transition: none !important;
  }

  .site-button,
  .site-input,
  .site-textarea,
  .site-interactive {
    transition: none !important;
  }
}
</style>
