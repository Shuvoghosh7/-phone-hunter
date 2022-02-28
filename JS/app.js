const getPhones = () =>{
    const searchValue = document.getElementById("search-box")
    const searchText = searchValue.value
    const url =`https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => showPhones(data.data))

    searchValue.value=''
}


const showPhones = (phones) => {
    console.log(phones)
    const phoneContainer = document.getElementById("phone-container")
    phoneContainer.textContent=''
    phones.forEach(phone => {
        const div = document.createElement("div")
        div.classList.add('col')
        div.innerHTML = `
        <div class="card">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${phone.phone_name}</h5>
          <p>${phone.brand}</p>
        </div>
      </div>
        `
    phoneContainer.appendChild(div)
        
    });
    
} 