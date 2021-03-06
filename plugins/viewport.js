import Vue from 'vue';
import events from './events';

const viewport = new Vue({
  data() {
    if (!process.client) return {};

    return {
      event: null,
      width: document.documentElement.clientWidth || document.body.clientWidth,
      height: Math.min(
        window.innerHeight,
        document.documentElement.clientHeight
      ),
    };
  },
  computed: {
    ratio() {
      if (!process.client) return;

      return this.width / this.height;
    },
  },
  created() {
    if (!process.client) return;

    this.onWindowResize();
    addEventListener('resize', this.onWindowResize, false);
  },
  beforeDestroy() {
    if (!process.client) return;

    removeEventListener('resize', this.onWindowResize);
  },
  methods: {
    onWindowResize(event) {
      this.event = event;
      this.width =
        document.documentElement.clientWidth || document.body.clientWidth;
      this.height = Math.min(
        window.innerHeight,
        document.documentElement.clientHeight
      );

      // https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
      const vh = this.height * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);

      events.emit('viewport:resize', this.$data);
    },
  },
});

Vue.prototype.$viewport = viewport;

export default viewport;
