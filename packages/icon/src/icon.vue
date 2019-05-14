<template>
  <i :class="'n-icon-' + name"></i>
</template>

<script>
  export default {
    name: 'NIcon',

    props: {
      name: String
    }
  };
</script>
