<template lang="pug">
section#get-in-touch.section.section-six
  .container
    h2.title.title-lg Get in touch
    .form-block
      form(method="post")
        input.input(type="text", placeholder="Name", v-model="text")
        input.input(type="email", placeholder="Email", v-model="email")
        input.input(type="text", placeholder="Subject", v-model="subject")
        textarea.textarea(
          cols="10",
          rows="1",
          placeholder="Message",
          v-model="message"
        )
        .form-block-buttons
          button#sendform.form-button.btn.btn-border(
            type="submit",
            v-on:submit.prevent()
          ) Send
</template>
<script>
export default {
  el: "#sendform",
  data: {
    text: "",
    email: "",
    subject: "",
    message: "",
  },
  methods: {
    send: () => {
      console.log({ name: this.name, email: this.email, subject: this.subject, message: this.message, });
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
