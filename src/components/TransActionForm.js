import { useState } from "react";

const TransActionForm = ({ addTransaction, setIsShow }) => {
  const [formValues, setFormValues] = useState({
    type: "expense",
    amount: 0,
    desc: "",
  });
  const changeHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addTransaction(formValues);
    setFormValues({
      type: "expense",
      amount: 0,
      desc: "",
    });
    setIsShow((prevState) => !prevState);
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="desc"
        placeholder="Description ..."
        onChange={changeHandler}
        value={formValues.desc}
      />
      <input
        type="number"
        name="amount"
        placeholder="Amount ..."
        onChange={changeHandler}
        value={formValues.amount}
      />
      <div className="radioBox">
        <input
          type="radio"
          id="expense"
          value="expense"
          name="type"
          checked={formValues.type === "expense"}
          onChange={changeHandler}
        />
        <label htmlFor="expense">Expense</label>
        <input
          type="radio"
          id="income"
          value="income"
          name="type"
          checked={formValues.type === "income"}
          onChange={changeHandler}
        />
        <label htmlFor="income">Income</label>
      </div>
      <button type="submit" className="btn primary">
        Add transactions
      </button>
    </form>
  );
};

export default TransActionForm;
