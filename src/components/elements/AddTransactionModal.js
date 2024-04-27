
import React, { Children } from 'react'
import Form from '../Form'


export function AddTransactionModal({toggleOff}) {

    return <>
    <div className='overlay' style={{position: 'fixed', backgroundColor: 'rgba(0,0,0,0.2)', top: 0, bottom: 0, right: 0, left: 0, zIndex: 1}} onClick={()=>toggleOff()}></div>
        <div className='modal'>

            <Form toggleOff={toggleOff}/>

        </div>

    </>
    }

