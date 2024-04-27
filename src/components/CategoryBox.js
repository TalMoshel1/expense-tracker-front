import React from 'react'
import 'boxicons';

export default function CategoryBox({data}) {

  return (
    <section style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <div style={{display: 'flex', flexDirection: 'column' }}>
        <div>Income</div>
        <div>$2000</div>
        </div>
    </section>
  )
}

