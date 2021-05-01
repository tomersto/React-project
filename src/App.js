import logo from './logo.svg';
import './App.css'
import ExpenseItem from './components/Expenses/ExpanseItem'
import ExpenseList from './components/Expenses/ExpenseList'


const App = () => {
  const expenseItems = [
    {
      title: 'Meat Night',
      amount: `80₪`,
      date: new Date(2021, 5, 7)
    },
    {
      title: 'Gordos',
      amount: `90₪`,
      date: new Date(2021, 5, 15)
    },
    {
      title: 'Dominos',
      amount: "60₪",
      date: new Date(2021, 4, 9)
    },
    {
      title: 'Prego',
      amount: "30₪",
      date: new Date(2021, 3, 10)
    },
  ]
  return (
    <div className="App">
     <ExpenseList  expenseItems={expenseItems}/>
    </div>
  );
}

export default App;
