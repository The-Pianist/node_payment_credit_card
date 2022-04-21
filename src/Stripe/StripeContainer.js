import React from 'react'
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const public_key="try your own if you want"
const stripeTestPromise=loadStripe(public_key)


const StripeContainer = () => {
  return (
    <Elements stripe={stripeTestPromise}>
        <CheckoutForm/>
    </Elements>
  )
}

export default StripeContainer