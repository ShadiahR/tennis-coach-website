<template>
  <section id="about" class="site-section about-section">
    <div class="site-container">
<div class="flex flex-wrap items-center mt-10 md:mt-16">
  <div class="w-full md:w-6/12 px-4 mb-12 md:mb-0">
    <img
      :src="profileImage"
      alt="Tenniscoach Rodney"
      class="about-portrait"
    />
  </div>

  <div class="w-full md:w-6/12 px-4 md:pl-6">
    <span class="site-section-label">Over Rodney</span>

    <h2 class="site-section-title about-title">
      Een coach die je meteen op je gemak laat voelen.
    </h2>

    <p class="site-section-copy">
      Rodney is vriendelijk, energiek en vooral heel sociaal. Hij maakt
      makkelijk contact, kent veel mensen op en rond de baan en zorgt
      ervoor dat de sfeer ontspannen blijft terwijl jij wel echt beter
      gaat spelen.
    </p>

    <p class="about-copy">
      Of je nu voor het eerst een racket vasthoudt of juist slimmer wilt
      leren spelen in wedstrijden, Rodney begeleidt je met geduld, humor
      en scherpe tips waar je meteen iets aan hebt.
    </p>

    <p class="about-copy">
      Zijn lessen voelen toegankelijk en warm aan, maar zitten tegelijk
      vol aandacht voor techniek, ritme en plezier. Zo stap je na elk uur
      met meer vertrouwen van de baan.
    </p>

    <a href="#contact" class="site-button about-cta">
      Plan een les
    </a>
  </div>
</div>
</div>
</section>
</template>

<script>
import profileImage from "@/assets/img/tennis-coach-smiling.jpg";

const infoItems = [
  {
    label: "Locatie",
    value: "Vrije tennisbaan in een groen park in Rotterdam",
  },
  {
    label: "Lesduur",
    value: "1 uur per les",
  },
  {
    label: "Sfeer",
    value: "Sociaal, ontspannen en motiverend",
  },
  {
    label: "Voor wie",
    value: "Kids, duo's, groepen en wedstrijdspelers",
  },
];

export default {
  data() {
    return {
      infoItems,
      profileImage,
    };
  },
};
</script>

<style scoped>
.about-section {
  background: #ffffff;
}

.about-title {
  max-width: 28rem;
}

.about-copy {
  margin-top: 1rem;
  color: #475569;
  line-height: 1.85;
}

.about-cta {
  margin-top: 2rem;
}

.about-visual {
  position: relative;
}

.about-portrait {
  width: 100%;
  min-height: 22rem;
  object-fit: cover;
  border-radius: 1.5rem;
  box-shadow: 0 28px 64px rgba(15, 23, 42, 0.16);
}

.about-info-card {
  margin-top: 1.25rem;
  padding: 2rem;
}

.about-info-title {
  margin: 0 0 1.5rem;
  color: #0f172a;
  font-size: 1.5rem;
  font-weight: 700;
}

.about-info-row {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  padding: 0.9rem 0;
}

.about-info-row + .about-info-row {
  border-top: 1px solid rgba(15, 23, 42, 0.08);
}

.about-info-label {
  color: var(--site-accent);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.about-info-value {
  color: #334155;
  line-height: 1.7;
}

@media (min-width: 1024px) {
  .about-info-card {
    max-width: 24rem;
    margin-top: -4rem;
    margin-left: auto;
    margin-right: 1.5rem;
    position: relative;
  }
}

@media (max-width: 767px) {
  .about-portrait {
    min-height: 18rem;
  }
}
</style>
