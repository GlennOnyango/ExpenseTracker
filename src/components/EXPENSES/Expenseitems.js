import './Expenseitems.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import {useState }from 'react'
const Expenseitems = (props) =>{ 

    const [title,setTitle] = useState(props.title);

    const titleHandler = ()=>{
        setTitle("Update");
        
    }

    return( <Card className="expense-item">

        <ExpenseDate date={props.date}/>
        
        <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">{props.amount} KES</div>
        </div>
        <button onClick={titleHandler}>cHANGE TITLE</button>
    </Card>);
}

export default Expenseitems;