<template>
  <section id="home" class="home-hero">
    <div class="site-container home-hero__container">
      <div class="home-hero__copy" v-reveal="{ effect: 'fade-up' }">
        <span class="home-hero__eyebrow">Rodney Eelst Tennis | Rotterdam</span>
        <h1 class="home-hero__title">Speel vrij, groei vol vertrouwen.</h1>
        <p class="home-hero__text">
          Rodney Eelst brengt energie, aandacht en duidelijke coaching samen in
          lessen die technisch scherp voelen zonder zwaar te worden. Je werkt
          gericht aan je spel, maar altijd in een sfeer die open, sociaal en
          motiverend blijft.
        </p>

        <div class="home-hero__actions">
          <a href="#lessons" class="site-button">Bekijk de lessen</a>
          <a href="#contact" class="site-button site-button--ghost">
            Plan een kennismaking
          </a>
        </div>

        <ul class="home-hero__trust">
          <li
            v-for="(item, index) in trustItems"
            :key="item.label"
            class="home-hero__trust-item site-panel"
            v-reveal="{ effect: 'fade-up', delay: 120 + index * 90 }"
          >
            <span class="home-hero__trust-icon">
              <i :class="item.icon"></i>
            </span>
            <div>
              <strong class="home-hero__trust-label">{{ item.label }}</strong>
              <p class="home-hero__trust-copy">{{ item.copy }}</p>
            </div>
          </li>
        </ul>
      </div>

      <div class="home-hero__visual" v-reveal="{ effect: 'slide-left', delay: 140 }">
        <div class="home-hero__visual-shell">
          <div class="home-hero__frame">
            <img
              :src="heroImage"
              alt="Tennisspeelster in beweging"
              class="home-hero__image"
            />
          </div>

          <article
            v-for="card in factCards"
            :key="card.label"
            :class="['home-fact-card', `home-fact-card--${card.position}`]"
            v-reveal="{ effect: 'scale', delay: card.delay }"
          >
            <span class="home-fact-card__label">{{ card.label }}</span>
            <strong class="home-fact-card__value">{{ card.value }}</strong>
            <p class="home-fact-card__copy">{{ card.copy }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import heroImage from "@/assets/img/woman-playing-tennis.avif";

const factCards = [
  {
    copy: "Privé, duo, groep en kids",
    delay: 220,
    label: "Lesvormen",
    position: "top",
    value: "4 stijlen",
  },
  {
    copy: "Vrij spelen in Rotterdam Zuiderpark",
    delay: 300,
    label: "Locatie",
    position: "middle",
    value: "Buitenbaan",
  },
  {
    copy: "Luchtig in sfeer, scherp in coaching",
    delay: 380,
    label: "Aanpak",
    position: "bottom",
    value: "1-op-1 focus",
  },
];

const trustItems = [
  {
    copy: "Duidelijke tips die je meteen voelt in je spel.",
    icon: "fas fa-bullseye",
    label: "Technisch scherp",
  },
  {
    copy: "Een coach die makkelijk contact maakt en energie brengt.",
    icon: "fas fa-people-arrows",
    label: "Open sfeer",
  },
  {
    copy: "Lesritme dat past bij beginners, recreanten en jonge spelers.",
    icon: "fas fa-stopwatch",
    label: "Flexibele opbouw",
  },
];

export default {
  data() {
    return {
      factCards,
      heroImage,
      trustItems,
    };
  },
};
</script>

<style scoped>
.home-hero {
  position: relative;
  padding: calc(var(--site-scroll-offset) + 1.35rem) 0 2.8rem;
}

.home-hero::before {
  content: "";
  position: absolute;
  top: 6rem;
  right: -6rem;
  width: 18rem;
  height: 18rem;
  border-radius: 9999px;
  background: radial-gradient(circle, rgba(223, 255, 79, 0.34), transparent 68%);
  pointer-events: none;
}

.home-hero__container {
  display: grid;
  gap: 2.25rem;
  align-items: center;
  min-height: clamp(42rem, 84vh, 54rem);
}

.home-hero__copy {
  position: relative;
  z-index: 1;
}

.home-hero__eyebrow {
  display: inline-block;
  color: #34538b;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.home-hero__title {
  max-width: 10ch;
  margin: 1rem 0 0;
  color: var(--site-text);
  font-size: clamp(3rem, 7vw, 5.5rem);
  line-height: 0.97;
}

.home-hero__text {
  max-width: 34rem;
  margin: 1.4rem 0 0;
  color: var(--site-text-soft);
  font-size: 1.04rem;
  line-height: 1.85;
}

.home-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem 1rem;
  margin-top: 2rem;
}

.home-hero__trust {
  display: grid;
  gap: 0.85rem;
  margin: 2rem 0 0;
  padding: 0;
  list-style: none;
}

.home-hero__trust-item {
  display: flex;
  align-items: flex-start;
  gap: 0.9rem;
  padding: 1rem 1.05rem;
}

.home-hero__trust-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 9999px;
  background: rgba(104, 176, 171, 0.15);
  color: var(--site-accent);
  flex: 0 0 auto;
}

.home-hero__trust-label {
  display: block;
  color: var(--site-text);
  font-size: 0.96rem;
  font-weight: 700;
}

.home-hero__trust-copy {
  margin: 0.3rem 0 0;
  color: var(--site-text-soft);
  font-size: 0.92rem;
  line-height: 1.6;
}

.home-hero__visual {
  min-width: 0;
}

.home-hero__visual-shell {
  position: relative;
  padding: 1rem;
  border-radius: 2rem;
  background:
    linear-gradient(160deg, rgba(255, 255, 255, 0.82), rgba(255, 255, 255, 0.5)),
    linear-gradient(135deg, rgba(17, 28, 69, 0.1), rgba(104, 176, 171, 0.12));
  border: 1px solid rgba(255, 255, 255, 0.66);
  box-shadow: 0 36px 80px rgba(15, 23, 42, 0.15);
}

.home-hero__frame {
  overflow: hidden;
  border-radius: 1.6rem;
  aspect-ratio: 4 / 5;
  background: #dfe8f2;
}

.home-hero__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.home-fact-card {
  position: absolute;
  max-width: 13rem;
  border-radius: 1.35rem;
  background: rgba(17, 28, 69, 0.9);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.2);
  color: #ffffff;
  padding: 1rem 1.05rem;
  backdrop-filter: blur(16px);
}

.home-fact-card--top {
  top: 1.4rem;
  left: -2.2rem;
}

.home-fact-card--middle {
  right: -2rem;
  bottom: 7.4rem;
}

.home-fact-card--bottom {
  left: 2rem;
  right: 2rem;
  bottom: -1.4rem;
  max-width: none;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(15, 23, 42, 0.08);
  color: var(--site-text);
}

.home-fact-card__label {
  display: inline-block;
  color: rgba(255, 255, 255, 0.68);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.home-fact-card--bottom .home-fact-card__label {
  color: #34538b;
}

.home-fact-card__value {
  display: block;
  margin-top: 0.45rem;
  font-family: var(--font-display);
  font-size: 1.45rem;
  line-height: 1.1;
}

.home-fact-card__copy {
  margin: 0.45rem 0 0;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.88rem;
  line-height: 1.55;
}

.home-fact-card--bottom .home-fact-card__copy {
  color: var(--site-text-soft);
}

@media (min-width: 860px) {
  .home-hero__container {
    grid-template-columns: minmax(0, 1fr) minmax(18rem, 33rem);
    gap: 3rem;
  }

  .home-hero__trust {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 859px) {
  .home-hero__title {
    max-width: 12ch;
  }

  .home-hero__visual-shell {
    padding-bottom: 5rem;
  }

  .home-fact-card--top {
    left: 1rem;
  }

  .home-fact-card--middle {
    right: 1rem;
  }
}

@media (max-width: 639px) {
  .home-hero {
    padding-bottom: 2rem;
  }

  .home-hero__container {
    min-height: auto;
  }

  .home-hero__title {
    font-size: clamp(2.7rem, 14vw, 4.2rem);
  }

  .home-hero__visual-shell {
    display: grid;
    gap: 0.9rem;
    padding: 0.85rem;
  }

  .home-fact-card {
    position: static;
    max-width: none;
  }
}
</style>
