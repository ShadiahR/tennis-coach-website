<template>
  <section id="lessons" class="site-section site-section--muted lessons-section">
    <div class="site-container">
      <div class="site-section-header" v-reveal="{ effect: 'fade-up' }">
        <span class="site-section-label">Lessen</span>
        <h2 class="site-section-title">Leren, lachen en lekker spelen.</h2>
        <p class="site-section-copy">
          Rodney Eelst houdt de sfeer licht en sociaal, maar werkt tegelijk
          scherp aan je techniek, timing en vertrouwen op de baan.
        </p>
      </div>

      <div class="lessons-grid">
        <article
          v-for="(lesson, index) in lessonCards"
          :key="lesson.title"
          class="lesson-card site-panel site-interactive"
          v-reveal="{ effect: 'fade-up', delay: index * 90 }"
        >
          <div
            :class="[
              'lesson-card__visual',
              { 'lesson-card__visual--image': lesson.mediaType === 'image' },
              lesson.visualTheme,
            ]"
          >
            <template v-if="lesson.mediaType === 'image'">
              <img
                :src="catchingImage"
                alt="Tennisbal wordt gevangen"
                class="lesson-card__image"
              />
              <div class="lesson-card__image-note">
                <span class="lesson-card__eyebrow">Samen spelen</span>
                <strong class="lesson-card__visual-title">
                  {{ lesson.visualTitle }}
                </strong>
              </div>
            </template>

            <template v-else>
              <span class="lesson-card__eyebrow">{{ lesson.visualLabel }}</span>
              <h3 class="lesson-card__visual-title">{{ lesson.visualTitle }}</h3>
              <ul class="lesson-card__visual-list">
                <li
                  v-for="item in lesson.visualPoints"
                  :key="item"
                  class="lesson-card__visual-item"
                >
                  <span class="lesson-card__visual-dot"></span>
                  {{ item }}
                </li>
              </ul>
            </template>
          </div>

          <div class="lesson-card__body">
            <div class="lesson-card__meta">
              <span class="lesson-card__label">{{ lesson.label }}</span>
              <span class="lesson-card__duration">{{ lesson.duration }}</span>
            </div>

            <h3 class="lesson-card__title">{{ lesson.title }}</h3>
            <p class="lesson-card__copy">{{ lesson.copy }}</p>

            <ul class="lesson-card__points">
              <li
                v-for="point in lesson.points"
                :key="point"
                class="lesson-card__point"
              >
                {{ point }}
              </li>
            </ul>
          </div>
        </article>
      </div>

      <div class="site-panel lessons-info" v-reveal="{ effect: 'fade-up', delay: 120 }">
        <div class="lessons-info__header">
          <div class="lessons-info__intro">
            <span class="site-section-label">Praktische info</span>
            <h3 class="lessons-info__title">
              Alles wat handig is om vooraf te weten.
            </h3>
            <p class="lessons-info__copy">
              Van wat je meeneemt tot waar je speelt en wanneer er ruimte is:
              hier staat de praktische kant compact bij elkaar.
            </p>
          </div>

          <div class="lessons-tabs" role="tablist" aria-label="Praktische informatie">
            <button
              v-for="tab in infoTabs"
              :id="`tab-${tab.id}`"
              :key="tab.id"
              :aria-controls="`panel-${tab.id}`"
              :aria-selected="activeInfoTab === tab.id ? 'true' : 'false'"
              :class="[
                'lessons-tab',
                { 'lessons-tab--active': activeInfoTab === tab.id },
              ]"
              role="tab"
              type="button"
              @click="activeInfoTab = tab.id"
            >
              {{ tab.label }}
            </button>
          </div>
        </div>

        <div
          id="panel-prep"
          v-show="activeInfoTab === 'prep'"
          class="lessons-panel"
          role="tabpanel"
          aria-labelledby="tab-prep"
        >
          <div class="lessons-panel__grid lessons-panel__grid--prep">
            <div class="lessons-panel__copy">
              <h4 class="lessons-panel__title">Goed voorbereid de baan op</h4>
              <p class="lessons-panel__text">
                Kom in sportkleding waarin je vrij beweegt, neem je racket en
                een waterfles mee en kom vooral met zin om te spelen. Twijfel je
                over je materiaal of werk je richting een wedstrijd? Rodney
                denkt graag met je mee.
              </p>
              <a href="#pricing" class="site-button lessons-panel__action">
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
        </div>

        <div
          id="panel-location"
          v-show="activeInfoTab === 'location'"
          class="lessons-panel"
          role="tabpanel"
          aria-labelledby="tab-location"
        >
          <div class="lessons-panel__grid lessons-panel__grid--location">
            <div class="lessons-panel__copy">
              <span class="lessons-location__icon">
                <i class="fas fa-map-marker-alt"></i>
              </span>
              <h4 class="lessons-panel__title">Spelen in het groen van Rotterdam</h4>
              <p class="lessons-panel__text">
                De lessen vinden plaats op een vrije tennisbaan in Rotterdam
                Zuiderpark, midden in een open en groene omgeving waar bewegen,
                lucht en gezelligheid samenkomen.
              </p>
              <p class="lessons-panel__text">
                Rodney kent veel mensen op en rond de baan en zorgt ervoor dat
                je je vanaf het eerste moment welkom voelt. Dat maakt iedere les
                leerzaam, relaxed en gewoon leuk.
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
                <span class="lessons-map-label">Adres</span>
                <span class="lessons-map-address">Rotterdam Zuiderpark</span>
              </div>
            </div>
          </div>
        </div>

        <div
          id="panel-availability"
          v-show="activeInfoTab === 'availability'"
          class="lessons-panel"
          role="tabpanel"
          aria-labelledby="tab-availability"
        >
          <div class="lessons-panel__copy lessons-panel__copy--compact">
            <h4 class="lessons-panel__title">Beschikbare momenten</h4>
            <p class="lessons-panel__text">
              Rodney is beschikbaar binnen deze blokken. Elke les duurt
              <strong>1 uur</strong>, dus je boekt altijd een los uur binnen de
              aangegeven tijden.
            </p>
          </div>

          <div class="availability-mobile">
            <article
              v-for="day in scheduleDays"
              :key="day.name"
              class="availability-mobile__card"
            >
              <h5 class="availability-mobile__day">{{ day.name }}</h5>
              <dl class="availability-mobile__slots">
                <div
                  v-for="slot in scheduleSlots"
                  :key="`${day.name}-${slot.key}`"
                  class="availability-mobile__slot"
                >
                  <dt>{{ slot.label }}</dt>
                  <dd>{{ day[slot.key] }}</dd>
                </div>
              </dl>
            </article>
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
    </div>
  </section>
</template>

<script>
import catchingImage from "@/assets/img/catching-tennis-ball.jpg";

const infoTabs = [
  { id: "prep", label: "Voor je les" },
  { id: "location", label: "Locatie" },
  { id: "availability", label: "Beschikbaarheid" },
];

const lessonCards = [
  {
    copy:
      "In een privéles draait alles om jouw ritme, techniek en vertrouwen. Rodney ziet snel waar de winst zit en vertaalt dat naar aanwijzingen die je meteen voelt in je spel.",
    duration: "60 minuten",
    label: "Privéles",
    mediaType: "panel",
    points: [
      "Techniek en voetenwerk op jouw tempo",
      "Directe feedback na iedere oefening",
      "Volle focus op jouw doelen",
    ],
    title: "Persoonlijke aandacht voor hoe jij het snelst groeit.",
    visualLabel: "1-op-1 aandacht",
    visualPoints: ["Techniek", "Timing", "Zelfvertrouwen"],
    visualTheme: "lesson-card__visual--indigo",
    visualTitle: "Elke slag krijgt de ruimte om beter te worden.",
  },
  {
    copy:
      "Duolessen zijn ideaal als je graag met een vriend, partner of trainingsmaat speelt. Je leert van Rodney, maar ook van elkaar, waardoor het tempo levendig en motiverend blijft.",
    duration: "75 minuten",
    label: "Duoles",
    mediaType: "image",
    points: [
      "Samen rally's spelen en opbouwen",
      "Veel energie en afwisseling",
      "Persoonlijke tips voor allebei",
    ],
    title: "Samen trainen houdt het licht, leuk en motiverend.",
    visualTheme: "lesson-card__visual--image",
    visualTitle: "Samen trainen maakt leren losser en nog leuker.",
  },
  {
    copy:
      "In groepslessen blijft de sfeer sociaal en actief, terwijl kids spelenderwijs werken aan controle, ritme en plezier. Rodney houdt de groep in beweging en ziet toch ieder individu.",
    duration: "45 of 75 minuten",
    label: "Groep & Kids",
    mediaType: "panel",
    points: [
      "Groepsles voor 3 of meer spelers",
      "Kidslessen tot 12 jaar",
      "Open sfeer met veel herhaling",
    ],
    title: "Veel beweging, veel plezier en duidelijke structuur.",
    visualLabel: "Samen groeien",
    visualPoints: ["Groepsles 75 min", "Kids 45 min", "Sociaal en actief"],
    visualTheme: "lesson-card__visual--teal",
    visualTitle: "Lekker bewegen, snel contact en veel rally's op de baan.",
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
    text: "Een waterfles is slim, zeker op warmere dagen.",
  },
  {
    icon: "fas fa-smile",
    text: "Kom met energie, plezier en een open mindset.",
  },
];

const scheduleSlots = [
  { label: "Ochtend", key: "morning" },
  { label: "Middag", key: "daytime" },
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
      activeInfoTab: "prep",
      catchingImage,
      checklistItems,
      infoTabs,
      lessonCards,
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

.lessons-grid {
  display: grid;
  gap: 1.2rem;
}

.lesson-card {
  overflow: hidden;
}

.lesson-card__visual {
  position: relative;
  min-height: 15.5rem;
  padding: 1.45rem;
  color: #ffffff;
}

.lesson-card__visual--indigo {
  background: linear-gradient(135deg, #1b2762 0%, #34538b 100%);
}

.lesson-card__visual--teal {
  background: linear-gradient(135deg, #3b6f57 0%, #68b0ab 100%);
}

.lesson-card__visual--indigo::before,
.lesson-card__visual--teal::before {
  content: "";
  position: absolute;
  top: -3.5rem;
  right: -3.5rem;
  width: 10rem;
  height: 10rem;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.12);
}

.lesson-card__visual--image {
  overflow: hidden;
  padding: 0;
}

.lesson-card__image {
  width: 100%;
  height: 100%;
  min-height: 15.5rem;
  object-fit: cover;
}

.lesson-card__image-note {
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  left: 1rem;
  border-radius: 1.2rem;
  background: rgba(15, 23, 42, 0.72);
  color: #ffffff;
  padding: 1rem 1.05rem;
  backdrop-filter: blur(14px);
}

.lesson-card__eyebrow {
  display: inline-block;
  color: rgba(223, 255, 79, 0.92);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.lesson-card__visual-title {
  position: relative;
  margin: 0.7rem 0 0;
  font-size: 1.85rem;
  line-height: 1.12;
}

.lesson-card__visual-list {
  position: relative;
  display: grid;
  gap: 0.8rem;
  margin: 1.2rem 0 0;
  padding: 0;
  list-style: none;
}

.lesson-card__visual-item {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  color: rgba(255, 255, 255, 0.88);
  font-weight: 600;
}

.lesson-card__visual-dot {
  width: 0.55rem;
  height: 0.55rem;
  border-radius: 9999px;
  background: var(--site-button);
  flex: 0 0 auto;
}

.lesson-card__body {
  display: grid;
  gap: 0.9rem;
  padding: 1.35rem;
}

.lesson-card__meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.7rem 1rem;
}

.lesson-card__label {
  color: #34538b;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.lesson-card__duration {
  border-radius: 9999px;
  background: rgba(104, 176, 171, 0.12);
  color: var(--site-text);
  font-size: 0.82rem;
  font-weight: 700;
  padding: 0.45rem 0.75rem;
}

.lesson-card__title {
  margin: 0;
  color: var(--site-text);
  font-size: 1.55rem;
  line-height: 1.18;
}

.lesson-card__copy {
  margin: 0;
  color: var(--site-text-soft);
  line-height: 1.72;
}

.lesson-card__points {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.lesson-card__point {
  display: inline-flex;
  align-items: center;
  min-height: 2.35rem;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(104, 176, 171, 0.22);
  color: #334155;
  font-size: 0.88rem;
  font-weight: 600;
  padding: 0.55rem 0.9rem;
}

.lessons-info {
  margin-top: clamp(2rem, 4vw, 3rem);
  padding: clamp(1.25rem, 2.6vw, 2rem);
}

.lessons-info__header {
  display: grid;
  gap: 1.5rem;
}

.lessons-info__intro {
  max-width: 34rem;
}

.lessons-info__title {
  margin: 0;
  color: var(--site-text);
  font-size: clamp(1.85rem, 3vw, 2.45rem);
  line-height: 1.08;
}

.lessons-info__copy {
  margin: 0.9rem 0 0;
  color: var(--site-text-soft);
  line-height: 1.75;
}

.lessons-tabs {
  display: flex;
  gap: 0.75rem;
  overflow-x: auto;
  padding-bottom: 0.2rem;
}

.lessons-tab {
  flex: 0 0 auto;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.76);
  color: var(--site-text);
  cursor: pointer;
  font-size: 0.92rem;
  font-weight: 700;
  padding: 0.85rem 1rem;
  transition:
    background-color 220ms ease,
    border-color 220ms ease,
    color 220ms ease,
    box-shadow 220ms ease;
}

.lessons-tab--active {
  background: var(--site-header-footer);
  border-color: transparent;
  box-shadow: 0 16px 34px rgba(17, 28, 69, 0.18);
  color: #ffffff;
}

.lessons-panel {
  margin-top: 1.55rem;
}

.lessons-panel__grid {
  display: grid;
  gap: 1.5rem;
}

.lessons-panel__copy {
  min-width: 0;
}

.lessons-panel__copy--compact {
  max-width: 38rem;
}

.lessons-panel__title {
  margin: 0;
  color: var(--site-text);
  font-size: clamp(1.5rem, 2.2vw, 2rem);
  line-height: 1.12;
}

.lessons-panel__text {
  margin: 0.95rem 0 0;
  color: var(--site-text-soft);
  line-height: 1.78;
}

.lessons-panel__action {
  margin-top: 1.5rem;
}

.lessons-checklist {
  display: grid;
  gap: 0.9rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.lessons-checklist__item {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  border-radius: 1.15rem;
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(104, 176, 171, 0.18);
  padding: 0.95rem 1rem;
}

.lessons-checklist__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 9999px;
  background: rgba(104, 176, 171, 0.16);
  color: var(--site-accent);
  flex: 0 0 auto;
}

.lessons-checklist__text {
  color: var(--site-text);
  font-weight: 600;
  line-height: 1.55;
}

.lessons-location__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 9999px;
  background: rgba(104, 176, 171, 0.16);
  color: var(--site-accent);
  margin-bottom: 1rem;
}

.lessons-map-card {
  overflow: hidden;
  background: rgba(255, 255, 255, 0.94);
}

.lessons-map-frame {
  min-height: 20rem;
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
  gap: 0.4rem;
  padding: 1rem 1.15rem 1.15rem;
}

.lessons-map-label {
  color: #34538b;
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.lessons-map-address {
  color: var(--site-text);
  font-weight: 700;
}

.availability-mobile {
  display: grid;
  gap: 0.95rem;
  margin-top: 1.35rem;
}

.availability-mobile__card {
  border-radius: 1.25rem;
  background: rgba(255, 255, 255, 0.84);
  border: 1px solid rgba(15, 23, 42, 0.06);
  padding: 1rem;
}

.availability-mobile__day {
  margin: 0;
  color: var(--site-text);
  font-size: 1.08rem;
}

.availability-mobile__slots {
  display: grid;
  gap: 0.85rem;
  margin: 0.9rem 0 0;
}

.availability-mobile__slot {
  display: grid;
  gap: 0.18rem;
}

.availability-mobile__slot dt {
  color: #34538b;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.availability-mobile__slot dd {
  margin: 0;
  color: var(--site-text);
  font-weight: 700;
}

.availability-table-wrap {
  display: none;
  margin-top: 1.4rem;
  overflow-x: auto;
}

.availability-table {
  width: 100%;
  min-width: 52rem;
  border-collapse: separate;
  border-spacing: 0.6rem;
  color: var(--site-text);
  table-layout: fixed;
}

.availability-table th,
.availability-table td {
  text-align: center;
  vertical-align: middle;
}

.availability-table thead th {
  color: #334155;
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  padding-bottom: 0.2rem;
  text-transform: uppercase;
}

.availability-table tbody th,
.availability-table tbody td {
  border-radius: 1rem;
  padding: 1rem 0.85rem;
}

.availability-table tbody th {
  background: rgba(17, 28, 69, 0.08);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.availability-table tbody td {
  background: rgba(104, 176, 171, 0.14);
  font-size: 0.95rem;
  font-weight: 700;
  line-height: 1.45;
}

@media (min-width: 860px) {
  .lessons-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .lessons-info__header {
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: end;
  }

  .lessons-panel__grid--prep,
  .lessons-panel__grid--location {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: start;
  }
}

@media (min-width: 768px) {
  .availability-mobile {
    display: none;
  }

  .availability-table-wrap {
    display: block;
  }
}

@media (max-width: 859px) {
  .lesson-card__point {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 639px) {
  .lesson-card__visual,
  .lesson-card__image {
    min-height: 14rem;
  }

  .lessons-map-frame {
    min-height: 17rem;
  }
}
</style>
