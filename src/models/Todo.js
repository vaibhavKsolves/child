import { model, Model, prop } from "mobx-keystone";

export const Todo = model("Todo")(
  class extends Model({
    id: prop(),
    text: prop(),
    completed: prop(false),
  }) {
    toggle() {
      this.completed = !this.completed;
    }
  }
);
