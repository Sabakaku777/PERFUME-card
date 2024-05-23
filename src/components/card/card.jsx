import "./card.css";
import dough from "/images/image-product-desktop.jpg";

function Card() {
  return (
    <div className="main">
      <div className="container">
        <div className="firstSide">
          <img src={dough} className="dough"></img>
        </div>
        <div className="secondSide">
          <h2 className="perfume">PERFUME</h2>
          <h1 className="title">Gabrielle Essence Eau De Parfum</h1>
          <p className="text">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="price">
            <h2 className="sale">$149.99</h2>
            <span className="underLine">
              <u>$169.99</u>
            </span>
          </div>
          <button className="btn--buy">
            <i class="fa-solid fa-shop"></i>
            <span className="cartText">Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
