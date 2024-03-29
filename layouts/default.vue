<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/index/Header.vue";
import Footer from "~/components/index/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  }
};
</script>

<style lang="scss">
@import "../assets/scss/mixins/image.scss";
@import "../assets/scss/mixins/media.scss";
@import "../assets/scss/mixins/main.scss";

@include font-face(
  Syncopate,
  "~static/fonts/Syncopate/Syncopate-Bold",
  bold,
  normal,
  ttf
);
@include font-face(
  Syncopate,
  "~static/fonts/Syncopate/Syncopate-Regular",
  normal,
  normal,
  ttf
);

@include font-face(
  Montserrat,
  "~static/fonts/Montserrat/Montserrat-Bold",
  bold,
  normal,
  ttf
);
@include font-face(
  Montserrat,
  "~static/fonts/Montserrat/Montserrat-Medium",
  500,
  normal,
  ttf
);
@include font-face(
  Montserrat,
  "~static/fonts/Montserrat/Montserrat-Regular",
  normal,
  normal,
  ttf
);

:root {
  --color-bg: #0f0d12;
  --color-title: #d7d7d7;
  --color-text: #d7d7d7;
  --color-link: #d7d7d7;
  --color-link-hover: #fff;
  --color-orange: #ff8e1e;
  --color-orange-accent: #e17f1d;

  --header-max-width: 1280px;
  --header-margin: 0 auto;
  --header-padding: 60px 70px 0px 70px;
  --header-margin-desktop-1: 20px auto 0px auto;
  --header-padding-desktop-1: 20px 70px 0 70px;
  --header-margin-desktop: 20px 0px 0px 0px;
  --header-padding-desktop: 20px 30px 0px 30px;
  --header-margin-mobile: 15px 0px 0px 0px;
  --header-padding-mobile: 15px 20px 0px 20px;

  --container-max-width: 1280px;
  --container-padding: 20px;
  --container-padding-laptop: 20px 20px;
  --container-padding-desktop: 20px 20px;
  --container-padding-tablet: 20px 40px;
  --container-padding-mobile: 20px 20px;

  --section-padding: 20px;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  background-color: var(--color-bg);
  font-family: "Montserrat", sans-serif;
  cursor: default;
}

img {
  max-width: 100%;
}

a {
  text-decoration: none;
}

a,
p,
.button,
span {
  transition: 0.4s ease;
  outline: none;
  margin: 0;
}

.link {
  color: var(--color-link);

  &:hover {
    color: var(--color-link-hover);
  }
}

a,
.link {
  cursor: pointer;

  &.icon {
    &:hover {
      &:after {
        transition: 0.4s ease;
        opacity: 0.7;
      }
    }
  }
}

.section {
  position: relative;

  // .container {
  //   position: absolute;
  //   width: 100%;
  //   left: 0px;
  //   right: 0px;
  // }
}

.form-block {
  &-buttons {
    margin-top: 40px;
    display: flex;
    justify-content: flex-end;
  }
}

.input,
.textarea {
  @include rem(16);
  color: var(--color-text);
  background: none;
  width: 100%;
  padding: 20px 0px;
  outline: none;
  margin: 0;
  border-radius: 0px;
  margin-bottom: 10px;
  border: none;
  box-shadow: none;
  border-bottom: 1px solid #474652;
  font-family: "Montserrat", sans-serif;
  transition: 0.4s ease;

  @include b(mobile) {
    @include rem(14);
  }

  &:focus {
    color: white;
    border-color: white;
  }
}

.form-button {
  max-width: 130px;
  width: 100%;
  text-transform: lowercase;
}

.text {
  display: inline-block;
  color: var(--color-text);
  @include rem(16);
  line-height: 25px;
}

.title {
  color: var(--color-title);
  display: inline-block;

  &-text {
    @include rem(25);
    font-weight: 800;
    line-height: 30px;
    letter-spacing: 1.3px;
    margin-bottom: 20px;

    @include b(mobile) {
      @include rem(20);
      line-height: 30px;
    }
  }

  &-lg {
    @include rem(46);
    font-family: "Syncopate", sans-serif;
    font-weight: bold;
    line-height: 69px;
    text-transform: uppercase;
    position: relative;

    @include b(desktop) {
      @include rem(33);
      line-height: 46px;
    }

    @include b(mobile) {
      @include rem(20);
      line-height: 28px;
      margin-bottom: 18px;
    }
  }

  &-bg {
    @include before-img(block, 400px, 330px, a) {
      background-image: url("~static/img/points.svg");
      top: -100px;
      z-index: -1;

      @include b(desktop) {
        width: 325px;
        height: 245px;
        background-size: cover;
        top: -80px;
      }

      @include b(mobile) {
        display: none;
      }
    }
  }

  @include b(mobile) {
    br {
      display: none;
    }
  }
}

.logo {
  display: block;

  &-hd {
    background: url("~static/img/logo-hd.svg") no-repeat center/contain;
    width: 80px;
    height: 30px;
  }

  &-ft {
    background: url("~static/img/logo-ft.svg");
    width: 105px;
    height: 64px;
    display: flex;
    background-repeat: no-repeat;
  }
}

.container {
  max-width: var(--container-width);
  padding: var(--container-padding);
  margin: 0 auto;

  @include b(laptop) {
    padding: var(--container-padding-laptop);
  }

  @include b(desktop) {
    padding: var(--container-padding-desktop);
  }

  @include b(tablet) {
    padding: var(--container-padding-tablet);
  }

  @include b(mobile) {
    padding: var(--container-padding-mobile);
  }
}

.icon {
  display: flex;
  align-items: center;

  &-waves-2 {
    flex-direction: column;

    @include before-img(block, 60px, 60px, r) {
      background-image: url("~static/img/icons/waves-logo.svg");
      background-position: center;
      background-size: contain;
      margin-bottom: 15px;
    }
  }

  &-ethereum {
    flex-direction: column;

    @include before-img(block, 39px, 60px, r) {
      background-image: url("~static/img/icons/ethereum-logo.svg");
      background-position: center;
      background-size: contain;
      margin-bottom: 15px;
    }
  }

  &-reactjs {
    flex-direction: column;

    @include before-img(block, 70px, 61px, r) {
      background-image: url("~static/img/icons/reactjs-logo.svg");
      background-position: center;
      background-size: contain;
      margin-bottom: 15px;
    }
  }

  &-solidity {
    flex-direction: column;

    @include before-img(block, 40px, 60px, r) {
      background-image: url("~static/img/icons/solidity-logo.svg");
      background-position: center;
      background-size: contain;
      margin-bottom: 15px;
    }
  }

  &-ride {
    flex-direction: column;

    @include before-img(block, 113px, 40px, r) {
      background-image: url("~static/img/icons/ride-logo.svg");
      background-position: center;
      background-size: contain;
      margin-bottom: 25px;
    }
  }

  &-waves {
    flex-direction: column;

    @include before-img(block, 60px, 60px, r) {
      background-image: url("~static/img/icons/waves-logo.svg");
      background-position: center;
      background-size: contain;
      margin-bottom: 10px;
    }
  }

  &-en {
    @include before-img(block, 18px, 18px, r) {
      background-image: url("~static/img/icons/eng.svg");
      background-position: center;
      background-size: contain;
    }
  }

  &-ru {
    @include before-img(block, 18px, 18px, r) {
      background-image: url("~static/img/icons/rus.svg");
      background-position: center;
      background-size: contain;
    }
  }

  &-circle {
    &-arrow-gray {
      @include after-img(block, 36px, 36px, r) {
        background-image: url("~static/img/icons/icon-circle-arrow-gray.svg");
        background-position: center;
        background-size: contain;
        margin-left: 15px;
      }
    }

    &-arrow-brown {
      @include after-img(block, 36px, 36px, r) {
        background-image: url("~static/img/icons/icon-circle-arrow-brown.svg");
        background-position: center;
        background-size: contain;
        margin-left: 15px;
      }
    }

    &-arrow-aqua {
      @include after-img(block, 36px, 36px, r) {
        background-image: url("~static/img/icons/icon-circle-arrow-aqua.svg");
        background-position: center;
        background-size: contain;
        margin-left: 15px;
      }
    }

    &-arrow-green {
      @include after-img(block, 36px, 36px, r) {
        background-image: url("~static/img/icons/icon-circle-arrow-green.svg");
        background-position: center;
        background-size: contain;
        margin-left: 15px;
      }
    }

    &-arrow-purple {
      @include after-img(block, 36px, 36px, r) {
        background-image: url("~static/img/icons/icon-circle-arrow-purple.svg");
        background-position: center;
        background-size: contain;
        margin-left: 15px;
      }
    }

    &-arrow-blue {
      @include after-img(block, 36px, 36px, r) {
        background-image: url("~static/img/icons/icon-circle-arrow-blue.svg");
        background-position: center;
        background-size: contain;
        margin-left: 15px;
      }
    }
  }

  &-facebook {
    @include after-img(block, 14px, 25px, r) {
      background-image: url("~static/img/icons/facebook.svg");
      background-position: center;
      background-size: contain;
    }
  }

  &-medium {
    @include after-img(block, 26px, 20px, r) {
      background-image: url("~static/img/icons/medium.svg");
      background-position: center;
      background-size: contain;
    }
  }

  &-twitter {
    @include after-img(block, 26px, 21px, r) {
      background-image: url("~static/img/icons/twitter.svg");
      background-position: center;
      background-size: contain;
    }
  }

  &-linkedin {
    @include after-img(block, 24px, 24px, r) {
      background-image: url("~static/img/icons/linkedin.svg");
      background-position: center;
      background-size: contain;
    }
  }

  &-youtube {
    @include after-img(block, 30px, 22px, r) {
      background-image: url("~static/img/icons/youtube.svg");
      background-position: center;
      background-size: contain;
    }
  }

  &-discord {
    @include after-img(block, 24px, 26px, r) {
      background-image: url("~static/img/icons/discord.svg");
      background-position: center;
      background-size: contain;
    }
  }

  &-reddit {
    @include after-img(block, 28px, 27px, r) {
      background-image: url("~static/img/icons/reddit.svg");
      background-position: center;
      background-size: contain;
    }
  }

  &-github {
    @include after-img(block, 27px, 27px, r) {
      background-image: url("~static/img/icons/github.svg");
      background-position: center;
      background-size: contain;
    }
  }
}

.btn {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text);

  &-border {
    padding: 10px 20px;
    background: none;
    border-radius: 5px;
    border: 1px solid #474652;
    transition: 0.4s ease;
    @include rem(10);
    font-family: "Syncopate", sans-serif;

    &:hover {
      color: white;
      border-color: white;
    }
  }

  &-close {
    position: absolute;
    top: 40px;
    right: 30px;
    width: 30px;
    cursor: pointer;

    &:hover {
      * {
        background-color: white;
      }
    }

    &-item {
      width: 100%;
      display: block;
      height: 2px;
      border-radius: 10px;
      background-color: #929292;
      margin-bottom: 5px;
      transition: 0.4s ease;

      &:nth-child(1) {
        transform: rotate(-45deg);
        margin: 0;
        margin-bottom: -2px;
      }

      &:nth-child(2) {
        transform: rotate(45deg);
        margin: 0;
        max-width: 100%;
      }
    }
  }
}

.page-lang {
  color: var(--color-text);
  position: relative;
  @include rem(10);
  font-family: "Syncopate", sans-serif;
  font-weight: normal;

  .icon {
    &:before {
      margin-right: 6px;
    }
  }

  &-select {
    &-list {
      position: absolute;
      flex-direction: column;
      margin-top: 10px;
      background-color: rgba(18, 18, 25, 0.98);
      border: 1px solid #676577;
      border-radius: 5px;
      padding: 10px 15px;
      position: absolute;
      top: 40px;
      left: 0px;
      min-width: 95px;
      z-index: 20;

      &-title {
        margin: 8px 0;
        width: 100%;
        cursor: pointer;
      }
    }
  }

  &-selected {
    border: 1px solid #676577;
    padding: 10px 10px;
    border-radius: 5px;

    &:hover {
      cursor: pointer;
    }

    &:after {
      content: "";
      display: block;
      width: 8px;
      height: 8px;
      border-width: 2px 2px 0px 0px;
      border-style: solid;
      border-color: white;
      transform: rotate(135deg);
      position: absolute;
      top: 13px;
      right: 10px;
      transition: 0.2s ease;

      @include b(mobile) {
        display: none;
      }
    }

    &.opened {
      &:after {
        transform: rotate(-45deg);
        top: 16px;
      }
    }
  }
}
</style>
