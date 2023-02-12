import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import Button from "../../components/button/button.component";
import "./checkout.styles.scss";
import { usePaystackPayment } from "react-paystack";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  const { user } = useSelector((state) => state.authReducer);
  const navigate = useNavigate();
  const [config, setConfig] = useState({
    reference: new Date().getTime().toString(),
    email: user?.email,
    amount: cartTotal * 100,
    publicKey: "pk_test_28d2e0f6c806854b898be87d1d21f0759aa9520b",
  });

  useEffect(() => {
    setConfig({ ...config, amount: cartTotal * 100 });
  }, [cartTotal]);

  const onSuccess = (reference) => {
    navigate("/");
  };

  const onClose = () => {
    console.log("closed");
  };

  const initializePayment = usePaystackPayment(config);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems?.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className="total">Total: ₦{cartTotal}</span>
      <Button onClick={() => initializePayment(onSuccess, onClose)}>
        Pay now
      </Button>
    </div>
  );
};
export default Checkout;
