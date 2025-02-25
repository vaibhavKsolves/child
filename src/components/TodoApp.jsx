import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { TodoStore } from "../stores/TodoStores";
import { Input, Button, List, Typography, Card } from "antd";

const { Text } = Typography;
const store = new TodoStore({});

const TodoApp = observer(() => {
  const [text, setText] = useState("");

  return (
    <Card
      title="📝 Todo List"
      variant="borderless"
      style={{
        maxWidth: 400,
        margin: "20px auto",
        padding: 20,
        backgroundColor: "#f9f9f9",
        borderRadius: 10,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div style={{ display: "flex", gap: 8 }}>
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task..."
          style={{ flex: 1 }}
        />
        <Button
          type="primary"
          onClick={() => {
            store.addTodo(text);
            setText(""); // Clear input
          }}
        >
          Add
        </Button>
      </div>

      <List
        style={{ marginTop: 16 }}
        bordered
        dataSource={Array.from(store.todos)}
        renderItem={(todo) => (
          <List.Item
            actions={[
              <Button danger size="small" onClick={() => store.removeTodo(todo.id)}>
                ❌
              </Button>,
            ]}
            style={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "#fff",
              padding: "8px 16px",
              borderRadius: 5,
            }}
          >
            <Text
              onClick={() => todo.toggle()}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
                fontSize: 16,
              }}
            >
              {todo.text}
            </Text>
          </List.Item>
        )}
      />
    </Card>
  );
});

export default TodoApp;
