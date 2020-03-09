<template>
  <section id="about" class="about bg-white">
    <div class="profile-pic">
      <img src="@/assets/img/profile.jpg" alt="" />
    </div>
    <div class="profile-info">
      <div class="name">
        <b>Nataphong Somjai</b>
      </div>
      <div class="info">
        <b>Date of birth :</b> 20 april 1994  <br>
        <b>Language :</b> Thai ( Native ) , English ( Good ) <br>
        <b>Tel : </b> 0955592959 <br>
        <b>Email : </b> nataphong_s@hotmail.com <br>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: $color-white;

  background-image: linear-gradient(
      to right,
      rgba(56, 70, 77, 0.85),
      rgba(21, 26, 27, 0.85)
    ),
    url(../assets/img/bg2.jpg);
  background-size: cover;
  background-attachment: fixed;

  .profile-pic {
    width: 25em;
    height: 25rem;
    overflow: hidden;
    border-radius: 50%;

    img {
      width: 100%;
    }
  }
  .profile-info {
    margin-top: 2rem;
    .name {
      font-size: 4.5rem;
      text-align: center;
      // border-bottom: 5px solid $color-white;
      // border-width: 80%;
    }

    .info {
      margin-top: 2rem;
      font-size: 3rem;
   }
  }
}
</style>
