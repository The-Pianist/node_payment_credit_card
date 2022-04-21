import React, {useState} from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import axios from "axios"

const CheckoutForm = () => {
    const [amount, setAmount]= useState(0)
    const Stripe=useStripe()
    const elements=useElements()

    const handleAmountChange=(e)=>{
      setAmount(e.target.value)
    }

    const handleSubmit=async(event)=>{
      event.preventDefault();
      const {error, paymentMethod}=await Stripe.createPaymentMethod({
        type:"card",
        card: elements.getElement(CardElement),
      })
      if(!error){
        console.log("Stripe 23| token generated", paymentMethod);

        try{
          const {id} = paymentMethod;
          const response=await axios.post("http://localhost:8080/stripe/charge",{
            amount: parseInt(amount)*100, 
            id : id,
          })

          console.log("Stripe 35 | data", response.data.success)
          if(response.data.success){
            console.log("CheckoutForm.js 35 | payment success")
            alert("Payment success")
          }else{
            alert("payment fail")
          }
        }catch(error){
          console.log("CheckoutForm.js 28 | ", error)
        }

      }else{
        console.log(error.message)
      }
    }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-1/3">
      <input className="bg-transparent text-black p-2 h-10 mb-4" type="text" name="name" placeholder="Name" />
      <input type="email" className="bg-transparent text-black p-2 h-10 mb-4" name="email" placeholder="Email" />
      <input 
      className="bg-transparent text-black p-2 h-10 mb-4" 
      type="text" 
      name="amount" 
      placeholder="Amount" 
      onChange={handleAmountChange}/>
      <div id="card-element" className="bg-transparent text-white p-2 h-10 mb-4" />
      <CardElement/>
      <br></br>
      <button className="text-white bg-purple-900 p-4 rounded">Submit Payment</button>
    </form>
  )
}

export default CheckoutForm