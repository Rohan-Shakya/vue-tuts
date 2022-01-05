<template>
  <div class="demo">
    <div>
      <p>{{ name }} {{ age }}</p>
      <button @click="changeName('Rohan')">Change Name</button>
      <button @click="changeAge('20')">Change Age</button>
    </div>
    <br />
    <div>
      <p>Reactive {{ fullName }} {{ userAge }}</p>
    </div>
    <div>
      <p>Ref {{ heroName }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from "vue";

export default defineComponent({
  name: "Demo",
  components: {},
  setup() {
    const state = reactive({
      fullName: "Rohan Shakya",
      userAge: 20 as string | number,
    });

    const heroName = ref<string>("Batman");

    return {
      heroName,
      ...toRefs(state),
    };
  },
  data() {
    return {
      name: "Vue",
      age: 25 as number | string,
    };
  },
  methods: {
    changeName(name: string) {
      this.name = name;
    },
    changeAge(age: string | number) {
      this.age = age;
    },
  },
});
</script>

<style></style>
