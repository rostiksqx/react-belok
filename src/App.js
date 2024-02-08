import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Orders from './pages/Orders';

import { Route, Routes } from 'react-router-dom';

import React from 'react';
import axios from 'axios';

export const AppContext = React.createContext({});

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [favorites, setFavorites] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const [cartResponse, favoritesResponse, itemsResponse] = await Promise.all([
          axios.get('https://6593fef01493b0116069a92a.mockapi.io/cart'),
          axios.get('https://659546a804335332df825ce2.mockapi.io/favorites'), 
          axios.get('https://6593fef01493b0116069a92a.mockapi.io/items')
        ]);
        
        setIsLoading(false);

        setCartItems(cartResponse.data);
        setFavorites(favoritesResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        alert('Ошибка при получении данных');
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const onAddToCart = async (cartObj) => {
    try {
      const findItem = cartItems.find(item => Number(item.parentId) === Number(cartObj.id));
      if (findItem){
        setCartItems(prev => prev.filter(item => Number(item.parentId) !== Number(cartObj.id)));
        await axios.delete(`https://6593fef01493b0116069a92a.mockapi.io/cart/${findItem.id}`);
      } else {
        setCartItems(prev => [...prev, cartObj]);
        const { data } = await axios.post('https://6593fef01493b0116069a92a.mockapi.io/cart', cartObj);
        setCartItems((prev) => prev.map((item) => {
          if (item.parentId === data.parentId) {
            return {
              ...item,
              id: data.id
            };
          }
          return item;
        }),
        );
      }
    } catch (error) {
      alert('Не удалось добавить в корзину');
      console.log(error);
    }
  };

  const onRemoveItems = (id) => {
    try {
      axios.delete(`https://6593fef01493b0116069a92a.mockapi.io/cart/${id}`);
      setCartItems((prev) => prev.filter(item => item.id !== id));
    } catch (error) {
      alert('Не удалось удалить из корзины');
      console.error(error);
    }
  }

  const onAddToFavorite = async (obj) => {
    try {
      const findItem = favorites.find(favObj => favObj.imageUrl === obj.imageUrl);
      if (findItem) {
        await axios.delete(`https://659546a804335332df825ce2.mockapi.io/favorites/${findItem.id}`);
        setFavorites((prev) => prev.filter(item => item.id !== findItem.id));
      } else {
        const { data } = await axios.post('https://659546a804335332df825ce2.mockapi.io/favorites', obj);
        setFavorites(prev => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в избранное');
      console.error(error);
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => obj.parentId === id)
  };

  const isItemAddedToFavorites = (id) => {
    return favorites.some((obj) => obj.parentId === id);
  };

  return (
    <AppContext.Provider value={{ 
        cartItems, 
        favorites, 
        items,
        cartOpened,
        isItemAdded, 
        isItemAddedToFavorites,
        onAddToFavorite, 
        onAddToCart,
        setCartOpened,
        onRemoveItems,
        setCartItems,
      }} >
      <div className="wrapper clear">
        <Drawer />
        <Header />
        
        <Routes>
          <Route path="/" element=
          {
            <Home 
              searchValue={searchValue}
              onChangeSearchInput={onChangeSearchInput}
              isLoading={isLoading}
            />
          } 
          />

          <Route path="/favorites" element=
          {
            <Favorites />
          } 
          />

          <Route path="/orders" element=
          {
            <Orders />
          } 
          />
        </Routes>      
      </div>
    </AppContext.Provider>
  );
}

export default App;
