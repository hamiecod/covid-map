function updateMap(){
    fetch("/data.json")
    .then(response => response.json())
    .then(rsp => {
        console.log(rsp.data);
        var popup = new mapboxgl.Popup({
            closeButton: false,
            closeOnClick: false
        });

        rsp.data.forEach(element => {
            latitude = element.latitude;
            longitude = element.longitude;

            cases = element.infected;

            if (cases < 300) {
                color = "#00ff22";
            } 
            else if (cases < 600){
                color="#fff700";
            }
            else if(cases < 1000){
                color="#ff8800";
            }
            else if(cases<1500){
                color= "#d9270f";
            }
            else if(cases > 1500){
                color= "#ff0000";
            }

            // mark on the map
            new mapboxgl.Marker({
                "marker-size": "small",
                color: color,
            })
            .setLngLat([longitude, latitude])
            .addTo(map);

            
        });
    });
}

setInterval(updateMap(), 60000);