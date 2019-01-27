<template>
  <div class="contact">
    <div class="left">
      <h2 class="title">I really want to talk to you too</h2>
    </div>
    <div class="right">
      <h5>
        <a href="tel:+15852613121">585-261-3121</a>
      </h5>
      <h5>
        <a href="mailto:djs7209@rit.edu">djs7209@rit.edu</a>
      </h5>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.contact {
  background-color: #3a405a;
  color: #95e1d3;
  display: flex;
  align-content: center;
  justify-content: space-between;
  padding: 5vw;
}
.contact .title {
  width: 70%;
  font-size: 4vw;
  font-weight: 700;
}
.contact h5 a {
  color: #95e1d3;
  font-size: 3vw;
}
.contact .right {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}
@media only screen and (max-width: 1150px) {
  .contact .title {
    font-size: 8vw;
  }
  .contact h5 a {
    font-size: 5vw;
  }
}
</style>
