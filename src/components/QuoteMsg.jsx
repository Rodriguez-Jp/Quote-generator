import React from "react";

const QuoteMsg = ({ quoteText }) => {
  return (
    <>
      <div className="border-l-8 border-yellow-200 p-5">
        <h1 className="mb-2 text-4xl">"{quoteText}"</h1>
      </div>
    </>
  );
};

export default QuoteMsg;
