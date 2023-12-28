function App() {
  return (
    <div className="wrapper clear">
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
        <h1 className="mb-40">Все товары</h1>

        <div className="d-flex">
          <div className="card">
            <img width={133} height={113} src="/img/commodity/1.jpg" alt="Whey Protein"/>
            <h5>100% Whey Gold Standard (2,27 кг)</h5>
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
            <h5>ZeroPro Protein (1 кг)</h5>
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
            <h5>Platinum Hydrowhey (1,59 кг)</h5>
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
            <h5>Syntha-6 (2,27 кг)</h5>
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
