<template>
  <header :class="['site-header', { 'site-header--scrolled': isScrolled }]">
    <div class="site-container">
      <div class="site-header__bar">
        <a href="#home" class="site-logo" @click="menuOpen = false">
          <img
            :src="logoImage"
            alt="Tennisbal logo"
            class="site-logo-mark"
          />
          <span class="site-logo-copy">
            <strong class="site-logo-text">Rodney Eelst</strong>
            <span class="site-logo-subtitle">Tennis Coach</span>
          </span>
        </a>

        <button
          class="site-menu-button lg:hidden"
          type="button"
          @click="menuOpen = !menuOpen"
        >
          {{ menuOpen ? "Sluiten" : "Menu" }}
        </button>

        <nav class="site-header__nav hidden lg:flex" aria-label="Hoofdnavigatie">
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            :class="[
              'site-nav-link',
              { 'site-nav-link--active': activeSection === item.id },
            ]"
            :aria-current="activeSection === item.id ? 'page' : null"
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
          :class="[
            'site-nav-link',
            'site-nav-link--mobile',
            { 'site-nav-link--active': activeSection === item.id },
          ]"
          :aria-current="activeSection === item.id ? 'page' : null"
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
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "Over Rodney", href: "#about" },
  { id: "lessons", label: "Lessen", href: "#lessons" },
  { id: "pricing", label: "Tarieven", href: "#pricing" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export default {
  props: {
    activeSection: {
      type: String,
      default: "home",
    },
    isScrolled: {
      type: Boolean,
      default: false,
    },
  },
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
  top: 0.9rem;
  right: 0;
  left: 0;
  z-index: 50;
  color: #ffffff;
  transition: transform 220ms ease;
}

.site-header .site-container {
  max-width: 80rem;
}

.site-header__bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 5.5rem;
  border-radius: 1.5rem;
  background: rgba(17, 28, 69, 0.78);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 20px 48px rgba(15, 23, 42, 0.18);
  backdrop-filter: blur(18px);
  padding: 0 1rem 0 1.1rem;
  transition:
    min-height 240ms ease,
    background-color 240ms ease,
    box-shadow 240ms ease,
    border-radius 240ms ease;
}

.site-header--scrolled .site-header__bar {
  min-height: 4.7rem;
  background: rgba(17, 28, 69, 0.92);
  border-radius: 1.3rem;
  box-shadow: 0 16px 36px rgba(15, 23, 42, 0.2);
}

.site-logo {
  display: inline-flex;
  align-items: center;
  gap: 0.85rem;
  min-width: 0;
  color: #ffffff;
}

.site-logo-mark {
  width: 2.8rem;
  height: 2.8rem;
  object-fit: cover;
  border-radius: 9999px;
  border: 2px solid rgba(255, 255, 255, 0.24);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.18);
}

.site-logo-copy {
  display: flex;
  flex-direction: column;
  gap: 0.12rem;
}

.site-logo-text {
  display: block;
  font-family: var(--font-sans);
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.site-logo-subtitle {
  color: rgba(255, 255, 255, 0.66);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.site-menu-button {
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
  cursor: pointer;
  font-size: 0.83rem;
  font-weight: 700;
  padding: 0.72rem 0.95rem;
}

.site-header__nav {
  align-items: center;
  gap: 0.35rem;
}

.site-nav-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  color: rgba(255, 255, 255, 0.82);
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.7rem 1rem;
  transition:
    background-color 220ms ease,
    color 220ms ease,
    transform 220ms ease;
}

.site-nav-link:hover {
  background: rgba(104, 176, 171, 0.16);
  color: #ffffff;
}

.site-nav-link--active {
  background: rgba(223, 255, 79, 0.18);
  color: var(--site-button);
}

.site-nav-panel {
  display: flex;
  flex-direction: column;
  margin-top: 0.6rem;
  border-radius: 1.35rem;
  background: rgba(17, 28, 69, 0.92);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 18px 38px rgba(15, 23, 42, 0.16);
  padding: 0.65rem;
  backdrop-filter: blur(16px);
}

.site-nav-link--mobile {
  width: 100%;
  justify-content: center;
}

.site-nav-link--mobile + .site-nav-link--mobile {
  margin-top: 0.3rem;
}

@media (max-width: 767px) {
  .site-header {
    top: 0.7rem;
  }

  .site-header__bar {
    min-height: 4.8rem;
  }

  .site-logo-subtitle {
    display: none;
  }
}

@media (max-width: 639px) {
  .site-logo-text {
    font-size: 0.86rem;
    letter-spacing: 0.08em;
  }

  .site-header__bar {
    padding-right: 0.75rem;
    padding-left: 0.85rem;
  }
}
</style>
