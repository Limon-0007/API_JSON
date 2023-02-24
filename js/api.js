const link = 'https://api.kanye.rest/';
const quotes = () => { fetch(link).then(response => response.json()).then(data => {
    const quote = document.getElementById('quotes');
    quote.innerText = data.quote;
    quote.style = 'text-align: center; font-weight: 700; color: crimson; font-size: 25px; font-family: sans-serif'
})
}

quotes()