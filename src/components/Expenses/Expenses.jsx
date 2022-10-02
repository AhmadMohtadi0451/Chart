import React, { useState } from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "../Expenses/Expenses.css";
import Card from "../Card/Card.jsx";
import App from "../../App";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import Expenseslist from "../ExpensesList/ExpensesList";
import ExpensesChart from "../ExpensesChart/ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selectedYear={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <Expenseslist items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
