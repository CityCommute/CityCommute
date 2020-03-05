const search = (ev) => {    
    if(localStorage.getItem("drive").localeCompare("checked") == 0){
        document.getElementById("featured-content").innerHTML += `<section class="transport-option">
        <div>
            <!--TODO: Font Awesome Icon Here -->  <i class="fas fa-car"></i>
            <h3>Drive</h3>
            <h3>15 min</h3>
            <p>$0</p>
        </div>
    </section>`;        
    }
    if(localStorage.getItem("bus").localeCompare("checked") == 0){
        document.getElementById("featured-content").innerHTML += `<section class="transport-option">
        <div>
            <!--TODO: Font Awesome Icon Here --> <i class="fas fa-bus"></i>
            <h3>Bus</h3>
            <h3>10 min</h3>
            <p>$3</p>
        </div>
    </section>`;        
    }
    if(localStorage.getItem("bicycle").localeCompare("checked") == 0){
        document.getElementById("featured-content").innerHTML += `<section class="transport-option">
        <div>
            <!--TODO: Font Awesome Icon Here --> <i class="fas fa-bicycle"></i>
            <h3>Bicycle</h3>
            <h3>15 min</h3>
            <p>$0</p>
        </div>
    </section>`;        
    }
    if(localStorage.getItem("train").localeCompare("checked") == 0){
        document.getElementById("featured-content").innerHTML += `<section class="transport-option">
        <div>
            <!--TODO: Font Awesome Icon Here -->  <i class="fas fa-subway"></i>
            <h3>Train</h3>
            <h3>17 min</h3>
            <p>$4</p>
        </div>
    </section>`;        
    }
    if(localStorage.getItem("uber").localeCompare("checked") == 0){
        document.getElementById("featured-content").innerHTML += `<section class="transport-option">
        <div>
            <!--TODO: Font Awesome Icon Here -->  <i class="fab fa-uber"></i>
            <h3>Uber</h3>
            <h3>18 min</h3>
            <p>$12</p>
        </div>
    </section>`;        
    }
    if(localStorage.getItem("lyft").localeCompare("checked") == 0){
        document.getElementById("featured-content").innerHTML += `<section class="transport-option">
        <div>
            <!--TODO: Font Awesome Icon Here -->  <i class="fab fa-lyft"></i>
            <h3>Lyft</h3>
            <h3>19 min</h3>
            <p>$14</p>
        </div>
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


    

    
};
window.onload = search;
