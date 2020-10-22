<template lang="pug">
section#what-we-do.section.section-first
  .container
    h2.title.title-lg What we do
    .section-first-item.item-reverce
      .section-first-item-img
      .section-first-item-info
        span.title.title-text Ideation and Lean <br> Innovation
        p.text We constantly generate and vet ideas to turn them into design prototypes, with a focus on product-market fit. We approach ideation based on how to best apply decentralized solutions in solving real problems of consumers and entire industries.
    .section-first-item
      .section-first-item-img
      .section-first-item-info
        span.title.title-text Technology research <br> and prototyping
        p.text With a profound expertise across various fields of blockchain technology, we design and prototype highly innovative and reliable decentralized architectures with speed and precision.
    .section-first-item.item-reverce
      .section-first-item-img
      .section-first-item-info
        span.title.title-text Smart Contract and dApps <br> Development
        p.text We apply our versatile skill set to solving real-world use cases to increase the adoption of blockchain globally.
    .section-first-item
      .section-first-item-img
      .section-first-item-info
        span.title.title-text Deployment <br>and Maintenance
        p.text Our open-source products are designed to sustain high loads, with a focus on ease-of-use and flexibility for developers and end users.
</template>

<style lang="scss" scoped>
@import "../../assets/scss/mixins/media.scss";
@import "../../assets/scss/mixins/main.scss";

.section {
  &-first {
    margin-top: 80px;

    @include b(mobile) {
      margin-top: 0px;
    }

    .container {
      max-width: 940px;

      .title {
        &-lg {
          margin-bottom: 50px;
        }

        &-text {
          @include b(tablet) {
            br {
              display: none;
            }
          }
        }
      }

      .text {
        margin-bottom: 15px;

        @include b(mobile) {
          @include rem(14);
          line-height: 20px;
        }
      }
    }

    &-item {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;
      grid-template-areas: "img info";
      height: 320px;
      align-items: center;
      margin-bottom: 50px;

      @include b(tablet) {
        grid-template-columns: 1fr;
        grid-template-rows: 145px 1fr;
        grid-template-areas: "img" "info";
        height: auto;
      }
      &:nth-child(2) {
        .section-first-item-img {
          background: url("~static/img/points.svg"),
            url("~static/img/innovation_pic.svg") no-repeat center/40%;

          @include b(tablet) {
            background: url("~static/img/innovation_pic.svg") no-repeat
              left/contain;
          }
        }
      }
      &:nth-child(3) {
        .section-first-item-img {
          background: url("~static/img/points.svg"),
            url("~static/img/technology.svg") no-repeat center/40%;

          @include b(tablet) {
            background: url("~static/img/technology.svg") no-repeat left/contain;
          }
        }
      }

      &:nth-child(4) {
        .section-first-item-img {
          background: url("~static/img/points.svg"),
            url("~static/img/smart.svg") no-repeat center/40%;

          @include b(tablet) {
            background: url("~static/img/smart.svg") no-repeat left/contain;
          }
        }
      }

      &:nth-child(5) {
        @include b(tablet) {
          margin-bottom: 0;
        }

        .section-first-item-img {
          background: url("~static/img/points.svg"),
            url("~static/img/deployment.svg") no-repeat center/40%;

          @include b(tablet) {
            background: url("~static/img/deployment.svg") no-repeat left/contain;
          }
        }
      }

      &.item-reverce {
        grid-template-areas: "info img";

        @include b(tablet) {
          grid-template-areas: "img" "info";
        }
      }

      &-info {
        grid-area: info;
      }

      &-img {
        grid-area: img;
        height: 100%;
      }
    }
  }
}
</style>
