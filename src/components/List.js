import React, { useEffect, useState } from 'react'
import 'boxicons';
import {default as api} from '../store/apiSlice';
import Reducer from '../store/reducer'
import  Logo  from './elements/Image'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {LabelComponent} from './Labels'
import {removeTransaction} from '../store/reducer'
import {store} from '../store/store'



export default function List() {
    const selectTransactions = useSelector(state => state.transactions.transactions);
    const [currentTransactionsArray, setCurrentTransactionsArray] = useState([]);

    const deleteTask = (e) => {
        dispatch(removeTransaction(e.target.dataset.id))
    }

    useEffect(() => {
        setCurrentTransactionsArray(selectTransactions);
    }, [selectTransactions]);


    const dispatch = useDispatch()



    return (
        <div className="flex flex-col py-6 gap-3">
            {currentTransactionsArray && currentTransactionsArray.length > 0  && (
                <>
                    <h1 className='py-4 font-bold text-xl'>Transaction History</h1>
                    {currentTransactionsArray.map((v, i) => (
                        <Transaction key={i} category={v} handler={deleteTask} />
                    ))}
                </>
            )}
        </div>
    )
}

function Transaction({ category, handler }) {
    if (!category) return null;
    return (
        <div className={`item-box labels flex justify-between ${category.type} transactionContainer`}>
            <div className="remove-item-box eraseContainer" onClick={handler} data-id={category.id ?? ''}>
                <svg style={{ pointerEvents: 'none' }} width="80px" height="80px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#000000" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"/></svg>
            </div>
            <div className='nameAmountContainer'>
                <h3>{category.date}</h3>
                <h3 className='text-md'>{category.name ?? ''}</h3>
                <h3 className='font-bold' style={{ fontSize: '2rem' }}>{category.amount}$</h3>
            </div>
            <div className='listLogoContainer'>
                <Logo dataType={category.type} />
            </div>
        </div>
    )
}
