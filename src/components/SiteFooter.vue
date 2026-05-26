<template>
  <footer class="site-footer">
    <div class="site-container pt-20 pb-10">
      <div class="site-footer-content">
        <p class="site-footer-message">Elke slag brengt je verder.</p>
        <div class="site-footer-bar">{{ year }} Made by Shadiah Ricardo</div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
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

.site-footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.65rem;
}

.site-footer-message {
  margin: 3% 0;
  color: rgba(255, 255, 255, 0.82);
  font-size: 1rem;
  font-weight: 600;
}

.site-footer-bar {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
}
</style>
