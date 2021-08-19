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
          img.item-news(src="img/news/gton-any.png")
          span.title.title-text Anyswap partners with Graviton to expand its cross-chain market offering
          p.text Mutual support between the two projects in pursuit of enhancing cross-chain experience and liquidity on Anyswap will be the main focus of…
        a.link(
          href="https://medium.com/graviton-one/anyswap-partners-with-graviton-to-expand-its-cross-chain-market-offering-1bc31bd020d3",
          target="_blank"
        ) See more
      .section-four-item
        .section-four-item-center
          img.item-news(src="img/news/solanoid-news.png")
          span.title.title-text SuSy releases Solanoid, a testing framework for Solana Programs
          p.text This guide shows you how to use the Solanoid SDK to test the apps built on the Solana blockchain. <br /><br /> <br />
        a.link(
          href="https://medium.com/@OneSusy/susy-releases-solanoid-a-testing-framework-for-solana-programs-38c6fe7db91a",
          target="_blank"
        ) See more
      .section-four-item
        .section-four-item-center
          img.item-news(src="img/news/gton-ergo.png")
          span.title.title-text Ergo and Graviton partner up to foster multichain expansion of the two ecosystems
          p.text The two projects are teaming up for enhancing cross-chain experience, providing wider liquidity mining opportunities and expanding the…
        a.link(
          target="_blank",
          href="https://medium.com/graviton-one/ergo-and-graviton-partner-up-to-foster-multichain-expansion-of-the-two-ecosystems-48cbcf6c8048"
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