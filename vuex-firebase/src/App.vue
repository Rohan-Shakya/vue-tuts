<template>
  <div class="container">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  setup() {},
  components: {
    Navbar,
  },
};
</script>

<style></style>
