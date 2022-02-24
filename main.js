// Task 1: 
        // How to compare two JSON have the same properties without order?
// Code : 
// const _ = require ('lodash');
// var obj1 = { name: "Person 1", age:5 };
// var obj2 = { age:5, name: "Person 1" };

// // We can Compare JSON Using LODASH isEqaul function.
// // First Link LODASH CDN to the HTML file.
// // Import lodash in the JS file using require attribute.
// // Then Use isEqual function in JS File.
// // We can also compare JSON using Inbuilt JSON.stringify but it will check for correct order. But IsEqual will check for Keys and then check if it is equal or not.

// console.log(_.isEqual(obj1 === obj2));


// Task 2 and Task3:
// Use the rest countries API url -> https://restcountries.eu/rest/v2/all and display all the country flags in console

// Code:
fetch('https://restcountries.com/v3.1/all',{
    method:'GET',
    headers:{
        'Content-Type':'application/json'
    }
})
.then(response => response.json())
.then(data=> {
    let data1='';
    data.map((values)=>{
        data1 += ` 
        <div class="card">
        <img src='${values.flags.png}' alt="flagImage" class="flagImage" >
        <h5 class="countryName"> Country Name : ${values.name.official}</h5>
        <div class="listItems">
           <div class="list-group" >
               <p class="list-group-item" > Capital :  ${values.capital}</p>
                 <p class="list-group-item" >Region: ${values.region} </p>
                 <p class="list-group-item">Sub Region:${values.subregion} </p>
                 <p class="list-group-item">Population: ${values.population}</p>
               </div>
       </div>`
    })
    document.getElementById('cards').innerHTML= data1;

})
.catch(error =>{console.log(` Failed to fetch API. The Error is ${error}`)});

