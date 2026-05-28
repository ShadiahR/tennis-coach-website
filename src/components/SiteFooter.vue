<template>
  <footer class="site-footer">
    <div class="site-container site-footer__container">
      <nav class="site-footer__nav" aria-label="Footer navigatie">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="site-footer__link"
        >
          {{ item.label }}
        </a>
      </nav>

      <p class="site-footer__bar">
        &copy; {{ year }} Rodney Eelst Tennis. All rights reserved. Made by
        Shadiah Ricardo.
      </p>
    </div>
  </footer>
</template>

<script>
const navItems = [
  { label: "Home", href: "#home" },
  { label: "Over Rodney", href: "#about" },
  { label: "Lessen", href: "#lessons" },
  { label: "Tarieven", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default {
  data() {
    return {
      navItems,
      year: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
.site-footer {
  background: var(--site-header-footer);
  color: #ffffff;
}

.site-footer__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-top: 3rem;
  padding-bottom: 2rem;
}

.site-footer__nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.4rem 0.75rem;
}

.site-footer__link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  color: rgba(255, 255, 255, 0.82);
  font-size: 0.92rem;
  font-weight: 600;
  padding: 0.45rem 0.8rem;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.site-footer__link:hover {
  background: rgba(255, 255, 255, 0.08);
  color: var(--site-button);
}

.site-footer__bar {
  margin: 0;
  color: rgba(255, 255, 255, 0.62);
  font-size: 0.9rem;
  line-height: 1.7;
  text-align: center;
}
</style>
