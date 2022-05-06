import Vue from 'vue';
import Events from 'events';

const events = new Events();
events.setMaxListeners(Infinity);

Vue.prototype.$events = events;

export default events;
