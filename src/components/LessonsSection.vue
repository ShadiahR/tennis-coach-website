<template>
  <section id="lessons" class="site-section site-section--muted lessons-section">
    <div class="site-container">
      <div class="site-section-header">
        <span class="site-section-label">Lessen</span>
        <h2 class="site-section-title">Leren, lachen en lekker spelen.</h2>
        <p class="site-section-copy">
          Rodney houdt de sfeer luchtig en gezellig, maar werkt tegelijk scherp
          aan je techniek, timing en vertrouwen op de baan.
        </p>
      </div>

      <div class="lessons-zigzag">
        <article
          v-for="lesson in lessonRows"
          :key="lesson.title"
          :class="['lesson-row', { 'lesson-row--reverse': lesson.reverse }]"
        >
          <div class="lesson-row__copy">
            <span class="lesson-row__label">{{ lesson.label }}</span>
            <h3 class="lesson-row__title">{{ lesson.title }}</h3>
            <p class="lesson-row__text">{{ lesson.copy }}</p>

            <ul class="lesson-row__points">
              <li
                v-for="point in lesson.points"
                :key="point"
                class="lesson-row__point"
              >
                {{ point }}
              </li>
            </ul>
          </div>

          <div class="lesson-row__visual">
            <div
              v-if="lesson.mediaType === 'panel'"
              :class="['lesson-visual', 'lesson-visual--panel', lesson.visualTheme]"
            >
              <span class="lesson-visual__eyebrow">{{ lesson.visualLabel }}</span>
              <h4 class="lesson-visual__title">{{ lesson.visualTitle }}</h4>
              <ul class="lesson-visual__list">
                <li
                  v-for="item in lesson.visualPoints"
                  :key="item"
                  class="lesson-visual__item"
                >
                  <span class="lesson-visual__dot"></span>
                  {{ item }}
                </li>
              </ul>
            </div>

            <div v-else class="lesson-visual lesson-visual--image">
              <img
                :src="catchingImage"
                alt="Tennisbal wordt gevangen"
                class="lesson-visual__image"
              />
              <div class="lesson-visual__image-note">
                <span class="lesson-visual__eyebrow">Samen spelen</span>
                <strong class="lesson-visual__image-title">
                  {{ lesson.visualTitle }}
                </strong>
              </div>
            </div>
          </div>
        </article>
      </div>

      <div class="lessons-band lessons-band--prep">
        <div class="lessons-band__intro">
          <span class="site-section-label lessons-band__label">Voor je les</span>
          <h3 class="lessons-band__title">Goed voorbereid de baan op</h3>
          <p class="lessons-band__copy">
            Kom in sportkleding waarin je vrij beweegt, neem je racket en een
            waterfles mee en kom vooral met zin om te spelen. Twijfel je over je
            materiaal of werk je richting een wedstrijd? Rodney kijkt graag met
            je mee.
          </p>
          <a href="#pricing" class="site-button lessons-band__action">
            Bekijk de lesopties
          </a>
        </div>

        <ul class="lessons-checklist">
          <li
            v-for="item in checklistItems"
            :key="item.text"
            class="lessons-checklist__item"
          >
            <span class="lessons-checklist__icon">
              <i :class="item.icon"></i>
            </span>
            <span class="lessons-checklist__text">{{ item.text }}</span>
          </li>
        </ul>
      </div>

      <div class="lessons-band lessons-band--location">
        <div class="lessons-location__copy">
          <span class="site-section-label lessons-band__label">Locatie</span>
          <div class="lessons-location__heading">
            <span class="lessons-location__icon">
              <i class="fas fa-map-marker-alt"></i>
            </span>
            <h3 class="lessons-band__title lessons-band__title--compact">
              Spelen in het groen van Rotterdam
            </h3>
          </div>
          <p class="lessons-band__copy">
            De lessen vinden plaats op een vrije tennisbaan in Rotterdam
            Zuiderpark, midden in een groene omgeving waar bewegen, lucht en
            gezelligheid samenkomen. Je staat dus niet op een gesloten club,
            maar op een open plek waar iedereen zich snel thuis voelt.
          </p>
          <p class="lessons-band__copy">
            Rodney is super sociaal, kent veel mensen die regelmatig langskomen
            en zorgt ervoor dat je je vanaf het eerste moment welkom voelt. Dat
            maakt iedere les leerzaam, relaxed en gewoon leuk.
          </p>
        </div>

        <div class="site-panel lessons-map-card">
          <div class="lessons-map-frame">
            <iframe
              title="Kaart van Rotterdam Zuiderpark"
              class="lessons-map-embed"
              loading="lazy"
              src="https://www.openstreetmap.org/export/embed.html?bbox=4.4940%2C51.8804%2C4.4987%2C51.8827&layer=mapnik&marker=51.881563%2C4.496375"
            ></iframe>
          </div>
          <div class="lessons-map-footer">
            <span class="lessons-map-label">Adres:</span>
            <span class="lessons-map-address">Rotterdam Zuiderpark</span>
          </div>
        </div>
      </div>

      <div class="lessons-availability">
        <div class="lessons-availability__head">
          <span class="site-section-label lessons-band__label">Beschikbaarheid</span>
          <h3 class="lessons-band__title lessons-band__title--compact">
            Beschikbare momenten
          </h3>
          <p class="lessons-band__copy">
            Rodney is beschikbaar binnen deze blokken. Elke les duurt
            <strong>1 uur</strong>, dus je boekt altijd een los uur binnen de
            aangegeven tijden.
          </p>
        </div>

        <div class="availability-table-wrap">
          <table class="availability-table">
            <thead>
              <tr>
                <th>Dagdelen</th>
                <th v-for="day in scheduleDays" :key="day.name">
                  {{ day.name }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="slot in scheduleSlots" :key="slot.label">
                <th>{{ slot.label }}</th>
                <td v-for="day in scheduleDays" :key="`${day.name}-${slot.key}`">
                  {{ day[slot.key] }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import catchingImage from "@/assets/img/catching-tennis-ball.jpg";

const lessonRows = [
  {
    label: "Privéles",
    title: "Persoonlijke aandacht voor hoe jij het snelst groeit.",
    copy:
      "In een privéles draait alles om jouw ritme, jouw techniek en jouw vertrouwen. Rodney ziet snel waar de winst zit en vertaalt dat naar duidelijke aanwijzingen die je meteen voelt in je spel.",
    points: [
      "Techniek en voetenwerk op jouw tempo",
      "Directe feedback na iedere oefening",
      "Volle focus op jouw eigen doelen",
    ],
    mediaType: "panel",
    visualLabel: "1-op-1 aandacht",
    visualTitle: "Elke slag krijgt de ruimte om beter te worden.",
    visualPoints: ["Techniek", "Timing", "Zelfvertrouwen"],
    visualTheme: "lesson-visual--indigo",
    reverse: false,
  },
  {
    label: "Duoles",
    title: "Samen trainen houdt het licht, leuk en motiverend.",
    copy:
      "Duolessen zijn ideaal als je graag met een vriend, partner of trainingsmaat speelt. Je leert van Rodney, maar ook van elkaar, waardoor het tempo levendig blijft en oefenen veel natuurlijker voelt.",
    points: [
      "Samen rally's spelen en opbouwen",
      "Veel energie en afwisseling in de les",
      "Persoonlijke tips voor allebei de spelers",
    ],
    mediaType: "image",
    visualTitle: "Samen trainen maakt leren losser en nog leuker.",
    reverse: true,
  },
  {
    label: "Groepsles & Kids",
    title: "Veel beweging, veel plezier en duidelijke structuur voor iedereen.",
    copy:
      "In groepslessen blijft de sfeer sociaal en actief, terwijl kids op een speelse manier werken aan controle, ritme en plezier. Rodney houdt de groep in beweging en geeft tegelijk genoeg persoonlijke aandacht.",
    points: [
      "Groepsles voor 3 of meer spelers",
      "Kidslessen tot 12 jaar met speelse opbouw",
      "Open sfeer met veel herhaling en rally's",
    ],
    mediaType: "panel",
    visualLabel: "Samen groeien",
    visualTitle: "Lekker bewegen, snel contact en veel herhaling op de baan.",
    visualPoints: ["Groepsles 75 min", "Kids 45 min", "Sociaal en actief"],
    visualTheme: "lesson-visual--teal",
    reverse: false,
  },
];

const checklistItems = [
  {
    icon: "fas fa-shirt",
    text: "Draag sportkleding waarin je lekker vrij beweegt.",
  },
  {
    icon: "fas fa-table-tennis",
    text: "Neem je tennisracket mee naar de baan.",
  },
  {
    icon: "fas fa-tint",
    text: "Een waterfles is altijd slim, zeker op warmere dagen.",
  },
  {
    icon: "fas fa-smile",
    text: "Kom met energie, plezier en een open mindset.",
  },
];

const scheduleSlots = [
  { label: "Ochtend", key: "morning" },
  { label: "Later op de dag", key: "daytime" },
];

const scheduleDays = [
  { name: "Maandag", morning: "09:00 - 12:00", daytime: "14:00 - 21:00" },
  { name: "Dinsdag", morning: "09:00 - 12:00", daytime: "14:00 - 21:00" },
  { name: "Woensdag", morning: "09:00 - 12:00", daytime: "14:00 - 21:00" },
  { name: "Donderdag", morning: "09:00 - 12:00", daytime: "14:00 - 21:00" },
  { name: "Vrijdag", morning: "09:00 - 12:00", daytime: "14:00 - 21:00" },
  { name: "Zaterdag", morning: "09:00 - 12:00", daytime: "14:00 - 21:00" },
];

export default {
  data() {
    return {
      catchingImage,
      checklistItems,
      lessonRows,
      scheduleDays,
      scheduleSlots,
    };
  },
};
</script>

<style scoped>
.lessons-section {
  overflow: hidden;
}

.lessons-zigzag {
  display: grid;
  gap: 2rem;
}

.lesson-row {
  display: grid;
  gap: 1.75rem;
  align-items: center;
  padding: 2rem 0;
}

.lesson-row + .lesson-row {
  border-top: 1px solid rgba(15, 23, 42, 0.08);
}

.lesson-row__label {
  display: inline-block;
  color: var(--site-accent);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.lesson-row__title {
  margin: 0.9rem 0 0;
  color: #0f172a;
  font-size: clamp(2rem, 3vw, 2.75rem);
  font-weight: 700;
  line-height: 1.15;
}

.lesson-row__text {
  margin-top: 1.15rem;
  color: #475569;
  line-height: 1.9;
}

.lesson-row__points {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin: 1.5rem 0 0;
  padding: 0;
  list-style: none;
}

.lesson-row__point {
  display: inline-flex;
  align-items: center;
  min-height: 2.6rem;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(104, 176, 171, 0.26);
  color: #334155;
  font-size: 0.92rem;
  font-weight: 600;
  padding: 0.6rem 1rem;
}

.lesson-row__visual {
  min-width: 0;
}

.lesson-visual {
  position: relative;
  overflow: hidden;
  min-height: 23rem;
  border-radius: 1.75rem;
}

.lesson-visual--panel {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2rem;
  color: #ffffff;
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.12);
}

.lesson-visual--indigo {
  background: linear-gradient(135deg, #202860 0%, #34538b 100%);
}

.lesson-visual--teal {
  background: linear-gradient(135deg, #4a7c59 0%, #68b0ab 100%);
}

.lesson-visual--panel::before {
  content: "";
  position: absolute;
  top: -4rem;
  right: -4rem;
  width: 12rem;
  height: 12rem;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.12);
}

.lesson-visual__eyebrow {
  display: inline-block;
  color: var(--site-button);
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.lesson-visual__title {
  position: relative;
  margin: 0.8rem 0 0;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.15;
}

.lesson-visual__list {
  position: relative;
  display: grid;
  gap: 0.85rem;
  margin: 1.5rem 0 0;
  padding: 0;
  list-style: none;
}

.lesson-visual__item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
}

.lesson-visual__dot {
  width: 0.55rem;
  height: 0.55rem;
  border-radius: 9999px;
  background: var(--site-button);
  flex: 0 0 auto;
}

.lesson-visual--image {
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.14);
}

.lesson-visual__image {
  width: 100%;
  height: 100%;
  min-height: 23rem;
  object-fit: cover;
}

.lesson-visual__image-note {
  position: absolute;
  left: 1.25rem;
  right: 1.25rem;
  bottom: 1.25rem;
  border-radius: 1.2rem;
  background: rgba(15, 23, 42, 0.72);
  backdrop-filter: blur(12px);
  color: #ffffff;
  padding: 1rem 1.1rem;
}

.lesson-visual__image-title {
  display: block;
  margin-top: 0.5rem;
  font-size: 1.05rem;
  line-height: 1.5;
}

.lessons-band {
  display: grid;
  gap: 2rem;
  margin-top: 4rem;
  padding: 2.35rem 0;
}

.lessons-band + .lessons-band {
  border-top: 1px solid rgba(15, 23, 42, 0.08);
}

.lessons-band--prep {
  grid-template-columns: minmax(0, 1fr);
}

.lessons-band__intro,
.lessons-location__copy,
.lessons-availability__head {
  min-width: 0;
}

.lessons-band__label {
  margin-bottom: 0.55rem;
}

.lessons-band__title {
  margin: 0;
  color: #0f172a;
  font-size: clamp(2rem, 3vw, 2.7rem);
  font-weight: 700;
  line-height: 1.15;
}

.lessons-band__title--compact {
  font-size: clamp(1.9rem, 3vw, 2.35rem);
}

.lessons-band__copy {
  margin-top: 1rem;
  color: #475569;
  line-height: 1.9;
}

.lessons-band__action {
  margin-top: 1.75rem;
}

.lessons-checklist {
  display: grid;
  gap: 1rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.lessons-checklist__item {
  display: flex;
  align-items: center;
  gap: 1rem;
  border-radius: 1.25rem;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(104, 176, 171, 0.18);
  padding: 1rem 1.1rem;
}

.lessons-checklist__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.7rem;
  height: 2.7rem;
  border-radius: 9999px;
  background: rgba(104, 176, 171, 0.16);
  color: var(--site-accent);
  flex: 0 0 auto;
}

.lessons-checklist__text {
  color: #334155;
  font-weight: 600;
  line-height: 1.6;
}

.lessons-band--location {
  align-items: center;
}

.lessons-location__heading {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.lessons-location__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3.25rem;
  height: 3.25rem;
  border-radius: 9999px;
  background: rgba(104, 176, 171, 0.16);
  color: var(--site-accent);
  flex: 0 0 auto;
}

.lessons-map-card {
  overflow: hidden;
}

.lessons-map-frame {
  height: 22rem;
  background: #e8eef2;
}

.lessons-map-embed {
  width: 100%;
  height: 100%;
  border: 0;
  display: block;
}

.lessons-map-footer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.45rem;
  padding: 1.1rem 1.4rem 1.3rem;
  color: #334155;
}

.lessons-map-label {
  font-weight: 700;
}

.lessons-map-address {
  color: #0f172a;
  font-weight: 600;
}

.lessons-availability {
  margin-top: 4rem;
  border-radius: 1.75rem;
  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.06);
  box-shadow: 0 18px 42px rgba(15, 23, 42, 0.09);
  overflow: hidden;
}

.lessons-availability__head {
  padding: 2rem 2rem 1.4rem;
  background: linear-gradient(
    135deg,
    rgba(104, 176, 171, 0.14),
    rgba(223, 255, 79, 0.22)
  );
}

.availability-table-wrap {
  width: 100%;
  overflow-x: auto;
  padding: 1.5rem;
}

.availability-table {
  width: 100%;
  min-width: 0;
  border-collapse: separate;
  border-spacing: 0.75rem;
  color: #0f172a;
  table-layout: fixed;
}

.availability-table th,
.availability-table td {
  text-align: center;
  vertical-align: middle;
}

.availability-table thead th {
  color: #334155;
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  padding-bottom: 0.2rem;
  text-transform: uppercase;
}

.availability-table tbody th,
.availability-table tbody td {
  border-radius: 1rem;
  padding: 1.2rem 0.9rem;
}

.availability-table tbody th {
  background: rgba(32, 40, 96, 0.08);
  color: #0f172a;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.availability-table tbody td {
  background: rgba(104, 176, 171, 0.14);
  color: #0f172a;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.45;
}

@media (min-width: 900px) {
  .lesson-row,
  .lessons-band--prep,
  .lessons-band--location {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 3rem;
  }

  .lesson-row--reverse .lesson-row__copy {
    order: 2;
  }

  .lesson-row--reverse .lesson-row__visual {
    order: 1;
  }
}

@media (max-width: 767px) {
  .lesson-row {
    padding: 1.25rem 0;
  }

  .lesson-row__point {
    width: 100%;
    justify-content: center;
  }

  .lesson-visual,
  .lesson-visual__image {
    min-height: 19rem;
  }

  .lessons-band {
    margin-top: 3rem;
    padding: 1.75rem 0;
  }

  .lessons-location__heading {
    align-items: flex-start;
  }

  .lessons-location__icon {
    width: 3rem;
    height: 3rem;
  }

  .lessons-map-frame {
    height: 18rem;
  }

  .lessons-availability__head {
    padding: 1.6rem 1.4rem 1.15rem;
  }

  .availability-table-wrap {
    padding: 1rem;
  }

  .availability-table {
    min-width: 52rem;
  }
}
</style>
