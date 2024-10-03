// stores/todo.ts
import { defineStore } from 'pinia'

interface Todo {
  text: string
  completed: boolean
}

export const useTodoStore = defineStore('todo', {
  state: (): { todos: Todo[] } => ({
    todos: []
  }),
  actions: {
    addTodo(todo: Todo) {
      this.todos.push(todo)
    },
    removeTodo(index: number) {
      this.todos.splice(index, 1)
    },
    toggleTodo(index: number) {
      this.todos[index].completed = !this.todos[index].completed
    }
  }
})
