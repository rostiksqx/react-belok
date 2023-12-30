import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import React from 'react';

const arr = [
  {title: 'Whey Gold Standard', price: "3 099", imageUrl: "/img/commodity/1.jpg"},
  {title: 'ZeroPro Protein', price: "1 720", imageUrl: "/img/commodity/2.png"},
  {title: 'Platinum Hydrowhey', price: "3 199", imageUrl: "/img/commodity/3.jpg"},
  {title: 'Syntha-6', price: "2 998", imageUrl: "/img/commodity/4.jpg"},
];

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);

  return (
    <div className="wrapper clear">
      {cartOpened ? <Drawer onClose={() => setCartOpened(false)}  /> : null}
      <Header onClickCart={() => setCartOpened(true)} />
      
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все товары</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex">
          {
            arr.map((obj) => (
              <Card
                title={obj.title}
                price={obj.price}
                imageUrl={obj.imageUrl}
                onFavorite={() => console.log("Добавили в закладки")}
                onPlus={() => console.log("Нажали плюс")}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
