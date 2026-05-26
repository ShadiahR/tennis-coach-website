<template>
  <section id="pricing" class="site-section">
    <div class="site-container">
      <div class="site-section-header">
        <span class="site-section-label">Pricing</span>
        <h2 class="site-section-title">Table-card pricing placeholder.</h2>
        <p class="site-section-copy">
          The original demo table is replaced with a cleaner placeholder for
          lesson formats and pricing rows you can update later.
        </p>
      </div>

      <div class="pricing-card site-card overflow-hidden">
        <div class="pricing-card__header">
          <h3 class="pricing-card__title">Session Overview</h3>
          <p class="pricing-card__copy">
            Replace these placeholder entries with your real lesson packages,
            timing, and rates.
          </p>
        </div>
        <div class="pricing-table-wrap">
          <table class="pricing-table">
            <thead>
              <tr>
                <th>Session</th>
                <th>Format</th>
                <th>Rate</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Private Lesson</td>
                <td>60 minutes</td>
                <td>Placeholder</td>
                <td>Use for one-to-one coaching details.</td>
              </tr>
              <tr>
                <td>Semi-Private</td>
                <td>60 minutes</td>
                <td>Placeholder</td>
                <td>Use for paired sessions or shared drills.</td>
              </tr>
              <tr>
                <td>Junior Program</td>
                <td>45 minutes</td>
                <td>Placeholder</td>
                <td>Use for youth development or starter blocks.</td>
              </tr>
              <tr>
                <td>Match Prep</td>
                <td>90 minutes</td>
                <td>Placeholder</td>
                <td>Use for tactical review and competition prep.</td>
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

.pricing-card__copy {
  margin: 0.75rem 0 0;
  max-width: 36rem;
  line-height: 1.75;
  opacity: 0.9;
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
