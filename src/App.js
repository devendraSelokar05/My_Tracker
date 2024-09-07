import Expenses from "./components/Expenses";


function App() {
let expense = [
  {
  title: 'Bike expense',
  amount: 100,
  date: new Date('2024-03-12')
  },

  {
    title: 'Car expense',
    amount: 1000000,
    date: new Date('2024-03-13')
    },

    {
      title: 'Laptop',
      amount: 40000,
      date: new Date('2024-03-14')
      },

      {
        title: 'Iphone 15 Pro Max',
        amount: 100000,
        date: new Date('2024-03-15')
        }

]
  return (
    <>
    <h2>Let's Start Expense...!</h2>
    <Expenses item ={expense} />
    </>
  );
}

export default App;
