<template>
  <div id="app" class="site-shell">
    <site-header />
    <main>
      <home-section />
      <lessons-section />
      <pricing-section />
      <about-section />
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
};
</script>

<style>
:root {
  --site-bg: #ffffff;
  --site-text: #000000;
  --site-header-footer: #202860;
  --site-button: #dfff4f;
  --site-card: #4a7c59;
  --site-accent: #68b0ab;
  --site-muted: #f7f9fb;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--site-bg);
  color: var(--site-text);
  font-family: "Avenir Next", "Trebuchet MS", sans-serif;
  line-height: 1.5;
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
  overflow: hidden;
}

main {
  overflow-x: clip;
}

section[id] {
  scroll-margin-top: 96px;
}

.site-container {
  width: 100%;
  max-width: 72rem;
  margin: 0 auto;
  padding: 0 1rem;
}

.site-section {
  position: relative;
  padding: 5rem 0;
}

.site-section--muted {
  background: var(--site-muted);
}

.site-section-header {
  max-width: 36rem;
  margin: 0 auto 3rem;
  text-align: center;
}

.site-section-label {
  display: inline-block;
  margin-bottom: 0.75rem;
  color: var(--site-accent);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.site-section-title {
  margin: 0;
  color: var(--site-text);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  line-height: 1.1;
}

.site-section-copy {
  margin-top: 1rem;
  color: #334155;
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
  box-shadow: 0 18px 40px rgba(223, 255, 79, 0.3);
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 700;
  line-height: 1;
  padding: 0.9rem 1.6rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease,
    background-color 0.2s ease;
}

.site-button:hover {
  transform: translateY(-1px);
  box-shadow: 0 22px 46px rgba(223, 255, 79, 0.35);
}

.site-button--ghost {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: none;
  color: #ffffff;
}

.site-button--ghost:hover {
  background: rgba(255, 255, 255, 0.1);
  box-shadow: none;
}

.site-panel {
  background: #ffffff;
  border-radius: 1rem;
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.12);
}

.site-card {
  background: var(--site-card);
  border-radius: 1rem;
  box-shadow: 0 24px 60px rgba(74, 124, 89, 0.25);
  color: #ffffff;
}

.site-input,
.site-textarea {
  width: 100%;
  border: 1px solid rgba(104, 176, 171, 0.35);
  border-radius: 0.75rem;
  background: #ffffff;
  color: #000000;
  font-size: 0.95rem;
  line-height: 1.5;
  padding: 0.9rem 1rem;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.site-input:focus,
.site-textarea:focus {
  outline: none;
  border-color: var(--site-accent);
  box-shadow: 0 0 0 3px rgba(104, 176, 171, 0.18);
}

.site-textarea {
  min-height: 10rem;
  resize: vertical;
}

@media (min-width: 768px) {
  .site-container {
    padding: 0 1.5rem;
  }

  .site-section {
    padding: 6rem 0;
  }
}

@media (max-width: 767px) {
  section[id] {
    scroll-margin-top: 84px;
  }

  .site-container {
    padding: 0 1.25rem;
  }

  .site-section {
    padding: 4rem 0;
  }

  .site-section-header {
    margin-bottom: 2.25rem;
  }

  .site-button {
    width: 100%;
  }
}

@media (min-width: 640px) and (max-width: 767px) {
  .site-button {
    width: auto;
  }
}
</style>
