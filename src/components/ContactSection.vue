<template>
  <section id="contact" class="site-section contact-section">
    <div class="site-container">
      <div class="site-section-header" v-reveal="{ effect: 'fade-up' }">
        <span class="site-section-label">Contact</span>
        <h2 class="site-section-title">Stuur Rodney Eelst een bericht.</h2>
        <p class="site-section-copy">
          Laat weten waar je aan wilt werken, wanneer je graag speelt of welke
          lesvorm je aanspreekt. Rodney denkt graag met je mee.
        </p>
      </div>

      <div class="contact-shell site-panel">
        <aside class="contact-aside" v-reveal="{ effect: 'slide-right' }">
          <p class="contact-aside__eyebrow">Zin om te spelen?</p>
          <h3 class="contact-aside__title">
            Vertel kort wat jij graag wilt verbeteren.
          </h3>
          <p class="contact-aside__copy">
            Een kort berichtje is genoeg om samen te kijken welke lesvorm, dag
            en sfeer het best bij jou passen.
          </p>

          <ul class="contact-aside__list">
            <li
              v-for="item in promptItems"
              :key="item.title"
              class="contact-aside__item"
            >
              <span class="contact-aside__item-icon">
                <i :class="item.icon"></i>
              </span>
              <div>
                <strong class="contact-aside__item-title">{{ item.title }}</strong>
                <p class="contact-aside__item-copy">{{ item.copy }}</p>
              </div>
            </li>
          </ul>
        </aside>

        <form
          class="contact-form"
          v-reveal="{ effect: 'fade-up', delay: 120 }"
          @submit.prevent="handleSubmit"
        >
          <div class="contact-honeypot" aria-hidden="true">
            <label for="contact-website">Website</label>
            <input
              id="contact-website"
              v-model="form.website"
              type="text"
              name="website"
              tabindex="-1"
              autocomplete="off"
            />
          </div>

          <div class="contact-field">
            <label class="contact-label" for="contact-name">Naam</label>
            <input
              id="contact-name"
              v-model="form.name"
              type="text"
              name="name"
              class="site-input"
              placeholder="Je naam"
            />
          </div>

          <div class="contact-grid">
            <div class="contact-field">
              <label class="contact-label" for="contact-email">E-mail</label>
              <input
                id="contact-email"
                v-model="form.email"
                type="email"
                name="email"
                class="site-input"
                placeholder="jij@email.nl"
              />
            </div>

            <div class="contact-field">
              <label class="contact-label" for="contact-phone">Telefoon</label>
              <input
                id="contact-phone"
                v-model="form.phone"
                type="text"
                name="phone"
                class="site-input"
                placeholder="Optioneel"
              />
            </div>
          </div>

          <div class="contact-field">
            <label class="contact-label" for="contact-message">Bericht</label>
            <textarea
              id="contact-message"
              v-model="form.message"
              name="message"
              class="site-textarea"
              placeholder="Vertel kort wat je wilt oefenen of wanneer je graag wilt spelen."
            ></textarea>
          </div>

          <div class="contact-actions">
            <button class="site-button contact-submit" type="submit">
              Verstuur bericht
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
const promptItems = [
  {
    copy: "Noem kort waar je spel nu tegenaan loopt of wat je juist wilt versnellen.",
    icon: "fas fa-crosshairs",
    title: "Doel van je les",
  },
  {
    copy: "Geef aan of je liever alleen, met z'n tweeën of in een kleine groep traint.",
    icon: "fas fa-users",
    title: "Lesvorm",
  },
  {
    copy: "Laat weten op welke dagen of dagdelen je meestal ruimte hebt.",
    icon: "fas fa-calendar-alt",
    title: "Beschikbaarheid",
  },
];

export default {
  data() {
    return {
      form: {
        email: "",
        message: "",
        name: "",
        phone: "",
        website: "",
      },
      promptItems,
    };
  },
  methods: {
    handleSubmit() {
      if (this.form.website.trim()) {
        return;
      }
    },
  },
};
</script>

<style scoped>
.contact-section {
  background:
    radial-gradient(circle at 12% 8%, rgba(104, 176, 171, 0.12), transparent 26%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.2), rgba(238, 243, 248, 0.58));
}

.contact-shell {
  display: grid;
  gap: 1.15rem;
  overflow: hidden;
  padding: 1rem;
}

.contact-aside {
  border-radius: 1.35rem;
  background:
    linear-gradient(145deg, rgba(17, 28, 69, 0.96), rgba(50, 83, 129, 0.94)),
    #111c45;
  color: #ffffff;
  padding: clamp(1.4rem, 4vw, 2rem);
}

.contact-aside__eyebrow {
  margin: 0;
  color: rgba(223, 255, 79, 0.88);
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.contact-aside__title {
  margin: 0.85rem 0 0;
  font-size: clamp(1.7rem, 3vw, 2.35rem);
  line-height: 1.08;
}

.contact-aside__copy {
  margin: 1rem 0 0;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.8;
}

.contact-aside__list {
  display: grid;
  gap: 0.85rem;
  margin: 1.4rem 0 0;
  padding: 0;
  list-style: none;
}

.contact-aside__item {
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.08);
  padding: 0.9rem 0.95rem;
}

.contact-aside__item-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.45rem;
  height: 2.45rem;
  border-radius: 0.9rem;
  background: rgba(223, 255, 79, 0.16);
  color: var(--site-button);
  flex: 0 0 auto;
}

.contact-aside__item-title {
  display: block;
  font-size: 0.96rem;
}

.contact-aside__item-copy {
  margin: 0.28rem 0 0;
  color: rgba(255, 255, 255, 0.76);
  font-size: 0.9rem;
  line-height: 1.55;
}

.contact-form {
  display: grid;
  gap: 1.2rem;
  padding: clamp(0.5rem, 2vw, 1rem);
}

.contact-grid {
  display: grid;
  gap: 1rem;
}

.contact-field {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.contact-label {
  color: #334155;
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.contact-actions {
  display: flex;
  justify-content: flex-start;
  padding-top: 0.2rem;
}

.contact-submit,
.contact-submit:hover {
  box-shadow: none;
}

.contact-honeypot {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (min-width: 920px) {
  .contact-shell {
    grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
    gap: 1.3rem;
    padding: 1.1rem;
  }
}

@media (min-width: 768px) {
  .contact-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
