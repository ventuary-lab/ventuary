<template lang="pug">
  section.section.section-six
    .container#get-in-touch
      h2.title.title-lg Get in touch
      div.form-block
        form
          input(type='text', placeholder='Name').input
          input(type='email', placeholder='Email').input
          input(type='text', placeholder='Subject').input
          textarea(cols="10", rows="1", placeholder='Message').textarea
          div.form-block-buttons
            button(type='submit').form-button.btn.btn-border Send
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
  }
}
</style>
