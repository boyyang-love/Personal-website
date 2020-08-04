<template>
  <div class="test"></div>
</template>

<script>
import { userouter } from "vue-router";

export default {
  setup() {
    const router = userouter();
    router.push("/");
  }
};
</script>

<style>
</style>