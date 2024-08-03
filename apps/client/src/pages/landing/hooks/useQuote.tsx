import { useState } from "react";
import { nextQuote, previousQuote } from "../functions/carrouselFunctions";

export function useQuote(){
    const quotes = [
        {name: "David", opinion: "Este libro es mi libro favorito de la saga. Aquí podemos encontrar un Robert Jordan desatado. El inicio  de una nueva para la fantasía"},
        {name: "Augusto", opinion: "Un verdadero salto para la fantasía"},
        {name: "Trell", opinion: "Arte"}
				
     ]
  
     const [quoteIndex, setQuoteIndex] = useState(0)
  
     function handleNextQuote(){
        let newIndex = nextQuote(quoteIndex, quotes.length)
        setQuoteIndex(newIndex);
  
     }
  
     function handlePreviousQuote(){
        let newIndex = previousQuote(quoteIndex, quotes.length)
        setQuoteIndex(newIndex);
     }

		 function changeQuoteWithCircle(index: number){
      	let newIndex = index;
				setQuoteIndex(newIndex)
       
   }

     return {quotes, quoteIndex, handleNextQuote, handlePreviousQuote, changeQuoteWithCircle}
}