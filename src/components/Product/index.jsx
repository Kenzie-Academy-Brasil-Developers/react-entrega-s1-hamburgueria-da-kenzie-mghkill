import "./style.css";
const Product = ({ products }) => {
  console.log(products);
  return (
    <div>
      <div className="box">
        {products.map((prod, index) => (
          <div className="box-products" key={index}>
            <div className="box-img">
              <img src={prod.img} alt="hamburgueria" />
            </div>
            <div className="box-position">
              <div className="box-name space">{prod.name}</div>
              <div className="box-category space">{prod.category}</div>
              <div className="box-price space">{prod.price}</div>
              <button>Adicionar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Product;
