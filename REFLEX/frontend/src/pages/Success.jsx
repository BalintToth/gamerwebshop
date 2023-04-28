import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { userRequest } from "../requestMethods";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { resetCart } from "../redux/cartRedux";

const Success = () => {
  const location = useLocation();
  const data = location.state.stripeData;
  const products = useSelector((state) => state.cart);
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/orders", {
          userId: currentUser._id,
          products: products.products.map((product) => ({
            productId: product._id,
            quantity: product.quantity,
          })),
          amount: data.amount,
          address: data.billing_details.address,
        });
        console.log(res.data)
        setOrderId(res.data._id);
      } catch (err){ console.log(err); }
    };
    data && createOrder();
  }, [products, data, currentUser]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}
      <Link to="/">
        <button style={{
          padding: 10,
          marginTop: 20,
          backgroundColor: "black",
          color: "white",
          fontWeight: 600,
          border: "black 2px solid",
          transition: "all 1s ease",
          cursor: "pointer",
        }} onClick={() => dispatch(resetCart())}>Go to Homepage</button>
      </Link>
    </div>
  );
};

export default Success;
