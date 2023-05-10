<template>
    <div class="todo-app">
      <div class="center">
        <img src="LOGO3D.png" alt="Gambar contoh">
        <h1>Daftar Tugas</h1>
      </div>
      <form @submit.prevent="addTodo">
        <div class="input-group">
          <input type="text" class="todo-input" v-model.trim="newTodo" placeholder="Tambahkan tugas baru">
          <button class="todo-button" type="submit">
            <i class="fas fa-plus-circle"></i>
            Tambah
          </button>
        </div>
        <div class="select">
          <select name="todos" class="filter-todo" v-model="filter">
            <option value="all">Semua</option>
            <option value="completed">Selesai</option>
            <option value="incomplete">Belum Selesai</option>
          </select>
        </div>
      </form>
      <div class="todo-container">
        <ul class="todo-list">
          <li v-for="(todo, index) in filteredTodos" :key="index" :class="{ 'completed': todo.completed }">
            <div class="todo">
              <div class="todo-text" @click="completeTodo(index)">{{ todo.text }}</div>
              <div class="todo-delete" @click="deleteTodo(index)"><i class="fas fa-trash-alt"></i></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newTodo: "",
        todos: [],
        filter: "all",
      };
    },
    computed: {
      filteredTodos() {
        switch (this.filter) {
          case "completed":
            return this.todos.filter((todo) => todo.completed);
          case "incomplete":
            return this.todos.filter((todo) => !todo.completed);
          default:
            return this.todos;
        }
      },
    },
    methods: {
      addTodo() {
        if (this.newTodo.trim() !== "") {
          this.todos.push({
            text: this.newTodo.trim(),
            completed: false,
          });
          this.newTodo = "";
          localStorage.setItem("todos", JSON.stringify(this.todos));
        }
      },
      deleteTodo(index) {
        this.todos.splice(index, 1);
        localStorage.setItem("todos", JSON.stringify(this.todos));
      },
      completeTodo(index) {
        this.todos[index].completed = !this.todos[index].completed;
        localStorage.setItem("todos", JSON.stringify(this.todos));
      },
    },
    mounted() {
      if (localStorage.getItem("todos")) {
        this.todos = JSON.parse(localStorage.getItem("todos"));
      }
    },
  };
  </script>
  
  <style>
  .todo-app {
    max-width: 600px;
    margin: 20px auto;
    font-family: Arial, sans-serif;
    border-radius: 5px;
    padding: 20px;
  }
  
  .center {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .todo-input {
    padding: 10px;
    width: 70%;
    border-radius: 4px;
    border: none;
    font-size: 16px;
    margin-right: 10px;
    box-shadow:0px 3px 5px rgba(0, 0, 0, 0.1);
}

.todo-button {
padding: 10px;
border: none;
border-radius: 4px;
background-color: #008CBA;
color: white;
font-size: 16px;
cursor: pointer;
box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
}

.select {
margin-top: 20px;
display: flex;
justify-content: center;
}

.filter-todo {
padding: 10px;
border-radius: 4px;
border: none;
font-size: 16px;
margin-right: 10px;
box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
}

.todo-container {
margin-top: 20px;
}

.todo-list {
list-style: none;
padding: 0;
margin: 0;
}

.todo {
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px;
border-bottom: 1px solid #ddd;
}

.completed {
text-decoration: line-through;
opacity: 0.5;
}

.todo-text {
flex-grow: 1;
cursor: pointer;
}

.todo-delete {
padding: 5px;
border-radius: 4px;
background-color: #f44336;
color: white;
font-size: 16px;
cursor: pointer;
transition: background-color 0.2s ease-in-out;
}

.todo-delete:hover {
background-color: #d32f2f;
}
</style>
  