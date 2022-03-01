const getPhones = () =>{
    const searchValue = document.getElementById("search-box")
    const searchText = searchValue.value
    if(searchText == ''){
        document.getElementById('error').style.display='block'
    }else{
    document.getElementById('error').style.display='none'
    const url =`https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data =>showPhones(data.data))
    searchValue.value=''
}
}
// Show data in webside
const showPhones = (phones) => {
    const phoneContainer = document.getElementById("phone-container")
    phoneContainer.textContent=''
    phones.forEach(phone => {
        const div = document.createElement("div")
        div.classList.add('col')
        div.innerHTML = `
        <div class="card">
        <img  src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${phone.phone_name}</h5>
          <p>${phone.brand}</p>
          <button onclick="phoneDetails('${phone.slug}')" class="btn btn-secondary text-white" >Details</button>
        </div>
      </div>
        `
    phoneContainer.appendChild(div)
        
    });
    
} 
// phone details
const phoneDetails = (id) =>{
    const url =`https://openapi.programming-hero.com/api/phone/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => setPhoneDetails(data.data))
}
const setPhoneDetails = (info) =>{
    
   const phoneDetails= document.getElementById("details-container")
   phoneDetails.innerHTML=`
   <img src="${info.image}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${info.name}</h5>
    <p><b>releaseDate</b> if(${info.releaseDate}==null){
      ${info.releaseDate}==false
    }else{
      ${info.releaseDate}== true
    } </p>
    <p><b>Chipset:</b> ${info.mainFeatures.chipSet}</p>  
    <p><b>Display Size:</b> ${info.mainFeatures.displaySize}</p>  
    <p><b>Memory:</b> ${info.mainFeatures.memory}</p>  
    <p><b>storage:</b> ${info.mainFeatures.storage}</p>  
    <p><b>sensors:</b> ${info.mainFeatures.sensors[0]},${info.mainFeatures.sensors[1]},${info.mainFeatures.sensors[2]},${info.mainFeatures.sensors[3]},${info.mainFeatures.sensors[4]},${info.mainFeatures.sensors[5]},${info.mainFeatures.sensors[6]}</p>  
      
    </div>
   `
    console.log(info)
}

