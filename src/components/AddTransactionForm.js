import React, { useState } from "react";

function AddTransactionForm() {
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: ""
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    //POST request
    fetch('http://localhost:8001/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => {
      //to add new transaction to list
      onTransactionAdded(data);
      //resetting state after form submission
      setFormData({
        date: "",
        description: "",
        category: "",
        amount: ""
      });
    })
    .catch(error => {
      console.log("error handling transactions:", error);
    });
  };

  return (
    <div className="ui segment">
      <form className="ui form">
        <div className="inline fields">
          <input
           type="date"
           name="date" 
           value={formData.date}
           onChange={handleChange}
          />

          <input
           type="text" 
           name="description" 
           placeholder="Description" 
           value={formData.description}
           onChange={handleChange}
          />

          <input
           type="text" 
           name="category" 
           placeholder="Category" 
           value={formData.category}
           onChange={handleChange}
          />

          <input
           type="number" 
           name="amount" 
           placeholder="Amount" 
           step="0.01" 
           value={formData.amount}
           onChange={handleChange}
          />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
