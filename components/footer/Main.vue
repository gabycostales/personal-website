<template>
  <footer>
    <div class="copyright">
      <span>© 2021, Gabriela Costales</span>
    </div>
    <div class="social-media">
      <a
        v-for="social in socialLinks"
        :key="social.icon[1]"
        :href="social.link"
        target="_blank"
        class="social-link"
      >
        <font-awesome-icon 
          :icon="social.icon"
          class="social-link-icon"
        />
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      socialLinks: [
        {
          icon: ['fab', 'twitter'],
          link: 'https://twitter.com/gabycostales/'
        },
        {
          icon: ['fab', 'linkedin-in'],
          link: 'https://www.linkedin.com/in/gabrielacostales/',
        },
        {
          icon: ['fab', 'github'],
          link: 'https://github.com/gabycostales',
        },
         {
          icon: ['fa', 'envelope'],
          link: 'mailto:gabycostales@gmail.com',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    .copyright {
      color: var(--font-color);
    }

    .social-link {
      text-decoration: none;
      border: none;
      margin-right: 15px;

      &:last-child {
        margin-right: 0;
      }

      .social-link-icon {
        width: 20px;
      }
    }

   
  }

</style>