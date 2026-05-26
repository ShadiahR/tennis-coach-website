<template>
  <section id="contact" class="site-section site-section--muted">
    <div class="site-container">
      <div class="site-section-header">
        <span class="site-section-label">Contact</span>
        <h2 class="site-section-title">
          Register-card layout converted into a contact form placeholder.
        </h2>
        <p class="site-section-copy">
          This keeps the form section in place for future wiring while removing
          the original auth and social-signup framing.
        </p>
      </div>

      <div class="flex justify-center">
        <div class="w-full lg:w-8/12 px-4">
          <div class="site-panel contact-card">
            <div class="rounded-t mb-0 px-6 py-6">
              <div class="text-center mb-3">
                <h6 class="contact-eyebrow">Send a Message</h6>
              </div>
              <h3 class="contact-title">Let&apos;s talk about your training goals</h3>
              <p class="contact-copy">
                Use this placeholder form to collect inquiries until the final
                content and submission flow are defined.
              </p>
            </div>
            <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form class="space-y-6" @submit.prevent>
                <div class="relative w-full">
                  <label class="contact-label" for="contact-name">Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    class="site-input"
                    placeholder="Your name"
                  />
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="relative w-full">
                    <label class="contact-label" for="contact-email">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      class="site-input"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div class="relative w-full">
                    <label class="contact-label" for="contact-phone">
                      Phone
                    </label>
                    <input
                      id="contact-phone"
                      type="text"
                      class="site-input"
                      placeholder="Optional"
                    />
                  </div>
                </div>

                <div class="relative w-full">
                  <label class="contact-label" for="contact-message">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    class="site-textarea"
                    placeholder="Tell us what kind of coaching you are looking for."
                  ></textarea>
                </div>

                <div class="text-center pt-2">
                  <button class="site-button w-full md:w-auto" type="submit">
                    Send Inquiry
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

.contact-label {
  display: block;
  color: #334155;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
}
</style>
