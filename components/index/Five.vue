<template lang="pug">
  section.section.section-five
    .container#future
      h2.title.title-lg.title-bg Are you ready <br> for the future?
      p.text Ventuary Lab is an outstanding provider of both<br> open-source and commercial cryptocurrency technologies.<br> We deliver a range of products and services that make the adoption<br> of Bitcoin and peer-to-peer finance easier than ever. If you have a<br> project in mind, let’s build it together!
</template>

<style lang="scss" scoped>
@import "../../assets/scss/mixins/media.scss";
@import "../../assets/scss/mixins/main.scss";

.section {
  &-five {
    margin-top: 150px;

    @include b(mobile) {
      margin-top: 0px;
    }

    .container {
      max-width: 960px;
      padding: 20px 10px 20px 10px;
      background: url("~static/img/points.svg") no-repeat right center/50%,
        url("~static/img/future-hand.svg") no-repeat right 70px/40%;

      @include b(desktop) {
        background: url("~static/img/points.svg") no-repeat right center/55%,
          url("~static/img/future-hand.svg") no-repeat right center/45%;
      }

      @include b(mobile) {
        background: url("~static/img/future-hand.svg") no-repeat center 50px/45%;
      }

      .title {
        margin-bottom: 20px;
        display: block;
      }

      .text {
        max-width: 635px;
        width: 100%;
        @include rem(18);
        line-height: 29px;

        @include b(desktop) {
          max-width: 415px;

          br {
            display: none;
          }
        }

        @include b(mobile) {
          @include rem(14);
          line-height: 20px;
        }
      }
    }
  }
}
</style>
