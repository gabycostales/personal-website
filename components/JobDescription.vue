<template>
  <div class="job-description">
    <div class="title-row">
      <h3 class="title">{{ title }}</h3>
    </div>
    <div class="company-row">
      <p class="company">{{ company }}</p>
      <p class="time-range">
        {{ startDate }} - {{ endDate }}
      </p>
    </div>
    <div
      v-if="skills && skills.length" 
      class="skills"
    >
      <div
        v-for="skill in skills"
        :key="skill"
        class="skill"
      >
        <span>{{ skill }}</span>
        <div class="skill-bg" />
      </div>
    </div>
    <ul class="about">
      <li v-for="(item, i) in about" :key="`item-${i}`">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'JobDescription',
  props: {
    title: String,
    company: String,
    startDate: String,
    endDate: String,
    about: Array,
    skills: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>

  .job-description {
    margin-bottom: 40px;
  }

  .title-row {
    margin-bottom: 10px;

    .title {
      font-size: 25px;
      letter-spacing: 2px;
      font-family: $spaceMonoFamily;
      color: var(--accent-color);

      @media (max-width: 400px) {
        font-size: 21px;
      }
    }
  }

  .company-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-style: italic;
    margin-bottom: 15px;

    p {
      font-size: 16px;
    }
  }

  .about {
    margin: 10px 0;

    li {
      margin: 10px 0;
    }
  }

  .skills {
    margin: 15px 0;
    display: flex;
    flex-wrap: wrap;

    .skill {
      display: block;
      margin: 5px;
      padding: 7px;
      border-radius: 5px;
      position: relative;
      overflow: hidden;
      font-size: 14px;
      font-weight: bold;
      z-index: 1;
    
      &:first-child {margin-left: 0;}

      .skill-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        background-color: var(--accent-color);
        opacity: 0.25;
      }
    }
  }

</style>