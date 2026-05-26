<template>
  <footer class="site-footer">
    <div class="site-container py-10">
      <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div class="mb-6 lg:mb-0">
          <p class="site-footer-title">Tennis Coach</p>
          <p class="site-footer-copy">
            Single-page placeholder layout ready for lesson, coach, and contact
            content updates.
          </p>
        </div>
        <nav class="flex flex-wrap gap-3 lg:justify-end">
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            class="site-footer-link"
          >
            {{ item.label }}
          </a>
        </nav>
      </div>
      <div class="site-footer-bar">Copyright (c) {{ year }} Tennis Coach</div>
    </div>
  </footer>
</template>

<script>
const navItems = [
  { label: "Home", href: "#home" },
  { label: "Lessons", href: "#lessons" },
  { label: "Pricing", href: "#pricing" },
  { label: "About Me", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default {
  data() {
    return {
      year: new Date().getFullYear(),
      navItems,
    };
  },
};
</script>

<style scoped>
.site-footer {
  background: var(--site-header-footer);
  color: #ffffff;
}

.site-footer-title {
  margin: 0;
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.site-footer-copy {
  margin: 0.75rem 0 0;
  color: rgba(255, 255, 255, 0.74);
  line-height: 1.7;
  max-width: 28rem;
}

.site-footer-link {
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.25rem 0;
  transition: color 0.2s ease;
}

.site-footer-link:hover {
  color: var(--site-button);
}

.site-footer-bar {
  margin-top: 2rem;
  padding-top: 1.25rem;
  border-top: 1px solid rgba(255, 255, 255, 0.14);
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
}
</style>
