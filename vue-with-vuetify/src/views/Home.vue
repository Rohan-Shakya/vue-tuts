<template>
  <div class="home">
    <v-text-field
      v-model="newTaskTitle"
      @keyup.enter="addTask"
      @click:append="addTask"
      class="px-3 pt-6"
      outlined
      label="Add Task"
      append-icon="mdi-plus"
      hide-details
      clearable
    ></v-text-field>
    <v-list flat class="mt-0">
      <transition name="switch" mode="out-in">
        <div v-if="tasks.length">
          <transition-group tag="ul" name="list" appear class="pa-0">
            <div v-for="task in tasks" :key="task.id">
              <v-list-item
                @click="doneTask(task.id)"
                :class="{ 'blue lighten-5': task.done }"
              >
                <template v-slot:default>
                  <v-list-item-action>
                    <v-checkbox
                      :input-value="task.done"
                      color="primary"
                    ></v-checkbox>
                  </v-list-item-action>

                  <v-list-item-content>
                    <v-list-item-title
                      :class="{ 'text-decoration-line-through': task.done }"
                      >{{ task.title }}</v-list-item-title
                    >
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-btn icon @click.stop="deleteTask(task.id)">
                      <v-icon color="primary lighten-1">mdi-delete</v-icon>
                    </v-btn>
                  </v-list-item-action>
                </template>
              </v-list-item>
              <v-divider></v-divider>
            </div>
          </transition-group>
        </div>
        <h3 v-else class="pa-6 text-center grey--text">
          Woohoo, nothing left todo!
        </h3>
      </transition>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      newTaskTitle: "",
      tasks: [],
    };
  },
  methods: {
    addTask() {
      const newTask = {
        id: Date.now(),
        title: this.newTaskTitle,
        done: false,
      };
      this.tasks = [newTask, ...this.tasks];
      this.newTaskTitle = "";
    },
    doneTask(id) {
      let task = this.tasks.find((task) => task.id === id);
      task.done = !task.done;
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
  },
};
</script>

<style scoped>
/* list transitions */
.list-enter-from {
  opacity: 0;
  transform: scale(0.6);
}
.list-enter-to {
  opacity: 1;
  transform: scale(1);
}
.list-enter-active {
  transition: all 0.4s ease;
}
.list-leave-from {
  opacity: 1;
  transform: scale(1);
}
.list-leave-to {
  opacity: 0;
  transform: scale(0.6);
}
.list-leave-active {
  position: absolute;
  transition: all 0.4s ease;
}
.list-move {
  transition: all 0.4s ease;
}
/* Switch transitions */
.switch-enter-from,
.switch-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
.switch-enter-to,
.switch-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.switch-enter-active,
.switch-leave-active {
  transition: all 0.5s ease;
}
</style>
