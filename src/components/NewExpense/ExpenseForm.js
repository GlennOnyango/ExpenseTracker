import './ExpenseForm.css';
import { useState } from 'react';
const ExpenseForm = (props)=>{

    const [enteredtitle, setTitle] = useState('');
    const [enteredamount, setAmount] = useState('');
    const [entereddate, setDate] = useState('');

    // const [userInput,setInput] = useState({
    //     title:'',
    //     amount:'',
    //     date:'',
    // });

    const titleChangeHandler = (e)=>{
        setTitle(e.target.value);


        // setInput((pstate)=>{
        //     return {...pstate,title:e.target.title,}
        // });
    }
    const amountChangeHandler = (e)=>{
        setAmount(e.target.value);
    }
    const dateChangeHandler = (e)=>{
        setDate(e.target.value);
    }

    const submitHandler = (event) =>{
        event.preventDefault();
        const expenseData= {
            title:enteredtitle,
            amount:enteredamount,
            date:new Date(entereddate),
        };
        
        props.onAddExpense(expenseData);

        setTitle('');
        setAmount('');
        setDate('');
    }


    return <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type="text" value={enteredtitle} onChange={titleChangeHandler}/>
            </div>

            <div className='new-expense__control'>
                <label>Amount</label>
                <input type="number" min='0.01' step='0.01' value={enteredamount} onChange={amountChangeHandler}/>
            </div>

            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date" min='2019-01-01' max='2022-12-31' value={entereddate} onChange={dateChangeHandler}/>
            </div>

            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </div>
    </form>;
}

export default ExpenseForm;