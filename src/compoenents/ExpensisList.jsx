import React from "react";
import { useExpenseData } from "../Store/Expensestore";
import { FaRegEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ExpensisList = () => {
  const { defaultData } = useExpenseData();
  const navi = useNavigate();
  return (
    <>
      <ul className="divide-y divide-gray-200">
        {defaultData.map((item) => {
          const { id, name, spent } = item;
          return (
            <li
              className="p-3 flex justify-between items-center user-card cursor-pointer"
              key={id}
              onClick={() => navi(`/SingleExpense/${id}`)}
            >
              <div className="flex items-center">
                <span className="ml-3 font-medium">{name}</span>
              </div>
              <div className="flex gap-3">
                <div>
                  <p>PKR {spent}</p>
                </div>
                <button className="text-gray-500 hover:text-gray-700">
                  <FaRegEye />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ExpensisList;
