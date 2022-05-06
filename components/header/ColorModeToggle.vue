<template>
  <button
    class="color-mode-toggle"
    :class="{ 'light-mode': lightMode }"
    title="Toggle Color Mode"
    @click="toggleColorMode"
  >
    <font-awesome-icon :icon="icon" class="moon-icon" />
  </button>
</template>

<script>
export default {
  data() {
    return {
      lightMode: false,
    };
  },
  computed: {
    icon() {
      const prefix = this.lightMode ? 'far' : 'fa';

      return [prefix, 'moon'];
    },
  },
  methods: {
    toggleColorMode() {
      this.lightMode = !this.lightMode;
      document.documentElement.classList.toggle('light-mode');
      this.$events.emit('toggledColorMode', this.lightMode);
    },
  },
};
</script>

<style lang="scss" scoped>
.color-mode-toggle {
  @include smallToggle;

  &.light-mode {
    color: white;
  }
}
</style>
