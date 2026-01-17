mapboxgl.accessToken ="pk.eyJ1Ijoic3JpcmFtMTUiLCJhIjoiY21raWVvcGR5MDhuODNjc2Q4eG5icTF5NCJ9.LDoQfdQ_bipvnDuAWxp-eg"
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true
})

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude])
  }

function errorLocation() {
  setupMap([-2.24, 53.48])
  console.log("error")
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 15,
    // pitch: 60

  })
  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
  })
  map.addControl(directions, "top-left")
  map.addControl(new mapboxgl.NavigationControl())
  map.addControl(
    new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl
    }),
    'top-right'
  )
  map.on('load', () => {
    map.resize()
  })

}
