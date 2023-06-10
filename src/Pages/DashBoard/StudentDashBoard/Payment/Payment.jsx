import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);
const Payment = () => {
  const [data] = useLoaderData();
  return (
    <div className="w-full">
      <p className="font-bold text-2xl m-5">Price : {data?.price}</p>
      <Elements stripe={stripePromise}>
        <CheckoutForm item={data}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
