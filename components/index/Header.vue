<template lang="pug">
header(v-bind:class="{ 'header-fixed': fixHeader }")
  .header
    span
    .logo
    a.logo-hd.header-logo(href="/") 
    .header-wrap(v-bind:class="{ 'header-menu-show': menuOpen }")
      .btn-close(v-on:click="menuOpen = false")
        span.btn-close-item
        span.btn-close-item
      scrollactive.header-menu(
        active-class="active",
        :offset="80",
        :duration="800",
        bezier-easing-value=".5,0,.35,1"
      )
        a.link.header-menu-link.scrollactive-item(
          href="#what-we-do",
          v-on:click="menuOpen = false"
        ) company
        a.link.header-menu-link.scrollactive-item(
          href="#products",
          v-on:click="menuOpen = false"
        ) products
        a.link.header-menu-link.scrollactive-item(
          href="#news",
          v-on:click="menuOpen = false"
        ) news
        a.link.header-menu-link.scrollactive-item(
          href="#get-in-touch",
          v-on:click="menuOpen = false"
        ) contacts
      .lang.page-lang
        .page-lang-select
          span.icon.link.page-lang-selected(
            v-on:click="openedLngList = !openedLngList",
            :class="[{ opened: openedLngList }, 'icon-' + currLanguage.symbol]"
          ) {{ currLanguage.title }}
          .page-lang-select-list(v-if="openedLngList")
            span.icon.link.page-lang-select-list-title(
              v-for="lng in languagesList",
              v-if="!lng['active']",
              v-on:click="setLanguage(lng)",
              :class="'icon-' + lng['lng']"
            ) {{ lng['title'] }}
      .header-footer
        .footer-social-links
          a.link-icon.icon.icon-facebook(
            href="https://www.facebook.com/@Venlab.dev"
          )
          a.link-icon.icon.icon-medium(href="https://medium.com/@Venlab.dev")
          a.link-icon.icon.icon-twitter(href="https://twitter.com/VenlabDev")
          a.link-icon.icon.icon-linkedin(
            href="https://www.linkedin.com/company/venlab-dev"
          )
          a.link-icon.icon.icon-youtube(
            href="https://www.youtube.com/channel/UCEaZKrRGp0TmTWZN9OOJuzw"
          )
          a.link-icon.icon.icon-discord(href="https://discord.gg/nzghQ3")
          a.link-icon.icon.icon-reddit(href="/")
          a.link-icon.icon.icon-github(href="/")
        span.logo-ft
        a.link.footer-email(href="mailto:info@venlab.dev") info@venlab.dev
        p.text.copyrate ©2020 Ventuary Lab Corporation Inc. All rights reserved.
    .header-menu-toggle(v-on:click="menuOpen = !menuOpen")
      span.header-menu-toggle-line
      span.header-menu-toggle-line
      span.header-menu-toggle-line
</template>

<script>
export default {
  data: function () {
    return {
      fixHeader: false,
      menuOpen: false,
      currLanguage: {
        title: "Eng",
        symbol: "en",
      },
      openedLngList: false,
      languagesList: [
        {
          lng: "en",
          title: "Eng",
          active: true,
        },
        {
          lng: "ru",
          title: "Rus",
          active: false,
        },
      ],
    };
  },
  mounted() {
    window.addEventListener("scroll", (event) => {
      window.scrollY > 60 ? (this.fixHeader = true) : (this.fixHeader = false);
    });
  },
  methods: {
    setLanguage: function (event) {
      this.currLanguage.title = event["title"];
      this.currLanguage.symbol = event["lng"];
      this.openedLngList = false;

      this.languagesList.map((lang) => {
        if (lang["lng"] === event["lng"]) {
          lang["active"] = true;
        } else {
          lang["active"] = false;
        }
      });
      this.languagesList.sort((a, b) => {
        return b.active ? 1 : -1;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/mixins/media.scss";
@import "../../assets/scss/mixins/main.scss";

header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;

  &.header-fixed {
    position: fixed;
    background-color: var(--color-bg);
    box-shadow: 0px 0px 8px -2px var(--color-bg);

    .header {
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }

  .header {
    width: 100%;
    display: grid;
    grid-template-columns: minmax(80px, 180px) 1fr;
    grid-gap: 10px;
    align-items: center;
    max-width: var(--header-max-width);
    margin: var(--header-margin);
    padding: var(--header-padding);

    @include b(1280) {
      margin: var(--header-margin-desktop-1);
      padding: var(--header-padding-desktop-1);
    }

    @include b(desktop) {
      grid-template-columns: minmax(80px, 130px) 1fr;
      margin: var(--header-margin-desktop);
      padding: var(--header-padding-desktop);
    }

    @include b(mobile) {
      display: flex;
      justify-content: space-between;
      margin: var(--header-margin-mobile);
      padding: var(--header-padding-mobile);
    }

    &-wrap {
      display: grid;
      grid-template-columns: 1fr minmax(90px, 95px);
      grid-gap: 40px;
      position: relative;

      @include b(mobile) {
        position: absolute;
        display: none;
        flex-direction: column;
        width: 100%;
        left: 0;
        right: 0;
        padding: 20px 30px 40px 30px;
        margin: 0 auto;
        background-color: #17151b;
        top: 0;
        overflow-y: scroll;
        height: 96vh;
      }

      .btn-close {
        display: none;

        @include b(mobile) {
          display: block;
        }
      }

      .page-lang {
        visibility: hidden;
        &-select {
          @include b(mobile) {
            display: flex;
            flex-wrap: wrap;
            margin: 30px 0;
          }

          &-list {
            @include b(mobile) {
              display: flex;
              flex-direction: row;
              position: relative;
              margin: 0 10px;
              padding: 0px 0px;
              top: 0;
              max-width: 100%;
              width: max-content;
              border: none;
              background: none;
              flex-wrap: wrap;
            }

            &-title {
              @include b(mobile) {
                margin: 10px 15px;
                width: max-content;
                cursor: pointer;
              }
            }
          }

          &-selected {
            @include b(mobile) {
              width: max-content;
              padding: 10px 10px;
            }
          }
        }
      }
    }

    &-footer {
      display: none;

      @include b(mobile) {
        display: block;
        margin-top: 20px;
      }

      .logo-ft {
        margin-top: 30px;
      }

      .footer {
        &-email {
          text-transform: uppercase;
          @include rem(14);
          font-family: "Syncopate", sans-serif;
          margin-top: 20px;
          display: block;
        }

        &-social-links {
          align-items: center;
          width: 100%;

          display: grid;
          grid-template-columns: repeat(4, 30px);
          justify-content: space-between;
          grid-gap: 40px;
        }

        &-links {
          margin-bottom: 50px;
          justify-content: space-between;
          align-items: center;

          display: flex;
          width: 100%;
        }
      }

      .copyrate {
        @include rem(10);
        margin-top: 20px;
        font-family: "Syncopate", sans-serif;
        opacity: 0.6;
        line-height: 18px;
      }
    }

    &-menu {
      display: flex;
      align-items: center;

      @include b(mobile) {
        flex-direction: column;
        align-items: baseline;
      }

      &-link {
        @include rem(12);
        position: relative;
        font-family: "Syncopate", sans-serif;
        font-weight: normal;
        line-height: 18px;

        @include b(tablet) {
          font-size: 1.55vw;
        }

        @include b(mobile) {
          @include rem(14);
          margin: 10px 0;
          font-weight: bold;
        }

        &:hover {
          &:after {
            color: var(--color-link);
            cursor: default;
          }
        }

        &:after {
          content: "/";
          margin: 0 30px;
          color: var(--color-link);
          cursor: default;

          @include b(desktop) {
            margin: 0 20px;
          }

          @include b(tablet) {
            margin: 0 10px;
          }

          @include b(mobile) {
            display: none;
          }
        }

        &:nth-last-child(1) {
          &:after {
            display: none;
          }
        }

        &.active {
          &:hover {
            &:before {
              width: 60px;
              background-color: #fff;
            }
          }

          &:before {
            content: "";
            display: block;
            bottom: -5px;
            left: 0;
            background-color: var(--color-link);
            position: absolute;
            width: 15px;
            height: 1px;
            transition: 0.4s ease;

            @include b(mobile) {
              display: none;
            }
          }
        }
      }

      &-show {
        @include b(mobile) {
          display: flex !important;
        }
      }

      &-toggle {
        width: 45px;
        cursor: pointer;
        display: none;

        @include b(mobile) {
          display: block;
        }

        &:hover {
          .header-menu-toggle-line:nth-child(2) {
            margin-left: 5px;
            background-color: var(--color-link-hover);
          }

          .header-menu-toggle-line:nth-child(3) {
            margin-left: 15px;
            background-color: var(--color-link-hover);
          }
        }

        &-line {
          width: 100%;
          display: block;
          height: 2px;
          border-radius: 10px;
          background-color: var(--color-text);
          margin-bottom: 5px;
          transition: 0.4s ease;

          &:nth-child(2) {
            max-width: 40px;
          }

          &:nth-child(3) {
            max-width: 30px;
          }
        }
      }
    }
  }
}
</style>
