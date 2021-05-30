<template>
  <h1 class="title">
    <!-- eslint-disable-next-line vue/no-parsing-error -->
    <span class="bracket">< </span> {{ title }} <span class="bracket"> ></span>
  </h1>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style lang="scss" scoped>
  .title {
    display: block;
    text-align: center;
    font-family: $monsterratFamily;
    font-size: 45px;
    letter-spacing: 2px;

    .bracket {
      display: inline-block;
      color: var(--accent-color);
    }

    @media (max-width: 700px) {
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: 8vw;
    }
  }
</style>