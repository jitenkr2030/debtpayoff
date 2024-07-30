import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addDebt } from '../../actions/debtActions';

const AddDebt = () => {
  const [debt, setDebt] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addDebt(debt));
    setDebt('');
  };

  return (
    <div>
      <h1>Add Debt</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={debt}
          onChange={(e) => setDebt(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddDebt;
