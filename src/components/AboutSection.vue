<template>
  <section id="about" class="about-section">
    <div class="about-banner">
      <div class="about-banner__overlay"></div>
      <div class="site-container relative h-full flex items-end pb-16">
        <div class="about-banner__copy px-4">
          <span class="site-section-label">About Me</span>
          <h2 class="about-banner__title">
            The profile template now acts as the coach introduction section.
          </h2>
          <p class="about-banner__text">
            Keep this area for your bio, certifications, location, and coaching
            background while the final content is still being prepared.
          </p>
        </div>
      </div>
    </div>

    <div class="site-container px-4">
      <div class="site-panel about-card">
        <div class="px-6 lg:px-10">
          <div class="flex flex-wrap justify-center">
            <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
              <div class="relative">
                <img alt="Coach placeholder" :src="team2" class="about-avatar" />
              </div>
            </div>
            <div
              class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center"
            >
              <div class="py-6 px-3 mt-24 sm:mt-8">
                <a href="#contact" class="site-button">Contact Coach</a>
              </div>
            </div>
            <div class="w-full lg:w-4/12 px-4 lg:order-1">
              <div class="flex justify-center py-4 lg:pt-8 pt-8">
                <div class="mr-4 p-3 text-center">
                  <span class="about-stat-value">12</span>
                  <span class="about-stat-label">Years Coaching</span>
                </div>
                <div class="mr-4 p-3 text-center">
                  <span class="about-stat-value">8</span>
                  <span class="about-stat-label">Programs</span>
                </div>
                <div class="p-3 text-center">
                  <span class="about-stat-value">250+</span>
                  <span class="about-stat-label">Players Coached</span>
                </div>
              </div>
            </div>
          </div>

          <div class="text-center mt-12">
            <h3 class="about-name">Coach Name</h3>
            <div class="about-meta">
              <i class="fas fa-map-marker-alt mr-2"></i>
              Based in your city
            </div>
            <div class="about-detail mt-10">
              <i class="fas fa-briefcase mr-2"></i>
              Certified tennis coach
            </div>
            <div class="about-detail">
              <i class="fas fa-university mr-2"></i>
              Private, junior, and adult sessions
            </div>
          </div>

          <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
            <div class="flex flex-wrap justify-center">
              <div class="w-full lg:w-9/12 px-4">
                <p class="about-bio">
                  Use this placeholder biography to introduce the coach, explain
                  the training philosophy, and outline the kind of players or
                  goals the lessons are designed for.
                </p>
                <a href="#contact" class="about-link">Start the conversation</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import team2 from "@/assets/img/team-2-800x800.jpg";

export default {
  data() {
    return {
      team2,
    };
  },
};
</script>

<style scoped>
.about-section {
  background: var(--site-muted);
  padding-bottom: 5rem;
}

.about-banner {
  position: relative;
  height: 430px;
  background-image: url("https://images.unsplash.com/photo-1499336315816-097655dcfbda?auto=format&fit=crop&w=1600&q=80");
  background-position: center;
  background-size: cover;
}

.about-banner__overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
}

.about-banner__copy {
  position: relative;
  z-index: 1;
  max-width: 38rem;
  color: #ffffff;
}

.about-banner__title {
  margin: 0;
  font-size: clamp(2.2rem, 4vw, 3.5rem);
  font-weight: 700;
  line-height: 1.1;
}

.about-banner__text {
  margin-top: 1rem;
  color: rgba(255, 255, 255, 0.84);
  line-height: 1.8;
}

.about-card {
  margin-top: -6rem;
  position: relative;
  z-index: 2;
}

.about-avatar {
  width: 180px;
  height: 180px;
  margin-top: -3.5rem;
  object-fit: cover;
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.18);
  border-radius: 9999px;
}

.about-stat-value {
  display: block;
  color: var(--site-header-footer);
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

.about-stat-label {
  color: #94a3b8;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.about-name {
  margin: 0;
  color: #1e293b;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
}

.about-meta {
  margin-top: 0.5rem;
  color: #94a3b8;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.about-detail {
  color: #475569;
  margin-bottom: 0.5rem;
}

.about-bio {
  color: #334155;
  font-size: 1.05rem;
  line-height: 1.9;
}

.about-link {
  display: inline-flex;
  margin-top: 1rem;
  color: var(--site-accent);
  font-weight: 700;
}
</style>
