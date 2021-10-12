mapboxgl.accessToken = 'pk.eyJ1IjoidHN6a2lubGV1bmciLCJhIjoiY2t0Nnhla291MG12dTJ1bXUwZ2FweHJtcyJ9.a-ViaxfyMDzap2XsJZBVZg';
const map = new mapboxgl.Map({
    container: 'map', // Specify the container ID
    style: 'mapbox://styles/tszkinleung/ckughwbybcmu518nptanyqv8y', // Specify which map style to use
    center: [144.946457, -37.840935], // Specify the starting position
    zoom: 11.5, // Specify the starting zoom
});
const params = document.getElementById('params');

// Create variables to use in getIso()
const urlBase = 'https://api.mapbox.com/isochrone/v1/mapbox/';
const lon = 144.946014;
const lat = -37.840935;
let profile = 'cycling';
let minutes = 20;

// Set up a marker that you can use to show the query's coordinates
const marker = new mapboxgl.Marker({
    'color': '#314ccd'
});

// Create a LngLat object to use in the marker initialization
// https://docs.mapbox.com/mapbox-gl-js/api/#lnglat
const lngLat = {
    lon: lon,
    lat: lat
};

// Create a function that sets up the Isochrone API query then makes a fetch call
async function getIso(lon, lat) {
    const query = await fetch(
        `${urlBase}${profile}/${lon},${lat}?contours_minutes=${minutes}&polygons=true&access_token=${mapboxgl.accessToken}`,
        { method: 'GET' }
    );
    const data = await query.json();
    // Set the 'iso' source's data to what's returned by the API query
    map.getSource('iso').setData(data);
    // console.log(data);
    var arrCovered = Object.values(data);
    // console.log(Object.values(Object.values(arrCovered[0][0])[1])[0][0]);
    arrCovered = Object.values(Object.values(arrCovered[0][0])[1])[0][0];
    // get the coordinates of the covered area
    console.log(arrCovered);
}

// When a user changes the value of profile or duration by clicking a button, change the parameter's value and make the API query again
params.addEventListener('change', ({ target }) => {
    if (target.name === 'profile') {
        profile = target.value;
    } else if (target.name === 'duration') {
        minutes = target.value;
    }
    getIso(lon, lat);
});

map.on('load', () => {
    // When the map loads, add the source and layer
    map.addSource('iso', {
        type: 'geojson',
        data: {
            'type': 'FeatureCollection',
            'features': []
        }
    });

    map.addLayer(
        {
            'id': 'isoLayer',
            'type': 'fill',
            'source': 'iso',
            'layout': {},
            'paint': {
                'fill-color': '#5a3fc0',
                'fill-opacity': 0.3
            }
        },
        'poi-label'
    );

    // Initialize the marker at the query coordinates
    marker.setLngLat(lngLat).addTo(map);

    // Make the API call
    getIso(lon, lat);

    //   onclick API call
    map.on('click', (e) => {
        var arrPo = Object.values(e.lngLat);
        getIso(arrPo[0], arrPo[1]);
        const lngLat = {
            lon: arrPo[0],
            lat: arrPo[1]
        };
        marker.setLngLat(lngLat).addTo(map);

        params.addEventListener('change', ({ target }) => {
            if (target.name === 'profile') {
                profile = target.value;
            } else if (target.name === 'duration') {
                minutes = target.value;
            }
            getIso(arrPo[0], arrPo[1]);
        });
    });

});
