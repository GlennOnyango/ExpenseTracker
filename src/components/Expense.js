import Expenseitems from "./Expenseitems";
function Expense(props){

    return(
        <div>
            <Expenseitems title={props.title} amount={props.amount} date={props.date}/>
        </div>
    );
}
export default Expense;