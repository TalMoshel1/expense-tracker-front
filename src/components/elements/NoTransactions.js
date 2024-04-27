import React from "react"
import './NoTransactions.css'
const NoTransactions = ({toggleOn}) => {
  return (
    <div onClick={()=>{toggleOn()}} className='no-transactions-container no-transactions-border-animation'>
      Click Here to add a transaction! 
      
    </div>
  )
};

export default NoTransactions;
