<template>
  <button
    class="theme-color-button"
    title="Change Theme Accent Color"
    :class="{ 'light-mode': isLightMode }"
    @click="changeAccentColor"
  >
    <font-awesome-icon
      icon="palette"
      class="palette-icon"
      :style="{ color: themeColors[currentColorIndex] }"
    />
  </button>
</template>

<script>
export default {
  data() {
    return {
      isLightMode: false,
      currentColorIndex: 0,
      themeColors: [
        '#679cdf', // blue
        '#48bb78', // purple
        '#9f7aea', // green
        '#ed64a6', // pink
      ],
    };
  },
  mounted() {
    this.$events.on('toggledColorMode', (isLightMode) => {
      this.isLightMode = isLightMode;
    });
  },
  methods: {
    changeAccentColor() {
      let { currentColorIndex = 0, themeColors = [] } = this;

      currentColorIndex += 1;
      if (currentColorIndex >= themeColors.length) {
        currentColorIndex = 0; // start over
      }

      const newColor = themeColors[currentColorIndex];
      if (!newColor) return;

      // Update CSS Var for accent color
      this.currentColorIndex = currentColorIndex;
      document.documentElement.style.setProperty('--accent-color', newColor);
      this.$events.emit('accentColorChange', newColor);
    },
  },
};
</script>

<style lang="scss" scoped>
.theme-color-button {
  margin-right: 15px;
  @include smallToggle;

  &.light-mode {
    background-color: transparent;
  }

  @media (max-width: 310px) {
    margin-right: 10px;
  }
}
</style>
