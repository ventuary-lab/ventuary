<template lang="pug">
section.section.section-four
  #news.container
    a.link.title.title-lg.title-bg.icon.icon-circle-arrow-gray(
      href="https://medium.com/@Venlab.dev",
      target="_blank",
      style="font-size: 33px;"
    ) News
    .section-four-items
      .section-four-item
        .section-four-item-center
          img.item-news(src="img/susy.png")
          span.title.title-text SuSy: a blockchain-agnostic cross-chain assets transfer gateway…
          p.text Keywords: oracles, cross-chain, interoperability, interchain transfers, gravity&nbsp;protocol…
        a.link(
          href="https://medium.com/gravity-protocol/susy-a-blockchain-agnostic-cross-chain-asset-transfer-gateway-protocol-based-on-gravity-9d5b1550e5f4",
          target="_blank"
        ) See more
      .section-four-item
        .section-four-item-center
          img.item-news(src="img/1inch.png")
          span.title.title-text 1inch joins Gravity Network as interchain transfer provider for Ethereum ecosystem
          p.text We are excited to announce a collaboration between the Gravity protocol and 1inch…
        a.link(
          href="https://medium.com/gravity-protocol/1inch-joins-gravity-network-as-interchain-transfer-provider-for-ethereum-ecosystem-386bd80e746b",
          target="_blank"
        ) See more
      .section-four-item
        .section-four-item-center
          img.item-news(src="img/Neutrino & Band.png")
          span.title.title-text Neutrino Integrates Band Protocol’s Oracle To Secure Stablecoin Protocol
          p.text Neutrino and Band Protocol have collaborated on creating a secure oracle and independent…
        a.link(
          target="_blank",
          href="https://medium.com/neutrinoteam/neutrino-integrates-band-protocols-oracle-to-secure-stablecoin-protocol-a1aebf68f728"
        ) See more
</template>

<style lang="scss" scoped>
@import "../../assets/scss/mixins/media.scss";
@import "../../assets/scss/mixins/main.scss";
.section {
  &-four {
    margin-top: 80px;
    @include b(mobile) {
      margin-top: 0px;
    }
    .container {
      max-width: 1100px;
      .title {
        line-height: 17px;
        font-size: 14px;
        &-lg {
          margin-bottom: 80px;
          @include b(mobile) {
            margin-bottom: 20px;
          }
          &:after {
            margin-bottom: 5px;
          }
        }
      }
    }
    &-items {
      display: flex;
      justify-content: space-between;
      margin: 0 -10px;
    }
    &-item {
      display: flex;
      flex-wrap: wrap;
      border-radius: 5px;
      border: 1px solid #2b292c;
      padding: 30px 30px 30px 30px;
      max-width: 333px;
      width: 100%;
      min-height: 340px;
      margin: 0 10px;
      @include b(900) {
        max-width: 50%;
      }
      @include b(mobile) {
        max-width: 100%;
      }
      &:nth-child(2) {
        @include b(mobile) {
          display: none;
        }
      }
      &:nth-child(3) {
        @include b(900) {
          display: none;
        }
      }
      .text,
      .title {
        width: 100%;
        margin-bottom: 10px;
      }
      &-center {
        width: 100%;
      }
      &-bottom {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        width: 100%;
        margin-top: 15px;
      }
      .link {
        width: max-content;
        text-decoration: underline;
        text-align: end;
        margin-top: 10px;
        @include rem(14);
      }
      .item-news {
        width: 309px;
        height: 150px;
        border-radius: 5px;
        margin-bottom: 15px;
      }
    }
  }
}
</style>