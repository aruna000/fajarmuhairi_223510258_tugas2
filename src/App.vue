<script setup>
import { ref, onMounted, computed, watch } from "vue";

const todos = ref([]);
const name = ref("");

onMounted(() => {
  name.value = localStorage.getItem("name") || "";
  todos.value = JSON.parse(localStorage.getItem("todos")) || [];
});
</script>

<template>
  <body>
    <link
      rel="stylesheet"
      href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
    />
    <main class="app">
      <div class="container">
        <div class="input-field">
          <textarea placeholder="Enter your new todo"></textarea>
          <i class="uil uil-notes note-icon"></i>
        </div>

        <ul class="todoLists"></ul>

        <div class="pending-tasks">
          <span
            >You have <span class="pending-num"> no </span> tasks pending.</span
          >
          <button class="clear-button">Clear All</button>
        </div>
      </div>
    </main>
  </body>
</template>
