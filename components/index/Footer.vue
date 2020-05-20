<template lang="pug">
  footer
    div.container
      span.logo-ft
      a(href='mailto:info@venlab.dev').link.footer-email info@venlab.dev
      div.footer-menu
        div.footer-menu-item
          span.footer-menu-title Products
          a(href='/').link GravityHub
          a(href='/').link SuSy
          a(href='/').link Neutrino
          a(href='/').link Ventuary-DAO
          a(href='/').link Mastering Web 3.0
        div.footer-menu-item
          span.footer-menu-title Company
          a(href='/').link About
          a(href='/').link Research
          a(href='/').link Contacts
        div.footer-menu-item
          span.footer-menu-title News
          a(href='/').link Blog
          a(href='/').link Press Releases
          a(href='/').link Brand Assets
        div.footer-menu-item
          span.footer-menu-title Developers
          a(href='/').link Documentation
          a(href='/').link Whitepapers
      div.footer-links
        div.lang.page-lang
          div.page-lang-select
            span.icon.link.page-lang-selected(v-on:click="openedLngList = !openedLngList", v-bind:class="{ opened: openedLngList, 'icon-' + currLanguage.symbol: true }") {{ currLanguage.title }}
            div.page-lang-select-list
              span.icon.link.page-lang-select-list-title(v-for="lng in languagesList", v-if="!lng['active']", v-on:click="setLanguage(lng)", v-bind:class="{ 'icon-' + lng['lng']: true }") {{ lng['title'] }}
        div.footer-social-links
          a(href="/").link-icon.icon.icon-facebook
          a(href="/").link-icon.icon.icon-medium
          a(href="/").link-icon.icon.icon-twitter
          a(href="/").link-icon.icon.icon-linkedin
          a(href="/").link-icon.icon.icon-youtube
          a(href="/").link-icon.icon.icon-discord
          a(href="/").link-icon.icon.icon-reddit
          a(href="/").link-icon.icon.icon-github
      p.text.copyrate ©2020 Ventuary Lab Corporation Inc. All rights reserved.
</template>

<script>
export default {
  data: function() {
    return {
      currLanguage: {
        title: "Eng",
        symbol: "en"
      },
      openedLngList: false,
      languagesList: [
        {
          lng: "en",
          title: "Eng",
          active: true
        },
        {
          lng: "ru",
          title: "Rus",
          active: false
        }
      ]
    };
  },
  methods: {
    setLanguage: function(event) {
      this.currLanguage.title = event["title"];
      this.currLanguage.symbol = event["lng"];
      this.openedLngList = false;

      this.languagesList.map(lang => {
        if (lang["lng"] === event["lng"]) {
          lang["active"] = true;
        } else {
          lang["active"] = false;
        }
      });
      this.languagesList.sort((a, b) => {
        return b.active ? 1 : -1;
      });
    }
  }
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
        @include b(mobile) {
          display: none;
        }

        &-select-list {
          top: -175px;
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