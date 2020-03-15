const submit = (ev) => {
    const location = document.querySelector('#destination').value;
    if(document.querySelector("#location").value.length == 0){
        alert('Please enter your current location');
        return
    }
    if(location.length == 0 ){
        alert('Please enter your desired destination');
        return
    }
    if(!document.querySelector("#travel-time").checked && !document.querySelector("#cost").checked && !document.querySelector("#no-preference").checked){
        alert('Please enter your sorting preferences');
        return
    }
    if(!document.getElementById("bus").checked && !document.getElementById("bicycle").checked && !document.getElementById("train").checked && !document.getElementById("drive").checked && !document.getElementById("uber").checked && !document.getElementById("lyft").checked){
        alert('Please select at least one transportation option');
        return
    }
    //check bus
    if(document.getElementById("bus").checked == true){
        localStorage.setItem("bus", "checked");
    }
    else{
        localStorage.setItem("bus", "not")
    }
    //check bicycle
    if(document.getElementById("bicycle").checked == true){
        localStorage.setItem("bicycle", "checked");
    }
    else{
        localStorage.setItem("bicycle", "not")
    }
    //check train
    if(document.getElementById("train").checked == true){
        localStorage.setItem("train", "checked");
    }
    else{
        localStorage.setItem("train", "not")
    }
    //check drive
    if(document.getElementById("drive").checked == true){
        localStorage.setItem("drive", "checked");
    }
    else{
        localStorage.setItem("drive", "not")
    }
    //check uber
    if(document.getElementById("uber").checked == true){
        localStorage.setItem("uber", "checked");
    }
    else{
        localStorage.setItem("uber", "not")
    }
    //check lyft
    if(document.getElementById("lyft").checked == true){
        localStorage.setItem("lyft", "checked");
    }
    else{
        localStorage.setItem("lyft", "not")
    }
    localStorage.setItem("initial_location", location)
    window.location.href = "CC_index.html";

};

document.querySelector('#submit').onclick = submit;