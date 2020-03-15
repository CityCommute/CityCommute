    var coll = document.getElementsByClassName("collapsible");
    var i;
    
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }


    var coll = document.getElementsByClassName("transport-option");
    var j;

    for(j = 0; j < coll.length; j++){
        coll[j] = addEventListener("click", function() {
            var content = document.getElementById("description")
            if(content.style.display === "block"){
                content.style.display = "none";
            }
            else{
                content.style.display = "block";
            }
        });
    }