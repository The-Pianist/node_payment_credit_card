import React from 'react'
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const public_key="pk_test_51KpOBkDlrmIgsDL8ZfqYmi9TqKPTzDLqW7IGML4NGtLRoZ4rzddwKVVLTynZqyWnK0LC9GjEh8G4t08ikdmPVONs00Ed43pOlp"
const stripeTestPromise=loadStripe(public_key)


const StripeContainer = () => {
  return (
    <Elements stripe={stripeTestPromise}>
        <CheckoutForm/>
    </Elements>
  )
}

export default StripeContainer