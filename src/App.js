import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

import { Route, Routes } from 'react-router-dom';

import React from 'react';
import axios from 'axios';


function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [favorites, setFavorites] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const cartResponse = await axios.get('https://6593fef01493b0116069a92a.mockapi.io/cart');
      const favoritesResponse = await axios.get('https://659546a804335332df825ce2.mockapi.io/favorites');
      const itemsResponse = await axios.get('https://6593fef01493b0116069a92a.mockapi.io/items');

      setIsLoading(false);

      setCartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setItems(itemsResponse.data);
    }

    fetchData();
  }, []);

  const onAddToCart = (cartObj) => {
    try {
      if (cartItems.find(item => Number(item.id) === Number(cartObj.id))){
        axios.delete(`https://6593fef01493b0116069a92a.mockapi.io/cart/${cartObj.id}`);
        setCartItems(prev => prev.filter(item => Number(item.id) !== Number(cartObj.id)));
      } else {
        axios.post('https://6593fef01493b0116069a92a.mockapi.io/cart', cartObj);
        setCartItems(prev => [...prev, cartObj]);
      }
    } catch (error) {
      alert('Не удалось добавить в корзину');
    }
  };

  const onRemoveItems = (id) => {
    axios.delete(`https://6593fef01493b0116069a92a.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id));
  }

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find(favObj => Number(favObj.id) === Number(obj.id))){
        axios.delete(`https://659546a804335332df825ce2.mockapi.io/favorites/${obj.id}`);
        setFavorites((prev) => prev.filter(item => Number(item.id) !== Number(obj.id)));
      } else {
        const { data } = await axios.post('https://659546a804335332df825ce2.mockapi.io/favorites', obj);
        setFavorites(prev => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в избранное');
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened ? <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItems} /> : null}
      <Header onClickCart={() => setCartOpened(true)} />
      
      <Routes>
        <Route path="/" element=
        {
          <Home 
            searchValue={searchValue}
            cartItems={cartItems}
            onChangeSearchInput={onChangeSearchInput}
            items={items}
            onAddToFavorite={onAddToFavorite}
            onAddToCart={onAddToCart}
            isLoading={isLoading}
          />
        } 
        />

        <Route path="/favorites" element=
        {
          <Favorites items={favorites} onAddToFavorite={onAddToFavorite} />
        } 
        />
      </Routes>      
    </div>
  );
}

export default App;
