<template>
  <div class="site-container">
    <div class="site-content">
      <HeaderMain />
      <Nuxt />
      <FooterMain />
    </div>
  </div>
</template>

<style lang="scss">

  .site-container {
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;

    .site-content {
      width: 95%;
      max-width: 1100px;
      display: flex;
      flex-direction: column;
    }
  }


</style>
