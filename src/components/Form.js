import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setTransaction } from "../store/reducer";
import { getFullDate } from "../helper/helper";

export default function Form({ toggleOff }) {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const inputRef = useRef(null); 
  const [error, setError] = useState(null);
  const [nameValue, setNameValue] = useState(""); 

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      inputRef.current && inputRef.current.focus();
    }, 1); 

    return () => clearTimeout(timeoutId); 
  }, []);

  const onSubmit = async (data) => {
    if (!data) return;

    const amount = parseFloat(data.amount);

    if (isNaN(amount) || amount <= 0) {
      setError("Amount has to be a positive number");
    } else {
      const newTx = {
        id: new Date().getTime(),
        date: getFullDate(),
        name: nameValue, 
        type: data.type,
        amount: amount,
      };
      dispatch(setTransaction(newTx));
      setError(null);
      reset();
      toggleOff();
    }
  };

  return (
    <div className="form max-w-sm mx-auto w-96">
      <h1 className="font-bold pb-4 text-xl">Add Transaction</h1>

      <form id="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <div className="input-group">
            <input
              type="text"
              {...register("name")}
              placeholder="Name"
              className="form-input"
              value={nameValue}
              onChange={(e) => setNameValue(e.target.value)}
              ref={inputRef}
            />
          </div>
          <select {...register("type")} className="form-input">
            <option value="Investment">Investment</option>
            <option value="Expense">Expense</option>
            <option value="Savings">Savings</option>
          </select>
          <div className="input-group">
            {error ? (
              <section className="form-input" onClick={() => setError(null)}>
                {error}
              </section>
            ) : (
              <input
                type="text"
                {...register("amount")}
                placeholder="Price"
                className="form-input"
              />
            )}
          </div>
          <div className="submit-btn">
            <button className="border py-2 text-white bg-indigo-500 w-full">
              Make Transaction
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
