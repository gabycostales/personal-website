<template>
  <section class="fun-canvas">
    <client-only>
      <LazyThreeCanvas />
    </client-only>
    <span class="caption">
      I'm also just starting to learn Three.js! Click on the links in my bio to see different meshes.
    </span>
  </section>
</template>

<script>
export default {
  name: 'CanvasSection',
};
</script>

<style lang="scss" scoped>

  .fun-canvas {
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .caption {
      margin-top: 40px;
      font-family: $spaceMonoFamily;
      letter-spacing: 1px;
      font-size: 15px;
    }

    @media (max-width: 700px) {
      margin-top: 50px;
      width: 75%;
      align-items: center;
    }

    @media (max-width: 500px) {
      width: 85%;
    }
  }

</style>
