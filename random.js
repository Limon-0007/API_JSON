const url = 'https://randomuser.me/api/?gender=female';
const randomUsers = () => {
    fetch(url).then(response => response.json()).then(data => {
        //console.log(data)
        const name = data.results[0].name.title + ' ' + data.results[0].name.first + ' ' + data.results[0].name.last;
        const gender = data.results[0].gender;
        const mail = data.results[0].email;
        const phone = data.results[0].phone;
        const image = data.results[0].picture.large;
        const card = document.getElementById('card')
        card.innerHTML = `
        <div class="card mx-auto mt-4 fs-6 fw-semibold text-left" style="width: 18rem;">
        <img src="${image}" class="card-img-top p-2 rounded-3" alt="Image not found">
        <div class="card-body">
        <h6>Name - ${name}</h6> <p>Gender - ${gender}</p>
        <p>Mail - ${mail}</p>
        <p>Phone - ${phone}</p>
        </div>
      </div>
        `
    })
}

randomUsers()