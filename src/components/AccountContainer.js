import React, { useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const initialTransactions = [];

  const [searchWord, setSearchWord] = useState("");
  const [transactions, setTransactions] = useState([]);

  const handleSearch = (term) => {
    setSearchWord(term);
  };

  const handleTransactionAdded = (newTransaction) => {
    setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);
  };

  return (
    <div>
      <Search onSearch={handleSearch} />
      <AddTransactionForm onTransactionSubmit={handleTransactionAdded} />
      <TransactionsList  initialTransactions={initialTransactions} />
    </div>
  );
}

export default AccountContainer;
