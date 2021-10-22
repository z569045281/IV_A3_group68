var config = {
    style: 'mapbox://styles/booker619/ckv241tj62zk015qocnjjxvxx/draft',
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
                zoom: 12,
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
               },
               {
                layer: 'food',
                opacity: 0,
               },
               {
                layer: 'luna',
                opacity: 0,
               },
               {
                layer: 'sevenseed',
                opacity: 0,
               },
               {
                layer: 'cityloop',
                opacity: 0
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
                },
                {
                layer: 'cityloop',
                opacity: 1,
                },
                {
                layer: 'CBDheatmap',
                opacity: 0
                }
            ],
            onChapterExit: [
                {
                layer: 'CBD',
                opacity: 0  
                },
                {
                layer: 'cityloop',
                opacity: 0,
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
            image: 'https://lh3.googleusercontent.com/proxy/uUcNo-IlhjVxR39Sgnx7xNP1KXJBVMIsnBB8mOb4NCaaw1hWbTy_aDy_S_9lyqczm2jr76g6TmYSapBQUk_EErgzcMYUudOd4w_9T26eDNmrgjxW4LfobMEsrrCbX78pFoPYF5mx',
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
            image: 'https://travelintwos.com/wp-content/uploads/2019/08/photo0jpg.jpg',
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
            image: 'http://eatosaurusrex.com/wp-content/uploads/2017/09/20150524_seven-seeds-melbourne_4538.jpg',
            image2: 'https://cdn.broadsheet.com.au/cache/2c/d0/2cd099270c350ee0b17cf51d8148cc74.jpg',
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
            id: 'tigerous espresso',
            alignment: 'left',
            hidden: false,
            title: 'Tigerous Espresso',
            image: 'https://i2.wp.com/www.zestcoffee.com.au/app/uploads/2018/12/IMG-4124.JPG?fit=1000%2C1778&ssl=1',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [144.9582124,-37.81022002],
                zoom: 20,
                pitch: 36,
                bearing: 27.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'food',
                opacity: 1
                },
                {
                layer: 'CBD',
                opacity: 1
                }
            ],
            onChapterExit: []
        },

        {
            id: 'chinchin',
            alignment: 'left',
            hidden: false,
            title: 'Chin Chin Restaurant',
            image: 'https://media-cdn.tripadvisor.com/media/photo-s/02/26/5d/3b/chin-chin.jpg',
            image2: 'https://img.delicious.com.au/DLtwS8oH/w759-h506-cfill/del/2017/11/chin-chin-melbourne-55365-5.jpg',
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
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'Di',
            alignment: 'left',
            hidden: false,
            title: 'Di Stasio Citta',
            image: "https://img.delicious.com.au/FWk0USFf/w1200/del/2019/10/di-stasio-citta-melbourne-117125-2.jpg",
            image2: 'https://www.indeawards.com/wp-content/uploads/2020/05/The-Social-Space_Di-Stasio-Citta_HASSELL_3_Ph-Peter-Bennetts_1500x1000.jpg',
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
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'sumup',
            alignment: 'full',
            hidden: false,
            title: 'SUMUP',
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
