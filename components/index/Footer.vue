<template lang="pug">
footer
  .container
    span
    a.logo-ft(href="/")
    a.link.footer-email(href="mailto:info@venlab.dev") info@venlab.dev
    .footer-menu
      .footer-menu-item
        span.footer-menu-title Products
        a.link(href="https://gravityhub.org") Gravity
        a.link(href="https://susy.one") SuSy
        a.link(href="https://neutrino.at") Neutrino
        a.link(href="https://beta.ventuary.space") Ventuary-DAO
        a.link(href="https://stepik.org/course/54415/promo#toc") Mastering Web 3.0
      .footer-menu-item
        span.footer-menu-title News
        a.link(href="https://medium.com/@Venlab.dev") Blog
        a.link(href="/") Brand Assets
      .footer-menu-item
        span.footer-menu-title Developers
        a.link(href="/") Whitepapers
        a.link(href="/") GitHub
    .footer-links
      .lang.page-lang
        .page-lang-select
          span.icon.link.page-lang-selected(
            v-on:click="openedLngList = !openedLngList",
            v-bind:class="[{ opened: openedLngList }, 'icon-' + currLanguage.symbol]"
          ) {{ currLanguage.title }}
          .page-lang-select-list(v-if="openedLngList")
            span.icon.link.page-lang-select-list-title(
              v-for="lng in languagesList",
              v-if="!lng['active']",
              v-on:click="setLanguage(lng)",
              :class="'icon-' + lng['lng']"
            ) {{ lng['title'] }}
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
    p.text.copyrate ©2020 Ventuary Lab Corporation Inc. All rights reserved.
</template>

<script>
export default {
  data: function () {
    return {
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
@import "../../assets/scss/mixins/image.scss";

footer {
  margin-bottom: 50px;

  .container {
    max-width: var(--container-max-width);
    padding: 50px 70px;

    @include b(desktop) {
      padding: 50px 40px;
    }

    @include b(mobile) {
      padding: 50px 20px;
    }

    .logo-ft {
      margin-bottom: 20px;
      position: relative;

      @include before-img(block, 340px, 260px, a) {
        background-image: url("~static/img/points.svg");
        top: -60px;
        left: -70px;
        z-index: -1;
        background-position: center;
        background-size: cover;

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

    .copyrate {
      @include rem(10);
      margin-top: 55px;
      font-family: "Syncopate", sans-serif;
      opacity: 0.6;
    }
  }

  .footer {
    &-email {
      text-transform: uppercase;
      @include rem(16);
      font-family: "Syncopate", sans-serif;

      @include b(mobile) {
        @include rem(14);
      }
    }

    &-social-links {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      flex-wrap: wrap;

      @include b(mobile) {
        display: grid;
        grid-template-columns: repeat(4, 30px);
        justify-content: space-between;
        grid-gap: 40px;
      }
    }

    &-links {
      margin-top: 50px;
      display: grid;
      grid-template-columns: 95px minmax(320px, 700px);
      grid-gap: 20px;
      justify-content: space-between;
      align-items: center;

      @include b(mobile) {
        display: flex;
        width: 100%;
      }

      .page-lang {
        visibility: hidden;
        @include b(mobile) {
          display: none;
        }

        &-select-list {
          top: -75px;
        }
      }
    }

    &-menu {
      display: flex;
      margin-top: 60px;
      justify-content: space-between;
      @include rem(12);
      font-family: "Syncopate", sans-serif;

      @include b(700) {
        display: none;
      }

      &-item {
        display: flex;
        flex-direction: column;
      }

      * {
        color: var(--color-text);
      }

      &-title {
        font-weight: bold;
        margin-bottom: 20px;
      }

      .link {
        text-transform: uppercase;
        margin-bottom: 15px;
      }
    }
  }
}
</style>