import React from 'react';
import './about.css';

export function About() {
    const [quote, setQuote] = React.useState('Loading...');
    const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');

    // Only want this to render the first time the component is created, so provide empty dependency list
    React.useEffect(() => {
        fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.content);
        setQuoteAuthor(data.author);
      })
      .catch();
    }, []);

    return (
        <main className="container-fluid bg-secondary text-center">
        <div id="picture" className="picture-box"><img className="img-fluid" src="../../assets/aboutaltimg2.jpg" alt="Memory Game" /></div>
  
        <p className="text-box bg-light text-dark">Make a Match is a variant of the classic card matching memory game 
          in which you are presented with a set of cards and must 
          flip them over two at a time until all pairs have been found. The more 
          matches you find without making too many mistakes, the higher your score. 
        </p>
  
        <div id="quote" className="text-light font-italic font-weight-light">
            <p className="quote">{quote}</p>
            <p className="author">{quoteAuthor}</p>
        </div>

  
      </main>
    );
}