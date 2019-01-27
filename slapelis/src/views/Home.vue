<template>
  <div class="home">
    <home-top/>
    <home-body/>
    <contact/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeTop from '@/components/HomeTop.vue';
import HomeBody from '@/components/HomeBody.vue';
import Contact from '@/components/Contact.vue';

export default {
  name: 'home',
  components: {
    HomeTop,
    HomeBody,
    Contact,
  },
};
</script>
