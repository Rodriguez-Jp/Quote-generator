import { useEffect, useState } from "react";
import QuoteMsg from "./QuoteMsg";

const Quote = ({ randomButton }) => {
  const API_URL = import.meta.env.VITE_API_URL;
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState({});
  const [showAuthorQuotes, setShowAutorQuotes] = useState(false);

  useEffect(() => {
    async function getQuote() {
      try {
        setLoading(true);

        const query = await fetch(`${API_URL}/quotes/random`);
        const result = await query.json();
        setQuote(result.data[0]);

        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getQuote();
  }, [randomButton]);

  const handleClickAuthor = async () => {
    setShowAutorQuotes(true);

    try {
      const query = await fetch(`${API_URL}/`);
    } catch (error) {
      console.log(error);
    }
  };

  const { quoteText, quoteAuthor, quoteGenre } = quote;
  return (
    <>
      <div>
        {!loading && !showAuthorQuotes ? (
          <>
            <QuoteMsg quoteText={quoteText} />
            <div
              className="flex  justify-between mt-20 p-5 cursor-pointer hover:bg-slate-900 hover:text-white transition-colors duration-200"
              onClick={handleClickAuthor}
            >
              <div>
                <h2 className="mb-2 text-xl font-extrabold">{quoteAuthor}</h2>
                <p className="mb-2 font-medium opacity-70">{quoteGenre}</p>
              </div>
              <i>
                <span className="material-symbols-outlined text-white">
                  arrow_right_alt
                </span>
              </i>
            </div>
          </>
        ) : null}
        {showAuthorQuotes ? <></> : null}
      </div>
    </>
  );
};

export default Quote;
