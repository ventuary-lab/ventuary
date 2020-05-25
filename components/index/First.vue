<template lang="pug">
  section.section.section-first#what-we-do
    .container
      h2.title.title-lg What we do
      div.section-first-item
        div.section-first-item-img
        div.section-first-item-info
          span.title.title-text Technology research <br> and prototyping
          p.text With a profound expertise across various fields of blockchain technology,
          p.text We design and prototype highly innovative and reliable decentralized architectures with speed and precision.
      div.section-first-item.item-reverce
        div.section-first-item-img
        div.section-first-item-info
          span.title.title-text Smart Contract and dApps <br> Development
          p.text We apply our versatile skill set to solving real-world use cases to increase the adoption of blockchain globally.
      div.section-first-item
        div.section-first-item-img
        div.section-first-item-info
          span.title.title-text Deployment <br>and Maintenance
          p.text Our open-source products are designed to sustain high loads, with a focus on ease-of-use and flexibility or developers and end users.

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
            url("~static/img/technology.svg") no-repeat center/40%;

          @include b(tablet) {
            background: url("~static/img/technology.svg") no-repeat left/contain;
          }
        }
      }

      &:nth-child(3) {
        .section-first-item-img {
          background: url("~static/img/points.svg"),
            url("~static/img/smart.svg") no-repeat center/40%;

          @include b(tablet) {
            background: url("~static/img/smart.svg") no-repeat left/contain;
          }
        }
      }

      &:nth-child(4) {
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
