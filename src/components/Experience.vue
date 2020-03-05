<template>
  <section id="exp" class="exp">
    <div class="container">
      <h1 class="section-header">EXPERIENCE</h1>
      <ul id="timeline">
        <li class="work">
          <input class="radio" type="radio" checked />
          <div class="relative">
            <label>University</label>
            <span class="date">2012 - 2015</span>
            <span class="circle"></span>
          </div>
          <div class="content">
            <p>
              Bachelor of Computer Science in Science and Technology ,
              Rajamangala University of Technology Thunyaburi , GPA 3.11
            </p>
          </div>
        </li>
        <li class="work">
          <input class="radio" type="radio" checked />
          <div class="relative">
            <label>Student intership</label>
            <span class="date">2015</span>
            <span class="circle"></span>
          </div>
          <div class="content">
            <p>
              <b>Position:</b> IOS Developer <br />
              <b>Job Description:</b> Designed and developed Pathum Chamber
              application used for collecting information about restaurants in
              Pathumthani using Xcode and objective-c language.
            </p>
          </div>
        </li>
        <li class="work">
          <input class="radio" type="radio" checked />
          <div class="relative">
            <label>Web Developer</label>
            <span class="date">2017 - now</span>
            <span class="circle"></span>
          </div>
          <div class="content">
            <p>
              <b>Position:</b> Web Developer <br />
              <b>Job Description:</b> Web Developer. Developed the assigned web
              application <br />
              - Front-end using HTML5 CSS(Bootstrap Framework) <br />
              and Javascript(Jquery) <br />
              - Back-end using PHP Mysql and Nodejs(Express Framework)
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/scss/timeline.scss";
.exp {
  font-size: 2rem;
  padding: 5%;
  // background-color: $color-white;
  background-color: rgb(245, 245, 245);

  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
