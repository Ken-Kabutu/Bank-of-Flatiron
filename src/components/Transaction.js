import React from "react";

function Transaction({ id, date, description, category, amount, onDelete }) {

  const handleDelete = () => {
    fetch(`http://localhost:8001/transactions/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (response.ok) {
          onDelete(id); 
        } else {
          console.log('Error deleting transaction:', response.statusText);
        }
      })
      .catch(error => {
        console.log('Error deleting transaction:', error);
      });
  };

  
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td>
        <button className="ui button" onClick={handleDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Transaction;
