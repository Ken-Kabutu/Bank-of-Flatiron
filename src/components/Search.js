import React, { useState } from "react";

function Search({ onSearch }) {
  const [searchWord, setSearchWord] = useState("");


  const handleChange = (e) => {
    const value = e.target.value;
    setSearchWord(value);
    onSearch(value);
  };


  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        value={searchWord}
        onChange={handleChange}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
