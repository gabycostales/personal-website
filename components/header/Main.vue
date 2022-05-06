<template>
  <header>
    <HeaderLogo />
    <div class="theme-toggles">
      <NuxtLink to="/cv" class="page-link">cv</NuxtLink>
      <NuxtLink to="/fun" class="page-link">fun</NuxtLink>
      <HeaderThemeColorSwap />
      <HeaderColorModeToggle />
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  @media (max-width: 500px) {
    padding: 20px 5px;
  }
}

.theme-toggles {
  display: flex;
  align-items: center;
}

.page-link {
  font-size: 20px;
  margin-right: 15px;
  letter-spacing: 2px;
  font-family: $spaceMonoFamily;

  @media (max-width: 310px) {
    margin-right: 10px;
  }
}
</style>
