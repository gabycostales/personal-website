<template>
  <NuxtLink to="/" class="gcc-logo">
    <span>gcc</span>
  </NuxtLink>
</template>

<style lang="scss" scoped>
  .gcc-logo {
    @include boxHighlight;
    padding: 2px 10px 12px;
    span {
      line-height: 1em;
      font-family: $spaceMonoFamily;
      font-size: 30px;

      @media (max-width: 310px) {
        font-size: 25px;
      }
    }
  }
</style>
