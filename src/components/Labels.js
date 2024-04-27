import React, { useEffect, useState } from 'react'
import {default as api} from '../store/apiSlice';
import { getLabels } from '../helper/helper';
import CategoryBox from './CategoryBox';
import { chart_Data, getTotal } from '../helper/helper'
import Logo from './elements/Image'
import Reducer from '../store/reducer'
import { useSelector } from 'react-redux';
import { getFullDate } from '../helper/helper';




export default function Labels() {


    let Transactions;
    let Available;
    const [currentTransactionsArray, setCurrentTransactionsArray] = useState([]);


    const selectTransactions = useSelector(state => state.transactions.transactions)

    useEffect(() => {
        setCurrentTransactionsArray(()=>{
            return selectTransactions
        });
    }, [selectTransactions]);






    /*              <h3 className='font-bold'>{Math.round(data.percent) ?? 0}%</h3>
*/
    


  return (
    <>
        {currentTransactionsArray && currentTransactionsArray.length > 0  && <>
            <Total data={currentTransactionsArray}></Total>
            { getLabels(currentTransactionsArray, 'type')?.map((v, i) => { return <LabelComponent key={i} data={v}></LabelComponent>})}
            </>}

        
    </>
  )
}


function Total({data}) {
    if (!data) return <></>
    return (
        <div className='labels' style={{borderRadius: '20px', padding: '1em', backgroundColor: 'white'}}>
            <div>
                <div className='text-md'>Available Balance</div>
                <h3  className='font-bold' style={{fontSize: '2rem'}}>${getTotal(data) ?? 0}</h3>
            </div>
        </div>
    )
}


function LabelComponent({ data }){
    if(!data) return <></>;
    return (
        <div className={`labels flex justify-between ${data.type} labelContainer`}>
            <div className="flex nameTotalContainer" >
                <h3 className='text-md'>{data.type ?? ''}</h3>
                <h3 className='font-bold' style={{fontSize: '2rem'}}>{data.total ?? 0}$</h3>
            </div>
            <div className='labelLogoContainer'>
                <Logo dataType={data.type} />
            </div>
        </div>
    )
}