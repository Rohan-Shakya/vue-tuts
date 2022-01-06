import { createStore } from "vuex";

// firebase imports
import { auth } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

// export default createStore({
//   state: {
//     points: 1,
//   },
//   mutations: {
//     updatePoints(state, payload) {
//       state.points = state.points + payload;
//     },
//   },
//   actions: {},
//   modules: {},
// });

const store = createStore({
  state: {
    user: null,
    authIsReady: false,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
      console.log(state.user);
    },
    setAuthIsReady(state, payload) {
      state.authIsReady = payload;
    },
  },
  // Asynchronous Code
  actions: {
    async signup(context, { email, password }) {
      console.log("signup action");

      // async code
      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (res) {
        context.commit("setUser", res.user);
      } else {
        throw new Error("could not complete signup");
      }
    },
    async login(context, { email, password }) {
      console.log("login action");

      // async code
      const res = await signInWithEmailAndPassword(auth, email, password);
      if (res) {
        context.commit("setUser", res.user);
      } else {
        throw new Error("could not complete login");
      }
    },

    async logout(context) {
      console.log("Logout action");

      await signOut(auth);
      context.commit("setUser", null);
    },
  },
});

const unSub = onAuthStateChanged(auth, (user) => {
  store.commit("setAuthIsReady", true);
  store.commit("setUser", user);
  unSub();
});

export default store;
