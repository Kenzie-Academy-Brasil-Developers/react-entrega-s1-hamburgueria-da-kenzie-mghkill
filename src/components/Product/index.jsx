import "./style.css";
const Product = ({ handleClick, showProducts }) => {
  return (
    <>
      <div className="box">
        {showProducts().map((prod, index) => (
          <div className="box-products" key={index}>
            <div className="box-img">
              <img src={prod.img} alt="hamburgueria" />
            </div>
            <div className="box-position">
              <div className="box-name space">{prod.name}</div>
              <div className="box-category space">{prod.category}</div>
              <div className="box-price space">R$ {prod.price.toFixed(2)}</div>
              <button onClick={() => handleClick(prod)}>Adicionar</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Product;
