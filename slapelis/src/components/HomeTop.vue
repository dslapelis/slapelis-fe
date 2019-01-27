<template>
  <div class="head">
    <div class="hero">
      <h1 class="title" ref="title">
        <span
          id="greeting"
          el="greeting"
          ref="greeting"
          style="display: inline-block;z-index:0;"
        >Hi!</span>
        <span ref="else" style="opacity: 0;">&nbsp;I'm
          <br>
          <span class="navy-highlight">Daniel Slapelis.</span>
        </span>
      </h1>
      <h2 class="subtitle">
        <span ref="subelse" style="opacity: 0;">I'm a passionate
          <br>
          <span class="navy-highlight">full-stack developer.</span>
        </span>
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log({ el: '#greeting' });
    this.$anime
      .timeline()
      .add({
        targets: this.$refs.greeting,
        translateY: -40,
        delay: 300,
        duration: 400,
        easing: 'easeOutExpo',
      })
      .add({
        targets: this.$refs.greeting,
        translateY: 0,
        delay: 100,
        duration: 700,
        easing: 'easeOutExpo',
      });
    this.$anime.timeline().add({
      targets: this.$refs.else,
      opacity: 100,
      delay: 700,
      easing: 'easeInExpo',
      duration: 1000,
    });
    this.$anime
      .timeline()
      .add({
        targets: this.$refs.subelse,
        opacity: 100,
        delay: 900,
        easing: 'easeInExpo',
        duration: 1000,
      })
      .add({
        autoplay: false,
      });
  },
};
</script>

<style>
.head {
  display: flex;
  align-items: center;
  min-height: 100vh;
  background-color: #f47171;
  color: white;
}
.hero {
  display: flex;
  flex-direction: column;
  margin: 0 5vw 0 5vw;
}
.navy-highlight {
  color: #3a405a;
  font-weight: 700;
}
.title {
  font-size: 8vw;
}
.subtitle {
  font-size: 8vw;
}

@media only screen and (max-width: 1150px) {
  .title {
    font-size: 10vw;
  }
  .subtitle {
    font-size: 10vw;
  }
}
</style>
