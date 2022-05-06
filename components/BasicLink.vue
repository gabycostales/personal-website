<template>
  <a target="_blank" :href="href">{{ text }}</a>
</template>

<script>
  export default {
    props: {
      text: String,
      href: String,
    },
  };
</script>
