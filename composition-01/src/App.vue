<template>
  <section class="container">
    <h2>{{ uName }}</h2>
    <h2>{{ user.age }}</h2>
    <button @click="setAge">Set age</button>
    <div>
      <input type="text" placeholder="First Name" @input="setFirstName" />
      <input type="text" placeholder="Last Name" @input="setLastName" />
    </div>
  </section>
</template>

<script>
import {
  reactive,
  ref, computed
} from 'vue';

export default {
  setup() {
    const user = reactive({ name: 'Maximilian', age: 31 });

    function setNewAge() {
      user.age = 32;
    }

    const firstName = ref('fn');
    const lastName = ref('ln');

    function setFirstName(event) {
      firstName.value = event.target.value;
    }

    function setLastName(event) {
      lastName.value = event.target.value;
    }

    const uName = computed(function () {
      return firstName.value + ' ' + lastName.value;
    });

    return {
      user,
      setAge: setNewAge,
      uName,
      setFirstName,
      setLastName
    }
  }
}

</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>