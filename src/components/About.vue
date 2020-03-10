<template>
  <section id="about" class="about bg-white">
    <div class="container">
      <div class="profile-pic">
        <img src="@/assets/img/profile.jpg" alt="" />
      </div>
      <div class="profile-info">
        <div class="name">
          <b>Hi, i'm Nataphong!</b>
        </div>
        <p>
          I like to building things with code and enthusiastic to gather new knowledge. 
          I work in web developer for 2 years developed website Front-end and Back-end with PHP and Mysql. 
          I am looking for a new job in position Front-end developer <b>(VueJS)</b> or Back-end developer <b>(NodeJS)</b>
        </p>
        <div class="contact">
          <b>Tel : </b> 0955592959 <br />
          <b>Email : </b> nataphong_s@hotmail.com <br />
          <div class="social">
            <a
              class="social-link"
              target="_blank"
              href="https://github.com/mmarone"
            >
              <font-awesome-icon size="2x" :icon="['fab', 'github-square']" />
            </a>
            <a
              class="social-link"
              target="_blank"
              href="https://line.me/ti/p/zrnMqwD5i5"
            >
              <font-awesome-icon size="2x" :icon="['fab', 'line']" />
            </a>
            <a
              class="social-link"
              target="_blank"
              href="https://www.facebook.com/nataphong.somjai"
            >
              <font-awesome-icon size="2x" :icon="['fab', 'facebook-square']" />
            </a>
          </div>
        </div>
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
      rgba(50, 60, 65, 0.85),
      rgba(21, 26, 27, 0.85)
    ),
    url(../assets/img/bg2.jpg);
  background-size: cover;
  background-attachment: fixed;

  .profile-pic {
    width: 20em;
    height: 20rem;
    overflow: hidden;
    border-radius: 50%;
    margin: 0 auto;

    img {
      width: 100%;
    }
  }
  .profile-info {
    margin-top: 2rem;
    .name {
      font-size: 3.5rem;      
      text-align: center;

      @media only screen and (max-width: $bp-small) {        
        font-size: 2.75rem;
      }
    }

    p {
      font-size: 2.5rem;
      text-align: justify;
      @media only screen and (max-width: $bp-small) {        
        font-size: 1.75rem;
      }
    }

    .contact {      
      font-size: 2.5rem;
      text-align: center;
      margin-top: 2rem;
      @media only screen and (max-width: $bp-small) {        
        font-size: 1.75rem;
      }

      .social {
        margin: 2rem 0;
        &-link {
          color: $color-white;
          &:nth-child(2) {
            margin: 0 2rem;
          }
        }
      }
    }
  }
}
</style>
