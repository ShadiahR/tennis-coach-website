<template>
  <section id="lessons" class="site-section site-section--muted">
    <div class="site-container">
      <div class="site-section-header">
        <span class="site-section-label">Lessen</span>
        <h2 class="site-section-title">Leren, lachen en lekker spelen.</h2>
        <p class="site-section-copy">
          Rodney houdt de sfeer luchtig en gezellig, maar werkt ondertussen
          doelgericht aan je techniek, timing en zelfvertrouwen op de baan.
        </p>
      </div>

      <div class="flex flex-wrap">
        <div
          v-for="lesson in lessonTypes"
          :key="lesson.title"
          class="w-full md:w-6/12 xl:w-4/12 px-4 mb-8"
        >
          <div class="site-card h-full p-8">
            <div class="lessons-icon">
              <i :class="lesson.icon"></i>
            </div>
            <h3 class="lessons-card-title">{{ lesson.title }}</h3>
            <p class="lessons-card-copy">
              {{ lesson.copy }}
            </p>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap items-stretch mt-10 md:mt-16">
        <div class="w-full md:w-6/12 px-4 mb-12 md:mb-0">
          <div class="lessons-copy-block">
            <h3 class="lessons-block-title">Goed voorbereid de baan op</h3>
            <p class="lessons-block-copy">
              Kom in sportkleding waarin je vrij beweegt, neem je racket en een
              waterfles mee en breng vooral een goede dosis energie mee.
              Twijfel je over je racket? Rodney kijkt graag met je mee.
            </p>
            <a href="#pricing" class="site-button lessons-link">
              Bekijk de lesopties
            </a>
          </div>
        </div>

        <div class="w-full md:w-6/12 px-4 md:pl-6">
          <div class="site-panel lessons-checklist">
            <h4 class="lessons-checklist-title">Handige checklist</h4>
            <ul class="list-none m-0">
              <li class="lessons-checklist-item">
                <span class="lessons-list-icon"><i class="fas fa-shirt"></i></span>
                <span class="lessons-list-copy">Draag sportkleding die lekker zit.</span>
              </li>
              <li class="lessons-checklist-item">
                <span class="lessons-list-icon">
                  <i class="fas fa-table-tennis"></i>
                </span>
                <span class="lessons-list-copy">Neem je tennisracket mee naar de baan.</span>
              </li>
              <li class="lessons-checklist-item">
                <span class="lessons-list-icon"><i class="fas fa-tint"></i></span>
                <span class="lessons-list-copy">Een waterfles is altijd een slim idee.</span>
              </li>
              <li class="lessons-checklist-item">
                <span class="lessons-list-icon"><i class="fas fa-smile"></i></span>
                <span class="lessons-list-copy">Kom met energie, plezier en een open mindset.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="lessons-photo-wrap">
        <img
          :src="catchingImage"
          alt="Tennisbal wordt gevangen"
          class="lessons-photo"
        />
      </div>

      <div class="flex flex-wrap items-start mt-16 md:mt-20">
        <div class="w-full lg:w-6/12 px-4 mb-12 lg:mb-0">
          <div class="lessons-copy-block lessons-copy-block--location">
            <div class="lessons-location-heading">
              
              <h3 class="lessons-block-title">Spelen in het groen van Rotterdam</h3>
            </div>
            <p class="lessons-block-copy">
              De lessen vinden plaats op een vrije tennisbaan in Rotterdam, in
              een groen park waar de sfeer open en ontspannen is. Je staat dus
              niet op een afgesloten club, maar juist op een plek waar beweging
              en gezelligheid samenkomen.
            </p>
            <p class="lessons-block-copy">
              Rodney is super sociaal, kent veel mensen die regelmatig op de
              baan langskomen en zorgt ervoor dat je je snel welkom voelt. Dat
              maakt elke les niet alleen leerzaam, maar ook gewoon leuk.
            </p>
          </div>
        </div>

        <div class="w-full lg:w-6/12 px-4">
          <div class="site-panel lessons-map-card">
            <div class="lessons-map-frame">
              <iframe
                title="Kaart van Rotterdam"
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
      </div>

      <div class="flex flex-wrap mt-12 md:mt-14">
        <div class="w-full px-4">
          <div class="site-panel availability-card">
            <div class="availability-card__head">
              <h4 class="availability-card__title">Beschikbare momenten</h4>
              <p class="availability-card__copy">
                Rodney is beschikbaar binnen deze blokken. Elke les duurt
                <strong>1 uur</strong>, dus je boekt altijd een los uur binnen
                de aangegeven tijden.
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
                  <tr>
                    <th>Ochtend</th>
                    <td v-for="day in scheduleDays" :key="`${day.name}-morning`">
                      {{ day.morning }}
                    </td>
                  </tr>
                  <tr>
                    <th>Avond</th>
                    <td v-for="day in scheduleDays" :key="`${day.name}-evening`">
                      {{ day.evening }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import catchingImage from "@/assets/img/catching-tennis-ball.jpg";

const lessonTypes = [
  {
    icon: "fas fa-user",
    title: "Privelessen",
    copy:
      "Persoonlijke aandacht voor techniek, voetenwerk en zelfvertrouwen, helemaal afgestemd op jouw tempo.",
  },
  {
    icon: "fas fa-user-friends",
    title: "Groepslessen",
    copy:
      "Samen trainen met energie, veel rally's en een gezellige sfeer waarin iedereen beter wordt.",
  },
  {
    icon: "fas fa-trophy",
    title: "Wedstrijdvoorbereiding",
    copy:
      "Slim werken aan focus, keuzes onder druk en het gevoel dat je klaar bent voor je volgende wedstrijd.",
  },
];

const scheduleDays = [
  { name: "Maandag", morning: "09:00 - 12:00", evening: "14:00 - 21:00" },
  { name: "Dinsdag", morning: "09:00 - 12:00", evening: "14:00 - 21:00" },
  { name: "Woensdag", morning: "09:00 - 12:00", evening: "14:00 - 21:00" },
  { name: "Donderdag", morning: "09:00 - 12:00", evening: "14:00 - 21:00" },
  { name: "Vrijdag", morning: "09:00 - 12:00", evening: "14:00 - 21:00" },
  { name: "Zaterdag", morning: "09:00 - 12:00", evening: "14:00 - 21:00" },
];

export default {
  data() {
    return {
      catchingImage,
      lessonTypes,
      scheduleDays,
    };
  },
};
</script>

<style scoped>
.lessons-icon,
.lessons-badge,
.lessons-list-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
}

.lessons-icon {
  width: 3rem;
  height: 3rem;
  background: var(--site-button);
  color: #000000;
  font-size: 1rem;
}

.lessons-card-title {
  margin-top: 1.5rem;
  font-size: 1.4rem;
  font-weight: 700;
}

.lessons-card-copy {
  margin-top: 1rem;
  line-height: 1.8;
  opacity: 0.9;
}

.lessons-copy-block {
  color: #0f172a;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 32rem;
  min-height: 100%;
  margin: 0 auto;
  padding-top: 2.75rem;
}

.lessons-badge {
  width: 4rem;
  height: 4rem;
  background: rgba(104, 176, 171, 0.16);
  color: var(--site-accent);
}

.lessons-copy-block--location {
  align-items: flex-start;
  text-align: left;
  max-width: none;
  padding-top: 0;
}

.lessons-block-title {
  margin-top: 0;
  font-size: clamp(2.35rem, 4vw, 3rem);
  font-weight: 700;
  line-height: 1.2;
}

.lessons-block-copy {
  margin-top: 1rem;
  color: #475569;
  line-height: 1.85;
}

.lessons-location-heading {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  text-align: left;
}

.lessons-location-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 9999px;
  background: rgba(104, 176, 171, 0.16);
  color: var(--site-accent);
  flex: 0 0 auto;
  font-size: 1rem;
}

.lessons-link {
  margin-top: auto;
}

.lessons-checklist {
  height: 100%;
  padding: 2rem;
}

.lessons-checklist-title {
  color: #0f172a;
  font-size: 1.35rem;
  font-weight: 700;
  margin: 0 0 1.5rem;
}

.lessons-checklist-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.85rem 0;
}

.lessons-photo-wrap {
  margin: 4rem 1rem 0;
}

.lessons-photo {
  width: 100%;
  height: 22rem;
  object-fit: cover;
  border-radius: 1.5rem;
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.14);
}

.lessons-list-icon {
  flex: 0 0 auto;
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(104, 176, 171, 0.16);
  color: var(--site-accent);
  font-size: 0.9rem;
}

.lessons-list-copy {
  color: #475569;
  font-weight: 600;
  line-height: 1.6;
}

.lessons-map-card {
  overflow: hidden;
}

.lessons-map-frame {
  height: 24rem;
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
  align-items: center;
  gap: 0.45rem;
  padding: 1.1rem 1.4rem 1.35rem;
  color: #334155;
  font-size: 1rem;
}

.lessons-map-label {
  font-weight: 700;
}

.lessons-map-address {
  color: #0f172a;
  font-weight: 600;
}

.availability-card {
  width: 100%;
  overflow: hidden;
}

.availability-card__head {
  padding: 2rem;
  background: linear-gradient(
    135deg,
    rgba(104, 176, 171, 0.16),
    rgba(223, 255, 79, 0.24)
  );
}

.availability-card__title {
  margin: 0;
  color: #0f172a;
  font-size: 1.5rem;
  font-weight: 700;
}

.availability-card__copy {
  margin: 0.85rem 0 0;
  color: #334155;
  line-height: 1.75;
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
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  padding-bottom: 0.25rem;
  text-transform: uppercase;
}

.availability-table tbody th,
.availability-table tbody td {
  border-radius: 1rem;
  padding: 1.15rem 1rem;
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
}

@media (min-width: 768px) {
  .lessons-photo-wrap {
    margin-right: 1.5rem;
    margin-left: 1.5rem;
  }
}

@media (max-width: 767px) {
  .lessons-photo-wrap {
    margin-top: 3rem;
    margin-right: 0;
    margin-left: 0;
  }

  .lessons-photo {
    height: 16rem;
  }

  .lessons-location-heading {
    align-items: flex-start;
    gap: 0.85rem;
  }

  .lessons-location-icon {
    width: 3rem;
    height: 3rem;
  }

  .lessons-map-frame {
    height: 18rem;
  }

  .availability-table-wrap {
    padding: 1rem;
  }

  .availability-table {
    min-width: 52rem;
  }
}
</style>
