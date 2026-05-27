<template>
  <header class="site-header">
    <div class="site-container">
      <div class="flex items-center justify-between py-4">
        <a href="#home" class="site-logo">
          <img :src="logoImage" alt="Tennisbal logo" class="site-logo-mark" />
          <span class="site-logo-text">Coach Rodney</span>
        </a>
        <button
          class="site-menu-button lg:hidden"
          type="button"
          @click="menuOpen = !menuOpen"
        >
          {{ menuOpen ? "Sluiten" : "Menu" }}
        </button>
        <nav class="hidden lg:flex items-center space-x-1">
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            class="site-nav-link"
          >
            {{ item.label }}
          </a>
        </nav>
      </div>
      <nav v-if="menuOpen" class="site-nav-panel lg:hidden">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="site-nav-link"
          @click="menuOpen = false"
        >
          {{ item.label }}
        </a>
      </nav>
    </div>
  </header>
</template>

<script>
import logoImage from "@/assets/img/tennis-ball-icon.jpg";

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
      logoImage,
      menuOpen: false,
      navItems,
    };
  },
};
</script>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 50;
  background: rgba(32, 40, 96, 0.96);
  backdrop-filter: blur(12px);
  box-shadow: 0 12px 32px rgba(15, 23, 42, 0.22);
  color: #ffffff;
}

.site-logo {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  color: #ffffff;
}

.site-logo-mark {
  width: 2.5rem;
  height: 2.5rem;
  object-fit: cover;
  border-radius: 9999px;
  border: 2px solid rgba(255, 255, 255, 0.28);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.18);
}

.site-logo-text {
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.site-menu-button {
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 9999px;
  background: transparent;
  color: #ffffff;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 700;
  padding: 0.6rem 0.9rem;
}

.site-nav-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.65rem 0.95rem;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.site-nav-link:hover {
  background: rgba(104, 176, 171, 0.18);
  color: var(--site-button);
}

.site-nav-panel {
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  padding-top: 0.5rem;
  padding-bottom: 1rem;
}

.site-nav-panel .site-nav-link {
  width: 100%;
  justify-content: center;
  margin-top: 0.25rem;
}

@media (max-width: 639px) {
  .site-logo-text {
    font-size: 0.82rem;
    letter-spacing: 0.1em;
  }
}
</style>
