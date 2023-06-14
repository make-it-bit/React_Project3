import { useState, useEffect } from 'react';
import styles from './App.module.scss';

function App() {
  const [quote, setQuote] = useState({text: 'Failed to fetch a quote.', author: 'Error'});

  const fetchQuote = async () => {
    const res = await fetch('https://type.fit/api/quotes');
    const data = await res.json();
    setQuote(data[Math.floor(Math.random() * data.length)]);
  };

  useEffect(() => {
    fetchQuote();
    console.log(1);
    return function cleanup() {
      console.log(2)
      setQuote(0)
    }
  }, [])

  return (
    <main className={styles.wholeAppComponent}>
      <div className={styles.flexbox2}>
        <section className={styles.generatorSection}>
          <p>{quote.text}</p>
          <p>by {quote.author}</p>
          <button type="button" onClick={fetchQuote}>New Quote</button>
        </section>
      </div>
    </main>
  );
}

export default App;
