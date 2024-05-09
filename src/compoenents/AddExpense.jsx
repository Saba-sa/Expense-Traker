import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useExpenseData } from "../Store/Expensestore";
import { v4 as uuid } from "uuid";
const AddExpense = () => {
  const tempid = uuid();
  const date = new Date();
  const navi = useNavigate();
  const { defaultData, setdefaultData } = useExpenseData();
  const [err, setErr] = useState(false);
  const [newDataToBeAdded, setnewDataToBeAdded] = useState({
    id: tempid.slice(0, 4),
    name: "",
    spent: 0,
    date: `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`,
  });
  console.log("newDataToBeAdded :>> ", newDataToBeAdded);
  const addItem = () => {
    if (
      Object.values(newDataToBeAdded).every(
        (val) => val !== "" && val !== null && val !== undefined
      )
    ) {
      setErr(false);
      setdefaultData([newDataToBeAdded, ...defaultData]);
      navi("/");
    } else {
      setErr(true);
      setErr(true);
    }
  };
  const closeModal = () => {
    navi("/");
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-hidden bg-gray-500 bg-opacity-75">
      <div className="bg-white rounded-lg overflow-hidden shadow-xl sm:max-w-lg w-full">
        {/* Modal content */}
        <div className="px-6 py-4">
          <div className="flex items-center justify-center">
            {/* Icon for newsletter */}
            <div className="flex-shrink-0 h-10 w-10 xl:w-36 rounded-full bg-blue-100">
              <img src={require("../assets/moneysave.png")} alt="saving icon" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">
                Adding New Expense
              </h3>
              {err && (
                <p className="text-red-500 text-sm mt-2">
                  All fields are required
                </p>
              )}
              <div className="mt-2">
                <h4 className="text-md font-semibold text-gray-500">
                  You Spent on Buying:
                </h4>
                <input
                  type="text"
                  name="spentOn"
                  id="spentOn"
                  value={newDataToBeAdded.name}
                  onChange={(e) =>
                    setnewDataToBeAdded({
                      ...newDataToBeAdded,
                      name: e.target.value,
                    })
                  }
                  className="border-2 border-gray-600 rounded-md px-2 py-1 focus:outline-none active:outline-none"
                />
              </div>
              <div className="mt-2">
                <h4 className="text-md font-semibold text-gray-500">
                  You Spent Amount is:
                </h4>
                <input
                  type="number"
                  name="spent"
                  id="spent"
                  value={newDataToBeAdded.spent}
                  onChange={(e) =>
                    setnewDataToBeAdded({
                      ...newDataToBeAdded,
                      spent: e.target.value,
                    })
                  }
                  className="border-2 border-gray-600 rounded-md px-2 py-1 focus:outline-none active:outline-none"
                />
              </div>
              <div className="mt-2">
                <h4 className="text-md font-semibold text-gray-500">
                  You Spent at:
                </h4>
                <input
                  type="date"
                  name="spent"
                  id="spent"
                  className="border-2 border-gray-600 rounded-md px-2 py-1 focus:outline-none active:outline-none"
                  value={newDataToBeAdded.date}
                  onChange={(e) =>
                    setnewDataToBeAdded({
                      ...newDataToBeAdded,
                      date: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>
        </div>
        {/* Modal footer */}
        <div className="bg-gray-50 px-4 py-3 sm:px-6 flex justify-end">
          <button
            onClick={() => addItem()}
            type="button"
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:w-auto sm:text-sm"
          >
            Add{" "}
          </button>
          <button
            onClick={() => closeModal()}
            type="button"
            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddExpense;
