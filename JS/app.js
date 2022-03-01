const getPhones = () =>{
    const searchValue = document.getElementById("search-box")
    const searchText = searchValue.value
    if(searchText === ''){
        document.getElementById('error').style.display='block'
    }
    else{
    document.getElementById('error').style.display='none'
    const url =`https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data =>showPhones(data.data))
    searchValue.value=''
}
}
// Show phones data in webside
const showPhones = (phones) => {  
  const phoneContainer = document.getElementById("phone-container")
  if(phones.length === 0){
    document.getElementById('error2').style.display='block'
  }else{
    document.getElementById('error2').style.display='none'
    phoneContainer.textContent=''
    phones.slice(0,20).forEach(phone => {
        const div = document.createElement("div")
        div.classList.add('col')
        div.innerHTML = `
        <div class="card p-3 border rounded bg-light">
        <img  src="${phone.image}" class="card-img-top mx-auto" alt="...">
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
    
} 
// phone details 
const phoneDetails = (id) =>{
    const url =`https://openapi.programming-hero.com/api/phone/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => setPhoneDetails(data.data))
}
//set phone Details in UI
const setPhoneDetails = (info) =>{
  setPhoneDetails.textContent=''
   const phoneDetails= document.getElementById("details-container")
   phoneDetails.innerHTML=`
   <img class="w-50" src="${info.image}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${info.name}</h5>
    <p>ReleaseDate: ${info.releaseDate}</p>
    <p><b>Chipset:</b> ${info.mainFeatures.chipSet}</p>  
    <p><b>Display Size:</b> ${info.mainFeatures.displaySize}</p>  
    <p><b>Memory:</b> ${info.mainFeatures.memory}</p>  
    <p><b>storage:</b> ${info.mainFeatures.storage}</p>  
    <p><b>sensors:</b><br> ${info.mainFeatures.sensors[0]},  ${info.mainFeatures.sensors[1]},${info.mainFeatures.sensors[2]},${info.mainFeatures.sensors[3]},<br>${info.mainFeatures.sensors[4]},${info.mainFeatures.sensors[5]},${info.mainFeatures.sensors[6]}</p>  
    
    <b class="text-success">Other Information</b>
    <p><b>Bluetooth:</b>${info?.others?.Bluetooth}</p> 
    
    <p><b>GPS:</b>${info?.others?.GPS}</p> 
    
    <p><b>NFC:</b>${info?.others?.NFC}</p> 
   
    <p><b>Radio:</b> ${info?.others?.Radio}</p> 
    
    <p><b>USB:</b> ${info?.others?.USB}</p> 
   
    <p><b>WLAN:</b> ${info.others?.WLAN}</p> 
    </div>
   `
    console.log(info)
}

