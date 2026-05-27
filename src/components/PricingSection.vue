<template>
  <section id="pricing" class="site-section pricing-section">
    <div class="site-container">
      <div class="site-section-header">
        <span class="site-section-label">Tarieven</span>
        <h2 class="site-section-title">Kies de lesvorm die past bij jouw ritme.</h2>
        <p class="site-section-copy">
          Vier duidelijke opties, zodat je snel ziet welke vorm past bij jouw
          tempo, gezelschap en manier van leren.
        </p>
      </div>

      <div class="pricing-grid">
        <article
          v-for="item in pricingItems"
          :key="item.title"
          :class="['pricing-card', { 'pricing-card--featured': item.featured }]"
        >
          <span v-if="item.featured" class="pricing-card__badge">
            Meest gekozen
          </span>
          <span class="pricing-card__eyebrow">{{ item.duration }}</span>
          <h3 class="pricing-card__title">{{ item.title }}</h3>
          <p class="pricing-card__price">{{ item.price }}</p>
          <p class="pricing-card__copy">{{ item.copy }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
const pricingItems = [
  {
    title: "Privéles",
    duration: "60 minuten",
    price: "€35 / uur",
    copy:
      "Voor spelers die volle aandacht willen voor techniek, ritme en gerichte coaching op maat.",
    featured: false,
  },
  {
    title: "Duoles",
    duration: "75 minuten",
    price: "€50 / sessie",
    copy:
      "Perfect als je samen wilt trainen en tegelijk persoonlijke feedback wilt houden.",
    featured: true,
  },
  {
    title: "Groepsles",
    duration: "75 minuten",
    price: "€60 / sessie",
    copy:
      "Veel beweging, rally's en energie voor spelers die graag samen leren en spelen.",
    featured: false,
  },
  {
    title: "Kids",
    duration: "45 minuten",
    price: "€25 / 45 min",
    copy:
      "Speelse lessen voor jonge spelers waarin plezier, controle en vertrouwen centraal staan.",
    featured: false,
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
  background: #ffffff;
}

.pricing-grid {
  display: grid;
  gap: 1.25rem;
}

.pricing-card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  border-radius: 1.5rem;
  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow: 0 18px 44px rgba(15, 23, 42, 0.08);
  padding: 1.8rem;
}

.pricing-card--featured {
  background: linear-gradient(145deg, #202860 0%, #325381 100%);
  border-color: transparent;
  box-shadow: 0 26px 60px rgba(32, 40, 96, 0.24);
  color: #ffffff;
}

.pricing-card__badge {
  display: inline-flex;
  align-self: flex-start;
  margin-bottom: 1rem;
  border-radius: 9999px;
  background: rgba(223, 255, 79, 0.18);
  color: var(--site-button);
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  padding: 0.45rem 0.75rem;
  text-transform: uppercase;
}

.pricing-card__eyebrow {
  display: inline-block;
  color: var(--site-accent);
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.pricing-card--featured .pricing-card__eyebrow {
  color: rgba(255, 255, 255, 0.78);
}

.pricing-card__title {
  margin: 0.8rem 0 0;
  font-size: 1.7rem;
  font-weight: 700;
}

.pricing-card__price {
  margin: 1rem 0 0;
  color: #0f172a;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.1;
}

.pricing-card--featured .pricing-card__price {
  color: #ffffff;
}

.pricing-card__copy {
  margin: 1rem 0 0;
  color: #475569;
  line-height: 1.8;
}

.pricing-card--featured .pricing-card__copy {
  color: rgba(255, 255, 255, 0.82);
}

@media (min-width: 768px) {
  .pricing-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1200px) {
  .pricing-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    align-items: stretch;
  }

  .pricing-card--featured {
    transform: translateY(-0.75rem);
  }
}
</style>
