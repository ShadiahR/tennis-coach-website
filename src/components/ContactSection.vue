<template>
  <section id="contact" class="site-section site-section--muted contact-section">
    <div class="site-container">
      <div class="site-section-header">
        <span class="site-section-label">Contact</span>
        <h2 class="site-section-title">Stuur Rodney een bericht.</h2>
        <p class="site-section-copy">
          Laat weten waar je aan wilt werken, wanneer je graag speelt of welke
          lesvorm je aanspreekt. Rodney denkt graag met je mee.
        </p>
      </div>

      <div class="contact-wrap">
        <div class="contact-shell">
          <div class="contact-shell__intro">
            <p class="contact-shell__eyebrow">Zin om te spelen?</p>
            <h3 class="contact-shell__title">
              Vertel kort wat jij graag wilt verbeteren
            </h3>
            <p class="contact-shell__copy">
              Een kort berichtje is genoeg om samen te kijken welke lesvorm,
              dag en sfeer het best bij jou passen.
            </p>
          </div>

          <form class="contact-form" @submit.prevent="handleSubmit">
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
    </div>
  </section>
</template>

<script>
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
  background: linear-gradient(
    180deg,
    rgba(247, 249, 251, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
}

.contact-wrap {
  display: flex;
  justify-content: center;
}

.contact-shell {
  width: 100%;
  max-width: 43rem;
  border-radius: 1.75rem;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(15, 23, 42, 0.06);
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.07);
  padding: clamp(2rem, 5vw, 3rem);
}

.contact-shell__intro {
  max-width: 34rem;
  margin: 0 auto 2rem;
  text-align: center;
}

.contact-shell__eyebrow {
  margin: 0;
  color: var(--site-accent);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.contact-shell__title {
  margin: 0.85rem 0 0;
  color: #0f172a;
  font-size: clamp(1.7rem, 4vw, 2.2rem);
  font-weight: 700;
  line-height: 1.2;
}

.contact-shell__copy {
  margin: 1rem 0 0;
  color: #475569;
  line-height: 1.8;
}

.contact-form {
  display: grid;
  gap: 1.75rem;
}

.contact-grid {
  display: grid;
  gap: 1.5rem;
}

.contact-field {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.contact-label {
  color: #334155;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.contact-actions {
  display: flex;
  justify-content: center;
  padding-top: 0.35rem;
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

@media (min-width: 768px) {
  .contact-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
