<template>
  <form @submit.prevent="handleSubmit">
    <label for="email">Email:</label>
    <input type="email" required v-model="email" />
    <label for="password">Password:</label>
    <input type="password" required v-model="password" />
    <div class="error" v-if="passwordError">{{ passwordError }}</div>

    <label for="role">Role:</label>
    <select v-model="role">
      <option value="developer">Web Developer</option>
      <option value="designer">Web Designer</option>
    </select>

    <div class="terms">
      <input type="checkbox" required v-model="terms" />
      <label for="terms">Accept terms and conditions</label>
    </div>

    <div>
      <div>
        <input v-model="names" value="rohan" type="checkbox" />
        <label for="names">React</label>
      </div>
      <div>
        <input v-model="names" value="shaun" type="checkbox" />
        <label for="names">Angular</label>
      </div>
      <div>
        <input v-model="names" value="vue" type="checkbox" />
        <label for="names">Vue</label>
      </div>
    </div>

    <div>
      <label for="skills">Skills</label>
      <input type="text" v-model="tempSkill" @keyup.alt="addSkill" />

      <ul v-for="skill in skills" :key="skill" class="pill">
        <li @click="deleteSkill(skill)">
          {{ skill }}
        </li>
      </ul>
    </div>

    <div class="submit">
      <button type="submit">Create an account</button>
    </div>
  </form>
  <p>Email: {{ email }}</p>
  <p>Password: {{ password }}</p>
  <p>Role: {{ role }}</p>
  <p>Accept: {{ terms }}</p>
  <p>Names: {{ names }}</p>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      passwordError: "",
      role: "",
      terms: false,
      names: [],
      skills: [],
      tempSkill: "",
    };
  },
  methods: {
    addSkill(e) {
      if (e.key === "," && this.tempSkill) {
        if (!this.skills.includes(this.tempSkill)) {
          this.skills.push(this.tempSkill);
        }
        this.tempSkill = "";
      }
    },
    deleteSkill(skill) {
      this.skills = this.skills.filter((item) => skill !== item);
    },
    handleSubmit() {
      this.passwordError =
        this.password.length > 5 ? "" : "Password must be atleast 6 chars long";

      if (!this.passwordError) {
        console.log({
          email: this.email,
          password: this.password,
          role: this.role,
          terms: this.terms,
          names: this.names,
          skills: this.skills,
          tempSkill: this.tempSkill,
        });
      }
    },
  },
};
</script>

<style scoped>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
  font-size: 18px;
}

label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}

input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}

ul {
  list-style: none;
}

.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}

button {
  background: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}

.submit {
  text-align: center;
}

.error {
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>
