import './Expenseitems.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const Expenseitems = (props) =>{ 



    return( <Card className="expense-item">

        <ExpenseDate date={props.date}/>
        
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">{props.amount} KES</div>
        </div>
    </Card>);
}

export default Expenseitems;