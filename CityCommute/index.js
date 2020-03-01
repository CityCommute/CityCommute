const search = (ev) => {
    const term = document.querySelector('#location').value;
    let location = document.querySelector('#location').value;
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
    // initialize map:
    const mymap = L.map('mapid').setView(center, 11);
    
    // add basemap:
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
            maxZoom: 18,
            id: 'mapbox.streets' 
        }).addTo(mymap);

    
};

//bind search function to onEnter event handler:
document.querySelector('#search').onclick = search;
