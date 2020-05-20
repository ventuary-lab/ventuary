<template lang="pug">
  section.section.section-cookies(v-if="!hideCookie")
    .container
      p.text We use cookies on our website. By continuing to use the site, or by clicking “I agree”, you consent to the use of cookies. For more info <a class="link" href="/">click here</a>.
      span.btn.btn-border(v-on:click="hideCookie = true") I agree
</template>

<script>
export default {
  data: function() {
    return {
      hideCookie: false
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/mixins/media.scss";
@import "../../assets/scss/mixins/main.scss";

.section {
  &-cookies {
    position: fixed;
    bottom: 10px;
    width: 100%;
    padding: 0 20px;
    z-index: 99;

    .container {
      max-width: var(--container-max-width);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      border: 1px solid #474652;
      background-color: var(--color-bg);

      @include b(mobile) {
        flex-direction: column;
        text-align: center;
      }

      .text {
        @include rem(12);
        line-height: 1.5;

        @include b(mobile) {
          margin-bottom: 15px;
        }
      }

      .link {
        text-decoration: underline;
      }

      .btn {
        margin-left: 30px;
        max-width: 95px;
        width: 100%;

        @include b(mobile) {
          max-width: 100%;
          margin: 0;
        }
      }
    }
  }
}
</style>