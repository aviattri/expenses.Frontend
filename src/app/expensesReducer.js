const initialState = {
  expenses: [],
};

export const ActionTypes = {
  SET_EXPENSES: "SET_EXPENSES",
  NEW_EXPENSE: "NEW_EXPENSE",
  DELETE_EXPENSE: "DELETE_EXPENSE",
  EDIT_EXPENSE: "EDIT_EXPENSE",
};

export const ActionCreators = {
  setExpenses: (payload) => ({ type: ActionTypes.SET_EXPENSES, payload }),
  newExpense: (payload) => ({ type: ActionTypes.NEW_EXPENSE, payload }),
  deleteExpense: (payload) => ({ type: ActionTypes.DELETE_EXPENSE, payload }),
  editExpense: (payload) => ({ type: ActionTypes.EDIT_EXPENSE, payload }),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_EXPENSES:
      return { ...state, expenses: [...action.payload] };

    case ActionTypes.NEW_EXPENSE:
      return { ...state, expenses: [action.payload, ...state.expenses] };

    case ActionTypes.EDIT_EXPENSE:
      var expenses = state.expenses.map((expense) => {
        //if the old expense coming from the state matches the expense from the dispatch
        // then set it equal to the new expense from dispatch
        if (expense.id === action.payload.id) {
          return (expense = action.payload);
        }
        return expense;
      });
      return { ...state, expenses: [...expenses] };

    case ActionTypes.DELETE_EXPENSE:
      //create new variable called expnsess (filtered)
      var expenses = state.expenses.filter(
        (expense) =>
          // filter this expense if does not match the id of the expense from the payload
          expense.id !== action.payload.id
      );
      //set the state with updated expenses object
      return { ...state, expenses: [...expenses] };

    default:
      return state;
  }
};
