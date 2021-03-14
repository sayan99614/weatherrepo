const city_name=document.getElementById('city_name');
const submit_btn=document.getElementById('submit_btn');
const div=document.getElementById('card_div');
const name=document.getElementById('c_name');
const temp=document.getElementById('count');
const type=document.getElementById('type');
const wind=document.getElementById('wind');
const real_feel=document.getElementById('realfeel');


// console.log(city_name);
// city_name.onchange((event)=>{console.log(event.target.value)})



// console.log(city_name);


const callapi=async()=>{
    let cityval=city_name.value;
    if(cityval===""){
        div.innerHTML="<h1 class='text-white p-2'>plz enter your city name</h1>";
    }else{
        try{
        let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=375cce77a378b9f59a8f6f154bce726a`;
        let response=await fetch(url);
        let data=await response.json();
        name.innerHTML=data.name;
        temp.innerHTML=data.main.temp;
        type.innerHTML=data.weather[0].main;
        wind.innerHTML=data.wind.speed;
        if(data.weather[0].main==='Clouds'){
            document.getElementById('icon').innerHTML="<i class='fas fa-cloud text-white fa-10x'></i>";
        }else if(data.weather[0].main==='Haze'){
            document.getElementById('icon').innerHTML="<i class='fas fa-smog text-white fa-10x'></i>";
        }
        else{
            document.getElementById('icon').innerHTML="<i class='fas fa-sun fa-10x'></i>";
            
        }
        real_feel.innerHTML=data.main.feels_like;
       console.log(data);
        }catch(err){
            div.innerHTML="<h1 class='text-white p-2'>please check the city name</h1>";
        }

    }
}


submit_btn.addEventListener('click',callapi);