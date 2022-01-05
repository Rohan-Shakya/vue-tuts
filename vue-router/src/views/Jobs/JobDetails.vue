<template>
  <div>
    <h1>Job Details</h1>
    <h3>The job id is {{ id }}</h3>
  </div>
</template>

<script>
export default {
  props: ["id"],
  //   data() {
  //     return {
  //       id: this.$route.params.id,
  //     };
  //   },
};
</script>

<style lang="scss" scoped></style>
