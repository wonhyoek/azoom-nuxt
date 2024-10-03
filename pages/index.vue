<template>
  <div>
    <h1>ToDo 리스트</h1>
    <input v-model="newTodo" placeholder="할 일 입력" />
    <button @click="addTodo">추가</button>

    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <span :style="{ textDecoration: todo.completed ? 'line-through' : 'none' }">
          {{ todo.text }}
        </span>
        <button @click="toggleTodo(index)">완료</button>
        <button @click="removeTodo(index)">삭제</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useTodoStore } from '~/stores/todo'

const newTodo = ref<string>('') // TypeScript로 string 타입 지정
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
