<template lang="pug">
section#tools.section.section-third
  .container
    h2.title.title-lg.title-bg Technology<br> and Tools we use
    .section-third-items
      span.icon.icon-waves-2 Waves
      span.icon.icon-ethereum Ethereum
      span.icon.icon-reactjs ReactJS
      span.icon.icon-solidity Solidity
      span.icon.icon-ride Ride
</template>

<style lang="scss" scoped>
@import "../../assets/scss/mixins/media.scss";
@import "../../assets/scss/mixins/main.scss";

.section {
  display: none;
  &-third {
    margin-top: 80px;

    @include b(mobile) {
      margin-top: 0px;
    }

    .container {
      max-width: 990px;

      .title {
        &-lg {
          margin-bottom: 80px;

          @include b(mobile) {
            margin-bottom: 20px;
          }
        }
      }
    }

    &-items {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      @include b(650) {
        justify-content: space-evenly;
        margin: 0 0 0 -20px;
      }

      @include b(mobile) {
        justify-content: space-evenly;
        margin: 0 -20px;
      }

      * {
        padding-right: 70px;
        padding-top: 15px;
        padding-bottom: 15px;
        border-right: 0.5px solid #585858;
        justify-content: center;
        text-align: center;
        font-family: "Syncopate", sans-serif;
        color: var(--color-text);
        @include rem(10);

        @include b(990) {
          padding-right: 6.5%;
        }

        @include b(990) {
          padding-right: 6.5%;
        }

        @include b(tablet) {
          padding-right: 5.5%;
        }

        @include b(650) {
          padding-right: 0;
          border-right: none;
          width: 90px;
        }

        &:nth-last-child(1) {
          border-right: none;
          width: 120px;
        }
      }
    }
  }
}
</style>
