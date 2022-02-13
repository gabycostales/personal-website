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

    @media (max-width: 500px) {
      padding: 20px 5px;
    }

    .copyright {
      color: var(--font-color);

      span {
        @media (max-width: 400px) {
          font-size: 14px;
        }

        @media (max-width: 320px) {
          font-size: 12px;
        }
      }
    }

    .social-link {
      text-decoration: none;
      border: none;
      margin-right: 15px;

      @media (max-width: 320px) {
        margin-right: 10px;
      }

      &:last-child {
        margin-right: 0;
      }

      .social-link-icon {
        width: 20px;

        @media (max-width: 290px) {
          width: 12px;
        }
      }
    }
  }

</style>
