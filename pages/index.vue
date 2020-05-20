<template>
  <div>
    <HeaderBlock />
    <First />
    <Second />
    <Third />
    <Four />
    <Five />
    <Six />
  </div>
</template>

<script>
import HeaderBlock from "~/components/index/HeaderBlock.vue";
import First from "~/components/index/First.vue";
import Second from "~/components/index/Second.vue";
import Third from "~/components/index/Third.vue";
import Four from "~/components/index/Four.vue";
import Five from "~/components/index/Five.vue";
import Six from "~/components/index/Six.vue";

export default {
  components: {
    HeaderBlock,
    First,
    Second,
    Third,
    Four,
    Five,
    Six,
  },
};
</script>
