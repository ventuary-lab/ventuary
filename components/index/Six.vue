<template lang="pug">
section#get-in-touch.section.section-six
  .container
    h2.title.title-lg Get in touch
    .form-block
      form(v-on:submit.prevent="submitMain")
        input.input(type="text", placeholder="Name", v-model="user.text")
        input.input(type="email", placeholder="Email", v-model="user.email")
        input.input(type="text", placeholder="Subject", v-model="user.subject")
        textarea.textarea(
          cols="10",
          rows="1",
          placeholder="Message",
          v-model="user.message"
        )
        .form-block-buttons
          button.form-button.btn.btn-border(type="submit") Send
</template>
<script>
export default {
  data() {
    return {
      user: {
        text: "",
        email: "",
        subject: "",
        message: "",
      },
    };
  },
  methods: {
    submitMain() {
      //
    },
  },
};
</script>


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

function newFunction() {
  return null
}
