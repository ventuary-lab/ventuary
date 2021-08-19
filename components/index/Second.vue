<template lang="pug">
section#products.section.section-second
  .container
    h2.title.title-lg.title-bg Products
    .section-second-item.item-duo
      .section-second-item-img
      .section-second-item-info
        a.link.title.title-text.icon.icon-circle-arrow-brown(
          href="https://gravity.tech",
          target="_blank"
        ) Gravity Protocol
        .section-second-item-info-wrap
          .section-second-item-info-content
            p.text Gravity Protocol is a blockchain-agnostic oracle system that supports communication of blockchains with the outside world, cross-chain communication, and side chains within a single unified structure.
    .section-second-item.item-reverce
      .section-second-item-img
      .section-second-item-info
        a.link.title.title-text.icon.icon-circle-arrow-purple(
          href="https://neutrino.at",
          target="_blank"
        ) Neutrino Protocol
        p.text Neutrino Protocol is an algorithmic price-stable cryptocurrency protocol backed by Waves Platform’s native token.
        p.text The Protocol allows for the creation of stablecoins tied to a specific real world asset, such as national currency or commodity. The first synthetic asset created with Neutrino Protocol is USD Neutrino (USDN).

    .section-second-item
      .section-second-item-img
      .section-second-item-info
        a.link.title.title-text.icon.icon-circle-arrow-aqua(
          href="https://graviton.one/",
          target="_blank"
        ) Graviton
        p.text A decentralised liquidity network for interchain digital assets

    .section-second-item.item-duo
      .section-second-item-img
      .section-second-item-info
        a.link.title.title-text.icon.icon-circle-arrow-blue(
          href="https://stepik.org/course/54415/promo#toc",
          target="_blank"
        ) Mastering Web 3.0
        .section-second-item-info-wrap
          .section-second-item-info-content
            p.text Mastering Web 3.0” is a popular MOOC for developers of new decentralized technologies, built in collaboration with Waves DevRel department.
          .section-second-item-info-content
</template>

<style lang="scss" scoped>
@import "../../assets/scss/mixins/media.scss";
@import "../../assets/scss/mixins/main.scss";

.section {
  &-second {
    margin-top: 80px;

    @include b(mobile) {
      margin-top: 0px;
    }

    .container {
      max-width: 1100px;

      .title {
        &-lg {
          margin-bottom: 50px;

          @include b(mobile) {
            margin-bottom: 20px;
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
      grid-gap: 90px;
      grid-template-areas: "img info";
      height: 315px;
      align-items: center;
      margin-bottom: 80px;

      @include b(tablet) {
        display: flex;
        flex-direction: column-reverse;
        height: auto;
        margin-bottom: 30px;
      }

      &:nth-child(2) {
        border-radius: 10px;
        .section-second-item-img {
          background: url("~static/img/Gravity_product@2x.png") no-repeat
            center/contain;

          @include b(tablet) {
            background: url("~static/img/gravity-hub-products-mob.png")
              no-repeat center/cover;
          }
        }
      }

      &:nth-child(3) {
        .section-second-item-img {
          background: url("~static/img/neutrino-product-logo.svg") no-repeat
              center/50%,
            url("~static/img/neutrino-product.png") no-repeat center/contain;

          @include b(tablet) {
            background: url("~static/img/neutrino-product-mob.png") no-repeat
              center/contain;
          }
        }
      }

      &:nth-child(4) {
        .section-second-item-img {
          background: url("~static/img/graviton.png");
          background-size: contain;
          @include b(tablet) {
            background: url("~static/img/graviton.png") no-repeat
              center/contain;
          }
        }
      }

      &:nth-child(5) {
        @include b(tablet) {
          margin-bottom: 0px;
        }

        .section-second-item-img {
          background: url("~static/img/web3-product-logo.svg") no-repeat
              center/30%,
            url("~static/img/web3-product.png") no-repeat center/contain;

          @include b(tablet) {
            background: url("~static/img/web3-product-mob.png") no-repeat
              center/contain;
          }
        }
      }

      &.item-reverce {
        grid-template-areas: "info img";

        @include b(tablet) {
          grid-template-areas: "info" "img";
        }
      }

      &.item-duo {
        grid-template-areas: "info info" "img img";
        height: auto;
        grid-gap: 20px;

        @include b(tablet) {
          grid-template-areas: "info" "img";
        }

        .section-second-item-img {
          padding-bottom: 39%;

          @include b(tablet) {
            padding-bottom: 60%;
          }
        }
      }

      &-info {
        grid-area: info;

        @include b(tablet) {
          margin-bottom: 20px;
        }

        &-wrap {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 30px;

          @include b(tablet) {
            grid-template-columns: 1fr;
            grid-gap: 10px;
          }
        }
      }

      &-img {
        grid-area: img;
        width: 100%;
        overflow: hidden;
        border-radius: 5px;
        height: 100%;

        @include b(tablet) {
          padding-bottom: 45.7%;
        }

        @include b(mobile) {
          padding-bottom: 45%;
        }
      }
    }
  }
}
</style>
