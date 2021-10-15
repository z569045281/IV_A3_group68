mapboxgl.accessToken = 'pk.eyJ1IjoidHN6a2lubGV1bmciLCJhIjoiY2t0Nnhla291MG12dTJ1bXUwZ2FweHJtcyJ9.a-ViaxfyMDzap2XsJZBVZg';
const map = new mapboxgl.Map({
    container: 'map', // Specify the container ID
    style: 'mapbox://styles/tszkinleung/ckughwbybcmu518nptanyqv8y', // Specify which map style to use
    center: [144.946457, -37.840935], // Specify the starting position
    zoom: 11.5, // Specify the starting zoom
});
const params = document.getElementById('params');
var arrPo;
var arrCovered;
// Create variables to use in getIso()
const urlBase = 'https://api.mapbox.com/isochrone/v1/mapbox/';
const lon = 144.946014;
const lat = -37.840935;
let profile = 'cycling';
let minutes = 20;

// Set up a marker that you can use to show the query's coordinates
const marker = new mapboxgl.Marker({
    'color': '#314ccd',
    draggable: true
});

function onDragEnd() {
    const lngLat = marker.getLngLat();
    arrPo = Object.values(lngLat);
    getIso(arrPo[0], arrPo[1]);
}

marker.on('dragend', onDragEnd);

// Create a LngLat object to use in the marker initialization
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
    arrCovered = Object.values(data);
    arrCovered = Object.values(Object.values(Object.values(arrCovered[0][0])[1])[0][0]);
    // get the coordinates of the covered area
    highlight();
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
map.addControl(new mapboxgl.NavigationControl());

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
                'fill-opacity': 0.35
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

map.on('load', () => {
    // Add a custom vector tileset source. This tileset contains
    // point features representing museums. Each feature contains

    map.loadImage(
        './asset/health.png',
        (error, image) => {
            if (error) throw error;

            map.addImage('health', image);
            // map.addImage('church', image);

            map.addSource('Health-Services', {
                type: 'vector',
                url: 'mapbox://tszkinleung.3g34wo1f'
            });
            map.addLayer({
                'id': 'HealthServices',
                'type': 'symbol',
                'source': 'Health-Services',
                'layout': {
                    // Make the layer visible by default.
                    'visibility': 'visible',
                    'icon-image': 'health', // reference the image
                    'icon-size': 0.35
                },
                'source-layer': '1-apw7i4'
            });
        });
    map.loadImage(
        './asset/fun.png',
        (error, image) => {
            if (error) throw error;

            map.addImage('fun', image);
            // map.addImage('church', image);

            map.addSource('Fun', {
                type: 'vector',
                url: 'mapbox://tszkinleung.dk24mxp5'
            });
            map.addLayer({
                'id': 'AssemblyPlaces',
                'type': 'symbol',
                'source': 'Fun',
                'layout': {
                    // Make the layer visible by default.
                    'visibility': 'visible',
                    'icon-image': 'fun', // reference the image
                    'icon-size': 0.35
                },

                'source-layer': '1-028i90'
            });
        });
    map.loadImage(
        './asset/church.png',
        (error, image) => {
            if (error) throw error;

            map.addImage('church', image);
            // map.addImage('church', image);

            map.addSource('Church', {
                type: 'vector',
                url: 'mapbox://tszkinleung.4ndgc51c'
            });
            map.addLayer({
                'id': 'Church',
                'type': 'symbol',
                'source': 'Church',
                'layout': {
                    // Make the layer visible by default.
                    'visibility': 'visible',
                    'icon-image': 'church', // reference the image
                    'icon-size': 0.35
                },

                'source-layer': '1-6y7src'
            });
        });
    map.loadImage(
        './asset/train.png',
        (error, image) => {
            if (error) throw error;

            map.addImage('train', image);
            // map.addImage('church', image);

            map.addSource('train_station', {
                type: 'vector',
                url: 'mapbox://tszkinleung.c9c5xkww'
            });
            map.addLayer({
                'id': 'TrainStation',
                'type': 'symbol',
                'source': 'train_station',
                'layout': {
                    // Make the layer visible by default.
                    'visibility': 'none',
                    'icon-image': 'train', // reference the image
                    'icon-size': 0.35
                },
                'source-layer': 'transtation-317u4e'
            });
        });

});
map.on('idle', () => {
    // If these two layers were not added to the map, abort
    if (!map.getLayer('HealthServices') || !map.getLayer('AssemblyPlaces') || !map.getLayer('Church') || !map.getLayer('TrainStation')) {
        return;
    }

    // Enumerate ids of the layers.
    const toggleableLayerIds = ['HealthServices',
        'AssemblyPlaces', 'Church', 'TrainStation'];

    // Set up the corresponding toggle button for each layer.
    for (const id of toggleableLayerIds) {
        // Skip layers that already have a button set up.
        if (document.getElementById(id)) {
            continue;
        }

        // Create a link.
        const link = document.createElement('a');
        link.id = id;
        link.href = '#';
        link.textContent = id;
        link.className = 'active ';

        // Show or hide layer when the toggle is clicked.
        link.onclick = function (e) {
            const clickedLayer = this.textContent;
            e.preventDefault();
            e.stopPropagation();

            const visibility = map.getLayoutProperty(
                clickedLayer,
                'visibility'
            );

            // Toggle layer visibility by changing the layout object's visibility property.
            if (visibility === 'visible') {
                map.setLayoutProperty(clickedLayer, 'visibility', 'none');
                this.className = '';
            } else {
                this.className = 'active';
                map.setLayoutProperty(
                    clickedLayer,
                    'visibility',
                    'visible'
                );
            }
        };

        const layers = document.getElementById('menu');
        layers.appendChild(link);
    }
});

var coordinates;
function highlight() {
    // turf point within area
    let result = placeOfInterest.map(({ coordinates }) => coordinates);
    result = Object.values(result);
    for (let index = 0; index < placeOfInterest.length; index++) {
        var points = turf.points([
            result[index]
        ]);

        var searchWithin = turf.polygon([
            arrCovered
        ]);
        var ptsWithin = turf.pointsWithinPolygon(points, searchWithin);
        console.log(ptsWithin);
        console.log(placeOfInterest[index]);
    }

};

