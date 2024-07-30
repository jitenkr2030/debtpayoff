const initialState = {
  debts: [],
};

const debtReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_DEBT':
      return { ...state, debts: [...state.debts, action.payload] };
    case 'VIEW_DEBTS':
      return state;
    case 'MANAGE_DEBTS':
      return { ...state, debts: action.payload };
    default:
      return state;
  }
};

export default debtReducer;
