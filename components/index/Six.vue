<template lang="pug">
section#get-in-touch.section.section-six
  .container
    h2.title.title-lg Get in touch
    .form-block
      form
        input.input(type="text", placeholder="Name")
        input.input(type="email", placeholder="Email")
        input.input(type="text", placeholder="Subject")
        textarea.textarea(cols="10", rows="1", placeholder="Message")
        .form-block-buttons
          button.form-button.btn.btn-border(type="submit") Send
</template>

<style lang="scss" scoped>
@import "../../assets/scss/mixins/media.scss";

.section {
  &-six {
    margin-top: 100px;

    @include b(mobile) {
      margin-top: 0px;
    }

    .container {
      max-width: 960px;

      .title {
        margin-bottom: 20px;
      }
    }

    .form-block {
      max-width: 615px;
    }
    .textarea {
      max-width: 615px;
    }
  }
}
</style>
