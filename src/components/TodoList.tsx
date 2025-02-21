import React from 'react';
import { Trash2, Check, X } from 'lucide-react';
import { Todo } from '../types/todo';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
  return (
    <div className="w-full max-w-2xl space-y-4">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className={`flex items-center justify-between p-4 rounded-lg shadow-sm transition-all ${
            todo.completed ? 'bg-green-50' : 'bg-white'
          }`}
        >
          <div className="flex items-center gap-4">
            <button
              onClick={() => onToggle(todo.id)}
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                todo.completed
                  ? 'bg-green-500 border-green-500'
                  : 'border-gray-300 hover:border-green-500'
              }`}
            >
              {todo.completed && <Check size={14} className="text-white" />}
            </button>
            <span
              className={`text-lg ${
                todo.completed ? 'line-through text-gray-500' : 'text-gray-700'
              }`}
            >
              {todo.title}
            </span>
          </div>
          <button
            onClick={() => onDelete(todo.id)}
            className="text-gray-400 hover:text-red-500 transition-colors"
          >
            <Trash2 size={18} />
          </button>
        </div>
      ))}
      {todos.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No tasks yet. Add your first task above!
        </div>
      )}
    </div>
  );
}