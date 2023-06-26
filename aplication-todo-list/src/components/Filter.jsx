/* eslint-disable react/prop-types */
const Filter = ({ filter, setFilter, sort,  setSort }) => {
  return (
    <div className='filter'>
      <h2>Filtrar</h2>
      <div className='filter-options'>
        <div>
          <p>Status</p>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value='all'>Todas</option>
            <option value='completed'>Completas</option>
            <option value='incomplete'>Incompletas</option>
          </select>
        </div>
        <div>
          <p>Ordem alfabética</p>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value='ascendente'>Ascendente</option>
            <option value='descendente'>Descendente</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Filter;
