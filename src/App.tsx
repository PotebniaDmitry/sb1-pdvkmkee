import React, { useState } from 'react';
import { CheckSquare } from 'lucide-react';
import { TodoList } from './components/TodoList';
import { TodoForm } from './components/TodoForm';
import { Todo, TodoFormData } from './types/todo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (data: TodoFormData) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      ...data,
      createdAt: new Date(),
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const handleToggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <CheckSquare size={32} className="text-blue-500" />
              <h1 className="text-3xl font-bold text-gray-800">
                Student Task Manager
              </h1>
            </div>
            <p className="text-gray-600">
              Keep track of your assignments and daily tasks
            </p>
          </div>

          <TodoForm onSubmit={handleAddTodo} />

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Your Tasks ({todos.length})
            </h2>
            <TodoList
              todos={todos}
              onToggle={handleToggleTodo}
              onDelete={handleDeleteTodo}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;