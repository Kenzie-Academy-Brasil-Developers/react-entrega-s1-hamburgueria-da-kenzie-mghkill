import Product from "../Product";
import "./style.css";
const MenuContainer = ({
  total,
  currentSale,
  setCurrentSale,
  handleClick,
  showProducts,
}) => {
  const handleRemove = (prod) => {
    setCurrentSale(currentSale.filter((item) => item !== prod));
  };

  return (
    <div className="Conteiner">
      <Product
        handleClick={handleClick}
        showProducts={showProducts}
        currentSale={currentSale}
      />
      <div className="new-box">
        <div className="conteiner-box">
          <div className="price">Carrinho de compras</div>
          <div className="conteiner-price">
            {!currentSale.length ? (
              <>
                <h3>Sua sacola está vazia</h3>
                <p>Adicionar Itens</p>
              </>
            ) : (
              <>
                {currentSale.map((prod, index) => (
                  <div className="box-new-products" key={index}>
                    <div className="img">
                      <img src={prod.img} alt="hamburgueria" />
                    </div>
                    <div className="box-food">
                      <div className="box-name space">{prod.name}</div>
                      <div className="box-category space">{prod.category}</div>

                      <button onClick={() => handleRemove(prod)}>
                        Remover
                      </button>
                    </div>
                  </div>
                ))}
                <div className="total">
                  <p className="total-value">Total</p>
                  <p className="total-price">R$ {total.toFixed(2)}</p>
                </div>
                <button
                  className="button-total"
                  onClick={() => setCurrentSale([])}
                >
                  Remover tudo
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MenuContainer;
