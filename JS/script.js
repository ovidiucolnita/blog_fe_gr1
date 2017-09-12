/* global $*/
/* global fetch*/
$(document).ready(function() {
        
    var divDogPupster = document.getElementById('divPupster');
    var pupster = document.getElementById("dogPupster");
    var divDogBarky = document.getElementById('divBarky');
    var barky = document.getElementById("dogBarky");
    var divDogWoof = document.getElementById('divWoof');
    var woof = document.getElementById("dogWoof");
    var pathPupster = 'https://learnwebcode.github.io/json-example/animals-3.json';
    var pathBarky = 'https://learnwebcode.github.io/json-example/animals-1.json';
    var pathWoof = 'https://learnwebcode.github.io/json-example/animals-2.json';
    
    fetch('https://learnwebcode.github.io/json-example/animals-2.json', { method: 'GET' } )
    .then(function(response) {
       console.log(response);
       return response.json();
   })
    .then(function(jsonResponse) {
       console.log(jsonResponse);
       return jsonResponse;
   })
    .then(displayName())
    .then(displayDogsInfo())
    .catch(function(error){
        console.log('ERROR', error);
    });
    
    function displayName(){
        $.ajax({
            url: pathPupster,
            method: 'GET',
        }).then(function(data){
            divDogPupster.innerHTML = "He is " + data[1].name;
        });
        $.ajax({
            url: pathBarky,
            method: 'GET',
        }).then(function(data){
           divDogBarky.innerHTML = "She is " + data[1].name;
        });
        $.ajax({
            url: pathWoof,
            method: 'GET',
        }).then(function(data){
           divDogWoof.innerHTML = "He is " + data[1].name;
        });
    }
    
    function displayDogsInfo(){
    pupster.addEventListener('click', function(){
        $.ajax({
            url: pathPupster,
            method: 'GET',
        }).then(function(data){
            var infoPupster = '';
            infoPupster += "<p>" + data[1].name + " is a " + data[1].species + " that likes to eat ";
                for (var j = 0; j < data[1].foods.likes.length; j++){
                    if (j == 0){
                        infoPupster += data[1].foods.likes[j];
                    }else{
                        infoPupster += " and " + data[1].foods.likes[j];
                    }
                }
            infoPupster += " and dislikes ";
                for (var j = 0; j < data[1].foods.dislikes.length; j++){
                    if (j == 0){
                        infoPupster += data[1].foods.dislikes[j];
                    }else{
                        infoPupster += " and " + data[1].foods.dislikes[j];
                    }
                }
            infoPupster += ".</p>";
            divDogPupster.insertAdjacentHTML('beforeend', infoPupster);
        });
    });
    
    barky.addEventListener('click', function(){   
       $.ajax({
            url: pathBarky,
            method: 'GET',
        }).then(function(data){
            var infoBarky = '';
            infoBarky += "<p>" + data[1].name + " is a " + data[1].species + " that likes to eat ";
                for (var j = 0; j < data[1].foods.likes.length; j++){
                    if (j == 0){
                        infoBarky += data[1].foods.likes[j];
                    }else{
                        infoBarky += " and " + data[1].foods.likes[j];
                    }
                }
            infoBarky += " and dislikes ";
                for (var j = 0; j < data[1].foods.dislikes.length; j++){
                    if (j == 0){
                        infoBarky += data[1].foods.dislikes[j];
                    }else{
                        infoBarky += " and " + data[1].foods.dislikes[j];
                    }
                }
            infoBarky += ".</p>";
            divDogBarky.insertAdjacentHTML('beforeend', infoBarky);
        });
    });
    
    woof.addEventListener('click', function(){   
       $.ajax({
            url: pathWoof,
            method: 'GET',
        }).then(function(data){
            var infoWoof = '';
            infoWoof += "<p>" + data[1].name + " is a " + data[1].species + " that likes to eat ";
                for (var j = 0; j < data[1].foods.likes.length; j++){
                    if (j == 0){
                        infoWoof += data[1].foods.likes[j];
                    }else{
                        infoWoof += " and " + data[1].foods.likes[j];
                    }
                }
            infoWoof += " and dislikes ";
                for (var j = 0; j < data[1].foods.dislikes.length; j++){
                    if (j == 0){
                        infoWoof += data[1].foods.dislikes[j];
                    }else{
                        infoWoof += " and " + data[1].foods.dislikes[j];
                    }
                }
            infoWoof += ".</p>";
                divDogWoof.insertAdjacentHTML('beforeend', infoWoof);
            });
        });
    }
});     
   









