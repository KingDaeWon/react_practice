function onGeoOk(){
    const lat = position.coords.latitude;
    const lng =position.coords.longitude;
    console.log("사는곳은 ", lat, lng);
}
function onGeoError(){
    alert("xx");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);