import React,{useState} from 'react';
import Expenseitems from "./Expenseitems";
import "./Expense.css";
import ExpensesFilter from "../NewExpense/ExpenseFilter";
import Card from "../UI/Card";
const Expense = (props)=>{


    const [enteredfilter, setFilter] = useState('2020');

    const getFilter = filter =>{

        setFilter(filter);
        console.log(enteredfilter);
      }

    return(
        <Card className="expense">

            <ExpensesFilter selectedFilter={enteredfilter} onFilter={getFilter}/>
            <Expenseitems title={props.expenses_most[0].title} amount={props.expenses_most[0].amount} date={props.expenses_most[0].date}/>
            <Expenseitems title={props.expenses_most[1].title} amount={props.expenses_most[1].amount} date={props.expenses_most[1].date}/>
            <Expenseitems title={props.expenses_most[2].title} amount={props.expenses_most[2].amount} date={props.expenses_most[2].date}/>

        </Card>
    );
}
export default Expense;