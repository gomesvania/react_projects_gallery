import { useState} from 'react';

// eslint-disable-next-line react/prop-types
const AddTodoForm = ({ addTodo } ) => {
const [value, setValue] = useState('');
const [category, setCategory] = useState('');

const handleSubmit = (e) => {
  e.preventDefault();
  if (!value || !category) return;
  console.log(value, category);
  addTodo(value, category);
  setValue('');
  setCategory('');
}

  return (
    <div className='todo-form'>
      <h2>Criar tarefa</h2>
      <form onSubmit={handleSubmit}>
        <input type='text' 
              placeholder='Digite o título da sua tarefa'
              value={value}
              onChange={((e) => setValue(e.target.value))} />

        <select value={category} onChange={((e) => setCategory(e.target.value))}>
          <option value=''>Selecione uma categoria</option>
          <option value='Estudo'>Estudo</option>
          <option value='Pessoal'>Pessoal</option>
          <option value='Trabalho'>Trabalho</option>
        </select>
        <button type='submit'>Criar tarefa</button>
      </form>
    </div>
  )
}

export default AddTodoForm;