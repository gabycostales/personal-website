<template>
  <div class="fun-page">
    <section class="content">
      <p>
        When I’m not <a @click.prevent="changeMesh('cubeMesh')">coding</a>, I’m probably hanging out my dog, playing <a @click.prevent="changeMesh('d20Mesh')">D&D</a> with my friends , or drinking an IPA at a brewery 🍻.  
      </p>
      <p>
        Here’s a sample of my <a target="_blank" href="https://open.spotify.com/playlist/7tTmN5OZ372xOoi5vZeUWl?si=045823b437ae46ca">music</a> taste 👩🏼‍🎤, judge away.
      </p>
      <p>
        My all time favorite video games are: The Last of Us (Part 1 & 2), Legend of Zelda: The Wind Waker, Fallout 3, Gone Home, and this incredibly strange game that I had to do a project on in college narrated by Leonard Nemoy called <a target="_blank" href="https://en.wikipedia.org/wiki/Seaman_(video_game)">Seaman</a> 🤷🏻‍♀️.
      </p>
    </section>
    <section class="fun-canvas">
      <LazyThreeCanvas />
      <span class="caption">
        I'm also just starting to learn Three.js! Click on the links in my bio to see different meshes.
      </span>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    changeMesh(mesh) {
      this.$events.emit('changeMesh', mesh);
    }
  }
}
</script>

<style lang="scss" scoped>

  .fun-page {
    @include page;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .content {
      width: 50%;

      p {
        margin: 20px 0;

        &:first-child { margin-top: 0; }
        &:last-child { margin-bottom: 0; }
      }
    }

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
    }
  }

</style>