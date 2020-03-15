const search = (ev) => {    
    if(localStorage.getItem("drive").localeCompare("checked") == 0){
        document.getElementById("featured-content").innerHTML += `<section class="transport-option" id ="drive-option">
        <div>
            <!--TODO: Font Awesome Icon Here -->  <i class="fas fa-car"></i>
            <h3>Drive</h3>
            <h3>14 min</h3>
            <p>$0</p>
        </div>
        <h4 id = "drive-description">
            Your car is parked 2 minutes away. Allow 3 minutes for parking at destination.
        </h4>
    </section>`;        
    }
    if(localStorage.getItem("bus").localeCompare("checked") == 0){
        document.getElementById("featured-content").innerHTML += `<section class="transport-option" id = "bus-option">
        <div>
            <!--TODO: Font Awesome Icon Here --> <i class="fas fa-bus"></i>
            <h3>Bus</h3>
            <h3>20 min</h3>
            <p>$3</p>
        </div>
        <h4 id = "bus-description">
            Walk to bus station on Sheridan Road. Next bus arrives in 4 minutes. 
        </h4>
    </section>`;        
    }
    if(localStorage.getItem("bicycle").localeCompare("checked") == 0){
        document.getElementById("featured-content").innerHTML += `<section class="transport-option" id = "bike-option">
        <div>
            <!--TODO: Font Awesome Icon Here --> <i class="fas fa-bicycle"></i>
            <h3>Bicycle</h3>
            <h3>35 min</h3>
            <p>$0</p>
        </div>
        <h4 id = "bike-description">
            Your bike is parked on Sheridan Road. Desired route has bike lanes. 
        </h4>

    </section>`;        
    }
    if(localStorage.getItem("train").localeCompare("checked") == 0){
        document.getElementById("featured-content").innerHTML += `<section class="transport-option" id = "train-option">
        <div>
            <!--TODO: Font Awesome Icon Here -->  <i class="fas fa-subway"></i>
            <h3>Train</h3>
            <h3>18 min</h3>
            <p>$4</p>
        </div>
        <h4 id = "train-description">
        Walk to station on Noyes Street. Next train arrives in 10 minutes.
        </h4>
    </section>`;        
    }
    if(localStorage.getItem("uber").localeCompare("checked") == 0){
        document.getElementById("featured-content").innerHTML += `<section class="transport-option" id = "uber-option">
        <div>
            <!--TODO: Font Awesome Icon Here -->  <i class="fab fa-uber"></i>
            <h3>Uber</h3>
            <h3>15 min</h3>
            <p>$12</p>
        </div>
        <h4 id = "uber-description">
            Purchase ride in app. Estimated waiting time: 8 minutes
        </h4>
    </section>`;        
    }
    if(localStorage.getItem("lyft").localeCompare("checked") == 0){
        document.getElementById("featured-content").innerHTML += `<section class="transport-option" id = "lyft-option">
        <div>
            <!--TODO: Font Awesome Icon Here -->  <i class="fab fa-lyft"></i>
            <h3>Lyft</h3>
            <h3>16 min</h3>
            <p>$11</p>
        </div>
        <h4 id = "lyft-description">
            Purchase ride in app. Estimated waiting time: 5 minutes
        </h4>
    </section>`;        
    }

    const term = localStorage.getItem("initial_location")
    let location = localStorage.getItem("initial_location")
    
    if (location === '') {
        location = 'Evanston, IL';
    }
    let url = 'https://www.apitutor.org/yelp/simple/v3/businesses/search?location=' + location;
    url += '&term=' + term;
    fetch(url)
        .then(response => response.json())
        .then(displayResults);
};

const displayResults = (data) => {
    console.log(data);
    const center = [
        data[0].coordinates.latitude, 
        data[0].coordinates.longitude
    ];
    var mymap = L.map('mapid').setView(center, 11);
    
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
            maxZoom: 18,
            id: 'mapbox.streets' 
        }).addTo(mymap);

    if(document.getElementById("drive-option") != null){
        console.log(document.getElementById("drive-option"));
        document.getElementById("drive-option").addEventListener("click", function(){
            var content = document.getElementById("drive-description")
            if(content.style.display === "flex"){
                content.style.display = "none";
            }
            else{
                content.style.display = "flex";
            }
        });
    }
    if(document.getElementById("train-option") != null){
        console.log(document.getElementById("train-option"));
        document.getElementById("train-option").addEventListener("click", function(){
            var content = document.getElementById("train-description")
            if(content.style.display === "block"){
                content.style.display = "none";
            }
            else{
                content.style.display = "block";
            }
        });
    }
    if(document.getElementById("bus-option") != null){
        document.getElementById("bus-option").addEventListener("click", function(){
            var content = document.getElementById("bus-description")
            if(content.style.display === "block"){
                content.style.display = "none";
            }
            else{
                content.style.display = "block";
            }
        });
    }
    if(document.getElementById("bike-option") != null){
        document.getElementById("bike-option").addEventListener("click", function(){
            var content = document.getElementById("bike-description")
            if(content.style.display === "block"){
                content.style.display = "none";
            }
            else{
                content.style.display = "block";
            }
        });
    }   
    if(document.getElementById("uber-option") != null){
        document.getElementById("uber-option").addEventListener("click", function(){
            var content = document.getElementById("uber-description")
            if(content.style.display === "block"){
                content.style.display = "none";
            }
            else{
                content.style.display = "block";
            }
        });
    }
    if(document.getElementById("lyft-option") != null){
        document.getElementById("lyft-option").addEventListener("click", function(){
            var content = document.getElementById("lyft-description")
            if(content.style.display === "block"){
                content.style.display = "none";
            }
            else{
                content.style.display = "block";
            }
        });
    }
    
    
};
window.onload = search;
