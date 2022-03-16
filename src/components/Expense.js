import Expenseitems from "./Expenseitems";
import "./Expense.css";
function Expense(props){

    return(
        <card className="expense">
            <Expenseitems title={props.expenses_most[0].title} amount={props.expenses_most[0].amount} date={props.expenses_most[0].date}/>
            <Expenseitems title={props.expenses_most[1].title} amount={props.expenses_most[1].amount} date={props.expenses_most[1].date}/>
            <Expenseitems title={props.expenses_most[2].title} amount={props.expenses_most[2].amount} date={props.expenses_most[2].date}/>

        </card>
    );
}
export default Expense;