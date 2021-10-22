var config = {
    style: 'mapbox://styles/booker619/ckv241tj62zk015qocnjjxvxx',
    accessToken: 'pk.eyJ1IjoiYm9va2VyNjE5IiwiYSI6ImNrdG8xandteTA3ZXUzMG1scDM1Z3RzdDUifQ.DKp5ItneV3gjnQOXpMfaVA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: '',
    subtitle: '',
    byline: '',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'index',
            alignment: 'right',
            hidden: false,
            title: 'Display Title',
            image: '',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [144.97075, -37.82982],
                zoom: 12.43,
                pitch: 60,
                bearing: 56.22
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               {
               layer: 'boundary',
               opacity: 1,
               duration: 1000
               }

            ],
            onChapterExit: [
               {
               layer: 'boundary',
               opacity: 0
               }
            ]
        },
        {
            id: 'CBD',
            alignment: 'left',
            hidden: false,
            title: 'Second Title',
            image: '',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [144.96305, -37.81433],
                zoom: 15.52,
                pitch: 0,
                bearing: -0.8
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'CBD',
                opacity: 1  
                }
            ],
            onChapterExit: [
                {
                layer: 'CBD',
                opacity: 0  
                }
            ]
        },

        {
            id: 'CBDheatmap',
            alignment: 'left',
            hidden: true,
            title: '',
            image: '',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [144.96305, -37.81433],
                zoom: 15.52,
                pitch: 0,
                bearing: -0.8
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'CBDheatmap',
                duration: 1000,
                opacity: .55
                }
            ],
            onChapterExit: [
                {
                layer: 'CBDheatmap',
                opacity: 0
                }
            ]
        },

        {
            id: 'top5',
            alignment: 'full',
            hidden: false,
            title: 'test',
            image: '',
            description: 'Copy these sections to add to your story.',
            location: {},
            mapAnimation: '',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        
        {
            id: 'lunaCBD',
            alignment: 'left',
            hidden: false,
            title: 'Luna CBD',
            image: '',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [144.96942, -37.81551],
                zoom: 18.91,
                pitch: 46.50,
                bearing: -73.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'luna',
                opacity: 1
                }
            ],
            onChapterExit: []
        },

        {
            id: 'luna',
            alignment: 'left',
            hidden: false,
            title: 'Luna',
            image: '',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [144.97999, -37.79605],
                zoom: 18.91,
                pitch: 46.50,
                bearing: -73.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'sevenseed',
            alignment: 'left',
            hidden: false,
            title: 'Sevenseed',
            image: '',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [144.95878, -37.80286],
                zoom: 19.93,
                pitch: 19,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'sevenseed',
                opacity: 1
                }
            ],
            onChapterExit: [
                {
                layer: 'sevenseed',
                opacity: 0
                }
            ]
        },

        {
            id: 'janggun',
            alignment: 'left',
            hidden: false,
            title: 'Jang Gun Restuarant',
            image: '',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [144.9560032,-37.81345114],
                zoom: 18.91,
                pitch: 46.50,
                bearing: -73.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'food',
                opacity: 1
                }
            ],
            onChapterExit: [
               // {
               //     layer: 'food',
               ///     opacity: 0
               // }                
            ]
        },

        {
            id: 'chinchin',
            alignment: 'left',
            hidden: false,
            title: 'Chin Chin Restaurant',
            image: '',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [144.9703999,-37.81568917],
                zoom: 18.91,
                pitch: 46.50,
                bearing: -73.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               // {
               //     layer: 'food',
               //     opacity: 1
               // }
            ],
            onChapterExit: [
              //  {
               //     layer: 'food',
               //     opacity: 0
               // }                
            ]
        },

        {
            id: 'Di',
            alignment: 'left',
            hidden: false,
            title: 'Di Stasio Citta',
            image: '',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [144.9739482,-37.81419757],
                zoom: 18.91,
                pitch: 46.50,
                bearing: -73.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              //  {
              //      layer: 'food',
              //      opacity: 1
               // }
            ],
            onChapterExit: [
               // {
                //    layer: 'food',
               //     opacity: 0
               // }                
            ]
        },

        {
            id: 'sumup',
            alignment: 'full',
            hidden: false,
            title: 'Di Stasio Citta',
            image: '',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [144.9739482,-37.81419757],
                zoom: 18.91,
                pitch: 46.50,
                bearing: -73.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              //  {
              //      layer: 'food',
              //      opacity: 1
               // }
            ],
            onChapterExit: [
               // {
               //     layer: 'food',
               //     opacity: 0
               // }                
            ]
        }
    ]
};
