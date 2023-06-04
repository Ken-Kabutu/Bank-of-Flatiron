import React, { useState, useEffect } from "react";
import Transaction from "./Transaction";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";


function TransactionsList() {

  const [transactions, setTransactions] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    fetch('http://localhost:8001/transactions')
    .then(response => response.json())
    .then(data => setTransactions(data))
    .catch(error => {
      console.log("Error fetching transactions:", error);
    });
  }, []);

  const handleSearch = (term) => {
    setSearchWord(term);
  };

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchWord.toLowerCase())
  );

  const handleTransactionSubmit = (newTransaction) => {
    //adding new transaction to exisiting transaction
    setTransactions([...transactions, newTransactions]);
  }


  return (
    <div>
      <Search onSearch={handleSearch} />
      <AddTransactionForm onTransactionSubmit={handleTransactionSubmit} />

    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {filteredTransactions.map(transaction => (
          <Transaction
            key={transaction.id}
            date={transaction.date}
            description={transaction.description}
            category={transaction.category}
            amount={transaction.amount}
          />
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default TransactionsList;
