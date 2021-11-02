import { useState } from "react";
import MenuContainer from "./components/MenuContainer";
import Filter from "./components/Filter";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Hamburguer",
      category: "Sanduíches",
      price: 14.0,
      img: "https://i.ibb.co/fpVHnZL/hamburguer.png",
    },
    {
      id: 2,
      name: "X-Burguer",
      category: "Sanduíches",
      price: 16.0,
      img: "https://i.ibb.co/djbw6LV/x-burgue.png",
    },
    {
      id: 3,
      name: "Big Kenzie",
      category: "Sanduíches",
      price: 18.0,
      img: "https://i.ibb.co/FYBKCwn/big-kenzie.png",
    },
    {
      id: 4,
      name: "Fanta Guaraná",
      category: "Bebidas",
      price: 5.0,
      img: "https://i.ibb.co/cCjqmPM/fanta-guarana.png",
    },
    {
      id: 5,
      name: "Coca",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/fxCGP7k/coca-cola.png",
    },
    {
      id: 6,
      name: "Fanta",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png",
    },
  ]);
  const total = currentSale.reduce((acc, item) => acc + item.price, 0);

  const showProducts = () => {
    return inputValue === ""
      ? products.filter((item) => item)
      : products.filter((item) =>
          item.name
            .toLowerCase()
            .split()
            .map((item) => item)
            .join()
            .includes(
              inputValue
                .toLowerCase()
                .split()
                .map((item) => item)
                .join()
            )
        );
  };

  const handleClick = (product) => {
    currentSale.every((item) => item.id !== product.id) &&
      setCurrentSale([...currentSale, product]);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Filter inputValue={inputValue} setInputValue={setInputValue} />
      </header>

      <main className="App-main">
        <MenuContainer
          total={total}
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
          handleClick={handleClick}
          showProducts={showProducts}
          cartTotal={cartTotal}
          setCartTotal={setCartTotal}
        />
      </main>
    </div>
  );
}

export default App;
