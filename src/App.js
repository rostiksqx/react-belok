function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <div className="drawer">
          <h2 className="d-flex justify-between mb-30">Корзина 
          <img className="cu-p" src="/img/btn-remove.svg" alt="Remove"/></h2>

          <div className="items">
            <div className="cartItem d-flex align-center mb-20">            
              <div 
                style={{ backgroundImage: 'url(/img/commodity/2.png)' }} 
                className="cartItemImg"></div>

              <div className="mr-20 flex">
                <p className="mb-5">ZeroPro Protein</p>
                <b>3 099 грн.</b>
              </div >
              <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
            </div>

            <div className="cartItem d-flex align-center">            
              <div 
                style={{ backgroundImage: 'url(/img/commodity/2.png)' }} 
                className="cartItemImg"></div>

              <div className="mr-20 flex">
                <p className="mb-5">ZeroPro Protein</p>
                <b>3 099 грн.</b>
              </div >
              <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
            </div>
          </div>

          <div className="cartTotalBlock">
            <ul>
              <li>
                <span>Всего:</span>
                <div></div>
                <b>6 200 грн.</b>
              </li>
            </ul>
            <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="Arrow"/></button>
          </div>
        </div>
      </div>


      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" />
          <div>
            <h3 className="text-uppercase">React Belok</h3>
            <p className="opacity-5">Магазин спортивных добавок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/cart.svg"/>          
            <span>1200 грн.</span>
          </li>
          <li className="mr-30">
            <img width={18} height={18} src="/img/heart.svg"/>
            <span>Закладки</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg"/>
            <span>Профиль</span>
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все товары</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search"/>
            <input placeholder="Поиск..."/>
          </div>
        </div>

        <div className="d-flex">
          <div className="card">
            <div className="favorite">
              <img src="/img/heart-unliked.svg" alt="Unliked"/>
            </div>
            <img width={133} height={113} src="/img/commodity/1.jpg" alt="Whey Protein"/>
            <h5>Whey Gold Standard</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>3 099 грн.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={113} src="/img/commodity/2.png" alt="Whey Protein"/>
            <h5>ZeroPro Protein</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>3 099 грн.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={113} src="/img/commodity/3.jpg" alt="Whey Protein"/>
            <h5>Platinum Hydrowhey</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>3 099 грн.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={113} src="/img/commodity/4.jpg" alt="Whey Protein"/>
            <h5>Syntha-6</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>3 099 грн.</b>
              </div>              
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
