import "./style.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Product = ({ handleClick, showProducts }) => {
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });
  return (
    <>
      <div className="box">
        {showProducts().map((prod, index) => (
          <div
            data-aos="zoom-out-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            className="box-products"
            key={index}
          >
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
