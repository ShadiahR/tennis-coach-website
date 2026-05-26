<template>
  <section id="pricing" class="site-section">
    <div class="site-container">
      <div class="site-section-header">
        <span class="site-section-label">Tarieven</span>
        <h2 class="site-section-title">Duidelijke opties voor elk type speler.</h2>
        <p class="site-section-copy">
          De opzet blijft overzichtelijk, zodat je snel ziet welke lessen er
          zijn en welke vorm het beste bij jou past.
        </p>
      </div>

      <div class="pricing-card site-card overflow-hidden">
        <div class="pricing-card__header">
          <h3 class="pricing-card__title">Lesoverzicht</h3>
        </div>
        <div class="pricing-table-wrap">
          <table class="pricing-table">
            <thead>
              <tr>
                <th>Les</th>
                <th>Duur</th>
                <th>Tarief</th>
                <th>Notitie</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Priveles</td>
                <td>60 minuten</td>
                <td>Op aanvraag</td>
                <td>Volledige aandacht en training op jouw tempo.</td>
              </tr>
              <tr>
                <td>Duoles (2 personen)</td>
                <td>75 minuten</td>
                <td>Op aanvraag</td>
                <td>Samen trainen en toch veel persoonlijke feedback.</td>
              </tr>
              <tr>
                <td>Groepsles (3+ personen)</td>
                <td>75 minuten</td>
                <td>Op aanvraag</td>
                <td>Energieke lessen met veel beweging en plezier.</td>
              </tr>
              <tr>
                <td>Kids (tot 12 jaar)</td>
                <td>45 minuten</td>
                <td>Op aanvraag</td>
                <td>Spelenderwijs sterker worden op de baan.</td>
              </tr>
              <tr>
                <td>Wedstrijdvoorbereiding</td>
                <td>60 minuten</td>
                <td>Op aanvraag</td>
                <td>Gericht trainen voor focus, ritme en slim spel.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pricing-card__header {
  padding: 2rem;
  background: rgba(104, 176, 171, 0.28);
}

.pricing-card__title {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
}

.pricing-table-wrap {
  overflow-x: auto;
  background: #ffffff;
}

.pricing-table {
  width: 100%;
  border-collapse: collapse;
  color: #0f172a;
}

.pricing-table th,
.pricing-table td {
  padding: 1rem 1.25rem;
  text-align: left;
}

.pricing-table thead th {
  background: rgba(104, 176, 171, 0.12);
  color: var(--site-header-footer);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.pricing-table tbody tr + tr td {
  border-top: 1px solid rgba(15, 23, 42, 0.08);
}

.pricing-table tbody tr:hover {
  background: rgba(104, 176, 171, 0.06);
}

@media (max-width: 767px) {
  .pricing-table th,
  .pricing-table td {
    min-width: 11rem;
  }
}
</style>
