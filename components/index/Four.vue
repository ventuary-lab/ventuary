<template lang="pug">
      import VueRssParser from "vue-rss-parser";
...
export default {
  name: "Demo",
  components: {
    VueRssParser
  },
  data() {
    return {
      feedUrl: "https://medium.com/feed/@gravity_protocol",
      name: "",
      limit: 5,
    };
  },
};
section.section.section-four
  #news.container
    a.link.title.title-lg.title-bg.icon.icon-circle-arrow-gray News
    .section-four-items
      .section-four-item
       div.section-four-item-center
            span.title.title-text New project SuSy
            p.text Our team is working on a very interesting project SuSy. Follow the news!
          div.section-four-item-bottom
            div.section-four-img
              img(src='img/susy-logo-news.svg', alt='susy logo').img
            a(href="/").link See more
        div.section-four-item
          div.section-four-item-center
            span.title.title-text New project GH
            p.text Our team is working on a very interesting project Gravity Hub. Follow the news!
          div.section-four-item-bottom
            div.section-four-img
              img(src='img/gravity-hub-logo.svg', alt='gravity hub logo').img
            a(href="/").link See more
        div.section-four-item
          div.section-four-item-center
            span.title.title-text New post
            p.text Our team is working on a very interesting project SuSy. Follow the news!
          div.section-four-item-bottom
            div.section-four-img
            a(href="/").link See more
</template>
<template>
  <VueRssParser :feedUrl="feedUrl" :name="name" :limit="limit" />
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
      padding: 50px 30px 40px 30px;
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
        @include rem(14);
      }
    }
  }
}
</style>
