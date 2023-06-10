import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);
const Payment = () => {
  const [data] = useLoaderData();
  const { price, _id } = data || {};
  console.log("price in payment", data);
  return (
    <div className="w-full">
      <p className="font-bold text-2xl m-5">Price : {price}</p>
      <Elements stripe={stripePromise}>
        <CheckoutForm price={price} id={_id}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
