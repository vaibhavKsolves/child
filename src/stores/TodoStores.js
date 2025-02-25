import { model, Model, prop, arraySet } from "mobx-keystone";
import { Todo } from "../models/Todo";

export const TodoStore = model("TodoStore")(
  class extends Model({
    todos: prop(() => arraySet([])), // Use arraySet instead of array
  }) {
    addTodo(text) {
      const newTodo = new Todo({ id: Date.now().toString(), text });
      this.todos.add(newTodo); // arraySet uses `.add()` instead of `.push()`
    }

    removeTodo(id) {
      this.todos.delete([...this.todos].find(todo => todo.id === id)); // Use `.delete()`
    }
  }
);
