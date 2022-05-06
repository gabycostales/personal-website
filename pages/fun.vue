<template>
  <div class="fun-page">
    <FunBioSection @changeMesh="changeMesh" />
    <FunCanvasSection />
  </div>
</template>

<script>
export default {
  name: "Fun",
  data() {
    return {
      browserWidth: null,
    };
  },
  mounted() {
    this.browserWidth =
      document.documentElement.clientWidth || document.body.clientWidth;
    this.$events.on("viewport:resize", ({ width }) => {
      this.browserWidth = width;
    });
  },
  methods: {
    changeMesh(mesh) {
      this.$events.emit("changeMesh", mesh);
    },
  },
};
</script>

<style lang="scss" scoped>
.fun-page {
  @include page;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 700px) {
    flex-direction: column;
  }
}
</style>
