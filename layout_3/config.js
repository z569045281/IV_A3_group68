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
    footer: '<h2><a href="../index.html">Back to Index</a></h2>',
    chapters: [
        {
            id: 'index',
            alignment: 'right',
            hidden: false,
            title: 'Welcome to Melbourne!',
            image: '',
            description: '',
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
            title: 'Coffe and Restaurants',
            image: '',
            description: 'Melbourne is a city that lives and breathes coffee – what started with the city \'s European migrant wave has now developed into a specialised field. And brunch – whether its a green matcha fuelled adventure, or a classic stack of pancakes – is almost a competitive sport in a city with AM dining of this calibre. We scoured Melbourne to bring you a guide to the best of the best.',
            location: {
                center: [144.96320, -37.81355],
                zoom: 15.30,
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
            id: 'intro-CBDheatmap',
            alignment: 'full',
            hidden: false,
            title: 'The heat map of cafe distribution in Melbourne CBD',
            image: '',
            description: 'Source: Cafes and restaurants, with seating capacity ',
            location: {
                center: [144.96320, -37.81355],
                zoom: 15.30,
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
            onChapterExit: []
        },

        {
            id: 'CBDheatmap',
            alignment: 'left',
            hidden: true,
            title: '',
            image: '',
            description: '',
            location: {
                center: [144.96320, -37.81355],
                zoom: 15.30,
                pitch: 0,
                bearing: -0.8
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
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
            title: 'Five Cafes and restaurants you need to visit',
            image: '',
            description: 'Melbourne is a city that is renowned for its fantastic coffee and amazing cafe culture. From hidden CBD gems and suburban roasteries to the chic and stylish cafes that line Chapel Street, Melbourne provides a wealth of incredible locations where you can sip the finest brew and consume the most delicious dishes.',
            location: {},
            mapAnimation: '',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'luna',
            alignment: 'right',
            hidden: false,
            title: 'Lune Croissanterie',
            image: 'https://travelintwos.com/wp-content/uploads/2019/08/photo0jpg.jpg',
            description: 'Melbourne’s Lune Croissanterie has been named home of the World’s Best Croissant. Inspired by the delicate pastry of France, the Lune team reconstructed it to create a pastry worth lining up for',
            address: '119 Rose St, Fitzroy VIC 3065',
            location: {
                center: [144.9803769880091,-37.79522817823646],
                zoom: 15.59,
                pitch: 54,
                bearing: -15.80
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

        //{
        //    id: 'lunaCBD',
        //    alignment: 'left',
        //    hidden: false,
        //    title: 'Luna CBD',
        //    image: 'https://lh3.googleusercontent.com/proxy/uUcNo-IlhjVxR39Sgnx7xNP1KXJBVMIsnBB8mOb4NCaaw1hWbTy_aDy_S_9lyqczm2jr76g6TmYSapBQUk_EErgzcMYUudOd4w_9T26eDNmrgjxW4LfobMEsrrCbX78pFoPYF5mx',
        //    description: ' ',
        //    address:'Shop 16/161 Collins Street, Russell St, Melbourne VIC 3000',
        //    location: {
        //        center: [144.96942, -37.81551],
        //       zoom: 18.91,
        //        pitch: 46.50,
        //       bearing: -73.20
        //    },
        //    mapAnimation: 'flyTo',
        //    rotateAnimation: false,
        //    callback: '',
        //    onChapterEnter: [
        //        {
        //        layer: 'luna',
        //        opacity: 1
        //        }
        //    ],
        //   onChapterExit: []
        //},

        {
            id: 'sevenseed',
            alignment: 'left',
            hidden: false,
            title: 'Sevenseed',
            image: 'http://eatosaurusrex.com/wp-content/uploads/2017/09/20150524_seven-seeds-melbourne_4538.jpg',
            image2: 'https://cdn.broadsheet.com.au/cache/2c/d0/2cd099270c350ee0b17cf51d8148cc74.jpg',
            description: 'Stop in at Carlton for exactingly brewed cup of the Golden Gate espresso blend with notes of cocoa and toffee, or try a rotating single origin made with the method of your choice. The place is regularly busy and always humming with energy. It’s not uncommon to have to wait for a table. Melbourne University is only a block away so students often drop by while they kill time between classes.',
            address:'114 Berkeley St, Carlton VIC 3053',
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
            alignment: 'right',
            hidden: false,
            title: 'Tigerous Espresso',
            image: 'https://i1.wp.com/www.zestcoffee.com.au/app/uploads/2019/08/Zest_Tigerous_0110_9527.jpg?fit=320%2C480&ssl=1',
            description: 'Tigerous is Caleb’s first café, which he runs with his wife Abby, a certified nutritionist (and Caleb’s latest barista protégé). However new he is to owning a café, it’s definitely not Caleb’s first rodeo. The Tiger’s café heritage spans a decade in Melbourne’s evolving specialty scene. And like so many coffee professionals of his ilk, Caleb cut his teeth as a junior shot puller and worked his way up to head barista and eventually café manager, evolving his (now champion) skillset as the scene evolved.',
            address:'361 Queen St, Melbourne VIC 3000',
            location: {
                center: [144.9582124,-37.81022002],
                zoom: 19,
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
            onChapterExit: [
                {
                layer: 'CBD',
                opacity: 0
                }
            ]
        },

        {
            id: 'chinchin',
            alignment: 'left',
            hidden: false,
            title: 'Chin Chin Restaurant',
            image: 'https://media-cdn.tripadvisor.com/media/photo-s/02/26/5d/3b/chin-chin.jpg',
            image2: 'https://img.delicious.com.au/DLtwS8oH/w759-h506-cfill/del/2017/11/chin-chin-melbourne-55365-5.jpg',
            description: 'An australian take on design, art and bold south-east asian flavours, chin chin marches to the beat of its own drum.',
            address:'125 Flinders Ln, Melbourne VIC 3000',
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
            description: 'A Milan end for Spring St, an Italian quarter for the Melbourne CBD: a diverse range of human activities; a way of expression that combines music, literature, film, painting, photography, design and shared celebration, an electric sense of anticipation in the air – all of this carrying over into what has been built to stand here now.',
            address:'45 Spring St, Melbourne VIC 3004',
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
        }
    ]
};
