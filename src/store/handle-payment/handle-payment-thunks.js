import { createAsyncThunk } from "@reduxjs/toolkit";

import { CREATE_PAYMENT_INTENT_ENDPOINT } from "../../../netlify/api-endpoints/api-endpoints";

export const attemptPaymentAsync = createAsyncThunk(
  "attemptPayment",
  async ({ stripe, elements, catteryId, amount, name, email }, thunkAPI) => {
    try {
      if (!stripe || !elements) {
        throw new Error("Stripe has not loaded yet.");
      }
      const response = await fetch(CREATE_PAYMENT_INTENT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ catteryId, amount, email }),
      });

      if (!response.ok) {
        throw new Error(
          `Failed to create payment intent. 
        Error Received: ${response.statusText}`
        );
      }

      const { clientSecret } = await response.json();

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement("card"),
          billing_details: {
            name,
            email,
          },
        },
      });

      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
