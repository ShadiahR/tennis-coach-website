<template>
  <section id="home" class="home-hero">
    <div class="home-hero__media">
      <img
        :src="heroImage"
        alt="Tennisspeelster in beweging"
        class="home-hero__image"
      />
    </div>
    <div class="home-hero__overlay"></div>
    <div class="site-container relative">
      <div class="home-hero__content px-4">
        <span class="home-hero__eyebrow">Coach Rodney</span>
        <h1 class="home-hero__title">
          Speel vrij, groei vol vertrouwen.
        </h1>
        <p class="home-hero__copy">
          Rodney leeft voor tennis en deelt die energie graag met iedereen die
          de baan opstapt. Met enthousiasme, aandacht en een warme sfeer helpt
          hij je beter spelen, vrijer bewegen en meer genieten van elke rally.
        </p>
        <div class="home-hero__actions">
          <a href="#lessons" class="site-button home-hero__action">
            Bekijk de lessen
          </a>
          <a
            href="#contact"
            class="site-button site-button--ghost home-hero__action"
          >
            Neem contact op
          </a>
        </div>
      </div>
    </div>
    <div class="home-hero__transition"></div>
  </section>
</template>

<script>
import heroImage from "@/assets/img/woman-playing-tennis.avif";

export default {
  data() {
    return {
      heroImage,
    };
  },
};
</script>

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
}

.home-hero__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.home-hero__overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.62);
}

.home-hero__content {
  position: relative;
  max-width: 48rem;
  margin: 0 auto;
  text-align: center;
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
  margin-right: auto;
  margin-left: auto;
  color: rgba(255, 255, 255, 0.82);
  font-size: 1.1rem;
  line-height: 1.8;
}

.home-hero__actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem 1.75rem;
  margin-top: 2.5rem;
}

.home-hero__action {
  min-width: 14rem;
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

@media (min-width: 1024px) {
  .home-hero__content {
    margin: 0;
    text-align: left;
  }

  .home-hero__copy {
    margin-left: 0;
  }

  .home-hero__actions {
    justify-content: flex-start;
  }
}

@media (max-width: 767px) {
  .home-hero {
    min-height: 92vh;
    padding: 6.5rem 0 4rem;
  }

  .home-hero__title {
    font-size: clamp(2.4rem, 12vw, 4rem);
  }
}
</style>
