import React, { Children, useEffect, useState } from "react";
import { useContext, createContext } from "react";
import data from "../data/data.json";
const Expense = createContext();
const Expensestore = ({ children }) => {
  const [defaultData, setdefaultData] = useState(data.data);
  const [total, setTotal] = useState(600);
  const [spentAmo, setSpent] = useState(0);
  useEffect(() => {
    const spentAmount = defaultData.reduce((acc, val) => {
      return acc + parseInt(val.spent);
    }, 0);
    setSpent(spentAmount);
  }, [defaultData]);
  return (
    <Expense.Provider
      value={{ defaultData, setdefaultData, total, setTotal, spentAmo }}
    >
      {children}
    </Expense.Provider>
  );
};
const useExpenseData = () => {
  return useContext(Expense);
};
export { Expensestore, useExpenseData };
