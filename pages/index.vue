<template>
  <div class="index-page">
    <section class="title-row">
      <PageTitle title="gaby carmen costales" />
      <span class="subtitle">yup, my initials are a compiler</span>
    </section>

    <section class="content light-mode-bg">
      <p class="welcome">
        <b>Hi!</b> Welcome to my website. <span class="wave">👋🏼</span>
      </p>
      <p class="short-bio">
        I’m a senior software engineer born and raised in Miami, FL 🌴. Coding
        is my craft and I love building things that are useful to other people
        with emerging web technologies. I currently work for
        <BasicLink
          href="https://www.swarmsolutions.com/"
          text="Swarm Solutions"
        />.
      </p>
      <p class="cta">
        I plan to add more to this site soon, but in the meantime check out my
        <NuxtLink to="/cv">CV</NuxtLink> or some other
        <NuxtLink to="/fun">fun</NuxtLink> stuff.
      </p>
    </section>
  </div>
</template>

<style lang="scss" scoped>
  .index-page {
    @include page;
    @include contained-page;
  }

  .title-row {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 60px;

    .subtitle {
      display: block;
      margin-top: 15px;
      margin-left: auto;
      padding: 8px 10px 10px;
      @include boxHighlight;
      font-style: italic;
      font-size: 12px;
      line-height: 1.1em;
    }
  }

  .content {
    padding: 20px;
    margin: -20px;

    .wave {
      display: inline-block;
      animation: 3s ease-in-out infinite wave;
    }

    .welcome,
    .short-bio {
      margin-bottom: 20px;
    }
  }
</style>

<style>
  @keyframes wave {
    0%,
    20%,
    40%,
    100% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(-20deg);
    }
    30% {
      transform: rotate(-20deg);
    }
  }
</style>
