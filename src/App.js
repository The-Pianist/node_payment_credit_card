import './App.css';
import React from 'react';
import StripeContainer from './Stripe/StripeContainer';
import {loadStripe} from '@stripe/stripe-js';
const stripePromise = loadStripe("try your own if you want");


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
