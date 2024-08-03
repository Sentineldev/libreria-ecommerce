export function nextQuote(index: number, lengthQuotes: number){
    let newIndex = index; 
    const lastQuote = lengthQuotes - 1;
    (newIndex < lastQuote) ? newIndex++ : newIndex = 0;
    return newIndex

 }

 export function previousQuote(index: number, lengthQuotes: number){
    let newIndex = index;
    const lastQuote = lengthQuotes - 1;  
    (newIndex > 0) ? newIndex-- : newIndex = lastQuote
    return newIndex

 }