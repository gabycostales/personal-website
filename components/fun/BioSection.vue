<template>
  <section class="bio-section content light-mode-bg">
    <p>
      When I’m not <a @click.prevent="changeMesh('cubeMesh')">coding</a>, I’m probably hanging out with my dog, playing <a @click.prevent="changeMesh('d20Mesh')">D&D</a> with my friends , or drinking an IPA at a brewery. 🍻
    </p>
    <p>
      Here’s a sample of my <a target="_blank" href="https://open.spotify.com/playlist/7tTmN5OZ372xOoi5vZeUWl?si=045823b437ae46ca">music</a> taste. 👩🏼‍🎤
    </p>
    <p>
      My all time favorite video games are: The Last of Us (Part 1 & 2), Legend of Zelda: The Wind Waker / Breath of the Wild, Fallout 3, Gone Home, and this incredibly strange game that I had to do a project on in college narrated by Leonard Nemoy called <a target="_blank" href="https://en.wikipedia.org/wiki/Seaman_(video_game)">Seaman</a>. 🤷🏻‍♀️
    </p>
  </section>
</template>

<script>
export default {
  name: 'BioSection',
  methods: {
    changeMesh(mesh) {
      this.$emit('changeMesh', mesh);
    },
  },
};
</script>

<style lang="scss" scoped>
  .content {
    padding: 20px;
    margin: -20px;
    width: 50%;

    @media (max-width: 950px) {
      width: 55%
    }

    @media (max-width: 700px) {
      width: 100%;
    }

    p {
      font-size: 25px;
      line-height: 1.5em;
      margin: 20px 0;

      &:first-child { margin-top: 0; }
      &:last-child { margin-bottom: 0; }

      @media (max-width: 950px) {
        font-size: 20px;
      }

      @media (max-width: 700px) {
        font-size: 16px;
      }
    }
  }
</style>
