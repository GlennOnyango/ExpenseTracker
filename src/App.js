import Expense from "./components/EXPENSES/Expense";
import ExpensesFilter from "./components/NewExpense/ExpenseFilter";
import NewExpense from "./components/NewExpense/NewExpense";
const App = ()=> {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const getExpense = expense => {
    console.log(expense)
  }

  const getFilter = filter =>{

    console.log(filter);
  }

  return (
    <div>
      <ExpensesFilter onFilter={getFilter}/>
      <NewExpense onGetExpense={getExpense}/>
      <Expense expenses_most={expenses} />
    </div>
  );
}

export default App;
