// Do not show API KEY on your JS file like this 
const API_KEY = `822853230b201712fc0539e8f7ecd713`


const loadTemperature = async (city)=>{
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

//   const res = await fetch(url)
//   const data = res.json()
// console.log(data)

fetch(url)
.then( res => res.json())
.then( data => displayTemperature(data))
}

const displayTemperature = data =>{
    GetIDText('temp', data.main.temp)
    GetIDText( 'city-name' , data.name) 
    GetIDText( 'h' , data.weather[0].main)
    console.log(data)
} 

const GetIDText = (id , text)=>{
  const docElement = document.getElementById(id)
   docElement.innerText = text
}

document.getElementById('btn-search').addEventListener('click',function(){
  const SearchField = document.getElementById('search-field').value 
  loadTemperature(SearchField)
})

loadTemperature('dhaka')