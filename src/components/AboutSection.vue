<template>
  <section id="about" class="site-section about-section">
    <div class="site-container">
      <div class="about-layout">
        <div class="about-copy-wrap" v-reveal="{ effect: 'fade-up' }">
          <span class="site-section-label">Over Rodney</span>
          <h2 class="site-section-title about-title">
            Rodney Eelst coacht met scherpe ogen, losse energie en veel gevoel
            voor ritme.
          </h2>

          <p class="about-lead">
            Zijn lessen voelen persoonlijk en ontspannen, maar zijn nooit vaag.
            Rodney ziet snel waar techniek, voetenwerk of timing slimmer kan en
            vertaalt dat naar heldere aanwijzingen die direct bruikbaar zijn.
          </p>

          <div class="about-strengths">
            <article
              v-for="(item, index) in strengths"
              :key="item.title"
              class="about-strength-card site-panel site-interactive"
              v-reveal="{ effect: 'fade-up', delay: 120 + index * 80 }"
            >
              <span class="about-strength-card__icon">
                <i :class="item.icon"></i>
              </span>
              <div>
                <h3 class="about-strength-card__title">{{ item.title }}</h3>
                <p class="about-strength-card__copy">{{ item.copy }}</p>
              </div>
            </article>
          </div>

          <a href="#contact" class="site-button about-cta">Plan een les</a>
        </div>

        <div class="about-visual" v-reveal="{ effect: 'slide-left', delay: 180 }">
          <div class="about-portrait-shell">
            <img
              :src="profileImage"
              alt="Rodney Eelst op de tennisbaan"
              class="about-portrait"
            />
            <div class="about-portrait-note">
              <span class="about-portrait-note__label">Wat spelers voelen</span>
              <strong class="about-portrait-note__title">
                Persoonlijk, sociaal en altijd duidelijk in de les.
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import profileImage from "@/assets/img/tennis-coach-smiling.jpg";

const strengths = [
  {
    copy:
      "Rustige uitleg waarmee je sneller snapt wat je precies anders moet doen.",
    icon: "fas fa-eye",
    title: "Snel zien waar winst zit",
  },
  {
    copy:
      "Veel contact, veel energie en een lesritme waarin je je direct welkom voelt.",
    icon: "fas fa-comments",
    title: "Open en sociaal op de baan",
  },
  {
    copy:
      "Techniek, timing en plezier blijven tegelijk in beeld, zonder stijf lesgevoel.",
    icon: "fas fa-wave-square",
    title: "Serieus trainen zonder zwaarte",
  },
];

export default {
  data() {
    return {
      profileImage,
      strengths,
    };
  },
};
</script>

<style scoped>
.about-section {
  background: transparent;
}

.about-layout {
  display: grid;
  gap: 2rem;
  align-items: center;
}

.about-copy-wrap {
  min-width: 0;
}

.about-title {
  max-width: 12ch;
}

.about-lead {
  max-width: 35rem;
  margin-top: 1.4rem;
  color: var(--site-text-soft);
  font-size: 1.04rem;
  line-height: 1.85;
}

.about-strengths {
  display: grid;
  gap: 0.95rem;
  margin-top: 1.8rem;
}

.about-strength-card {
  display: flex;
  align-items: flex-start;
  gap: 0.95rem;
  padding: 1rem 1.05rem;
}

.about-strength-card__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.7rem;
  height: 2.7rem;
  border-radius: 0.95rem;
  background: rgba(104, 176, 171, 0.16);
  color: var(--site-accent);
  flex: 0 0 auto;
}

.about-strength-card__title {
  margin: 0;
  color: var(--site-text);
  font-size: 1.12rem;
  line-height: 1.2;
}

.about-strength-card__copy {
  margin: 0.35rem 0 0;
  color: var(--site-text-soft);
  font-size: 0.94rem;
  line-height: 1.65;
}

.about-cta {
  margin-top: 1.8rem;
}

.about-visual {
  min-width: 0;
}

.about-portrait-shell {
  position: relative;
  overflow: hidden;
  border-radius: 2rem;
  padding: 0.9rem;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.88), rgba(255, 255, 255, 0.6)),
    linear-gradient(135deg, rgba(17, 28, 69, 0.1), rgba(104, 176, 171, 0.14));
  border: 1px solid rgba(255, 255, 255, 0.62);
  box-shadow: 0 28px 72px rgba(15, 23, 42, 0.14);
}

.about-portrait {
  width: 100%;
  min-height: 24rem;
  border-radius: 1.6rem;
  object-fit: cover;
  object-position: center;
}

.about-portrait-note {
  position: absolute;
  right: 1.4rem;
  bottom: 1.4rem;
  max-width: 15rem;
  border-radius: 1.2rem;
  background: rgba(17, 28, 69, 0.88);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.18);
  color: #ffffff;
  padding: 1rem 1.05rem;
  backdrop-filter: blur(16px);
}

.about-portrait-note__label {
  display: inline-block;
  color: rgba(223, 255, 79, 0.84);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.about-portrait-note__title {
  display: block;
  margin-top: 0.45rem;
  font-size: 1rem;
  line-height: 1.5;
}

@media (min-width: 960px) {
  .about-layout {
    grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
    gap: 3rem;
  }

  .about-strengths {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .about-strength-card {
    flex-direction: column;
  }
}

@media (max-width: 767px) {
  .about-portrait {
    min-height: 20rem;
  }

  .about-portrait-note {
    position: static;
    max-width: none;
    margin-top: 0.9rem;
  }
}
</style>
