<template>
  <section id="exp" class="exp">
    <div class="container">
      <h1 class="section-header">EXPERIENCE</h1>
      <div class="timeline-container">
        <div class="timeline-block timeline-block-right">
          <div class="marker"></div>
          <div class="timeline-content">
            <h3>Web Developer (2017 - present)</h3>
            <p>
              <b>Position:</b> Web Developer at Rajamangala University of
              Technology Thanyaburi<br />
              <b>Job Description:</b> Developed the assigned web applications
              for departments of the university.
              <br />
              - Design and Analytic Database Structure <br />
              - Design Web Front-End for Desktop & Mobile <br />
              - Development data report for the department <br />
            </p>
          </div>
        </div>

        <div class="timeline-block timeline-block-left">
          <div class="marker"></div>
          <div class="timeline-content">
            <h3>Student intership (2015)</h3>
            <p>
              <b>Position:</b> IOS Developer at TOT Innovation Institute<br />
              <b>Job Description:</b> Designed and developed Pathum Chamber
              application used for collecting information about restaurants in
              Pathumthani using Xcode and objective-c language.
            </p>
          </div>
        </div>

        <div class="timeline-block timeline-block-right">
          <div class="marker"></div>
          <div class="timeline-content">
            <h3>Education (2012 - 2015)</h3>
            <p>
              Bachelor of Computer Science in Science and Technology ,
              Rajamangala University of Technology Thanyaburi , GPA 3.11
            </p>
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
