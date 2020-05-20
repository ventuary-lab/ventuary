<template lang="pug">
  section.section.section-header
    .container#header
      h1.title.title-lg Decentralization <br> matters
      p.text Ventuary Lab is a leading Web3 & blockchain development team. Our solutions and products form the foundation for the open financial infrastructure of the future.
</template>

<style lang="scss" scoped>
@import "../../assets/scss/mixins/media.scss";
@import "../../assets/scss/mixins/main.scss";

.section {
  &-header {
    margin-top: 150px;

    @include b(mobile) {
      margin-top: 50px;
    }

    .container {
      max-width: 920px;
      padding: 70px 20px 40px 20px;
      background: url(../img/header-points.svg),
        url(../img/header-lines.svg) no-repeat right center/contain;

      @include b(mobile) {
        padding: 40px 20px 30px 20px;
        background: url(../img/header-lines.svg);
        background-position: 0 -20px;
        background-repeat: no-repeat;
        background-size: contain;
      }

      .title {
        margin-bottom: 20px;
      }

      .text {
        max-width: 550px;
        width: 100%;

        @include b(mobile) {
          @include rem(14);
          line-height: 20px;
        }
      }
    }
  }
}
</style>
