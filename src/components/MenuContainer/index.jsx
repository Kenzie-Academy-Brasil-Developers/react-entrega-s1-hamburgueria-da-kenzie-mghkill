import Product from "../Product";
const MenuContainer = ({ products }) => {
  return (
    <div>
      <Product products={products} />
    </div>
  );
};
export default MenuContainer;
