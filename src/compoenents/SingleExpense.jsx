import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useExpenseData } from "../Store/Expensestore";
const SingleExpense = () => {
  const { id } = useParams();
  const { defaultData, setdefaultData } = useExpenseData();
  const [SelectedExpense, setSelectedExpense] = useState([]);
  const navi = useNavigate();
  useEffect(() => {
    const tempData = defaultData.filter((exp) => {
      return exp.id == id;
    });
    setSelectedExpense(tempData);
  }, [id]);
  if (SelectedExpense.length > 0) {
    const { name, spent, date } = SelectedExpense[0];
    const deleteFunction = () => {
      const tempData = defaultData.filter((exp) => {
        return exp.id != id;
      });
      setdefaultData(tempData);
      navi("/");
    };
    const closeModal = () => {
      navi("/");
    };
    return (
      <div className="fixed inset-0 flex items-center justify-center overflow-hidden bg-gray-500 bg-opacity-75">
        <div className="bg-white rounded-lg overflow-hidden shadow-xl sm:max-w-lg w-full">
          {/* Modal content */}
          <div className="px-6 py-4">
            <div className="flex items-center justify-evenly">
              {/* Icon for newsletter */}
              <div className="flex-shrink-0 h-10 w-10 xl:w-20 xl:mt-4 rounded-full bg-blue-100">
                <img src={require("../assets/saving.png")} alt="saving icon" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Your Spending
                </h3>
                <div className="mt-2">
                  <h4 className="text-md font-semibold text-gray-500">
                    You Spent on Buying:
                  </h4>
                  <p className="text-sm text-gray-500">{name}</p>
                </div>
                <div className="mt-2">
                  <h4 className="text-md font-semibold text-gray-500">
                    You Spent Amount is:
                  </h4>
                  <p className="text-sm text-gray-500">{spent}</p>
                </div>
                <div className="mt-2">
                  <h4 className="text-md font-semibold text-gray-500">
                    You Spent at:
                  </h4>
                  <p className="text-sm text-gray-500">{date}</p>
                </div>
              </div>
            </div>
          </div>
          {/* Modal footer */}
          <div className="bg-gray-50 px-4 py-3 sm:px-6 flex justify-end">
            <button
              onClick={() => deleteFunction()}
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-500 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:w-auto sm:text-sm"
            >
              Delete
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
  }
};
export default SingleExpense;
