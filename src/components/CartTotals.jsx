import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";

const CartTotals = ({ cart }) => {
  const { total_amount, shipping_fee } = useCartContext();

  let shipping;

  const verifyShippingFee = () => {
    cart.map((product) => {
      if (product.shipping) {
        shipping = 0;
      } else {
        shipping = shipping_fee;
      }
    });
    return shipping;
  };

  verifyShippingFee();

  let tempFee;
  if (total_amount < 1 || shipping == 0) {
    tempFee = 0;
  } else {
    tempFee = shipping_fee;
  }

  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            subtotal : <span>{formatPrice(total_amount)}</span>
          </h5>
          <p>
            shipping fee : <span>{formatPrice(tempFee)}</span>
          </p>
          <hr />
          <h4>
            order total : <span>{formatPrice(total_amount + tempFee)}</span>
          </h4>
        </article>
        {/* {myUser ? ( */}
        <Link to="/checkout" className="btn">
          proceed to checkout
        </Link>
        {/* ) : (
          <button type="button" className="btn" onClick={loginWithRedirect}>
            login
          </button>
        )} */}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
`;

export default CartTotals;
