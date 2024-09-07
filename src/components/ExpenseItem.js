import React from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'




const ExpenseItem = (props) => {
  // const formattedDate = props.date instanceof Date
  //   ? props.date.toLocaleDateString('en-US', {
  //       year: 'numeric',
  //       month: 'long',
  //       day: 'numeric'
  //     })
  //   : props.date;
  return (
    <>
        <div className='expense-item'>
          <ExpenseDate date={props.date}/>
            {/* <div>{formattedDate}</div> */}
            <div className='expense-item_description'>
                <h2>{props.title}</h2>
                <div className='expense-item_price'>Rs{props.amount}</div>
            </div>
        </div>

       

    </>
  )
}

export default ExpenseItem