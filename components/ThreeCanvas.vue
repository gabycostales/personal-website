<template>
  <div class="canvas-container">
    <!-- Canvas will render here  -->
  </div>
</template>

<script>
import {Stage} from '~/assets/js/Stage';

export default {
  name: 'ThreeCanvas',
  data() {
    return {
      currentMesh: 'd20Mesh',
    };
  },
  mounted() {
    this.stage = new Stage({
      container: this.$el,
      size: this.getElSize(),
    });

    // Resize Stage Listener
    this.$events.on('viewport:resize', () => {
      this.stage.onResize(this.getElSize());
    });

    // Respond to Accent Color Changes
    this.$events.on('accentColorChange', (color) => {
      this.stage.updateMaterialColor(color);
    });

    // Change Mesh Currently Rendered
    this.$events.on('changeMesh', (mesh) => {
      this.stage.changeMesh(mesh);
    });

    // Start Animating
    this.stage.init();
    this.stage.animate();
  },
  methods: {
    getElSize() {
      return {
        width: this.$el.clientWidth,
        height: this.$el.clientHeight,
      };
    },
  }
}
</script>

<style lang="scss" scoped>
  .canvas-container {
    flex: 1;
    max-height: 500px;
    @include boxHighlight;
  }
</style>
