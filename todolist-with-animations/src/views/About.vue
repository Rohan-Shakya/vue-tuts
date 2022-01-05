<template>
  <div class="about">
    <transition
      name="fade"
      appear
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
    >
      <h1>About</h1>
    </transition>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam
      officia possimus delectus inventore quod quisquam culpa voluptas iusto,
      quae maiores quo dolorum, corporis laboriosam a dolore consequatur
      assumenda nam!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam
      officia possimus delectus inventore quod quisquam culpa voluptas iusto,
      quae maiores quo dolorum, corporis laboriosam a dolore consequatur
      assumenda nam!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam
      officia possimus delectus inventore quod quisquam culpa voluptas iusto,
      quae maiores quo dolorum, corporis laboriosam a dolore consequatur
      assumenda nam!
    </p>
  </div>
</template>

<script>
export default {
  setup() {
    const beforeEnter = (el) => {
      console.log("Before Enter", el);
    };
    const enter = (el) => {
      console.log("Enter", el);
    };
    const afterEnter = (el) => {
      el.style.color = "green";
      console.log("After Enter", el);
    };

    const beforeLeave = (el) => {
      el.style.color = "red";
      console.log("Before Leave", el);
    };
    const leave = (el) => {
      console.log("Leave", el);
    };
    const afterLeave = (el) => {
      console.log("After Leave", el);
    };

    return {
      beforeEnter,
      enter,
      afterEnter,
      beforeLeave,
      leave,
      afterLeave,
    };
  },
};
</script>

<style>
.about {
  max-width: 600px;
  margin: 20px auto;
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 3s ease;
}

.fade-leave-to {
  opacity: 0;
}

.fade-leave-active {
  transition: opacity 3s ease;
}
</style>
