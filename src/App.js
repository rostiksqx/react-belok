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

  React.useEffect(() => {
    axios.get('https://6593fef01493b0116069a92a.mockapi.io/items')
    .then((res) => {
        setItems(res.data);
      });
    axios.get('https://6593fef01493b0116069a92a.mockapi.io/cart')
    .then((res) => {
        setCartItems(res.data);
      });
    axios.get('https://659546a804335332df825ce2.mockapi.io/favorites')
    .then((res) => {
      setFavorites(res.data);
      });
  }, []);

  const onAddToCart = (cartObj) => {
    axios.post('https://6593fef01493b0116069a92a.mockapi.io/cart', cartObj);
    setCartItems(prev => [...prev, cartObj]);
  };

  const onRemoveItems = (id) => {
    axios.delete(`https://6593fef01493b0116069a92a.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id));
  }

  const onAddToFavorite = async (cartObj) => {
    try {
      if (favorites.find(favObj => favObj.id === cartObj.id)){
        axios.delete(`https://659546a804335332df825ce2.mockapi.io/favorites/${cartObj.id}`);
        // setFavorites((prev) => prev.filter(item => item.id !== cartObj.id));
      } else {
        const { data } = await axios.post('https://659546a804335332df825ce2.mockapi.io/favorites', cartObj);
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
            onChangeSearchInput={onChangeSearchInput} 
            items={items} 
            onAddToFavorite={onAddToFavorite} 
            onAddToCart={onAddToCart} 
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
