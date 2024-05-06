<script setup>
import { ref } from "vue";

// give each todo a unique id
let id = 0;

const newTodo = ref("");
const todos = ref([{ id: id++, text: "Tugas PBK" }]);

function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value });
  newTodo.value = "";
}

function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo);
  id = todos.value.length;
}
</script>

<template>
  <p>jumlah tugas: {{ id }}</p>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo" required placeholder="tugas baru" />
    <button>Tambah</button>
  </form>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>
</template>
<style scoped>
/* Style untuk jumlah todo */
p {
  text-align: center;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  margin-bottom: 20px;
}

/* Style untuk form tambah todo */
form {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

input {
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
  width: 60%;
  background-color: #ccc;
}

button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

/* Style untuk daftar todo */
ul {
  list-style: none;
  padding: 0;
  margin: 0 auto;
  max-width: 400px; /* Maksimum lebar daftar todo */
  border-radius: 5px;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: #ccc;
  border-bottom: 1px solid #eee;
  border-radius: 10px;
  border: 1px solid #ccc;
}

button.remove {
  background-color: #e74c3c;
  color: #fff;
  border: none;
  padding: 0.3rem 0.5rem;
  border-radius: 3px;
  cursor: pointer;
}
</style>
