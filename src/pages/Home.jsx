import React from 'react';
import Card from '../components/Card';

function Home({ 
  cartItems, 
  searchValue, 
  onChangeSearchInput, 
  items, 
  onAddToFavorite, 
  onAddToCart,
  isLoading,
}) {
  const renderItems = () => {
    const filtredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()),
    );
    return (isLoading ? [...Array(12)] : filtredItems).map((item, index) => (
      <Card
        key={index}
        onFavorite={(obj) => onAddToFavorite(obj)}
        onPlus={(obj) => onAddToCart(obj)}
        added={cartItems.some((obj) => obj.id === item.id)}
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