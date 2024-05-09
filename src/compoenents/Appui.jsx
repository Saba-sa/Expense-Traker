import React, { useState } from "react";
import ExpensisList from "./ExpensisList";
import { IoMdAdd } from "react-icons/io";
import Chart from "./Chart";
import { useExpenseData } from "../Store/Expensestore";
import { useNavigate } from "react-router-dom";

const Appui = () => {
  const { total, spentAmo, setTotal } = useExpenseData();
  const [totalAmount, setTotalAmount] = useState(total);
  const [closeInput, setCloseInput] = useState(false);
  const navi = useNavigate();
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setTotal(totalAmount);
      setCloseInput(false);
    }
  };
  return (
    <div className="max-w-xl mx-auto my-6">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex p-3 items-center justify-between border-b-2 pt-6">
          <h1 className="text-2xl font-bold">Expense Traker</h1>
          <div className="flex items-center justify-between bg-blue-700 text-white px-3 py-1 rounded-md">
            <IoMdAdd />
            <button onClick={() => navi("/add")}>Add Expense</button>
          </div>
        </div>
        <div className="expense_money p-3 flex justify-between">
          <div
            className="border-2 border-blue-600 px-2"
            onClick={() => setCloseInput(true)}
          >
            <h1 className="text-lg font-semibold">Total Amount</h1>
            <h1 className="text-md font-semibold">PKR {total}</h1>
            {closeInput && (
              <input
                type="text"
                className="w-50 border-2 border-gray-400 mb-1"
                value={totalAmount}
                onChange={(e) => setTotalAmount(e.target.value)}
                onKeyPress={handleEnter}
              />
            )}
          </div>
          <div className="border-2 border-red-600 px-2">
            <h1 className="text-lg font-semibold">Total Spents</h1>
            <h1 className="text-md font-semibold">PKR {spentAmo}</h1>
          </div>
          <div
            className={`border-2 border-purple-600 px-2 ${
              total - spentAmo <= 0 && "bg-red-800 text-white"
            }`}
          >
            <h1 className="text-lg font-semibold">Total Remaining</h1>
            <h1 className="text-md font-semibold">PKR {total - spentAmo}</h1>
          </div>
        </div>
        <ExpensisList />
        <Chart />
      </div>
    </div>
  );
};

export default Appui;
