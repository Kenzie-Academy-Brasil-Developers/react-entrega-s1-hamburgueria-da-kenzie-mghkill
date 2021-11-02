import "./style.css";
const Filter = ({ inputValue, setInputValue }) => {
  return (
    <div className="filter-position">
      <div className="title">
        <h1>burguer</h1>
        <h2>Kenzie</h2>
      </div>
      <div className="input-box">
        <div className="input-header">
          <input
            placeholder="Buscar"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="filter-button" onClick={() => setInputValue("")}>
            Limpar
          </button>
        </div>
      </div>
    </div>
  );
};
export default Filter;
