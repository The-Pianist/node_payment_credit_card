import './App.css';
import React from 'react';
import { ElementsConsumer } from '@stripe/react-stripe-js';
import StripeContainer from './Stripe/StripeContainer';
import {loadStripe} from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
const stripePromise = loadStripe("pk_test_51KpOBkDlrmIgsDL8ZfqYmi9TqKPTzDLqW7IGML4NGtLRoZ4rzddwKVVLTynZqyWnK0LC9GjEh8G4t08ikdmPVONs00Ed43pOlp");


function App() {
  return (
    <div className="App">
      <div className="flex justify-center mt-32">
      <StripeContainer/>
      </div>
    </div>
  );
}

export default App;
