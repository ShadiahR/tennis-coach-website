<template>
  <section id="home" class="home-hero">
    <div class="home-hero__media"></div>
    <div class="home-hero__overlay"></div>
    <div class="site-container relative">
      <div class="home-hero__content px-4">
        <span class="home-hero__eyebrow">Home</span>
        <h1 class="home-hero__title">
          Private tennis coaching, rebuilt as a single scrolling website shell.
        </h1>
        <p class="home-hero__copy">
          The original template hero is now the landing point for one long page
          with anchored sections for lessons, pricing, coach profile, and
          contact.
        </p>
        <div class="flex flex-wrap gap-4 mt-8">
          <a href="#lessons" class="site-button">Explore Lessons</a>
          <a href="#contact" class="site-button site-button--ghost">
            Contact Coach
          </a>
        </div>
      </div>
    </div>
    <div class="home-hero__transition"></div>
  </section>
</template>

<style scoped>
.home-hero {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 100vh;
  overflow: hidden;
  padding: 7rem 0 5rem;
  color: #ffffff;
}

.home-hero__media {
  position: absolute;
  inset: 0;
  background-image: url("https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1267&q=80");
  background-position: center;
  background-size: cover;
}

.home-hero__overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.62);
}

.home-hero__content {
  position: relative;
  max-width: 46rem;
}

.home-hero__eyebrow {
  display: inline-block;
  color: var(--site-button);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.home-hero__title {
  margin: 1rem 0 0;
  font-size: clamp(2.75rem, 6vw, 5rem);
  font-weight: 700;
  line-height: 1.05;
}

.home-hero__copy {
  max-width: 36rem;
  margin-top: 1.5rem;
  color: rgba(255, 255, 255, 0.82);
  font-size: 1.1rem;
  line-height: 1.8;
}

.home-hero__transition {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 160px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    var(--site-bg) 100%
  );
}
</style>
