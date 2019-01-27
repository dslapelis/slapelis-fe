<template>
<div class="head">
  <div class="hero">
    <h1 class="title">Hi! I'm
      <br>
      <span class="navy-highlight">Daniel Slapelis.</span>
  </h1>
    <h2 class="subtitle">I'm a passionate
      <br>
      <span class="navy-highlight">full-stack developer.</span>
  </h2>
  </div>
  </div>
</template>

<script>
export default {};
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
    margin: 0 5vh 0 5vh;
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
</style>
