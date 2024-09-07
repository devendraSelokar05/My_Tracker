import React from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
const Expenses = (props) => {
    const item =props.item
  return (
 <div className='expenses'>
          <ExpenseItem 
        date={item[0].date}
        title={item[0].title}
        amount={item[0].amount}
      />
      <ExpenseItem 
        date={item[1].date}
        title={item[1].title}
        amount={item[1].amount}
      />
      <ExpenseItem 
        date={item[2].date}
        title={item[2].title}
        amount={item[2].amount}
      />
      <ExpenseItem 
        date={item[3].date}
        title={item[3].title}
        amount={item[3].amount}
      />

 </div>
  )
}

export default Expenses