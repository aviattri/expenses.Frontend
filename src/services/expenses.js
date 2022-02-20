// services is responsible for making HTTP Requets for this application

import { ActionCreators } from "../app/expensesReducer";

export const GetExpenses = async (dispatch) => {
  try {
    //api call
    const expenses = [
      {
        id: 1,
        description: "Groceries",
        amount: 23.16,
      },
      {
        id: 2,
        description: "Loan",
        amount: 13.16,
      },
      {
        id: 3,
        description: "Bookes",
        amount: 43.16,
      },
    ];
    dispatch(ActionCreators.setExpenses(expenses));
  } catch {
    console.log("error");
  }
};

export const NewExpense = async (dispatch, expense) => {
  dispatch(
    ActionCreators.newExpense({
      id: 10,
      description: expense.description,
      amount: expense.amount,
    })
  );
};

export const EditExpense = async (dispatch, expense) => {
  // try {
  //api call
  dispatch(ActionCreators.editExpense(expense));
  // } catch {
  //   console.log("edit expense api call");
  // }
};

export const DeleteExpense = async (dispatch, expense) => {
  // try {
  //api call
  dispatch(ActionCreators.deleteExpense(expense));
  // } catch {
  //   console.log("delete expense api call");
  // }
};
