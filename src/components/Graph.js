import React from 'react'
import { Pie } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
import Labels from './Labels';
import { chart_Data } from '../helper/helper'
import { useSelector } from 'react-redux';

Chart.register(ArcElement);

export default function Graph() {

  const selectTransactions = useSelector(state => state.transactions.transactions)


  const currentTransactionsArray = selectTransactions ?? [];


  let graphData;
  if (currentTransactionsArray.length > 0) {
    const updatedTransactionsArray = currentTransactionsArray?.map(tx => { 
      return {
        ...tx, 
        color: tx.type === 'Investment' ? '#33D1AB' : tx.type === 'Expense' ? '#FFC844' : '#BD7BFF'
      }
    });
    graphData = <Pie {...chart_Data(updatedTransactionsArray)}></Pie>;
  }

  return (
    <div className="flex justify-content max-w-xs mx-auto flex-col">
        <div className="item">
            <div className="chart relative">
                {graphData}
            </div>   

            <div className="flex flex-col py-10 gap-4">
                <Labels></Labels>
            </div> 
        </div>
    </div>
  )
}
