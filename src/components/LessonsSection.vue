<template>
  <section id="lessons" class="site-section site-section--muted">
    <div class="site-container">
      <div class="site-section-header">
        <span class="site-section-label">Lessons</span>
        <h2 class="site-section-title">
          Landing-page blocks repurposed into the lesson overview.
        </h2>
        <p class="site-section-copy">
          This section keeps the original landing structure as a placeholder for
          your coaching formats, training focus, and lesson experience.
        </p>
      </div>

      <div class="flex flex-wrap">
        <div class="w-full md:w-4/12 px-4 mb-8">
          <div class="site-card h-full p-8">
            <div class="lessons-icon">
              <i class="fas fa-award"></i>
            </div>
            <h3 class="lessons-card-title">Private Lessons</h3>
            <p class="lessons-card-copy">
              Use this card as the placeholder for one-to-one coaching details,
              lesson goals, and who the session is best for.
            </p>
          </div>
        </div>
        <div class="w-full md:w-4/12 px-4 mb-8">
          <div class="site-card h-full p-8">
            <div class="lessons-icon">
              <i class="fas fa-user-friends"></i>
            </div>
            <h3 class="lessons-card-title">Group Clinics</h3>
            <p class="lessons-card-copy">
              Keep this slot for small-group training, shared drills, and
              session structure until the final copy is ready.
            </p>
          </div>
        </div>
        <div class="w-full md:w-4/12 px-4 mb-8">
          <div class="site-card h-full p-8">
            <div class="lessons-icon">
              <i class="fas fa-stopwatch"></i>
            </div>
            <h3 class="lessons-card-title">Match Preparation</h3>
            <p class="lessons-card-copy">
              Use the final card for competitive prep, tactical review, and any
              short-format training options you plan to offer.
            </p>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap items-center mt-20">
        <div class="w-full lg:w-5/12 px-4 mb-12 lg:mb-0">
          <div class="lessons-copy-block">
            <div class="lessons-badge">
              <i class="fas fa-user-friends text-xl"></i>
            </div>
            <h3 class="lessons-block-title">Lesson Structure</h3>
            <p class="lessons-block-copy">
              The original landing copy block now acts as the placeholder for
              how lessons are organized, how goals are set, and how sessions
              progress over time.
            </p>
            <p class="lessons-block-copy">
              Keep this space for a short explanation of your coaching style,
              player feedback loop, and how sessions adapt to skill level.
            </p>
            <a href="#pricing" class="lessons-link">Review pricing placeholders</a>
          </div>
        </div>

        <div class="w-full lg:w-6/12 px-4 ml-auto">
          <div class="site-card overflow-hidden">
            <img
              alt="Lesson placeholder"
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1051&q=80"
              class="w-full align-middle"
            />
            <div class="p-8">
              <h4 class="text-2xl font-bold">On-court Focus Areas</h4>
              <p class="mt-3 text-base leading-relaxed text-white opacity-90">
                This visual block stays in place for lesson highlights, player
                priorities, or a short summary of what each training session
                covers.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap items-center mt-24">
        <div class="w-full lg:w-5/12 px-4 mb-12 lg:mb-0">
          <img
            alt="Lesson placeholder"
            class="lessons-image"
            src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?auto=format&fit=crop&w=634&q=80"
          />
        </div>
        <div class="w-full lg:w-6/12 px-4 ml-auto">
          <div class="lessons-copy-block">
            <div class="lessons-badge">
              <i class="fas fa-rocket text-xl"></i>
            </div>
            <h3 class="lessons-block-title">What Players Can Expect</h3>
            <p class="lessons-block-copy">
              This second landing block becomes the placeholder for your lesson
              process, session benefits, and the specific areas players will
              work on with you.
            </p>
            <ul class="list-none mt-6">
              <li class="py-2 flex items-center">
                <span class="lessons-list-icon">
                  <i class="fas fa-fingerprint"></i>
                </span>
                <span class="lessons-list-copy">
                  Technical drills and consistent repetition
                </span>
              </li>
              <li class="py-2 flex items-center">
                <span class="lessons-list-icon">
                  <i class="fab fa-html5"></i>
                </span>
                <span class="lessons-list-copy">
                  Point construction and match-play awareness
                </span>
              </li>
              <li class="py-2 flex items-center">
                <span class="lessons-list-icon">
                  <i class="far fa-paper-plane"></i>
                </span>
                <span class="lessons-list-copy">
                  Footwork, movement patterns, and recovery habits
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

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
  opacity: 0.88;
}

.lessons-copy-block {
  color: #0f172a;
}

.lessons-badge {
  width: 4rem;
  height: 4rem;
  background: rgba(104, 176, 171, 0.16);
  color: var(--site-accent);
}

.lessons-block-title {
  margin-top: 1.5rem;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.2;
}

.lessons-block-copy {
  margin-top: 1rem;
  color: #475569;
  line-height: 1.85;
}

.lessons-link {
  display: inline-flex;
  margin-top: 1.5rem;
  color: var(--site-header-footer);
  font-weight: 700;
}

.lessons-image {
  width: 100%;
  border-radius: 1rem;
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.14);
}

.lessons-list-icon {
  width: 2.25rem;
  height: 2.25rem;
  background: rgba(104, 176, 171, 0.16);
  color: var(--site-accent);
  font-size: 0.85rem;
}

.lessons-list-copy {
  margin-left: 0.9rem;
  color: #475569;
  font-weight: 600;
}
</style>
