<template>
  <div>
    <h1>ToDo List</h1>
    <input v-model="newTodo" placeholder="やることを入力" />
    <button @click="addTodo">追加</button>

    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <span :style="{ textDecoration: todo.completed ? 'line-through' : 'none' }">
          {{ todo.text }}
        </span>
        <button @click="toggleTodo(index)">完了</button>
        <button @click="removeTodo(index)">削除</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useTodoStore } from '~/stores/todo'

const newTodo = ref<string>('')
const todoStore = useTodoStore()

const addTodo = () => {
  if (newTodo.value.trim()) {
    todoStore.addTodo({ text: newTodo.value, completed: false })
    newTodo.value = ''
  }
}

const removeTodo = (index: number) => {
  todoStore.removeTodo(index)
}

const toggleTodo = (index: number) => {
  todoStore.toggleTodo(index)
}

const todos = todoStore.todos
</script>
