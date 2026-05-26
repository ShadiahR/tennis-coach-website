<template>
  <section id="contact" class="site-section site-section--muted">
    <div class="site-container">
      <div class="site-section-header">
        <span class="site-section-label">Contact</span>
        <h2 class="site-section-title">Stuur Rodney een bericht.</h2>
        <p class="site-section-copy">
          Laat weten waar je aan wilt werken, wanneer je graag speelt of welke
          lesvorm je aanspreekt. Rodney denkt graag met je mee.
        </p>
      </div>

      <div class="flex justify-center">
        <div class="w-full lg:w-8/12 px-4">
          <div class="site-panel contact-card">
            <div class="rounded-t mb-0 px-6 py-8 md:px-10">
              <div class="text-center mb-3">
                <h6 class="contact-eyebrow">Zin om te spelen?</h6>
              </div>
              <h3 class="contact-title">Vertel kort wat jij wilt verbeteren</h3>
              <p class="contact-copy">
                Van eerste lessen tot wedstrijdvoorbereiding: een kort berichtje
                is genoeg om samen te kijken wat het beste past.
              </p>
            </div>
            <div class="flex-auto px-4 lg:px-10 py-10 pt-0 md:px-10">
              <form class="contact-form" @submit.prevent>
                <div class="contact-field">
                  <label class="contact-label" for="contact-name">Naam</label>
                  <input
                    id="contact-name"
                    type="text"
                    class="site-input"
                    placeholder="Je naam"
                  />
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div class="contact-field">
                    <label class="contact-label" for="contact-email">
                      E-mail
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      class="site-input"
                      placeholder="jij@email.nl"
                    />
                  </div>
                  <div class="contact-field">
                    <label class="contact-label" for="contact-phone">
                      Telefoon
                    </label>
                    <input
                      id="contact-phone"
                      type="text"
                      class="site-input"
                      placeholder="Optioneel"
                    />
                  </div>
                </div>

                <div class="contact-field">
                  <label class="contact-label" for="contact-message">
                    Bericht
                  </label>
                  <textarea
                    id="contact-message"
                    class="site-textarea"
                    placeholder="Vertel kort wat je wilt oefenen of wanneer je graag wilt spelen."
                  ></textarea>
                </div>

                <div class="text-center pt-4">
                  <button
                    class="site-button contact-submit w-full md:w-auto"
                    type="submit"
                  >
                    Verstuur bericht
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-card {
  padding-bottom: 0.5rem;
}

.contact-form {
  display: grid;
  gap: 2rem;
}

.contact-eyebrow {
  color: var(--site-accent);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  margin: 0;
  text-transform: uppercase;
}

.contact-title {
  color: #0f172a;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
  text-align: center;
}

.contact-copy {
  color: #475569;
  line-height: 1.8;
  margin: 1rem auto 0;
  max-width: 34rem;
  text-align: center;
}

.contact-field {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.contact-label {
  display: block;
  color: #334155;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.contact-submit,
.contact-submit:hover {
  box-shadow: none;
}
</style>
