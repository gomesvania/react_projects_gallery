import { useState } from 'react';

import './App.css';
import AddTodoForm from './components/AddTodoForm';
import Filter from './components/Filter';
import Search from './components/Search';
import Todo from './components/Todo';

const App = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('asc');
  const [todo, setTodo] = useState([
    {
      id: 1,
      description: 'Criar funcionalidade pesquisar produtos no sistema Mini Mercado Livre.',
      category: 'Estudo',
      isCompleted: false
    },
    {
      id: 2,
      description: 'Ir a academia.',
      category: 'Pessoal',
      isCompleted: false
    },
    {
      id: 3,
      description: 'Estudar React.',
      category: 'Estudo',
      isCompleted: false
    },
    {
      id: 4,
      description: 'Fazer os testes da task Modal de Filtros.',
      category: 'Trabalho',
      isCompleted: false
    },
  ]);

  const addTodo = (description, category) => {
    const newTodo = [
      ...todo,
      {
        id: Math.floor(Math.random() * 10000),
        description,
        category,
        isCompleted: false,
      },
    ];
    setTodo(newTodo);
  };

  const removeTodo = (id) => {
    const filtersTodo = todo.filter((todo) => 
      todo.id !== id ? todo : null
      );
      setTodo(filtersTodo);
  }

  const completeTodo = (id) => {
    const newTodo = todo.map((todo) => {
      if(todo.id === id) {
        todo.isCompleted = !todo.isCompleted
        return todo;
      }
      return todo;
    })
    setTodo(newTodo);
  };

  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} /> 
      <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>
      <div className='todo-list'>
        {todo
        .filter((todo) => filter === 'all' ? true :
          filter === 'completed' ? todo.isCompleted :
          !todo.isCompleted
        )
        .filter((todo) =>
          todo.description.toLowerCase().includes(search.toLowerCase())
          )
        .sort((element1, element2) => sort === 'ascendente' ? 
          element1.description.localeCompare(element2.description) :
          element2.description.localeCompare(element1.description)
        )
        .map((todo) => (
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
        ))}
      </div>
      <AddTodoForm addTodo={addTodo} />
    </div>
  )
}

export default App;
