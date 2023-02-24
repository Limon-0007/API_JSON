const url = 'https://restcountries.com/v3.1/all';
fetch(url).then(res => res.json()).then(data => {
    const allCountries = document.getElementById('all-countries');
    data.forEach(country => {
        //console.log(country.timezones[0])
        const countryDiv = document.createElement('div');
        countryDiv.className = 'bg-primary text-white p-4 m-2 d-flex flex-column w-50 mx-auto fw-semibold'
        countryDiv.innerHTML = `
        <h4>Country - ${country.name.common}</h4>
        <h6>Capital - ${country.capital ? country.capital[0] : "No country"}</h6>
        <p>Sub region - ${country.subregion}</p>
        <img class="w-25 mx-auto mb-4" src="${country.flags.png}" alt="">
        <p>Continents - ${country.continents[0]}</p>
        <p>Language - ${country.demonyms.eng.m ? country.demonyms.eng.m : "No data found"}</p>
        <p>Population - ${country.population}</p>
        <p>Time zone - ${country.timezones[0]}</p>
        `
        allCountries.appendChild(countryDiv)
    })
})