import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

import React from 'react';
import axios from 'axios';


function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');

  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios.get(process.env.REACT_APP_Token_Items)
    .then((res) => {
        setItems(res.data);
      });
    axios.get('https://6593fef01493b0116069a92a.mockapi.io/cart')
    .then((res) => {
        setCartItems(res.data);
      });
  }, []);

  const onAddToCart = (cartObj) => {
    axios.post(process.env.REACT_APP_Token_Cart, cartObj);
    setCartItems(prev => [...prev, cartObj]);
  };

  const onRemoveItems = (id) => {
    axios.delete(`https://6593fef01493b0116069a92a.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id));
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened ? <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItems} /> : null}
      <Header onClickCart={() => setCartOpened(true)} />
      
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
                title={obj.title}
                price={obj.price}
                imageUrl={obj.imageUrl}
                onFavorite={() => console.log("Добавили в закладки")}
                onPlus={(cartObj) => onAddToCart(obj)}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
