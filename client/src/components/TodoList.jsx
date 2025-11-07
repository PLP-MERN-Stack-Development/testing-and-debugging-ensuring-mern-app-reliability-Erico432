import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../hooks/useAuth';

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const { token } = useAuth();

  const fetchTodos = async () => {
    const { data } = await axios.get('/api/todos', {
      headers: { Authorization: `Bearer ${token}` }
    });
    setTodos(data);
  };

  const addTodo = async (e) => {
    e.preventDefault();
    await axios.post('/api/todos', { text }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    setText('');
    fetchTodos();
  };

  useEffect(() => { fetchTodos(); }, []);

  return (
    <div>
      <h2>Todos</h2>
      <form onSubmit={addTodo}>
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="New todo" required />
        <button>Add</button>
      </form>
      <ul>
        {todos.map(t => <li key={t._id}>{t.text}</li>)}
      </ul>
    </div>
  );
}
