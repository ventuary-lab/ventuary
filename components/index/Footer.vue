<template lang="pug">
footer
  .container
    span
    a.logo-ft(href="/")
    a.link.footer-email(href="mailto:info@venlab.dev") info@venlab.dev
    .footer-menu
      .footer-menu-item
        span.footer-menu-title Products
        a.link(href="https://gravityhub.org", target="_blank") Gravity Protocol
        a.link(href="https://neutrino.at", target="_blank") Neutrino Protocol
        //a.link(href="https://beta.ventuary.space") Ventuary-DAO
        a.link(href="https://nampi.one/", target="_blank") Nampi AI
        a.link(href="https://graviton.one/", target="_blank") Graviton
        a.link(
          href="https://stepik.org/course/54415/promo#toc",
          target="_blank"
        ) Mastering Web 3.0
      .footer-menu-item 
        span.footer-menu-title Company
        a.link(href="https://medium.com/@Venlab.dev", target="_blank") About
        a.link(
          href="https://arxiv.org/search/?searchtype=author&query=Pupyshev%2C+A"
        ) Research
        a.link(href="#what-we-do") Contacts
        a.link(href="#products") Products
      .footer-menu-item
        span.footer-menu-title News
        a.link(href="https://medium.com/@Venlab.dev", target="_blank") Blog
        //a.link(href="/") Brand Assets
      .footer-menu-item
        span.footer-menu-title Developers
        //a.link(href="/") Whitepapers
        a.link(href="https://github.com/ventuary-lab", target="_blank") GitHub
    .footer-links
      p.text.copyrate ©2021 Ventuary Lab
      .footer-social-links
        a.link-icon.icon.icon-medium(
          href="https://alexpupyshev.medium.com/",
          target="_blank"
        )
        a.link-icon.icon.icon-twitter(
          href="https://twitter.com/alekseipupyshev",
          target="_blank"
        )
        //a.link-icon.icon.icon-youtube(
          href="https://www.youtube.com/channel/UCEaZKrRGp0TmTWZN9OOJuzw")
        //a.link-icon.icon.icon-discord(href="https://discord.gg/nzghQ3")
        //a.link-icon.icon.icon-reddit(href="/")
        a.link-icon.icon.icon-github(
          href="https://github.com/ventuary-lab",
          target="_blank"
        )
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
      font-family: "Syncopate", sans-serif;
      opacity: 0.6;
      width: 250%;
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
        display: flex;
        justify-content: space-between;
      }
    }

    &-links {
      margin-top: 50px;
      display: flex;
      grid-template-columns: 95px minmax(320px, 700px);
      grid-gap: 20px;
      justify-content: space-between;
      align-items: center;

      @include b(mobile) {
        display: flex;
        width: 100%;
        flex-direction: column-reverse;
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