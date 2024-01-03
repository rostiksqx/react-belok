import Card from '../components/Card';

function Home({ searchValue, onChangeSearchInput, items, onAddToFavorite, onAddToCart }) {
    return (
        <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>{searchValue ? `Поиск по: "${searchValue}"` : "Все товары"}</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {
            items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((obj) => (
              <Card
                key={obj.title}
                onFavorite={(cartObj) => onAddToFavorite(obj)}
                onPlus={(cartObj) => onAddToCart(obj)}
                {...obj}
              />
            ))
          }
        </div>
      </div>
    );
}

export default Home;