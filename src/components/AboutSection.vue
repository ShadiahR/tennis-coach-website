<template>
  <section id="about" class="site-section about-section">
    <div class="site-container">
      <div class="about-layout">
        <div class="about-visual">
          <img
            :src="profileImage"
            alt="Coach Rodney op de tennisbaan"
            class="about-portrait"
          />
        </div>

        <div class="about-copy-wrap">
          <span class="site-section-label">Over Rodney</span>
          <h2 class="site-section-title about-title">
            Een coach die scherp kijkt, makkelijk contact maakt en plezier
            belangrijk vindt.
          </h2>

          <p class="about-lead">
            Rodney staat bekend om zijn open energie. Hij maakt snel een praatje,
            kent veel mensen op en rond de baan en zorgt ervoor dat je je direct
            welkom voelt zonder dat de kwaliteit van de les verloren gaat.
          </p>

          <p class="about-copy">
            Zijn coaching is vriendelijk en duidelijk: hij ziet snel waar je
            winst kunt pakken in techniek, voetenwerk en timing, en legt dat op
            een rustige manier uit die meteen blijft hangen.
          </p>

          <p class="about-copy">
            Daardoor voelt een les met Rodney nooit stijf of afstandelijk. Je
            werkt serieus aan je spel, maar altijd in een sfeer waarin lachen,
            bewegen en leren vanzelf samengaan.
          </p>

          <p class="about-note">
            Persoonlijk, sociaal en vol aandacht voor hoe jij het liefst leert.
          </p>

          <a href="#contact" class="site-button about-cta">Plan een les</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import profileImage from "@/assets/img/tennis-coach-smiling.jpg";

export default {
  data() {
    return {
      profileImage,
    };
  },
};
</script>

<style scoped>
.about-section {
  background: #ffffff;
}

.about-layout {
  display: grid;
  gap: 2.5rem;
  align-items: center;
}

.about-visual {
  min-width: 0;
}

.about-portrait {
  width: 100%;
  min-height: 24rem;
  border-radius: 2rem;
  object-fit: cover;
  box-shadow: 0 28px 70px rgba(15, 23, 42, 0.12);
}

.about-copy-wrap {
  max-width: 34rem;
}

.about-title {
  max-width: 34rem;
}

.about-lead {
  margin-top: 1.5rem;
  color: #334155;
  font-size: 1.08rem;
  line-height: 1.9;
}

.about-copy {
  margin-top: 1rem;
  color: #475569;
  line-height: 1.9;
}

.about-note {
  margin: 1.5rem 0 0;
  color: var(--site-header-footer);
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.about-cta {
  margin-top: 2rem;
}

@media (min-width: 1024px) {
  .about-layout {
    grid-template-columns: minmax(0, 1fr) minmax(0, 0.92fr);
    gap: 4rem;
  }

  .about-portrait {
    min-height: 38rem;
  }
}

@media (max-width: 767px) {
  .about-portrait {
    min-height: 19rem;
  }

  .about-lead {
    font-size: 1rem;
  }
}
</style>
