import ProductImg from 'assets/images/product1.png';
import ButtonCard2 from 'components/ButtonCard2';
import './styles.css';

const ProductCard = () => {
  return (
    <div className="base-card2 product-card">
      <div className="card-top-container">
        <img src={ProductImg} alt="Nome do produto" />
      </div>
      <div className="card-bottom-container">
        <h6>Audi Supra TT</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          nisi
        </p>
        <div>
            <ButtonCard2 />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
