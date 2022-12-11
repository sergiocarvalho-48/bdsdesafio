import './styles.css';

const SearchCard = () => {
  return (
    <div className="base-card2 search-card">
      <div className="search-card-text">
        <input className="search" type="busca" placeholder="Digite sua busca" color="#A7A7A7" font-size="14px"/>
        <button className="btn btn-secundary main-button" id="button-search">BUSCAR</button>
      </div>
    </div>
  );
};

export default SearchCard;
