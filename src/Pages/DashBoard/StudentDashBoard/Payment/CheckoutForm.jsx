import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useState } from "react";

import { useEffect } from "react";

import { AuthContext } from "../../../../Provider/AuthProvider/AuthProvider";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
const CheckoutForm = ({ item }) => {
  const {
    price,
    _id,
    image,
    classesName,
    seats,
    selectItemId,
    instructorName,
    email,
    
  } = item;
  console.log(item)
  const { user } = useContext(AuthContext);
  //   const [cart] = useCart();
  //   const total = cart.reduce((sum, item) => sum + item.price, 0);
  //   const price = parseFloat(total.toFixed(2));
  const [clientSecret, setClientSecret] = useState("");
  const [axiosSecure] = useAxiosSecure();
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [cardSuccess, setCardSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const newData = {value : 1};

  useEffect(() => {
    axiosSecure.post("/create-payment-intent", { price }).then((res) => {
      setClientSecret(res.data.clientSecret);
    });
  }, []);
  const handleSubmit = async (event) => {
    setProcessing(true);
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("error in payment ", error);
      setCardError(error.message);
    } else {
      setCardError("");
      console.log("payment method", paymentMethod);
      setProcessing(false);
    }
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "Anonymous",
            email: user?.email || "unknown",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    } else {
      console.log("in payment intent", paymentIntent);

      if (paymentIntent.status === "succeeded") {
        const transactionId = paymentIntent.id;
        setCardSuccess(transactionId);
        setProcessing(false);
        const payment = {
          email: user?.email,
          transactionId,
          price,
          image,
          classesName,
          instructorName,
          instructorEmail: email,
        };
        axiosSecure.post(`/enrolled/${selectItemId}`, newData)
        .then(data=>console.log(data))
        // fetch('http://localhost:5000/payments',{
        //   method : 'POST',
        //   headers : {
        //     'content-type' : 'application/json'
        //   },
        //   body: JSON.stringify(payment)
        // }).then(res=>res.json()).then(data=>console.log(data))
        axiosSecure.post(`/payments/${_id}`, payment).then((res) => {
          console.log(res);
        });
      }
    }
  };

  return (
    <>
      <form className="w-2/3 mx-auto py-20" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-primary btn-sm mt-4"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      <div className="flex justify-center mt-10">
        {cardError ? (
          <>
            <p className="text-red-500">{cardError}</p>
          </>
        ) : (
          ""
        )}
        {cardSuccess && cardSuccess ? (
          <p className="text-2xl font-bold text-green-500">{`You successfully completed with transactionId (  ${cardSuccess}  )`}</p>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default CheckoutForm;
