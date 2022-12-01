import "./App.css";
import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_EXPENSES = [
  { id: 1, title: "Book", amount: 294.67, date: new Date(2022, 2, 28) },
  { id: 2, title: "Video Game ", amount: 300.67, date: new Date(2021, 2, 11) },
  { id: 3, title: "car BMW", amount: 555.67, date: new Date(2020, 2, 20) },
  { id: 4, title: "Library", amount: 2500, date: new Date(2020, 2, 2) },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
