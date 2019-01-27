<template>
  <div class="home">
    <HomeTop/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeTop from '@/components/HomeTop.vue';

export default {
  name: 'home',
  components: {
    HomeTop,
  },
};
</script>
