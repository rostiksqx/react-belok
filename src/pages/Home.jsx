import React from 'react';
import Card from '../components/Card';
import { AppContext } from '../App';

function Home({
  searchValue, 
  onChangeSearchInput,
  isLoading,
}) {
  const { items, onAddToCart, isItemAddedToFavorites } = React.useContext(AppContext);

  const renderItems = () => {
    const filtredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()),
    );
    return (isLoading ? [...Array(12)] : filtredItems).map((item, index) => (
      <Card
        key={index}
        // Cannot read property 'id' of undefined
        // favorited={isItemAddedToFavorites(item.id)}
        favorited={isItemAddedToFavorites(item)}
        onPlus={(obj) => onAddToCart(obj)}
        loading={isLoading}
        {...item}
      />
      ));
    };

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
          {renderItems()}
        </div>
      </div>
    );
}

export default Home;