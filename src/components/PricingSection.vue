<template>
  <section id="pricing" class="site-section pricing-section">
    <div class="site-container">
      <div class="site-section-header" v-reveal="{ effect: 'fade-up' }">
        <span class="site-section-label">Tarieven</span>
        <h2 class="site-section-title">Kies de lesvorm die past bij jouw ritme.</h2>
        <p class="site-section-copy">
          Vier duidelijke opties, zodat je snel ziet welke vorm past bij jouw
          tempo, gezelschap en manier van leren.
        </p>
      </div>

      <div class="pricing-grid">
        <article
          v-for="(item, index) in pricingItems"
          :key="item.title"
          :class="[
            'pricing-card',
            'site-panel',
            'site-interactive',
            { 'pricing-card--featured': item.featured },
          ]"
          v-reveal="{ effect: 'fade-up', delay: index * 80 }"
        >
          <span v-if="item.featured" class="pricing-card__badge">
            Meest gekozen
          </span>
          <span class="pricing-card__eyebrow">{{ item.duration }}</span>
          <h3 class="pricing-card__title">{{ item.title }}</h3>
          <p class="pricing-card__price">{{ item.price }}</p>
          <p class="pricing-card__copy">{{ item.copy }}</p>
          <p class="pricing-card__fit">
            <span class="pricing-card__fit-label">Past goed bij</span>
            <strong>{{ item.bestFor }}</strong>
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
const pricingItems = [
  {
    bestFor: "spelers die volle aandacht willen",
    copy:
      "Volle focus op techniek, ritme en gerichte coaching op maat.",
    duration: "60 minuten",
    featured: false,
    price: "€35 / uur",
    title: "Privéles",
  },
  {
    bestFor: "vrienden, partners of trainingsmaatjes",
    copy:
      "Samen trainen met persoonlijke feedback en een levendig lesritme.",
    duration: "75 minuten",
    featured: true,
    price: "€50 / sessie",
    title: "Duoles",
  },
  {
    bestFor: "spelers die graag samen leren en bewegen",
    copy:
      "Veel rally's, energie en duidelijke sturing voor kleine groepen.",
    duration: "75 minuten",
    featured: false,
    price: "€60 / sessie",
    title: "Groepsles",
  },
  {
    bestFor: "jonge spelers die speels willen groeien",
    copy:
      "Plezier, controle en vertrouwen in een kortere lesvorm voor kids.",
    duration: "45 minuten",
    featured: false,
    price: "€25 / 45 min",
    title: "Kids",
  },
];

export default {
  data() {
    return {
      pricingItems,
    };
  },
};
</script>

<style scoped>
.pricing-section {
  background: transparent;
}

.pricing-grid {
  display: grid;
  gap: 1rem;
}

.pricing-card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: 1.35rem;
}

.pricing-card--featured {
  background:
    linear-gradient(145deg, rgba(17, 28, 69, 0.96), rgba(50, 83, 129, 0.96)),
    #202860;
  border-color: transparent;
  box-shadow: 0 28px 60px rgba(17, 28, 69, 0.22);
  color: #ffffff;
}

.pricing-card__badge {
  display: inline-flex;
  align-self: flex-start;
  margin-bottom: 0.9rem;
  border-radius: 9999px;
  background: rgba(223, 255, 79, 0.16);
  color: var(--site-button);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  padding: 0.42rem 0.75rem;
  text-transform: uppercase;
}

.pricing-card__eyebrow {
  display: inline-block;
  color: #34538b;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.pricing-card--featured .pricing-card__eyebrow {
  color: rgba(255, 255, 255, 0.72);
}

.pricing-card__title {
  margin: 0.7rem 0 0;
  font-size: 1.55rem;
  line-height: 1.15;
}

.pricing-card__price {
  margin: 0.8rem 0 0;
  color: var(--site-text);
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.05;
}

.pricing-card--featured .pricing-card__price {
  color: #ffffff;
}

.pricing-card__copy {
  margin: 0.85rem 0 0;
  color: var(--site-text-soft);
  line-height: 1.72;
}

.pricing-card--featured .pricing-card__copy {
  color: rgba(255, 255, 255, 0.82);
}

.pricing-card__fit {
  display: grid;
  gap: 0.2rem;
  margin: auto 0 0;
  padding-top: 1rem;
  color: var(--site-text);
  font-size: 0.92rem;
}

.pricing-card__fit-label {
  color: #34538b;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.pricing-card--featured .pricing-card__fit,
.pricing-card--featured .pricing-card__fit-label {
  color: rgba(255, 255, 255, 0.88);
}

@media (min-width: 768px) {
  .pricing-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1200px) {
  .pricing-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}
</style>
