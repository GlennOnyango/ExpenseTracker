import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props)=>{

    const new_expense = expense =>{

        props.onGetExpense(expense);

    }

    return <div className='new-expense'>
        <ExpenseForm onAddExpense={new_expense}/>

    </div>;
}

export default NewExpense;