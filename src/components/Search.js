import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [input, setInput] = useState("programming");
  const [results, setResults] = useState([]);
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: input
        }
      });
      setResults(data.query.search);
    };
    if (input && !results.length) {
      search();
    } else {
      const timeoutID = setTimeout(() => {
        if (input) {
          search();
        }
      }, 500);
      return () => {
        clearTimeout(timeoutID);
      };
    }
  }, [input]);

  const renderedResults = results.map(result => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }} />
        </div>
      </div>
    );
  });
  //xss attack dagerouslysetinnerhtml

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>enter Search term</label>
          <input
            value={input}
            className="input"
            onChange={e => setInput(e.target.value)}
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};
export default Search;
