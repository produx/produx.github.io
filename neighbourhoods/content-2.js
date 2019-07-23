



var destination = {
    destinations: [
        {str: "Tokyo, Japan", val: "tokyo", map:"Tokyo,Japan", zoom:13, staticMapZoom:11, panX:-100, panY:0},
        {str: "Barcelona, Spain", val: "barcelona", map:"Barcelona,Spain", zoom:12, staticMapZoom:10, panX:-100, panY:0},
        {str: "Berlin, Germany", val: "berlin", map:"Berlin,Germany", zoom:11, staticMapZoom:10, panX:-200, panY:0}, 
        {str: "Brussels, Belguim", val: "brussels", map:"Brussels,Belguim", zoom:12, staticMapZoom:11, panX:0, panY:0}, 
        {str: "Copenhagen, Denmark", val: "copenhagen", map:"Copenhagen,Denmark", zoom:11, staticMapZoom:9, panX:0, panY:0},
        {str: "Dublin, Ireland", val: "dublin", map:"Dublin, Ireland", zoom:11, staticMapZoom:11, panX:-150, panY:0},
        {str: "Edinburgh, Scotland", val: "edinburgh", map:"Edinburgh,Scotland", zoom:13, staticMapZoom:11, panX:-120, panY:0},
        {str: "Florence, Italy", val: "florence", map:"Florence, Italy", zoom:14, staticMapZoom:11, panX:-100, panY:0},
        {str: "Hong Kong", val: "hongkong", map:"Hong Kong", zoom:13, staticMapZoom:10, panX:180, panY:700},
        {str: "Las Vegas, USA", val: "lasvegas", map:"Las Vegas, USA", zoom:10, staticMapZoom:11, panX:0, panY:0},
        {str: "Madrid, Spain", val: "madrid", map:"Madrid,Spain", zoom:13, staticMapZoom:11, panX:-100, panY:0},
        {str: "Milan, Italy", val: "milan", map:"Milan,Italy", zoom:11, staticMapZoom:11, panX:-100, panY:-150},
        {str: "New York, USA", val: "newyork", map:"New York,USA", zoom:13, staticMapZoom:11, panX:0, panY:-150},
        {str: "Prague, Czech Republic", val: "prague", map:"Prague, Czech Republic", zoom:13, staticMapZoom:11, panX:-150, panY:0},
        {str: "Rome, Italy", val: "rome", map:"Rome,Italy", zoom:13, staticMapZoom:11, panX:-250, panY:0},
        {str: "Singapore", val: "singapore", map:"Singapore", zoom:13, staticMapZoom:11, panX:200, panY:300},
        {str: "Stockholm, Sweden", val: "stockholm", map:"Stockholm,Sweden", zoom:12, staticMapZoom:11, panX:-100, panY:0},
        {str: "Venice, Italy", val: "venice", map:"Venice,Italy", zoom:14, staticMapZoom:11, panX:150, panY:100}
    ]
}

var typeDescription = [
    {type: "anchor", description: "Harbors and Seaports"},
    {type: "casino", description: "Casino"},
    {type: "civic", description: "Civic buildings"},
    {type: "golf", description: "Golf course"},
    {type: "historic", description: "Historic Buildings"},
    {type: "icecream", description: "Amusement Parks, Zoos, etc..."},
    {type: "medical", description: "Hospitals / Medical buildings"},
    {type: "monument", description: "Towers, Arches, Fountains, Churches, etc..."},
    {type: "museums", description: "Museum"},
    {type: "school", description: "Universities"},
    {type: "shopping", description: "Shopping"}, 
    {type: "sign", description: "Squares or Centers"},
    {type: "skiing", description: "Ski resort"},
    {type: "stadium", description: "Sports stadiums/Arenas"},
    {type: "sunglass", description: "Beach"},
    {type: "theater", description: "Theater"},
    {type: "tree", description: "Parks / Nature"},
    {type: "train", description: "Train station"},
    {type: "winery", description: "Winery"}
]

var landmarks = {
    newyork : [
        {name: "Times Square", type: "sign", lat: 40.758896, lng: -73.985130, primary: "true", neighbourhood: "Broadway - Times Square"},
        {name: "Rockefeller Center", type: "historic", lat: 40.7587, lng: -73.9787, primary: "true", neighbourhood: "Broadway - Times Square"},
        {name: "Museum of Modern Art (MOMA)", type: "museums", lat: 40.76106, lng: -73.97741, primary: "true", neighbourhood: "Broadway - Times Square"},
        {name: "Broadway", type: "theater", lat: 40.75799, lng: -73.98556, primary: "true", neighbourhood: "Broadway - Times Square"},
        {name: "New York Public Library", type: "civic" , lat: 40.7526, lng: -73.9827, primary: "true", neighbourhood: "Broadway - Times Square"},
        {name: "American Museum of Natural History", type: "museums", lat: 40.7805, lng: -73.97286, primary: "true", neighbourhood: "Central Parl"},
        {name: "Metropolitan Museum of Art (The Met)", type: "museums", lat: 40.77896, lng: -73.96235, primary: "true", neighbourhood: "Central Park"},
        {name: "Central Park Zoo", type: "icecream", lat: 40.76881, lng: -73.97204, primary: "true", neighbourhood: "Central Park"},
        {name: "United Nations Headquarters", type: "civic", lat: "", lng: "", primary: "true", neighbourhood: "Midtown East - Grand Central"},
        {name: "Tiffany & Co.", type: "icecream", lat: "", lng: "", primary: "true", neighbourhood: "Midtown East - Grand Central"},
    ]
}

var content = {
    tokyo : [
        {
            name: "Akasaka",
            nid: "1645687",
            hasContent: true,
            image: "https://a1.cdn-hotels.com/cos/production166/d148/22b478f0-05c0-11e4-b02d-d89d672bfba8.jpg",
            description: "It's one of the commercial centers of Tokyo, which explains why Akasaka boasts a lion's share of swanky, upmarket hotels – many of which count as attractions in their own right. Chill out in their cocktail and Champagne bars, not to mention the wealth of restaurants serving everything from exquisite tempura dishes to traditional Japanese barbecue, or yakiniku. Prices can be high, but you can bag great deals at lunchtime.",
            tags: "tag1, tag2, tag3",
            landmarks: "landmark1, landmark2, landmark3",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            center: {lat: 35.6794862140995, lng: 139.734433905381}, 
            polygon: [
                {lng: 139.722226, lat: 35.666941},
                {lng: 139.730487, lat: 35.668363},
                {lng: 139.73818, lat: 35.669198},
                {lng: 139.742897, lat: 35.670999},
                {lng: 139.752, lat: 35.689},
                {lng: 139.722, lat: 35.689},
                {lng: 139.722226, lat: 35.666941}
            ]
        }, 
        {
            name: "Asakusa",
            nid: "1645688",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production187/d78/23269bb0-05c0-11e4-b376-d89d672c79ac.jpg",
            description: "There's one major reason why Asakusa should be on your Tokyo to-do list: the ancient Buddhist temple Senso-Ji, which is the largest in the city and dates right back to 645 AD. Entering through the iconic Thunder Gate, you'll be dazzled by the Nakamise arcade, with its colorful stalls selling everything from kimonos to decorative fans. You can also admire Senso-Ji's ornate pagoda and the nearby Asakusa Shrine.",
            landmarks: "landmark1, landmark2, landmark3",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            tags: "tag1, tag2, tag3",
            center: {lat: 35.7252128673964, lng: 139.799428428791}, 
            polygon: [
                {lng: 139.790367, lat: 35.718657},
                {lng: 139.786532, lat: 35.706503},
                {lng: 139.791005, lat: 35.706024},
                {lng: 139.795864, lat: 35.705265},
                {lng: 139.798457, lat: 35.709678},
                {lng: 139.802886, lat: 35.714142},
                {lng: 139.807572, lat: 35.718606},
                {lng: 139.809497, lat: 35.725476},
                {lng: 139.811085, lat: 35.733254},
                {lng: 139.815008, lat: 35.737012},
                {lng: 139.814489, lat: 35.740169},
                {lng: 139.810468, lat: 35.741214},
                {lng: 139.802811, lat: 35.738898},
                {lng: 139.796451, lat: 35.739518},
                {lng: 139.791284, lat: 35.741281},
                {lng: 139.790367, lat: 35.718657}
            ]
        },

        {
            name: "Ginza",
            nid: "1645689",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production20/d709/23822930-05c0-11e4-b376-d89d672c79ac.jpg",
            tags: "tag1, tag2, tag3",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            landmarks: "landmark1, landmark2, landmark3",
            description: "Fashionistas flock to this part of Tokyo, and with good reason. It's the place to find high-end department stores as well as boutiques emblazoned with the names of the world's best-known fashion houses. Ginza's not just about splashing the cash, though. Iconic structures can also be seen first hand, from the clocktower on the Wako Building to the towering, neon-lit glass cylinder of the San'ai Building.",
            center: {lat: 35.6712935174737, lng: 139.764315704409}, 
            polygon: [
                {lng: 139.758623, lat: 35.668233},
                {lng: 139.762164, lat: 35.666937},
                {lng: 139.763223, lat: 35.663804},
                {lng: 139.764423, lat: 35.663887},
                {lng: 139.767684, lat: 35.666851},
                {lng: 139.767752, lat: 35.668016},
                {lng: 139.771817, lat: 35.671175},
                {lng: 139.772651, lat: 35.67424},
                {lng: 139.771005, lat: 35.674602},
                {lng: 139.759778, lat: 35.676938},
                {lng: 139.755778, lat: 35.670794},
                {lng: 139.759923, lat: 35.670912},
                {lng: 139.758623, lat: 35.668233}
            ] 
        },

        {
            name: "Nihonbashi",
            nid: "1645692",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production110/d1096/23ede350-05c0-11e4-8314-d89d672bd508.jpg",
            tags: "tag1, tag2, tag3",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            landmarks: "landmark1, landmark2, landmark3",
            description: "Taking its name from the Nihonbashi Bridge (stone now, but the original wooden one was built back in 1603), this is one of Tokyo's business hotspots. And you'll be able to tell that just from looking up at the magnificent buildings, including the sleek Mitsui Tower. It's also the headquarters of the Tokyo Stock Exchange, though casual travelers will probably be more interested in the district's department stores and restaurants.",
            center: {lat: 35.6841591001463, lng: 139.776211321046}, 
            polygon: [
                {lng: 139.757029, lat: 35.678017},
                {lng: 139.772685, lat: 35.674303},
                {lng: 139.772501, lat: 35.672566},
                {lng: 139.78124, lat: 35.66902},
                {lng: 139.784426, lat: 35.671865},
                {lng: 139.79369, lat: 35.68578},
                {lng: 139.788496, lat: 35.69477},
                {lng: 139.7874, lat: 35.695225},
                {lng: 139.782701, lat: 35.696672},
                {lng: 139.772851, lat: 35.69702},
                {lng: 139.766785, lat: 35.693027},
                {lng: 139.766162, lat: 35.69018},
                {lng: 139.760286, lat: 35.689531},
                {lng: 139.757029, lat: 35.678017}
            ]
        },
        
        {
            name: "Shinjuku",
            nid: "1645686",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production41/d382/244f1620-05c0-11e4-8314-d89d672bd508.jpg",
            tags: "tag1, tag2, tag3",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "Shinjuku train station is the busiest in the world, which gives you an idea of just how buzzing this district is. It's a place of contrasts – there are the alleys of Golden Gai, whose bars are a haven for artists and musicians, and then there are the whopping skyscrapers of the Nishi-Shinjuku business zone. For serenity amid the urban sprawl, relax amid the cherry blossoms of Shinjuku Gyoen National Garden.",
            landmarks: "landmark1, landmark2, landmark3",
            center: {lat: 35.692248403859, lng: 139.69102634108}, 
            polygon: [
                {lng: 139.663743, lat: 35.672229},
                {lng: 139.69169, lat: 35.668186},
                {lng: 139.690618, lat: 35.670129},
                {lng: 139.694411, lat: 35.679412},
                {lng: 139.697862, lat: 35.680852},
                {lng: 139.703616, lat: 35.680462},
                {lng: 139.708595, lat: 35.681304},
                {lng: 139.713994, lat: 35.680369},
                {lng: 139.718753, lat: 35.677562},
                {lng: 139.721914, lat: 35.67481},
                {lng: 139.721774, lat: 35.710064},
                {lng: 139.663778, lat: 35.710151},
                {lng: 139.663743, lat: 35.672229}
            ]
        }

    ], 

    barcelona: [
        {
            name: "Eixample",
            nid: "1649520",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production33/d96/09ad4e90-05c0-11e4-b02d-d89d672bfba8.jpg",
            tags: "Shopping, Architecture, Historical, Food, Friendly people",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "Its lavish avenue, Passeig de Gracia, is the place to check out Barcelona's chic fashion boutiques, but there's another reason Eixample is a must-see district: Gaudi. The trailblazing architect's uniquely organic-looking buildings – which look more grown than built – can be seen here, including Casa Mila and the cactus-like spires of Sagrada Familia, Gaudi's great church which is as much a symbol of Barcelona as the Eiffel Tower is of Paris.",
            landmarks: "Sagrada Familia, Passeig de Gracia, Plaça de Catalunya, Casa Batlló",
            center: {lat: 41.3917125306436, lng: 2.16478080087517}, 
            polygon: [
                {lng: 2.15985, lat: 41.396445},
                {lng: 2.15594, lat: 41.395352},
                {lng: 2.144598, lat: 41.392381},
                {lng: 2.143025, lat: 41.385619},
                {lng: 2.14286, lat: 41.380937},
                {lng: 2.14976, lat: 41.375452},
                {lng: 2.160581, lat: 41.3751},
                {lng: 2.168085, lat: 41.374848},
                {lng: 2.16294, lat: 41.378556},
                {lng: 2.163789, lat: 41.3854},
                {lng: 2.164417, lat: 41.386042},
                {lng: 2.169833, lat: 41.385745},
                {lng: 2.173479, lat: 41.38931},
                {lng: 2.175866, lat: 41.389123},
                {lng: 2.177332, lat: 41.390185},
                {lng: 2.179734, lat: 41.391141},
                {lng: 2.181364, lat: 41.392271},
                {lng: 2.182271, lat: 41.391592},
                {lng: 2.186654, lat: 41.394723},
                {lng: 2.186908, lat: 41.403213},
                {lng: 2.17563, lat: 41.411884},
                {lng: 2.168901, lat: 41.406997},
                {lng: 2.172395, lat: 41.404334},
                {lng: 2.167759, lat: 41.400871},
                {lng: 2.166556, lat: 41.401711},
                {lng: 2.15985, lat: 41.396445}
            ],  
            staticMapUrl: "41.396445,2.15985|41.395352,2.15594|41.392381,2.144598|41.385619,2.143025|41.380937,2.14286|41.375452,2.14976|41.3751,2.160581|41.374848,2.168085|41.378556,2.16294|41.3854,2.163789|41.386042,2.164417|41.385745,2.169833|41.38931,2.173479|41.389123,2.175866|41.390185,2.177332|41.391141,2.179734|41.392271,2.181364|41.391592,2.182271|41.394723,2.186654|41.403213,2.186908|41.411884,2.17563|41.406997,2.168901|41.404334,2.172395|41.400871,2.167759|41.401711,2.166556|41.396445,2.15985"
        }, 

        {
            name: "Gracia",
            nid: "1649519",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production138/d597/0a136360-05c0-11e4-b02d-d89d672bfba8.jpg",
            tags: "Nightlife, Bars, Live music, Entertainment",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "With its bohemian, village-like vibe, Gracia is popular with artists, hipsters, and party animals alike. Chill out in the relaxing Placa Rius i Taulet by day, and head to the jumping Placa del Sol at night to mingle at the many bars and clubs. But the most famous attraction has to be Park Guell – a wonderland of flowing stone arches and columns resembling tree trunks, designed by visionary architect Gaudi.",
            landmarks: "Park Guëll, Placa del Sol",
            center: {lat: 41.4100383180624, lng: 2.15295973672355}, 
            polygon: [
                {lng: 2.129748, lat: 41.420453},
                {lng: 2.140708, lat: 41.411737}, 
                {lng: 2.145131, lat: 41.411119}, 
                {lng: 2.14977, lat: 41.406038}, 
                {lng: 2.151552, lat: 41.400509}, 
                {lng: 2.156448, lat: 41.395546}, 
                {lng: 2.159842, lat: 41.396458}, 
                {lng: 2.166572, lat: 41.401738}, 
                {lng: 2.167731, lat: 41.400905}, 
                {lng: 2.172412, lat: 41.404347}, 
                {lng: 2.164218, lat: 41.410522}, 
                {lng: 2.161588, lat: 41.414196}, 
                {lng: 2.159403, lat: 41.414466}, 
                {lng: 2.157575, lat: 41.416874}, 
                {lng: 2.155257, lat: 41.415105}, 
                {lng: 2.151957, lat: 41.418076}, 
                {lng: 2.151689, lat: 41.420419}, 
                {lng: 2.149772, lat: 41.420555}, 
                {lng: 2.149326, lat: 41.421894}, 
                {lng: 2.144956, lat: 41.421187}, 
                {lng: 2.140628, lat: 41.422563}, 
                {lng: 2.13987, lat: 41.420856}, 
                {lng: 2.129748, lat: 41.420453}
            ], 
            staticMapUrl: "41.420453,2.129748|41.411737,2.140708|41.411119,2.145131|41.406038,2.14977|41.400509,2.151552|41.395546,2.156448|41.396458,2.159842|41.401738,2.166572|41.400905,2.167731|41.404347,2.172412|41.410522,2.164218|41.414196,2.161588|41.414466,2.159403|41.416874,2.157575|41.415105,2.155257|41.418076,2.151957|41.420419,2.151689|41.420555,2.149772|41.421894,2.149326|41.421187,2.144956|41.422563,2.140628|41.420856,2.13987|41.420453,2.129748"
        }, 
        {
            name: "Sarria-Sant Gervasi",
            nid: "1808316",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production90/d277/0a81dca0-05c0-11e4-b02d-d89d672bfba8.jpg",
            tags: "Relaxing, Cafes, Gardens, Shopping, Food",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "Balancing the buzz of downtown Barcelona, Sarria-Sant Gervasi is an upscale oasis of calm. Think relaxing cafes and leafy sun-dappled gardens, while if you're feeling more energetic you can head up to Mount Tibidabo where there's a popular theme park as well as the neo-Gothic extravagance of Sagrat Cor church. For chic boutiques, enticing eateries, and Catalan charm, have a wander along Major de Sarria, the area's main boulevard.",
            landmarks: "Mount Tibidabo",
            center: {lat: 41.4055389456722, lng: 2.12858485951083}, 
            polygon: [
                {lng: 2.15647, lat: 41.395512},
                {lng: 2.15153, lat: 41.400492},
                {lng: 2.149779, lat: 41.406024},
                {lng: 2.145053, lat: 41.411157},
                {lng: 2.140719, lat: 41.411737},

                {lng: 2.119438, lat: 41.428642},
                {lng: 2.104954, lat: 41.400423},
                {lng: 2.115662, lat: 41.395676},

                {lng: 2.117512, lat: 41.395273},
                {lng: 2.118532, lat: 41.39403},
                {lng: 2.117512, lat: 41.392135},

                {lng: 2.120978, lat: 41.390089},
                {lng: 2.130305, lat: 41.392384},
                {lng: 2.139025, lat: 41.391192},

                {lng: 2.144879, lat: 41.392439},
                {lng: 2.15647, lat: 41.395512}
            ], 
            staticMapUrl: "41.395512,2.15647|41.400492,2.15153|41.406024,2.149779|41.411157,2.145053|41.411737,2.140719|41.428642,2.119438|41.400423,2.104954|41.395676,2.115662|41.395273,2.117512|41.39403, 2.118532|41.392135,2.117512|41.390089,2.120978|41.392384,2.130305|41.391192,2.139025|41.392439,2.144879|41.395512,2.15647"
        },
        {
            name: "Sants-Montjuic",
            nid: "1649518",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production56/d1570/0af31500-05c0-11e4-b02d-d89d672bfba8.jpg",
            tags: "Beach, Walking, Shopping, Scenery, Football",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "For a taste of the great outdoors in Barcelona, take a cable car up Montjuic hill. Along with gasp-inducing views, you can also visit a museum dedicated to Joan Miro. Elsewhere in the sprawling Sants-Montjuic district you can wander Carrer de Sants, a buzzing shopping area. Camp Nou, home of Barcelona FC, is a place of pilgrimage for footie fans – the Barca Museum's one of the most popular in Spain.",
            landmarks: "Camp Nou, Montjuic hill",
            center: {lat: 41.3529539840538, lng: 2.14819198825082}, 
            polygon: [
                {lng: 2.127778, lat: 41.370934},
                {lng: 2.130442, lat: 41.369298},
                {lng: 2.133454, lat: 41.363728},
                {lng: 2.134906, lat: 41.361959},
                {lng: 2.132365, lat: 41.359644},
                {lng: 2.126013, lat: 41.354825},
                {lng: 2.13361, lat: 41.347493},
                {lng: 2.110265, lat: 41.338934},
                {lng: 2.158922, lat: 41.320729},
                {lng: 2.177623, lat: 41.370186},
                {lng: 2.177841, lat: 41.374291},
                {lng: 2.170484, lat: 41.374725},
                {lng: 2.169568, lat: 41.375066},
                {lng: 2.149761, lat: 41.374824},
                {lng: 2.158922, lat: 41.375483},
                {lng: 2.142801, lat: 41.38093},
                {lng: 2.14293, lat: 41.384799},
                {lng: 2.122579, lat: 41.375773},
                {lng: 2.124026, lat: 41.373567},
                {lng: 2.127778, lat: 41.370934}
            ],
            staticMapUrl: "41.370934,2.127778|41.369298,2.130442|41.363728,2.133454|41.361959,2.134906|41.359644,2.132365|41.354825,2.126013|41.347493,2.13361|41.338934,2.110265|41.320729,2.158922|41.370186,2.177623|41.374291,2.177841|41.374725,2.170484|41.375066,2.169568|41.374824,2.168113|41.375483,2.149761|41.38093,2.142801|41.384799,2.14293|41.375773,2.122579|41.373567,2.124026|41.370934,2.127778"
        }

    ], 

    berlin: [
        {
            name: "Charlottenburg",
            nid: "1701329",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production17/d1829/c77b40f0-ac67-11e4-99a1-d89d672bd508.jpg",
            tags: "Shopping, Fine dining, Relaxing, Gardens, Walking, Nature, Luxury",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "This western district of Berlin is full of elegance and luxury. To get a sense of its regal history, visit the huge, turquoise-domed Charlottenburg Palace, which sits grandly overlooking a lake. Then head to Kurfürstendamm, Berlin’s luxurious shopping artery, which attracts well-heeled locals to its stretch of designer stores. For those looking for a rural retreat, Charlottenburg also offers easy access to Berlin’s Grunewald Forest, the perfect place for hiking.",
            landmarks: "Schloss Charlottenburg, Kurfürstendamm, Europa-Center",
            center: {lat: 52.5128298131606, lng: 13.2683378017187}, 
            polygon: [
                {lng: 13.339509, lat: 52.499286},
{lng: 13.341092, lat: 52.502353},
{lng: 13.34247, lat: 52.504699},
{lng: 13.346108, lat: 52.506348},
{lng: 13.335223, lat: 52.508312},
{lng: 13.322219, lat: 52.512649},
{lng: 13.32929, lat: 52.522987},
{lng: 13.324108, lat: 52.525394},
{lng: 13.319818, lat: 52.524749},
{lng: 13.317475, lat: 52.535899},
{lng: 13.326338, lat: 52.537258},
{lng: 13.327648, lat: 52.54093},
{lng: 13.315454, lat: 52.548129},
{lng: 13.281389, lat: 52.548518},
{lng: 13.272593, lat: 52.546134},
{lng: 13.274131, lat: 52.54207},
{lng: 13.272856, lat: 52.539062},
{lng: 13.275728, lat: 52.537409},
{lng: 13.276846, lat: 52.532849},
{lng: 13.281067, lat: 52.530182},
{lng: 13.266157, lat: 52.529021},
{lng: 13.253488, lat: 52.526692},
{lng: 13.247269, lat: 52.528386},
{lng: 13.246791, lat: 52.524459},
{lng: 13.241128, lat: 52.526012},
{lng: 13.228849, lat: 52.525913},
{lng: 13.226537, lat: 52.525575},
{lng: 13.222231, lat: 52.526204},
{lng: 13.219523, lat: 52.521371},
{lng: 13.220641, lat: 52.515064},
{lng: 13.215304, lat: 52.509316},
{lng: 13.212433, lat: 52.509658},
{lng: 13.207811, lat: 52.502527},
{lng: 13.19204, lat: 52.497923},
{lng: 13.188157, lat: 52.482528},
{lng: 13.256125, lat: 52.486401},
{lng: 13.276577, lat: 52.50083},
{lng: 13.285002, lat: 52.495287},
{lng: 13.289256, lat: 52.497018},
{lng: 13.311468, lat: 52.501144},
{lng: 13.314201, lat: 52.499358},
{lng: 13.324514, lat: 52.499522},
{lng: 13.331171, lat: 52.500194},
{lng: 13.335701, lat: 52.499119},
{lng: 13.339509, lat: 52.499286}
            ],  
            staticMapUrl: "52.499286,13.339509|52.502353,13.341092|52.504699,13.34247|52.506348,13.346108|52.508312,13.335223|52.512649,13.322219|52.522987,13.32929|52.525394,13.324108|52.524749,13.319818|52.535899,13.317475|52.537258,13.326338|52.54093,13.327648|52.548129,13.315454|52.548518,13.281389|52.546134,13.272593|52.54207,13.274131|52.539062,13.272856|52.537409,13.275728|52.532849,13.276846|52.530182,13.281067|52.529021,13.266157|52.526692,13.253488|52.528386,13.247269|52.524459,13.246791|52.526012,13.241128|52.525913,13.228849|52.525575,13.226537|52.526204,13.222231|52.521371,13.219523|52.515064,13.220641|52.509316,13.215304|52.509658,13.212433|52.502527,13.207811|52.497923,13.19204|52.482528,13.188157|52.486401,13.256125|52.50083,13.276577|52.495287,13.285002|52.497018,13.289256|52.501144,13.311468|52.499358,13.314201|52.499522,13.324514|52.500194,13.331171|52.499119,13.335701|52.499286,13.339509"
        }, 

        {
            name: "Prenzlauer Berg",
            nid: "1662712",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production90/d172/c77b40f1-ac67-11e4-99a1-d89d672bd508.jpg",
            tags: "Food, Culture, Historical, Architecture, Cafes, Friendly people",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "A central Berlin district, just north of Mitte, Prenzlauer Berg has a relaxed atmosphere and beautiful historic buildings. Once downtrodden under East German rule, the Belle Epoque facades have been cleaned and brightened and an influx of the young middle class has caused a boom in independent cafés where you can sit on a sunny pavement and sip coffee. To understand the area’s heritage, visit the Rykestrasse Synagogue, Germany's largest.",
            landmarks: "Mauerpark, Kollwitzplatz, Synagoge Rykestraße, Kulturbrauerei",
            center: {lat: 52.5396389946329, lng: 13.4294736458981}, 
            polygon: [
                {lng: 13.415305, lat: 52.554634},{lng: 13.413884, lat: 52.556041},{lng: 13.414277, lat: 52.557182},{lng: 13.397319, lat: 52.558015},{lng: 13.398903, lat: 52.550827},{lng: 13.402556, lat: 52.542132},{lng: 13.404726, lat: 52.540513},{lng: 13.39901, lat: 52.539133},{lng: 13.40118, lat: 52.536319},{lng: 13.405716, lat: 52.535008},{lng: 13.407389, lat: 52.53578},{lng: 13.40867, lat: 52.534523},{lng: 13.413697, lat: 52.532969},{lng: 13.410643, lat: 52.529072},{lng: 13.41577, lat: 52.527573},{lng: 13.430306, lat: 52.522983},{lng: 13.433356, lat: 52.523236},{lng: 13.4375, lat: 52.523379},{lng: 13.45065, lat: 52.527259},{lng: 13.456494, lat: 52.528314},{lng: 13.460730999999999, lat: 52.529571},{lng: 13.467734, lat: 52.53802},{lng: 13.448523, lat: 52.546961},{lng: 13.430092, lat: 52.55182},{lng: 13.429599, lat: 52.551281},{lng: 13.42743, lat: 52.552534},{lng: 13.421021, lat: 52.553374},{lng: 13.420827, lat: 52.554156},{lng: 13.415305, lat: 52.554634}
            ], 
            staticMapUrl: "52.554634,13.415305|52.556041,13.413884|52.557182,13.414277|52.558015,13.397319|52.550827,13.398903|52.542132,13.402556|52.540513,13.404726|52.539133,13.39901|52.536319,13.40118|52.535008,13.405716|52.53578,13.407389|52.534523,13.40867|52.532969,13.413697|52.529072,13.410643|52.527573,13.41577|52.522983,13.430306|52.523236,13.433356|52.523379,13.4375|52.527259,13.45065|52.528314,13.456494|52.529571,13.460730999999999|52.53802,13.467734|52.546961,13.448523|52.55182,13.430092|52.551281,13.429599|52.552534,13.42743|52.553374,13.421021|52.554156,13.420827|52.554634,13.415305"
        }, 
        {
            name: "Kreuzberg",
            nid: "1701328",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production0/d1365/c77610d0-ac67-11e4-955a-d89d672c79ac.jpg",
            tags: "Sightseeing, Cafes, Culture, Secluded, Fine dining, Relaxing",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "Just south of Mitte, Kreuzberg is one of the most culturally rich and contrasting districts of Berlin. Much of Berlin’s turbulent history is concentrated here, with Checkpoint Charlie and the longest intact section of the Berlin wall to see, but the district is also forward-thinking, with modern architecture and science museums. To relax, head to the riverbank and take a leisurely canal cruise, or sit and picnic in the park.",
            landmarks: "Checkpoint Charlie, Deutsches Technikmuseum, Görlitzer Park",
            center: {lat: 52.4954180601255, lng: 13.4063850551749}, 
            polygon: [
                {lng: 13.443586, lat: 52.502325},{lng: 13.433309, lat: 52.506932},{lng: 13.429489, lat: 52.508309},{lng: 13.426138, lat: 52.505399},{lng: 13.419702, lat: 52.505693},{lng: 13.417483, lat: 52.504504},{lng: 13.41511, lat: 52.505081},{lng: 13.414021, lat: 52.504419},{lng: 13.411817, lat: 52.505098},{lng: 13.410031, lat: 52.506905},{lng: 13.404596, lat: 52.508093},{lng: 13.400738, lat: 52.509419},{lng: 13.399257, lat: 52.508418},{lng: 13.379853, lat: 52.506926},{lng: 13.377898, lat: 52.507762},{lng: 13.375385, lat: 52.50393},{lng: 13.377121, lat: 52.501721},{lng: 13.373185, lat: 52.502909},{lng: 13.371733, lat: 52.502298},{lng: 13.37087, lat: 52.500044},{lng: 13.369756, lat: 52.498743},{lng: 13.36859, lat: 52.496772},{lng: 13.36872, lat: 52.492931},{lng: 13.372668, lat: 52.492357},{lng: 13.371499, lat: 52.485376},{lng: 13.389915, lat: 52.484584},{lng: 13.406496, lat: 52.482443},{lng: 13.407663, lat: 52.47844},{lng: 13.41095, lat: 52.477726},{lng: 13.413645, lat: 52.478092},{lng: 13.41352, lat: 52.478625},{lng: 13.418932, lat: 52.477969},{lng: 13.419626, lat: 52.479615},{lng: 13.421311, lat: 52.479991},{lng: 13.422023, lat: 52.486531},{lng: 13.424599, lat: 52.485909},{lng: 13.425662, lat: 52.487623},{lng: 13.424835, lat: 52.490093},{lng: 13.423337, lat: 52.491124},{lng: 13.422729, lat: 52.493217},{lng: 13.420977, lat: 52.495335},{lng: 13.42267, lat: 52.495106},{lng: 13.439988, lat: 52.489515},{lng: 13.446351, lat: 52.494443},{lng: 13.447831, lat: 52.494713},{lng: 13.455088, lat: 52.498692},{lng: 13.443586, lat: 52.502325}
            ], 
            staticMapUrl: "52.502325,13.443586|52.506932,13.433309|52.508309,13.429489|52.505399,13.426138|52.505693,13.419702|52.504504,13.417483|52.505081,13.41511|52.504419,13.414021|52.505098,13.411817|52.506905,13.410031|52.508093,13.404596|52.509419,13.400738|52.508418,13.399257|52.506926,13.379853|52.507762,13.377898|52.50393,13.375385|52.501721,13.377121|52.502909,13.373185|52.502298,13.371733|52.500044,13.37087|52.498743,13.369756|52.496772,13.36859|52.492931,13.36872|52.492357,13.372668|52.485376,13.371499|52.484584,13.389915|52.482443,13.406496|52.47844,13.407663|52.477726,13.41095|52.478092,13.413645|52.478625,13.41352|52.477969,13.418932|52.479615,13.419626|52.479991,13.421311|52.486531,13.422023|52.485909,13.424599|52.487623,13.425662|52.490093,13.424835|52.491124,13.423337|52.493217,13.422729|52.495335,13.420977|52.495106,13.42267|52.489515,13.439988|52.494443,13.446351|52.494713,13.447831|52.498692,13.455088|52.502325,13.443586"
        },
        {
            name: "Friedrichshain",
            nid: "1662709",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production158/d919/c75b35d0-ac67-11e4-be0e-d89d672bfba8.jpg",
            tags: "Culture, Nightlife, Urban, Budget, Markets, Live music",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "With the bouncing clubs, vibrant bars, and buzzing pubs of Boxhagener Platz and Simon-Dach Strasse, the bohemian district of Frederichshain is where Berlin's coolest citizens go to party, unwind, and revel into the wee hours. But there are also fascinating windows into East Berlin's beguiling past, the most evocative being the East Side Gallery, a stretch of the Berlin Wall covered in colorful, politically-charged murals.",
            landmarks: "East Side Gallery, Karl-Marx-Allee, Frankfurter Tor, Simon-Dach-Straße",
            center: {lat: 52.5111988763599, lng: 13.4543032613299}, 
            polygon: [
                {lng: 13.458623, lat: 52.526292},{lng: 13.456549, lat: 52.528331},{lng: 13.451687, lat: 52.527457},{lng: 13.437419, lat: 52.523284},{lng: 13.430169, lat: 52.523038},{lng: 13.427701, lat: 52.517219},{lng: 13.423242, lat: 52.512219},{lng: 13.429618, lat: 52.508244},{lng: 13.433284, lat: 52.506939},{lng: 13.443564, lat: 52.502332},{lng: 13.45448, lat: 52.498842},{lng: 13.472879, lat: 52.491909},{lng: 13.477815, lat: 52.489485},{lng: 13.482674, lat: 52.488416},{lng: 13.487689, lat: 52.489577},{lng: 13.47941, lat: 52.494816},{lng: 13.471527, lat: 52.49904},{lng: 13.468102, lat: 52.499761},{lng: 13.469536, lat: 52.504033},{lng: 13.470732, lat: 52.505198},{lng: 13.475354, lat: 52.510091},{lng: 13.47607, lat: 52.511594},{lng: 13.475356, lat: 52.513728},{lng: 13.476234, lat: 52.515084},{lng: 13.474163, lat: 52.518824},{lng: 13.470498, lat: 52.522263},{lng: 13.467868, lat: 52.523724},{lng: 13.461172, lat: 52.525077},{lng: 13.458623, lat: 52.526292}
            ],
            staticMapUrl: "52.526292,13.458623|52.528331,13.456549|52.527457,13.451687|52.523284,13.437419|52.523038,13.430169|52.517219,13.427701|52.512219,13.423242|52.508244,13.429618|52.506939,13.433284|52.502332,13.443564|52.498842,13.45448|52.491909,13.472879|52.489485,13.477815|52.488416,13.482674|52.489577,13.487689|52.494816,13.47941|52.49904,13.471527|52.499761,13.468102|52.504033,13.469536|52.505198,13.470732|52.510091,13.475354|52.511594,13.47607|52.513728,13.475356|52.515084,13.476234|52.518824,13.474163|52.522263,13.470498|52.523724,13.467868|52.525077,13.461172|52.526292,13.458623"
        },
        {
            name: "Mitte",
            nid: "1662710",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production167/d450/c7765ef0-ac67-11e4-955a-d89d672c79ac.jpg",
            tags: "Sightseeing, Historical, Architecture, Walking, Culture, Family friendly",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "Berlin's center, the Mitte district is decorated with some of Europe's greatest structures, from the Neo-Classical grandeur of Brandenburg Gate to the jewel-like dome of the Berliner Dom Cathedral, which stands amid the cluster of world-class museums on the aptly-named Museum Island. No visit to Berlin would be complete without a wander around Potsdamer Platz, the vast square which has survived the ravages of World War Two and division by the Berlin Wall.",
            landmarks: "Brandenburg Gate, Reichstag, Holocaust Memorial, Berliner Dom",
            center: {lat: 52.5319975820869, lng: 13.367916366914}, 
            polygon: [
                {lng: 13.422902, lat: 52.512205},{lng: 13.427606, lat: 52.517594},{lng: 13.430136, lat: 52.523028},{lng: 13.410501, lat: 52.529028},{lng: 13.413342, lat: 52.53289},{lng: 13.408462, lat: 52.53454},{lng: 13.407016, lat: 52.535749},{lng: 13.405569, lat: 52.534977},{lng: 13.401048, lat: 52.536084},{lng: 13.39888, lat: 52.539055},{lng: 13.404668, lat: 52.540592},{lng: 13.402501, lat: 52.542026},{lng: 13.398345, lat: 52.551264},{lng: 13.396181, lat: 52.561605},{lng: 13.389127, lat: 52.566553},{lng: 13.384964, lat: 52.567769},{lng: 13.378993, lat: 52.56601},{lng: 13.377, lat: 52.560396},{lng: 13.371572, lat: 52.560508},{lng: 13.372114, lat: 52.5571},{lng: 13.365239, lat: 52.558302},{lng: 13.365541, lat: 52.562571},{lng: 13.354162, lat: 52.561857},{lng: 13.339902, lat: 52.566335},{lng: 13.331763, lat: 52.562042},{lng: 13.327058, lat: 52.561929},{lng: 13.322908, lat: 52.549829},{lng: 13.314947, lat: 52.551916},{lng: 13.311694, lat: 52.548614},{lng: 13.315675, lat: 52.548504},{lng: 13.327801, lat: 52.541251},{lng: 13.326359, lat: 52.537293},{lng: 13.317463, lat: 52.535892},{lng: 13.319853, lat: 52.524773},{lng: 13.324201, lat: 52.525408},{lng: 13.329264, lat: 52.522987},{lng: 13.322281, lat: 52.512649},{lng: 13.335239, lat: 52.508322},{lng: 13.346105, lat: 52.506338},{lng: 13.342465, lat: 52.504709},{lng: 13.341083, lat: 52.502366},{lng: 13.351174, lat: 52.500167},{lng: 13.352182, lat: 52.501632},{lng: 13.355591, lat: 52.501776},{lng: 13.362171, lat: 52.499679},{lng: 13.369737, lat: 52.49878},{lng: 13.370844, lat: 52.500061},{lng: 13.371683, lat: 52.502322},{lng: 13.373186, lat: 52.502964},{lng: 13.37702, lat: 52.501782},{lng: 13.37534, lat: 52.503924},{lng: 13.377882, lat: 52.507807},{lng: 13.37987, lat: 52.50696},{lng: 13.399221, lat: 52.508476},{lng: 13.400726, lat: 52.509473},{lng: 13.404634, lat: 52.508152},{lng: 13.410064, lat: 52.506932},{lng: 13.411869, lat: 52.505057},{lng: 13.414036, lat: 52.504395},{lng: 13.415122, lat: 52.505057},{lng: 13.417469, lat: 52.504508},{lng: 13.41964, lat: 52.50571},{lng: 13.426145, lat: 52.505385},{lng: 13.429403, lat: 52.508353},{lng: 13.422902, lat: 52.512205}
            ],
            staticMapUrl: "52.512205,13.422902|52.517594,13.427606|52.523028,13.430136|52.529028,13.410501|52.53289,13.413342|52.53454,13.408462|52.535749,13.407016|52.534977,13.405569|52.536084,13.401048|52.539055,13.39888|52.540592,13.404668|52.542026,13.402501|52.551264,13.398345|52.561605,13.396181|52.566553,13.389127|52.567769,13.384964|52.56601,13.378993|52.560396,13.377|52.560508,13.371572|52.5571,13.372114|52.558302,13.365239|52.562571,13.365541|52.561857,13.354162|52.566335,13.339902|52.562042,13.331763|52.561929,13.327058|52.549829,13.322908|52.551916,13.314947|52.548614,13.311694|52.548504,13.315675|52.541251,13.327801|52.537293,13.326359|52.535892,13.317463|52.524773,13.319853|52.525408,13.324201|52.522987,13.329264|52.512649,13.322281|52.508322,13.335239|52.506338,13.346105|52.504709,13.342465|52.502366,13.341083|52.500167,13.351174|52.501632,13.352182|52.501776,13.355591|52.499679,13.362171|52.49878,13.369737|52.500061,13.370844|52.502322,13.371683|52.502964,13.373186|52.501782,13.37702|52.503924,13.37534|52.507807,13.377882|52.50696,13.37987|52.508476,13.399221|52.509473,13.400726|52.508152,13.404634|52.506932,13.410064|52.505057,13.411869|52.504395,13.414036|52.505057,13.415122|52.504508,13.417469|52.50571,13.41964|52.505385,13.426145|52.508353,13.429403|52.512205,13.422902"
        }
    ], 
    brussels: [
        {
            name: "Brussels Grand Place",
            nid: "1705509",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production59/d266/d3f73500-ac67-11e4-99a1-d89d672bd508.jpg",
            tags: "Sightseeing, Monuments, Cafes, Scenery",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "While in the City Center, you shouldn't miss Grand Place. This historic square is illuminated by fine silvery-grey and white Gothic architecture – the Town Hall and City Museum are particularly magnificent sights. Stop off in one of its cafés, nestled inside arches, and hear the satisfying crunch of your fork sinking into a warm traditional Belgian waffle glazed with caramelized sugar. After, giggle at the quirky Belgian statue Manneken Pis.",
            landmarks: "Manneken Pis Statue, Brussels Stock Exchange, St. Catherine's Square,  Brussels Park",
            center: {lat: 50.846724265067, lng: 4.352484320099}, 
            polygon: [
                {lng: 4.368913, lat: 50.847326},{lng: 4.361538, lat: 50.851967},{lng: 4.356385, lat: 50.854074},{lng: 4.343963, lat: 50.856284},{lng: 4.337901, lat: 50.848672},{lng: 4.342249, lat: 50.840831},{lng: 4.343823, lat: 50.833669},{lng: 4.357488, lat: 50.837689},{lng: 4.364762, lat: 50.841025},{lng: 4.368913, lat: 50.847326}
            ],  
            staticMapUrl: "50.847326,4.368913|50.851967,4.361538|50.854074,4.356385|50.856284,4.343963|50.848672,4.337901|50.840831,4.342249|50.833669,4.343823|50.837689,4.357488|50.841025,4.364762|50.847326,4.368913"
        }, 

        {
            name: "Ixelles",
            nid: "1706926",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production139/d1546/d3f07e40-ac67-11e4-99a1-d89d672bd508.jpg",
            tags: "Shopping, Restaurants, Walking, Culture, Coffee",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "Elsene – west of Ixelles’ Avenue Louise – is a bustling shopping quarter dotted with designer shops and jewelers. Behind illuminated storefronts, wanderers will find quaint bookshops, cool independent record stores, and tasty ethnic restaurants. Bright fabrics fluttering in the breeze, exotic grocers, and batik shops give this neighborhood an irresistible vibrancy – try a walking tour with a guide from the Kuumba cultural center.",
            landmarks: "Horta Museum,    Ixelles Ponds,   D'Ieteren Gallery,   Ixelles Museums of Fine Arts",
            center: {lat: 50.8245420140277, lng: 4.3623551317068}, 
            polygon: [
                {lng: 4.36059, lat: 50.839045},{lng: 4.357577, lat: 50.837692},{lng: 4.343795, lat: 50.833611},{lng: 4.337994, lat: 50.830029},{lng: 4.362016, lat: 50.809306},{lng: 4.371422, lat: 50.814435},{lng: 4.367486, lat: 50.823041},{lng: 4.363084, lat: 50.825603},{lng: 4.35819, lat: 50.82869},{lng: 4.354167, lat: 50.830722},{lng: 4.351469, lat: 50.831241},{lng: 4.348718, lat: 50.832809},{lng: 4.35751, lat: 50.83732},{lng: 4.361252, lat: 50.834171},{lng: 4.360966, lat: 50.831733},{lng: 4.364922, lat: 50.827461},{lng: 4.371674, lat: 50.821228},{lng: 4.373619, lat: 50.814948},{lng: 4.377297, lat: 50.815197},{lng: 4.381195, lat: 50.819203},{lng: 4.383437, lat: 50.826153},{lng: 4.369168, lat: 50.835674},{lng: 4.362121, lat: 50.837487},{lng: 4.36059, lat: 50.839045}
            ], 
            staticMapUrl: "50.839045,4.36059|50.837692,4.357577|50.833611,4.343795|50.830029,4.337994|50.809306,4.362016|50.814435,4.371422|50.823041,4.367486|50.825603,4.363084|50.82869,4.35819|50.830722,4.354167|50.831241,4.351469|50.832809,4.348718|50.83732,4.35751|50.834171,4.361252|50.831733,4.360966|50.827461,4.364922|50.821228,4.371674|50.814948,4.373619|50.815197,4.377297|50.819203,4.381195|50.826153,4.383437|50.835674,4.369168|50.837487,4.362121|50.839045,4.36059"
        }, 
        {
            name: "Brussels Rogier Square",
            nid: "1705511",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production36/d742/d3ee8270-ac67-11e4-be0e-d89d672bfba8.jpg",
            tags: "Food, Urban, Friendly people",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "The busy hub of Rogier Square is located in Saint-Josse-ten-Noode, which may be the smallest district in Brussels but it's also one of the busiest. An exciting cocktail of cultures, it's the very picture of a modern melting-pot. One minute you're among smart, sleek office blocks, the next you're mingling in the Turkish neighborhoods. Delicious restaurants reflecting the various nationalities abound, making it a foodie haven.",
            landmarks: "Brussels Rogier Square,  Saint-Josse-ten-Noode",
            center: {lat: 50.8618938216999, lng: 4.37200040013236}, 
            polygon: [
                {lng: 4.344018, lat: 50.856315},{lng: 4.356351, lat: 50.854112},{lng: 4.361625, lat: 50.85195},{lng: 4.368956, lat: 50.847347},{lng: 4.385518, lat: 50.8482},{lng: 4.389513, lat: 50.85319},{lng: 4.395214, lat: 50.868845},{lng: 4.367287, lat: 50.878625},{lng: 4.359152, lat: 50.871946},{lng: 4.346217, lat: 50.859231},{lng: 4.344018, lat: 50.856315}
            ], 
            staticMapUrl: "50.856315,4.344018|50.854112,4.356351|50.85195,4.361625|50.847347,4.368956|50.8482,4.385518|50.85319,4.389513|50.868845,4.395214|50.878625,4.367287|50.871946,4.359152|50.859231,4.346217|50.856315,4.344018"        },
        {
            name: "European Quarter",
            nid: "1642409",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production158/d919/c75b35d0-ac67-11e4-be0e-d89d672bfba8.jpg",
            tags: "Business, Parks, Museum, Art, Culture",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "Mingle with the diplomats and European Union employees in the cafes and bars of the European Quarter – the most buzzing hotspot has to be Place du Luxembourg, which is close to to Espace Leopold, where the European Parliament convenes. To bask and relax, there's also the green oasis of Leopold Park, while Cinquantenaire Park boasts the Royal Military Museum as well as the Cinquantenaire Art Museum.",
            landmarks: "European Commission Headquarters (Berlaymont Building),  European Union Parliament Building,  Place du Luxembourg",
            center: {lat: 50.8393230805852, lng: 4.38809550074323}, 
            polygon: [
                {lng: 4.369147, lat: 50.847312},{lng: 4.364811, lat: 50.841001},{lng: 4.360633, lat: 50.839072},{lng: 4.362176, lat: 50.8376},{lng: 4.369348, lat: 50.835701},{lng: 4.377049, lat: 50.824298},{lng: 4.420069, lat: 50.840284},{lng: 4.389582, lat: 50.853053},{lng: 4.385591, lat: 50.848118},{lng: 4.369147, lat: 50.847312}
            ],
            staticMapUrl: "50.847312,4.369147|50.841001,4.364811|50.839072,4.360633|50.8376,4.362176|50.835701,4.369348|50.824298,4.377049|50.840284,4.420069|50.853053,4.389582|50.848118,4.385591|50.847312,4.369147"
        }
    ], 

    copenhagen: [
        {
            name: "Christianshavn",
            nid: "1648932",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production47/d396/3935aa20-74ad-11e4-8f3e-d89d672c79ac.jpg",
            tags: "Historical, Architecture, Churches, Cafes, Bars, Friendly people",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "Christianshavn, set near central Copenhagen, is a relaxed, eclectic neighborhood steeped in history. Dominated by quaint canals, lined with pink, blue, and white buildings with flower-flecked balconies, Christianshavn is perfect for an enchanting amble. Spiraling Baroque church towers occupy the streets, where a blend of academics, businessmen, and artists enjoy the resplendent café culture, cool bars, and ritzy restaurants, all infused with an alternative, welcoming atmosphere.",
            landmarks: "Copenhagen Opera House,  Danish Architecture Centre,  Church of Our Saviour",
            center: {lat: 55.6766433245241, lng: 12.5996288251645}, 
            polygon: [
                {lng: 12.578091, lat: 55.669047},{lng: 12.587393, lat: 55.665936},{lng: 12.597507, lat: 55.668764},{lng: 12.6003, lat: 55.669751},{lng: 12.609889, lat: 55.673927},{lng: 12.614044, lat: 55.679985},{lng: 12.613977, lat: 55.683172},{lng: 12.613125, lat: 55.685296},{lng: 12.606895, lat: 55.689787},{lng: 12.603157, lat: 55.688667},{lng: 12.596387, lat: 55.679053},{lng: 12.5881, lat: 55.674668},{lng: 12.578091, lat: 55.669047}
            ],  
            staticMapUrl: "55.669047,12.578091|55.665936,12.587393|55.668764,12.597507|55.669751,12.6003|55.673927,12.609889|55.679985,12.614044|55.683172,12.613977|55.685296,12.613125|55.689787,12.606895|55.688667,12.603157|55.679053,12.596387|55.674668,12.5881|55.669047,12.578091"
        }, 

        {
            name: "Amager",
            nid: "1742279",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production139/d1546/d3f07e40-ac67-11e4-99a1-d89d672bd508.jpg",
            tags: "Gardens, Bars, Architecture, Cafes",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "Amager is a large, energetic district of Copenhagen on an island to the east of the center, that blends an infinitely diverse range of entertainment and leisure activities. In the enthralling streets, framed by stately medieval and white Baroque buildings, a thriving café culture abounds, many of which transform into cool, cultured bars at night. To the west of Amager, luscious stretches of open parks and greenery offer natural beauty.",
            landmarks: "Bella Center,    Fields Shopping Centre,  Koncerthuset",
            center: {lat: 55.6487991147381, lng: 12.5908771957645}, 
            polygon: [
                {lng: 12.565858, lat: 55.660666},{lng: 12.552847, lat: 55.642262},{lng: 12.524816, lat: 55.622315},{lng: 12.55991, lat: 55.621318},{lng: 12.644044, lat: 55.649929},{lng: 12.637163, lat: 55.669085},{lng: 12.624332, lat: 55.678602},{lng: 12.614408, lat: 55.676034},{lng: 12.610031, lat: 55.673739},{lng: 12.58689, lat: 55.666008},{lng: 12.578266, lat: 55.668968},{lng: 12.565858, lat: 55.660666}
            ], 
            staticMapUrl: "55.660666,12.565858|55.642262,12.552847|55.622315,12.524816|55.621318,12.55991|55.649929,12.644044|55.669085,12.637163|55.678602,12.624332|55.676034,12.614408|55.673739,12.610031|55.666008,12.58689|55.668968,12.578266|55.660666,12.565858"
        }, 
        {
            name: "Orestad",
            nid: "1764449",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production44/d773/39302be0-74ad-11e4-a6db-d89d672bd508.jpg",
            tags: "Nightlife, Nature, Urban, Culture",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "Orestad is a booming city area with unique and futuristic urban beauty set in central Amager Island. Perfectly placed between the captivating alternative scene of nearby Christianshavn and the stretches of the island’s natural greenery, Orestad offers an eclectic taste of all that Copenhagen has to offer. It has a youthful, cultured atmosphere due to the nearby universities, and boasts contemporary bars and glitzy restaurants.",
            landmarks: "Orestad Station",
            center: {lat: 55.6296743459483, lng: 12.5731983780256}, 
            polygon: [
                {lng: 12.577052, lat: 55.618517},{lng: 12.585003, lat: 55.640609},{lng: 12.569321, lat: 55.641231},{lng: 12.561568, lat: 55.618063},{lng: 12.577052, lat: 55.618517}
            ], 
            staticMapUrl: "55.618517,12.577052|55.640609,12.585003|55.641231,12.569321|55.618063,12.561568|55.618517,12.577052"
        },
        {
            name: "Nyhavn - Amalienborg",
            nid: "1742223",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production149/d222/392d93d0-74ad-11e4-8f3e-d89d672c79ac.jpg",
            tags: "Historical, Architecture, Monuments, Walking",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "The second you step into the centre of the Amalienborg courtyard, surrounded on all sides by the breathtaking Rococo palace buildings, and gaze upon Frederik's Church's ornate dome, you'll see exactly why the Danish royals call this beautiful harborside home. For an authentic slice of Old Denmark, take a leisurely stroll down the stunning Nyhavn harbor, where 17th Century townhouses rub shoulders with cutting-edge eateries, all alongside the soothing canal.",
            landmarks: "Nyhavn,  Kongens Nytorv,  Amalienborg Palace,  Royal Danish Theater",
            center: {lat: 55.6824418080129, lng: 12.5917197471526}, 
            polygon: [
                {lng: 12.599243, lat: 55.688397},{lng: 12.5901, lat: 55.687194},{lng: 12.584846, lat: 55.68148},{lng: 12.587973, lat: 55.674968},{lng: 12.596292, lat: 55.680609},{lng: 12.599243, lat: 55.688397}
            ],
            staticMapUrl: "55.688397,12.599243|55.687194,12.5901|55.68148,12.584846|55.674968,12.587973|55.680609,12.596292|55.688397,12.599243"
        },
        {
            name: "Frederiksberg",
            nid: "1638116",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production149/d222/392d93d0-74ad-11e4-8f3e-d89d672c79ac.jpg",
            tags: "Zoo, Shopping, Gardens, Bars",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "When you see the beautiful Baroque views of the Frederiksberg Palace, or stride down the main thoroughfare Gammel Kongevej, lined with designer stores and vibrant bars, you'll see exactly why Frederiksbergs one of the city's most exclusive boroughs. For a glorious change of pace, check out the charming residents of Copenhagen Zoo or stretch out across the grass in Frederiksberg Park, which features its own small waterfall.",
            landmarks: "Forum Copenhagen,    Copenhagen Zoo,  Frederiksberg Palace,    Frederiksberg Garden",
            center: {lat: 55.6800464588246, lng: 12.5237573788893}, 
            polygon: [
                {lng: 12.557952, lat: 55.683346},{lng: 12.551766, lat: 55.687314},{lng: 12.543162, lat: 55.688291},{lng: 12.534579, lat: 55.695705},{lng: 12.520317, lat: 55.693793},{lng: 12.500537, lat: 55.687038},{lng: 12.491415, lat: 55.680293},{lng: 12.49251, lat: 55.674303},{lng: 12.493038, lat: 55.670823},{lng: 12.498018, lat: 55.668152},{lng: 12.514967, lat: 55.668169},{lng: 12.528458, lat: 55.666902},{lng: 12.542348, lat: 55.671789},{lng: 12.554822, lat: 55.673896},{lng: 12.557952, lat: 55.683346}
            ],
            staticMapUrl: "41.370934,2.127778|41.369298,2.130442|41.363728,2.133454|41.361959,2.134906|41.359644,2.132365|41.354825,2.126013|41.347493,2.13361|41.338934,2.110265|41.320729,2.158922|41.370186,2.177623|41.374291,2.177841|41.374725,2.170484|41.375066,2.169568|41.374824,2.168113|41.375483,2.149761|41.38093,2.142801|41.384799,2.14293|41.375773,2.122579|41.373567,2.124026|41.370934,2.127778"
        }
    ], 

    dublin: [
        {
            name: "Croke Park",
            nid: "1670068",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production123/d876/e3c0f480-ac67-11e4-99a1-d89d672bd508.jpg",
            tags: "Sightseeing, Urban, Gardens, Relaxing",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "Gaelic Games and Rugby Union fans feel at home in Croke Park – home to Dublin’s famous sporting stadium. If you fancy a bird’s eye view, head to the Skyline walkway for incredible vistas across the city. Back on the ground, the stadium’s museum offers exhibits on the history of Ireland’s national sports. If you fancy peace away from urban life, nearby Griffith Park is a pleasing place for a stroll.",
            landmarks: "Casino at Marino,    Fairview Park,   Clontarf Golf Club,  Croke Park",
            center: {lat: 53.3643811233298, lng: -6.24096676127601}, 
            polygon: [
                {lng: -6.274961, lat: 53.36782},{lng: -6.270503, lat: 53.359183},{lng: -6.261509, lat: 53.359893},{lng: -6.247092, lat: 53.354689},{lng: -6.237809, lat: 53.352411},{lng: -6.227492, lat: 53.359603},{lng: -6.216947, lat: 53.357994},{lng: -6.211099, lat: 53.368732},{lng: -6.212232, lat: 53.371597},{lng: -6.233657, lat: 53.374742},{lng: -6.254187, lat: 53.367003},{lng: -6.272594, lat: 53.371826},{lng: -6.274961, lat: 53.36782}
            ],  
            staticMapUrl: "53.36782,-6.274961|53.359183,-6.270503|53.359893,-6.261509|53.354689,-6.247092|53.352411,-6.237809|53.359603,-6.227492|53.357994,-6.216947|53.368732,-6.211099|53.371597,-6.212232|53.374742,-6.233657|53.367003,-6.254187|53.371826,-6.272594|53.36782,-6.274961"
        }, 

        {
            name: "City Centre",
            nid: "1637624",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production115/d1029/e3c7ab40-ac67-11e4-be0e-d89d672bfba8.jpg",
            tags: "Monuments, Historical, Bars, Nightlife, SHopping",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "The old and new vie for your attention in Dublin. History lovers have to see Dublin Castle, parts of which date back to the 13th Century, while the Book of Kells at Trinity College Library is one of Ireland's greatest treasures. Shopaholics will relish Grafton Street, while St Stephen's Green is a great chill-out spot. When it comes to eating, drinking and being merry, Temple Bar's nightspots can't be beaten.",
            landmarks: "Temple Bar,  3Arena,  Trinity College, O'Connell Street",
            center: {lat: 53.344906845144, lng: -6.26480224623071}, 
            polygon: [
                {lng: -6.297552, lat: 53.352284},{lng: -6.287931, lat: 53.337074},{lng: -6.286744, lat: 53.330885},{lng: -6.264269, lat: 53.329386},{lng: -6.245614, lat: 53.334167},{lng: -6.24529, lat: 53.33388},{lng: -6.241588, lat: 53.333539},{lng: -6.24265, lat: 53.336008},{lng: -6.237914, lat: 53.339362},{lng: -6.230992, lat: 53.343337},{lng: -6.226559, lat: 53.349262},{lng: -6.247183, lat: 53.354613},{lng: -6.261774, lat: 53.359661},{lng: -6.278898, lat: 53.35835},{lng: -6.289803, lat: 53.357171},{lng: -6.297552, lat: 53.352284}
            ], 
            staticMapUrl: "53.352284,-6.297552|53.337074,-6.287931|53.330885,-6.286744|53.329386,-6.264269|53.334167,-6.245614|53.33388,-6.24529|53.333539,-6.241588|53.336008,-6.24265|53.339362,-6.237914|53.343337,-6.230992|53.349262,-6.226559|53.354613,-6.247183|53.359661,-6.261774|53.35835,-6.278898|53.357171,-6.289803|53.352284,-6.297552"
        },
        {
            name: "Ballsbridge",
            nid: "1729990",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production115/d1029/e3c7ab40-ac67-11e4-be0e-d89d672bfba8.jpg",
            tags: "Gardens, Nature, Beach, Walking",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "One of Dublin's leafiest and most idyllic areas, Ballsbridge is lovely to wander around on a sunny day. The pubs alongside the Grand Canal are the perfect places to while away the hours, and you can also go for an amble in Herbert Park. If you're in the mood for a longer stroll, head over to Sandymount Strand, a sandy beach famous for featuring in James Joyce's classic novel Ulysses.",
            landmarks: "Royal Dublin Society,    Herbert Park,    Aviva Stadium",
            center: {lat: 53.3301233516702, lng: -6.22942409639484}, 
            polygon: [
                {lng: -6.245304, lat: 53.333836},{lng: -6.245614, lat: 53.33415},{lng: -6.261939, lat: 53.329936},{lng: -6.239579, lat: 53.323738},{lng: -6.204854, lat: 53.323092},{lng: -6.209188, lat: 53.334946},{lng: -6.237935, lat: 53.339242},{lng: -6.242635, lat: 53.335988},{lng: -6.241502, lat: 53.333498},{lng: -6.245304, lat: 53.333836}
            ],
            staticMapUrl: "53.333836,-6.245304|53.33415,-6.245614|53.329936,-6.261939|53.323738,-6.239579|53.323092,-6.204854|53.334946,-6.209188|53.339242,-6.237935|53.335988,-6.242635|53.333498,-6.241502|53.333836,-6.245304"
        },
        {
            name: "Dublin City West",
            nid: "1710582",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production14/d1954/e3bfbc00-ac67-11e4-955a-d89d672c79ac.jpg",
            tags: "Monument, Historical, Cathedral",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "There's one major reason why Dublin City West's a place of pilgrimage for people the world over: it's where you can find the Guinness St James's Gate Brewery. Fans of the drink will love the Guinness Storehouse exhibition, while another tipple-related tour can be enjoyed at the Old Jameson Distillery. A further iconic landmark of the area is St Patrick's Cathedral, gothic resting place of Gulliver's Travels author Jonathan Swift.",
            landmarks: "Guiness Brewery, Liffey Valley Shopping Centre,  Citywest Convention Centre.  Citywest Business Park",
            center: {lat: 53.3193516641662, lng: -6.43073719728634}, 
            polygon: [
                {lng: -6.422443, lat: 53.414374},{lng: -6.537227, lat: 53.305303},{lng: -6.504153, lat: 53.264595},{lng: -6.35566, lat: 53.258721},{lng: -6.3334, lat: 53.337463},{lng: -6.359105, lat: 53.339956},{lng: -6.381262, lat: 53.351957},{lng: -6.37438, lat: 53.362103},{lng: -6.382168, lat: 53.362202},{lng: -6.39158, lat: 53.360832},{lng: -6.404585, lat: 53.361427},{lng: -6.409803, lat: 53.36393},{lng: -6.413519, lat: 53.367912},{lng: -6.406424, lat: 53.379889},{lng: -6.403113, lat: 53.387856},{lng: -6.395125, lat: 53.398275},{lng: -6.374116, lat: 53.403723},{lng: -6.422443, lat: 53.414374}
            ],
            staticMapUrl: "53.414374,-6.422443|53.305303,-6.537227|53.264595,-6.504153|53.258721,-6.35566|53.337463,-6.3334|53.339956,-6.359105|53.351957,-6.381262|53.362103,-6.37438|53.362202,-6.382168|53.360832,-6.39158|53.361427,-6.404585|53.36393,-6.409803|53.367912,-6.413519|53.379889,-6.406424|53.387856,-6.403113|53.398275,-6.395125|53.403723,-6.374116|53.414374,-6.422443"
        }
    ], 

    edinburgh: [

        {
            name: "Old Town",
            nid: "1649984",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production182/d385/48fc22d0-ac67-11e4-99a1-d89d672bd508.jpg",
            tags: "Historical, Bars, Restaurants, Entertainment, Theatre, Family friendly",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "A UNESCO World Heritage site, Edinburgh’s medieval Old Town is packed with imposing 17th century architecture, traditional whisky shops, and winding cobbled alleyways. Running downhill from the panoramic Edinburgh Castle to Holyrood Palace, via the lively bars and restaurants of the Royal Mile, the Old Town is bustling at any time of year, but truly comes to life in August when the world descends for the eclectic Edinburgh Fringe.",
            
            landmarks: [
                {name: "Brass Rubbing Centre", type: "museums", lat: 55.95052, lng: -3.18566, primary: "false"},
                {name: "Camera Obscura and World of Illusions", type: "monument", lat: 55.94901, lng: -3.19579, primary: "false"},
                {name: "City Art Centre ", type: "museums", lat: 55.95126, lng: -3.18948, primary: "false"},
                {name: "City Chambers", type: "civic", lat: 55.94998, lng: -3.19001, primary: "false"},
                {name: "Edinburgh Castle", type: "historic", lat: 55.94879, lng: -3.19826, primary: "true"},
                {name: "Edinburgh Dungeon", type: "historic", lat: 55.95105, lng: -3.19087, primary: "true"},
                {name: "Festival Theatre", type: "theater", lat: 55.94696, lng: -3.18585, primary: "true"},
                {name: "Fruitmarket Gallery", type: "museums", lat: 55.951139, lng: -3.189423, primary: "false"},
                {name: "Geoffrey Kiltmakers and Weavers", type: "shopping", lat: 55.94896, lng: -3.19578, primary: "false"},
                {name: "George Square", type: "sign", lat: 55.9437, lng: -3.1874, primary: "false"},
                {name: "Gladstone's Land", type: "historic", lat: 55.94957, lng: -3.19295, primary: "false"},
                {name: "Greyfriar's Bobby", type: "monument", lat: 55.94707, lng: -3.191504, primary: "false"},
                {name: "Greyfriars Kirk", type: "monument", lat: 55.95126, lng: -3.19142, primary: "false"},
                {name: "John Knox House", type: "historic", lat: 55.95068, lng: -3.18495, primary: "false"},
                {name: "Museum of Childhood", type: "museums", lat: 55.95059, lng: -3.18551, primary: "false"},
                {name: "Museum on the Mound", type: "museums", lat: 55.950029, lng: -3.193537, primary: "false"},
                {name: "National Gallery of Scotland", type: "museums", lat: 55.95037, lng: -3.1959, primary: "true"},
                {name: "National Museum of Scotland", type: "museums", lat: 55.9473, lng: -3.19093, primary: "true"},
                {name: "National War Museum", type: "museums", lat: 55.948795, lng: -3.1992, primary: "true"},
                {name: "Our Dynamic Earth", type: "icecream", lat: 55.95093, lng: -3.17625, primary: "false"},
                {name: "Palace of Holyroodhouse", type: "monument", lat: 55.95294, lng: -3.17364, primary: "false"},
                {name: "Parliament House ", type: "civic", lat: 55.94944, lng: -3.19016, primary: "false"},
                {name: "People's Story Museum", type: "civic", lat: 55.951442, lng: -3.179801, primary: "false"},
                {name: "Potterrow Student Centre", type: "museums", lat: 55.946019, lng: -3.187451, primary: "false"},
                {name: "Princes Street Gardens", type: "historic", lat: 55.95141, lng: -3.19649, primary: "false"},
                {name: "Real Mary King's Close", type: "tree", lat: 55.9499, lng: -3.19067, primary: "false"},
                {name: "Royal Lyceum Theatre", type: "theater", lat: 55.94697, lng: -3.20483, primary: "false"},
                {name: "Royal Scots Regimental Museum", type: "museums", lat: 55.949005, lng: -3.2014, primary: "false"},
                {name: "Scotch Whisky Experience", type: "museums", lat: 55.94894, lng: -3.19664, primary: "false"},
                {name: "Scottish Parliament", type: "civic", lat: 55.9521, lng: -3.17371, primary: "true"},
                {name: "St. Giles' Cathedral", type: "monument", lat: 55.94987, lng: -3.19081, primary: "false"},
                {name: "Surgeon's Hall", type: "museums", lat: 55.946556, lng: -3.183446, primary: "false"},
                {name: "Talbot Rice Gallery", type: "museums", lat: 55.9477, lng: -3.1873, primary: "false"},
                {name: "Tartan Weaving Mill", type: "museums", lat: 55.94905, lng: -3.19562, primary: "false"},
                {name: "The Hub", type: "civic", lat: 55.94894, lng: -3.194569, primary: "false"},
                {name: "University of Edinburgh", type: "school", lat: 55.94438, lng: -3.18889, primary: "false"},
                {name: "Witchery Tours", type: "museums", lat: 55.94851, lng: -3.19457, primary: "false"},
                {name: "Writers' Museum", type: "museums", lat: 55.94955, lng: -3.19314, primary: "false"}
            ],

            center: {lat: 55.9484828588125, lng: -3.18665470310388}, 
            polygon: [
                {lng: -3.204368, lat: 55.949969},{lng: -3.20527, lat: 55.94567},{lng: -3.199376, lat: 55.946137},{lng: -3.197175, lat: 55.942377},{lng: -3.196583, lat: 55.941841},{lng: -3.172736, lat: 55.945335},{lng: -3.170411, lat: 55.95069},{lng: -3.175429, lat: 55.955454},{lng: -3.204368, lat: 55.949969}
            ], 
            staticMapUrl: "55.949969,-3.204368|55.94567,-3.20527|55.946137,-3.199376|55.942377,-3.197175|55.941841,-3.196583|55.945335,-3.172736|55.95069,-3.170411|55.955454,-3.175429|55.949969,-3.204368"
        },
        {
            name: "New Town",
            nid: "1649985",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production105/d1330/490571a0-ac67-11e4-be0e-d89d672bfba8.jpg",
            tags: "Shopping, Bars, Fine dining, Nightlife",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "History lovers can get a glimpse of 18th century life on a visit to the idyllic Georgian House in New Town's Charlotte Square. Shopaholics can browse the fashionable high street stores on Princes Street, before sampling George Street's sophisticated boutiques. When it comes to the evening, capture the spirit of the locals in a buzzing bar or refined restaurant on Broughton Street.",
            
            landmarks: [
                {name: "Assembly Rooms", type: "civic", lat: 55.953177, lng: -3.198789, primary: "false"},
                {name: "Calton Hill", type: "tree", lat: 55.95525, lng: -3.18234, primary: "false"},
                {name: "Charlotte Square", type: "sign", lat: 55.95209, lng: -3.2066499999999998, primary: "true"},
                {name: "Edinburgh Playhouse Theatre", type: "theater", lat: 55.95681, lng: -3.18629, primary: "false"},
                {name: "Georgian House", type: "historic", lat: 55.95248, lng: -3.20789, primary: "true"},
                {name: "Hanover Fine Arts Gallery", type: "museums", lat: 55.957053, lng: -3.199364, primary: "false"},
                {name: "HMV Picture House", type: "theater", lat: 55.948186, lng: -3.206338, primary: "false"},
                {name: "Nelson Monument", type: "monument", lat: 55.95525, lng: -3.18243, primary: "false"},
                {name: "Omni Centre Edinburgh", type: "icecream", lat: 55.95661, lng: -3.18642, primary: "false"},
                {name: "Princes Mall", type: "shopping", lat: 55.95281, lng: -3.19217, primary: "true"},
                {name: "Royal Scottish Academy Art Gallery", type: "school", lat: 55.951801, lng: -3.196405, primary: "true"},
                {name: "Scott Monument", type: "monument", lat: 55.95256, lng: -3.19425, primary: "false"},
                {name: "St. Andrew Square", type: "sign", lat: 55.95458, lng: -3.19219, primary: "true"},
                {name: "St. Mary's Episcopal Cathederal", type: "monument", lat: 55.948994, lng: -3.216323, primary: "false"},
                {name: "Usher Hall", type: "theater", lat: 55.947204, lng: -3.205681, primary: "false"},
                {name: "Waterloo Place", type: "museums", lat: 55.953652, lng: -3.187207, primary: "false"}
            ],

            center: {lat: 55.9564296056302, lng: -3.19812422145978}, 
            polygon: [
                {lng: -3.209062, lat: 55.960197},{lng: -3.208229, lat: 55.958514},{lng: -3.213528, lat: 55.953603},{lng: -3.220113, lat: 55.953149},{lng: -3.221939, lat: 55.952732},{lng: -3.222003, lat: 55.95194},{lng: -3.215075, lat: 55.947159},{lng: -3.210924, lat: 55.948962},{lng: -3.205257, lat: 55.945653},{lng: -3.204345, lat: 55.950007},{lng: -3.175396, lat: 55.955495},{lng: -3.178061, lat: 55.959607},{lng: -3.18814, lat: 55.96477},{lng: -3.202173, lat: 55.964401},{lng: -3.202933, lat: 55.964145},{lng: -3.209062, lat: 55.960197}
            ],  
            staticMapUrl: "55.960197,-3.209062|55.958514,-3.208229|55.953603,-3.213528|55.953149,-3.220113|55.952732,-3.221939|55.95194,-3.222003|55.947159,-3.215075|55.948962,-3.210924|55.945653,-3.205257|55.950007,-3.204345|55.955495,-3.175396|55.959607,-3.178061|55.96477,-3.18814|55.964401,-3.202173|55.964145,-3.202933|55.960197,-3.209062"
        }, 

        {
            name: "Haymarket",
            nid: "1718266",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production14/d1954/e3bfbc00-ac67-11e4-955a-d89d672c79ac.jpg",
            tags: "Monument, Art, Theatre, Architecture, Shopping",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "Located in the west of Edinburgh, Haymarket is a perfect spot for shoppers looking for quirky boutiques nestled along the cobbled streets. Nearby the historic jewel of Edinburgh Castle, built on an extinct volcano, crests the skyline. The National Gallery of Scotland and the Royal Lyceum Theatre are close too, their architectural homages to the Scottish Enlightenment adding to the richness of this artistic quarter.",
            landmarks: [
                {name: "Edinburgh International Conference Centre (EICC)", type: "civic", lat: 55.94588, lng: -3.20892, primary: "true"}
            ],

            center: {lat: 55.945961138545, lng: -3.22046119997045}, 
            polygon: [
                {lng: -3.232153, lat: 55.948347},{lng: -3.231042, lat: 55.942371},{lng: -3.217335, lat: 55.942138},{lng: -3.211263, lat: 55.942821},{lng: -3.20532, lat: 55.945656},{lng: -3.210964, lat: 55.948955},{lng: -3.215092, lat: 55.947145},{lng: -3.221278, lat: 55.951414},{lng: -3.232153, lat: 55.948347}
            ],
            staticMapUrl: "55.948347,-3.232153|55.942371,-3.231042|55.942138,-3.217335|55.942821,-3.211263|55.945656,-3.20532|55.948955,-3.210964|55.947145,-3.215092|55.951414,-3.221278|55.948347,-3.232153"
        },

        
        {
            name: "Murrayfield",
            nid: "1688925",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production14/d1766/48fbfbc0-ac67-11e4-955a-d89d672c79ac.jpg",
            tags: "Golf, Zoo, Family friendly",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "Located to the west of Edinburgh city center, Murrayfield is the perfect destination for sports fans. Home to Murrayfield Stadium and the Scottish Rugby Union the area also boasts a sprawling golf course, glistening ice skating rink, and bustling curling center. Within short walking distance of the wild animals of Edinburgh Zoo, Murrayfield is also well connected with the bustling Haymarket station nearby.",
            
            landmarks: [
                {name: "Edinburgh Zoo", type: "icecream", lat: 55.9421, lng: -3.26939, primary: "true"}
            ],

            center: {lat: 55.9466946735001, lng: -3.25243687209098}, 
            polygon: [
                {lng: -3.233772, lat: 55.957254},{lng: -3.25089, lat: 55.957062},{lng: -3.250277, lat: 55.951731},{lng: -3.276347, lat: 55.94958},{lng: -3.272571, lat: 55.93662},{lng: -3.231209, lat: 55.942494},{lng: -3.233772, lat: 55.957254}
            ],
            staticMapUrl: "55.957254,-3.233772|55.957062,-3.25089|55.951731,-3.250277|55.94958,-3.276347|55.93662,-3.272571|55.942494,-3.231209|55.957254,-3.233772"
        },

        {
            name: "Leith",
            nid: "1654017",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production155/d1521/48fbada0-ac67-11e4-be0e-d89d672bfba8.jpg",
            tags: "Food, Nightlife, Art, Culture",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "Leith merges the traditional rotund battlements and sandy hued architecture of historic Edinburgh with the colors and tastes of a number of cultures, from spicy and succulent curries to punchy aromatic Thai fish cakes. Bars, cafes, and bistros line the waterfront ensuring a friendly and buzzing nightlife. Also a hotspot for art, Leith has numerous independent galleries and hosts vibrant cultural events, such as the Edinburgh Mela.",
            
            landmarks: [
                {name: "Easter Road Stadium", type: "stadium", lat: 55.96197, lng: -3.16781, primary: "true"},
                {name: "Newhaven Heritage Museum", type: "museums", lat: 55.981611, lng: -3.195017, primary: "true"},
                {name: "Ocean Terminal Shopping Centre", type: "shopping", lat: 55.981212, lng: -3.176122, primary: "true"},
                {name: "Royal Yacht Britannia", type: "museums", lat: 55.98128, lng: -3.1757, primary: "true"}
            ],

            center: {lat: 55.9749083228979, lng: -3.17637747332556}, 
            polygon: [
                {lng: -3.207353, lat: 55.989499},{lng: -3.205261, lat: 55.974582},{lng: -3.203571, lat: 55.970767},{lng: -3.188087, lat: 55.964828},{lng: -3.177981, lat: 55.959596},{lng: -3.175347, lat: 55.955485},{lng: -3.135514, lat: 55.969869},{lng: -3.178297, lat: 55.991398},{lng: -3.207353, lat: 55.989499}
            ],
            staticMapUrl: "55.989499,-3.207353|55.974582,-3.205261|55.970767,-3.203571|55.964828,-3.188087|55.959596,-3.177981|55.955485,-3.175347|55.969869,-3.135514|55.991398,-3.178297|55.989499,-3.207353"
        }
        
    ], 

    florence: [

        {
            name: "Duomo",
            nid: "1663684",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production185/d1683/e7fd3ea0-ac67-11e4-955a-d89d672c79ac.jpg",
            tags: "Historical, Monuments, Friendly people, Scenery, Nightlife",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "Right bang in the middle of one of Italy’s most beautiful cities, Duomo's named after the mighty dome of the Santa Maria del Fiore Church that rises up like a beacon at the heart of the city. It’s a grand sight from afar, but close up its colorful patterned facade is even more impressive. Throngs of people gather in the large central square and the whole area buzzes with activity.",
            
            landmarks: [
                {name: "Badia Fiorentina", type: "historic", lat: 43.77052, lng: 11.25779, primary: "false"},
                {name: "Bargello", type: "museums", lat: 43.770451, lng: 11.257822, primary: "false"},
                {name: "Cathedral of Saint Mary of the Flower ", type: "monument", lat: 43.77317, lng: 11.256538, primary: "false"},
                {name: "Church of Santa Maria Maggiore", type: "monument", lat: 43.773277, lng: 11.252773, primary: "false"},
                {name: "Dante’s House Museum", type: "historic", lat: 43.770923, lng: 11.256988, primary: "false"},
                {name: "Duomo Museum", type: "museums", lat: 43.772698, lng: 11.255992, primary: "true"},
                {name: "Florence Baptistery", type: "historic", lat: 43.77316, lng: 11.25447, primary: "false"},
                {name: "Florence Design Academy", type: "school", lat: 43.773537, lng: 11.255338, primary: "false"},
                {name: "Fountain of Neptune", type: "monument", lat: 43.769583, lng: 11.255995, primary: "false"},
                {name: "Galileo Museum - Institute and Museum of the History of Science ", type: "museums", lat: 43.767651, lng: 11.256113, primary: "true"},
                {name: "Giotto's Campanile", type: "monument", lat: 43.77275, lng: 11.25564, primary: "false"},
                {name: "Gucci Museum", type: "museums", lat: 43.769668, lng: 11.256597, primary: "false"},
                {name: "Laurentian Library", type: "civic", lat: 43.774792, lng: 11.254835, primary: "false"},
                {name: "Loggia dei Lanzi", type: "civic", lat: 43.769289, lng: 11.255519, primary: "false"},
                {name: "Loggia del Mercato Nuovo", type: "historic", lat: 43.770002, lng: 11.254222, primary: "true"},
                {name: "Medici Chapels", type: "monument", lat: 43.775, lng: 11.25281, primary: "true"},
                {name: "Museo dell'Opera del Duomo", type: "museums", lat: 43.77304, lng: 11.25775, primary: "true"},
                {name: "Museo Marino Marini", type: "museums", lat: 43.77207, lng: 11.24979, primary: "false"},
                {name: "Orsanmichele", type: "monument", lat: 43.77074, lng: 11.25526, primary: "false"},
                {name: "Palazzo Davanzati Museum", type: "museums", lat: 43.770244, lng: 11.252794, primary: "false"},
                {name: "Palazzo Medici Riccardi", type: "historic", lat: 43.77494, lng: 11.25593, primary: "false"},
                {name: "Palazzo Rucellai", type: "historic", lat: 43.771186, lng: 11.249551, primary: "false"},
                {name: "Palazzo Vecchio", type: "civic", lat: 43.769329, lng: 11.255928, primary: "false"},
                {name: "Piazza del Duomo", type: "sign", lat: 43.77331, lng: 11.25761, primary: "false"},
                {name: "Piazza della Repubblica", type: "sign", lat: 43.77156, lng: 11.25401, primary: "false"},
                {name: "Piazza della Signoria", type: "sign", lat: 43.77291, lng: 11.25557, primary: "false"},
                {name: "Piazza di San Giovanni", type: "sign", lat: 43.771186, lng: 11.25491, primary: "false"},
                {name: "Piazza San Firenze", type: "sign", lat: 43.77001, lng: 11.25767, primary: "true"},
                {name: "Salvatore Ferragamo Museum", type: "museums", lat: 43.770073, lng: 11.251234, primary: "false"},
                {name: "San Lorenzo Church ", type: "monument", lat: 43.774813, lng: 11.254688, primary: "false"},
                {name: "Santa Trinita Church", type: "monument", lat: 43.77019, lng: 11.25114, primary: "false"},
                {name: "Strozzi Palace", type: "historic", lat: 43.771496, lng: 11.251783, primary: "false"},
                {name: "Teatro della Pergola", type: "theater", lat: 43.773268, lng: 11.261075, primary: "false"},
                {name: "Uffizi Gallery", type: "museums", lat: 43.76888, lng: 11.25574, primary: "true"},
                {name: "Vasari Corridor", type: "historic", lat: 43.768523, lng: 11.253532, primary: "false"}
            ],

            center: {lat: 43.7720435137436, lng: 11.2552516703872}, 
            polygon: [
                {lng: 11.247487, lat: 43.770577},{lng: 11.250248, lat: 43.769263},{lng: 11.256095, lat: 43.767302},{lng: 11.260364, lat: 43.771421},{lng: 11.262835, lat: 43.77154},{lng: 11.26205, lat: 43.774098},{lng: 11.259615, lat: 43.775546},{lng: 11.25805, lat: 43.776267},{lng: 11.257443, lat: 43.775464},{lng: 11.253197, lat: 43.77555},{lng: 11.251663, lat: 43.77556},{lng: 11.250507, lat: 43.77473},{lng: 11.250764, lat: 43.773316},{lng: 11.250353, lat: 43.772995},{lng: 11.249654, lat: 43.773169},{lng: 11.249277, lat: 43.772599},{lng: 11.247487, lat: 43.770577}
            ],
            staticMapUrl: "43.770577,11.247487|43.769263,11.250248|43.767302,11.256095|43.771421,11.260364|43.77154,11.262835|43.774098,11.26205|43.775546,11.259615|43.776267,11.25805|43.775464,11.257443|43.77555,11.253197|43.77556,11.251663|43.77473,11.250507|43.773316,11.250764|43.772995,11.250353|43.773169,11.249654|43.772599,11.249277|43.770577,11.247487"
        },

        {
            name: "Santa Maria Novella",
            nid: "1663681",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production47/d1230/e7f687e0-ac67-11e4-be0e-d89d672bfba8.jpg",
            tags: "Gardens, Shopping, Markets, Churches, Architeture",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "Santa Maria Novella's right next to the city’s main train station, and there are several palaces and gardens to explore, as well as stylish shopping streets. At the busy central market you can pick up some of Tuscany’s delicacies, from fragrant white truffles to salty pecorino cheese. The Santa Maria Novella church is well worth a visit too, with its intricately patterned facade and painted frescos.",
            
            landmarks: [
                {name: "Chiesa di Ognissanti", type: "monument", lat: 43.772352, lng: 11.245762, primary: "false"},
                {name: "Fortezza da Basso", type: "civic", lat: 43.780587, lng: 11.249383, primary: "true"},
                {name: "Leopolda Station Exhibition Center", type: "civic", lat: 43.77702, lng: 11.237217, primary: "false"},
                {name: "National Alinari Museum of Photography", type: "museums", lat: 43.773021, lng: 11.249146, primary: "true"},
                {name: "Palazzo degli Affari", type: "civic" , lat: 43.777899, lng: 11.249445, primary: "false"},
                {name: "Palazzo dei Congressi", type: "civic" , lat: 43.7784, lng: 11.24881, primary: "false"},
                {name: "Piazza di Santa Maria Novella", type: "sign" , lat: 43.773618, lng: 11.249418, primary: "true"},
                {name: "Porta al Prato Station", type: "train" , lat: 43.777899, lng: 11.238303, primary: "false"},
                {name: "Santa Maria Novella Basilica and Museum monument", type: "museums" , lat: 43.774151, lng: 11.249361, primary: "true"},
                {name: "Teatro Comunale Florence", type: "theater", lat: 43.774872, lng: 11.238633, primary: "false"}
            ],

            center: {lat: 43.7785246932213, lng: 11.241084282561}, 
            polygon: [
                {lng: 11.235947, lat: 43.786645},{lng: 11.227868, lat: 43.777196},{lng: 11.234086, lat: 43.775389},{lng: 11.247487, lat: 43.770577},{lng: 11.249282, lat: 43.772606},{lng: 11.249654, lat: 43.773169},{lng: 11.250354, lat: 43.773006},{lng: 11.250769, lat: 43.773316},{lng: 11.2505, lat: 43.77473},{lng: 11.251645, lat: 43.775536},{lng: 11.253189, lat: 43.775553},{lng: 11.252305, lat: 43.77682},{lng: 11.251325, lat: 43.777578},{lng: 11.250786, lat: 43.780973},{lng: 11.244669, lat: 43.783415},{lng: 11.235947, lat: 43.786645}
            ], 
            staticMapUrl: "43.786645,11.235947|43.777196,11.227868|43.775389,11.234086|43.770577,11.247487|43.772606,11.249282|43.773169,11.249654|43.773006,11.250354|43.773316,11.250769|43.77473,11.2505|43.775536,11.251645|43.775553,11.253189|43.77682,11.252305|43.777578,11.251325|43.780973,11.250786|43.783415,11.244669|43.786645,11.235947"
        },
        {
            name: "San Lorenzo",
            nid: "1719672",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production144/d1296/e8066660-ac67-11e4-99a1-d89d672bd508.jpg",
            tags: "Museums, Art, Culture, Markets",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "San Lorenzo's namesake church is one of Florence’s largest and oldest and is home to some of the works of Michelangelo himself. The Galleria dell'Accademia and the San Marco Museum are a stroll away. In the central market, packed full of fresh local produce, pull up a chair and try a traditional tripe sandwich along with the locals, before wandering through the outdoor stalls to pick up some souvenirs.",
            
            landmarks: [
                {name: "Central Market", type: "shopping", lat: 43.77693, lng: 11.25357, primary: "true"},
                {name: "Saint Apollonia Last Supper monument", type: "civic", lat: 43.778694, lng: 11.256715, primary: "true"},
                {name: "San Marco Convent and Museum", type: "monument", lat: 43.77815, lng: 11.25893, primary: "true"},
                {name: "University of Florence", type: "school", lat: 43.77827, lng: 11.25967, primary: "false"}
            ],

            center: {lat: 43.7815603179864, lng: 11.2565434615399}, 
            polygon: [
                {lng: 11.250796, lat: 43.781052},{lng: 11.251307, lat: 43.777599},{lng: 11.252394, lat: 43.776728},{lng: 11.253188, lat: 43.775563},{lng: 11.257414, lat: 43.775454},{lng: 11.258078, lat: 43.776339},{lng: 11.262945, lat: 43.782206},{lng: 11.262381, lat: 43.78323},{lng: 11.262829, lat: 43.784176},{lng: 11.262964, lat: 43.786167},{lng: 11.260521, lat: 43.787246},{lng: 11.250707, lat: 43.784829},{lng: 11.250796, lat: 43.781052}
            ],  
            staticMapUrl: "43.781052,11.250796|43.777599,11.251307|43.776728,11.252394|43.775563,11.253188|43.775454,11.257414|43.776339,11.258078|43.782206,11.262945|43.78323,11.262381|43.784176,11.262829|43.786167,11.262964|43.787246,11.260521|43.784829,11.250707|43.781052,11.250796"
        }, 

        {
            name: "Oltrarno",
            nid: "1663683",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production115/d877/e8066660-ac67-11e4-955a-d89d672c79ac.jpg",
            tags: "River, Relaxing, Walking, Shopping, Bars, Restaurants",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "The Oltrarno neighborhood sits on the opposite side of the river to the historical center and it was, and mostly still is, a proud working class area. Its peaceful streets are home to many artisan workshops and antique stores and it’s a great place to wander, stopping at some of its small bars and restaurants to refuel. For art head to the Palazzo Pitti, a stately old palace turned gallery.",
            landmarks: [
                {name: "Accademia Italiana", type: "school", lat: 43.765907, lng: 11.249734, primary: "false"},
                {name: "Arcetri Observatory", type: "icecream", lat: 43.74996, lng: 11.254157, primary: "true"},
                {name: "Boboli Gardens", type: "tree", lat: 43.7601, lng: 11.24235, primary: "false"},
                {name: "Brancacci Chapel", type: "monument", lat: 43.768252, lng: 11.244198, primary: "false"},
                {name: "Church of Santa Felicita", type: "monument", lat: 43.767041, lng: 11.252389, primary: "false"},
                {name: "Galleria d'Arte Moderna", type: "museums", lat: 43.765677, lng: 11.249536, primary: "false"},
                {name: "Gallery of Modern Art", type: "museums", lat: 43.765182, lng: 11.24961, primary: "true"},
                {name: "Palatine Gallery", type: "museums", lat: 43.765297, lng: 11.24986, primary: "false"},
                {name: "Museum of Zoology and Natural History", type: "museums", lat: 43.764533, lng: 11.247059, primary: "true"},
                {name: "Piazza del Carmine", type: "sign", lat: 43.768741, lng: 11.243737, primary: "false"},
                {name: "Piazza Santo Spirito", type: "sign", lat: 43.766521, lng: 11.247304, primary: "false"},
                {name: "Piazzale Michelangelo", type: "sign", lat: 43.76261, lng: 11.26479, primary: "true"},
                {name: "Pitti Palace", type: "historic", lat: 43.7656, lng: 11.25012, primary: "false"},
                {name: "Pitti Vintage", type: "shopping", lat: 43.76645, lng: 11.24904, primary: "false"},
                {name: "Ponte Vecchio", type: "monument", lat: 43.76803, lng: 11.25316, primary: "true"},
                {name: "Porta Romana", type: "monument", lat: 43.760591, lng: 11.241781, primary: "false"},
                {name: "San Miniato al Monte", type: "monument", lat: 43.759944, lng: 11.264231, primary: "false"},
                {name: "Santa Maria della Carmine", type: "monument", lat: 43.768334, lng: 11.244003, primary: "false"},
                {name: "Santo Spirito Basilica", type: "monument", lat: 43.766889, lng: 11.247983, primary: "true"},
                {name: "Silver Museum", type: "museums", lat: 43.765637, lng: 11.250648, primary: "false"},
                {name: "St Mark's English Church", type: "monument", lat: 43.767464, lng: 11.249365, primary: "false"},
                {name: "Stefano Bardini Museum", type: "museums", lat: 43.765099, lng: 11.258237, primary: "false"},
                {name: "Villa del Poggio Imperiale", type: "historic", lat: 43.750157, lng: 11.247135, primary: "false"}
            ],

            center: {lat: 43.7581453013744, lng: 11.2509261308338}, 
            polygon: [
                {lng: 11.233812, lat: 43.775232},{lng: 11.223845, lat: 43.772456},{lng: 11.228686, lat: 43.744565},{lng: 11.243488, lat: 43.743752},{lng: 11.266808, lat: 43.74811},{lng: 11.290345, lat: 43.755575},{lng: 11.281744, lat: 43.764748},{lng: 11.275432, lat: 43.764133},{lng: 11.255936, lat: 43.76707},{lng: 11.233812, lat: 43.775232}
            ],
            staticMapUrl: "43.775232,11.233812|43.772456,11.223845|43.744565,11.228686|43.743752,11.243488|43.74811,11.266808|43.755575,11.290345|43.764748,11.281744|43.764133,11.275432|43.76707,11.255936|43.775232,11.233812"
        },

        
        

        {
            name: "Santa Croce",
            nid: "1719676",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production37/d1358/e80702a0-ac67-11e4-be0e-d89d672bfba8.jpg",
            tags: "Cafes, Bars, Shopping, Monuments, Secluded, Family friendly",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "Santa Croce's church sits on a monumental piazza lined with tall elegant buildings painted in warm yellow hues. The district's many cafés have mostly outdoor seating, and smartly dressed waiters weave through the tables carrying trays of espressos and sparkling wine. The narrow streets are packed with leather workers and shops, and the sweet scent of leather bags and belts fills the air.",
            landmarks: "Piazza Santa Croce,  Teatro Verdi,    Basilica of Santa Croce, Art Gallery Studio Iguarnieri",
           
           landmarks: [
                {name: "Art Gallery Studio Iguarnieri", type: "museums", lat: 43.768849, lng: 11.259186, primary: "false"},
                {name: "Basilica of Santa Croce", type: "monument", lat: 43.76872, lng: 11.262, primary: "true"},
                {name: "Casa Buonarroti", type: "museums", lat: 43.769849, lng: 11.263403, primary: "false"},
                {name: "Church of Sant'Ambrogio", type: "museums", lat: 43.771518, lng: 11.266363, primary: "false"},
                {name: "Museo dell'Opera di Santa Croce", type: "museums", lat: 43.76872, lng: 11.262, primary: "true"},
                {name: "Museo Horne", type: "museums", lat: 43.767582, lng: 11.259402, primary: "false"},
                {name: "Piazza Santa Croce", type: "monument", lat: 43.768514, lng: 11.261791, primary: "true"},
                {name: "Teatro Verdi", type: "theater", lat: 43.770257, lng: 11.261109, primary: "false"}
            ],

            center: {lat: 43.7685313403796, lng: 11.2677251896501}, 
            polygon: [
                {lng: 11.260351, lat: 43.7714},{lng: 11.256093, lat: 43.767316},{lng: 11.275578, lat: 43.764393},{lng: 11.276397, lat: 43.770649},{lng: 11.271795, lat: 43.772316},{lng: 11.27122, lat: 43.771325},{lng: 11.267083, lat: 43.771776},{lng: 11.260351, lat: 43.7714}
            ],
            staticMapUrl: "43.7714,11.260351|43.767316,11.256093|43.764393,11.275578|43.770649,11.276397|43.772316,11.271795|43.771325,11.27122|43.771776,11.267083|43.7714,11.260351"
        }
        
    ], 

    hongkong: [

        {
            name: "Central",
            nid: "1645212",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production116/d1664/f9bf7ab0-74ac-11e4-ab9c-d89d672bfba8.jpg",
            tags: "Nightlife, Urban, Bars, Food, Restaurants, Trendy",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "The sheer spectacle of Central Hong Kong makes it exhilarating. Surging skyscrapers like the Bank of China Tower dazzle by day, while Lan Kwai Fong's warren of club-crammed streets makes it a hotspot for Hong Kong's party animals when the sun goes down. And if it's good grub you're after, Soho's glitzy restaurants and traditional, almost hidden, steam-filled canteens will be sure to tempt you.",
            landmarks: "Lan Kwai Fong,   Hong Kong Central Station,   Soho,    Hong Kong - Macau Ferry Terminal",
            center: {lat: 22.2819755272924, lng: 114.157228511916}, 
            polygon: [
                {lng: 114.14896, lat: 22.29148},{lng: 114.14806, lat: 22.2885},{lng: 114.14628, lat: 22.28745},{lng: 114.1461, lat: 22.28546},{lng: 114.1452, lat: 22.28415},{lng: 114.14537, lat: 22.28191},{lng: 114.14988, lat: 22.27516},{lng: 114.15366, lat: 22.27182},{lng: 114.16271, lat: 22.27166},{lng: 114.16718, lat: 22.27381},{lng: 114.16645, lat: 22.27635},{lng: 114.16718, lat: 22.27794},{lng: 114.16709, lat: 22.28115},{lng: 114.16743, lat: 22.29069},{lng: 114.14896, lat: 22.29148}
            ], 
            staticMapUrl: "22.29148,114.14896|22.2885,114.14806|22.28745,114.14628|22.28546,114.1461|22.28415,114.1452|22.28191,114.14537|22.27516,114.14988|22.27182,114.15366|22.27166,114.16271|22.27381,114.16718|22.27635,114.16645|22.27794,114.16718|22.28115,114.16709|22.29069,114.16743|22.29148,114.14896"
        },
        {
            name: "Causeway Bay",
            nid: "851",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production8/d1183/f9c239d0-74ac-11e4-8f3e-d89d672c79ac.jpg",
            tags: "Shopping, Markets, Nightlife",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "A bustling, sensory-explosion of a place, Causeway Bay is a shopper's paradise. Mega malls and epic department stores line the streets – you can't miss the towering 13-storey SOGO center . With its own Times Square (a retail and office complex), this compact shopping district has it all, with many stores staying open past midnight. Listen out for the daily firing of the Noonday Gun, a tradition dating back to 1860.",
            landmarks: "Times Square Shopping Mall,  Causeway Bay Shopping Plaza, Happy Valley Race Course.    Hong Kong Causeway Bay Station",
            center: {lat: 22.2800597153607, lng: 114.188455394615}, 
            polygon: [
                {lng: 114.17915, lat: 22.28463},{lng: 114.18044, lat: 22.28155},{lng: 114.18121, lat: 22.27933},{lng: 114.180501, lat: 22.277024},{lng: 114.18005, lat: 22.27532},{lng: 114.18074, lat: 22.27428},{lng: 114.18404, lat: 22.27532},{lng: 114.18859, lat: 22.27055},{lng: 114.19179, lat: 22.27325},{lng: 114.19644, lat: 22.27373},{lng: 114.1979, lat: 22.27933},{lng: 114.19426, lat: 22.2829},{lng: 114.19413, lat: 22.28552},{lng: 114.18899, lat: 22.28939},{lng: 114.17915, lat: 22.28463}
            ],  
            staticMapUrl: "22.28463,114.17915|22.28155,114.18044|22.27933,114.18121|22.277024,114.180501|22.27532,114.18005|22.27428,114.18074|22.27532,114.18404|22.27055,114.18859|22.27325,114.19179|22.27373,114.19644|22.27933,114.1979|22.2829,114.19426|22.28552,114.19413|22.28939,114.18899|22.28463,114.17915"
        }, 

        {
            name: "Wan Chai",
            nid: "1645215",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production190/d1601/f9c239d1-74ac-11e4-8f3e-d89d672c79ac.jpg",
            tags: "Food, Restaurants, Bars, Art, Business",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "A bustling mix of the old and the new, Wan Chai is home to a thriving restaurant and bar scene, with traditional open-air restaurants, quaint tea shops, and fast-food eateries. Take a stroll around Bauhinia Square and see the enormous, golden bauhinia statue which stands outside the Convention and Exhibition Center. Or experience the city’s art scene, at the Performing Arts Academy on the shimmering waterfront.",
            landmarks: "Hong Kong Convention and Exhibition Centre,  Central Plaza,   Hong Kong Wan Chai Station,  Golden Bauhinia Square",
            center: {lat: 22.2787723382243, lng: 114.173527530201}, 
            polygon: [
                {lng: 114.16752, lat: 22.28918},{lng: 114.16709, lat: 22.28115},{lng: 114.16718, lat: 22.27794},{lng: 114.16645, lat: 22.27635},{lng: 114.16718, lat: 22.27381},{lng: 114.17121, lat: 22.26992},{lng: 114.175844, lat: 22.27059},{lng: 114.18065, lat: 22.27051},{lng: 114.17949, lat: 22.27373},{lng: 114.18074, lat: 22.27428},{lng: 114.18005, lat: 22.275317},{lng: 114.180586, lat: 22.276885},{lng: 114.18121, lat: 22.27933},{lng: 114.18044, lat: 22.28155},{lng: 114.17915, lat: 22.28463},{lng: 114.16752, lat: 22.28918}
            ],
            staticMapUrl: "114.16752 22.28918, 114.16709 22.28115, 114.16718 22.27794, 114.16645 22.27635, 114.16718 22.27381, 114.17121 22.26992, 114.175844 22.27059, 114.18065 22.27051, 114.17949 22.27373, 114.18074 22.27428, 114.18005 22.275317, 114.180586 22.276885, 114.18121 22.27933, 114.18044 22.28155, 114.17915 22.28463, 114.16752 22.28918"
        },

        
        {
            name: "North Point",
            nid: "1645225",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production97/d1340/fab4d730-74ac-11e4-8f3e-d89d672c79ac.jpg",
            tags: "Budget, Theatre, Markets, Food, Relaxing",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "Quieter than some of its neighbors, North Point is a mostly residential area perfect for the budget traveler. A diverse district, there are many delicious types of cuisine on offer in North Point, from tasty Cantonese dishes to Indonesian delicacies. Head to the iconic Sunbeam Theater on King’s Road to see some traditional Chinese opera, or enjoy the bustling food markets on Chun Yeung street.",
            landmarks: "Quarry Bay,  Hong Kong Fortress Hill Station, Hong Kong Shue Yan University,   North Point Ferry Pier",
            center: {lat: 22.289335791022, lng: 114.201049484764}, 
            polygon: [
                {lng: 114.18899, lat: 22.28939},{lng: 114.19413, lat: 22.28552},{lng: 114.19426, lat: 22.2829},{lng: 114.1979, lat: 22.27933},{lng: 114.208202, lat: 22.284133},{lng: 114.212537, lat: 22.297554},{lng: 114.20459, lat: 22.29613},{lng: 114.19398, lat: 22.29561},{lng: 114.18899, lat: 22.28939}
            ],
            staticMapUrl: "22.28939,114.18899|22.28552,114.19413|22.2829,114.19426|22.27933,114.1979|22.284133,114.208202|22.297554,114.212537|22.29613,114.20459|22.29561,114.19398|22.28939,114.18899"
        },

        {
            name: "Western District",
            nid: "1645230",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production130/d800/fabe4d10-74ac-11e4-a6db-d89d672bd508.jpg",
            tags: "Trendy, Bars, Market, Nightlife, Shopping, Scenery",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "Experience a taste of traditional Hong Kong is the colorful market-filled streets of the Western District. Head to the bustling Chinese Central Market to haggle over food, and explore the surrounding winding alleyways, crammed with tea shops, herbal pharmacies, and all kinds of knick-knack stores. Home to the world’s longest outdoor escalator, make sure to take the trip to the top and visit some of the surrounding trendy bars.",
            landmarks: "University of Hong Kong (HKU),   Tsan Yuk Hospital,   University Museum and Art Gallery   ",
            center: {lat: 22.2866925556968, lng: 114.130499347514}, 
            polygon: [
                {lng: 114.10855, lat: 22.29013},{lng: 114.11688, lat: 22.28052},{lng: 114.134, lat: 22.2746},{lng: 114.14553, lat: 22.27967},{lng: 114.14537, lat: 22.28191},{lng: 114.1452, lat: 22.28415},{lng: 114.1461, lat: 22.28546},{lng: 114.14628, lat: 22.28745},{lng: 114.14806, lat: 22.2885},{lng: 114.14896, lat: 22.29148},{lng: 114.13447, lat: 22.29831},{lng: 114.10855, lat: 22.29013}
            ],
            staticMapUrl: "22.29013,114.10855|22.28052,114.11688|22.2746,114.134|22.27967,114.14553|22.28191,114.14537|22.28415,114.1452|22.28546,114.1461|22.28745,114.14628|22.2885,114.14806|22.29148,114.14896|22.29831,114.13447|22.29013,114.10855"
        }
        
    ], 

    lasvegas: [

        {
            name: "The Strip",
            nid: "1688611",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production2/d23/f9f7e7e0-ac67-11e4-99a1-d89d672bd508.jpg",
            tags: "tag1, tag2, tag3",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "The second you cruise past the Welcome to Fabulous Las Vegas sign, your senses will be bathed in The Strip's illuminated splendor, as Caesars Palace, Mandalay Bay and the names of the other hotel-casinos are lit up all around. The Fountains of Bellagio and a replica of the Eiffel Tower are among the gobsmacking landmarks. A hyperreal realm of fantasy and pleasure, the Strip is like no place on Earth.",
            landmarks: "landmark1, landmark2, landmark3",
            center: {lat: 36.1184062307293, lng: -115.066126378538}, 
            polygon: [
                {lng: -115.173395, lat: 36.074532},{lng: -115.173778, lat: 36.118355},{lng: -115.172385, lat: 36.121797},{lng: -115.155104, lat: 36.148745},{lng: -115.209992, lat: 36.168392},{lng: -115.247039, lat: 36.074716},{lng: -115.173395, lat: 36.074532}
            ],  
            staticMapUrl: "36.074532,-115.173395|36.118355,-115.173778|36.121797,-115.172385|36.148745,-115.155104|36.168392,-115.209992|36.074716,-115.247039|36.074532,-115.173395"
        },
        {
            name: "South of The Strip",
            nid: "1689372",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production106/d138/f9582570-ac67-11e4-99a1-d89d672bd508.jpg",
            tags: "tag1, tag2, tag3",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "Head South of the Strip for the sprawling complex of designer boutiques, family-friendly restaurants and jumping country music venues that is Town Square. There's also plenty of gaming to be had at South Point resort. Meanwhile, thrashing around Nevada beyond the outer limits of the city on a special desert tour offers a distilled taste of America that makes South Vegas a speed-demon's delight.",
            landmarks: "landmark1, landmark2, landmark3",
            center: {lat: 36.1156284599056, lng: -115.200658859688}, 
            polygon: [
                {lng: -115.340407, lat: 36.22049},{lng: -115.339178, lat: 36.102225},{lng: -115.240017, lat: 36.101863},{lng: -115.238501, lat: 36.219291},{lng: -115.340407, lat: 36.22049}
            ], 
            staticMapUrl: "36.068221,-115.192506|35.990244,-115.192957|35.990138,-115.132127|36.071213,-115.117893|36.068221,-115.192506"
            }, 

        {
            name: "North Las Vegas",
            nid: "1808629",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production117/d1775/f945fd00-ac67-11e4-be0e-d89d672bfba8.jpg",
            tags: "tag1, tag2, tag3",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "Striking a balance between energy and peace, from the buzzing Wild West-inspired Texas Station casino to the sprawling swathes of green and blue at the Aliante Golf Club, North Las Vegas is all things to all people. For full-on exhilaration, check out the Fremont Street Experience, a promenade flanked by casinos and hotels, featuring nightly light shows and a vast overhead canopy where dazzling animations and video sequences hurtle past.",
            landmarks: "landmark1, landmark2, landmark3",
            center: {lat: 36.161235940538, lng: -115.28958341073}, 
            polygon: [
                {lng: -115.340407, lat: 36.22049},{lng: -115.339178, lat: 36.102225},{lng: -115.240017, lat: 36.101863},{lng: -115.238501, lat: 36.219291},{lng: -115.340407, lat: 36.22049}
            ],
            staticMapUrl: "36.22049,-115.340407|36.102225,-115.339178|36.101863,-115.240017|36.219291,-115.238501|36.22049,-115.340407"
        },

        
        {
            name: "West of The Strip",
            nid: "1713776",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production34/d815/f95677c0-ac67-11e4-99a1-d89d672bd508.jpg",
            tags: "tag1, tag2, tag3",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "West of The Strip is alive with the aromas of Chinatown and the innovative exhibitions at Las Vegas Art Museum, and is a perfect break from the rollercoaster ride of The Strip. Take in nature displays and stroll through the botanical gardens at the 180-acre Springs Reserve. Or if you came to Vegas to push chips across tables, some of the best off-Strip casinos are peppered along West Flamingo Road.",
            landmarks: "landmark1, landmark2, landmark3",
            center: {lat: 36.107777704292, lng: -115.144730383197}, 
            polygon: [
                {lng: -115.153465, lat: 36.148079},{lng: -115.171032, lat: 36.12194},{lng: -115.172111, lat: 36.119242},{lng: -115.171661, lat: 36.071045},{lng: -115.119901, lat: 36.07154},{lng: -115.120721, lat: 36.149025},{lng: -115.153465, lat: 36.148079}
            ],
            staticMapUrl: "36.148079,-115.153465|36.12194,-115.171032|36.119242,-115.172111|36.071045,-115.171661|36.07154,-115.119901|36.149025,-115.120721|36.148079,-115.153465"
        },

        {
            name: "East of The Strip",
            nid: "1705324",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production108/d1590/f9584c80-ac67-11e4-955a-d89d672c79ac.jpg",
            tags: "tag1, tag2, tag3",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "Boasting some of the most beautiful golf courses in the US at Wynn and Stallion Mountain, the East of The Strip proves there's plenty more to Vegas than casinos. Admire vintage Americana at the Neon Museum, with its towering displays from yesteryear, or sample the delights of Ethel M Chocolates on a factory tour. Lake Las Vegas is the perfect place to recharge your batteries after long sessions on the slots.",
            landmarks: "landmark1, landmark2, landmark3",
            center: {lat: 36.031281653637, lng: -115.15854916555}, 
            polygon: [
                {lng: -115.192506, lat: 36.068221},{lng: -115.192957, lat: 35.990244},{lng: -115.132127, lat: 35.990138},{lng: -115.117893, lat: 36.071213},{lng: -115.192506, lat: 36.068221}
            ],
            staticMapUrl: "36.153615,-115.119656|36.084063,-115.118973|36.084542,-115.012176|36.151259,-115.012217|36.153615,-115.119656"
        
        }
        
    ], 

    madrid: [

        {
            name: "Gran Via",
            nid: "1778397",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production75/d229/ffe64ed0-ac67-11e4-99a1-d89d672bd508.jpg",
            tags: "Shopping, Architecture, Monuments, Nighlife, Sightseeing",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "Madrid’s main thoroughfare, Gran Via attracts locals to its many shops, ranging from luxurious designer boutiques to high street brands, while tourists come to ogle its impressive buildings. The opulent, domed Metropolis Building is at the eastern end, while the more modern, imposing Edificio de España is at the other. Visit at night, when the buildings are lovingly illuminated, and when the vibrant cinema district kicks into buzzing action.",

            landmarks: [
                {name: "Convent de las Descalzas Reales", type: "museums", lat: 40.418152, lng: -3.706137, primary: "false", id: "88193"},
                {name: "Fuencarral Market", type: "shopping", lat: 40.423275, lng: -3.700792, primary: "true", id: "114605"},
                {name: "Lope de Vega Theatre", type: "theater", lat: 40.42194, lng: -3.708566, primary: "false", id: "127957"},
                {name: "Plaza de Callao", type: "sign", lat: 40.41992, lng: -3.705832, primary: "false", id: "118226"},
                {name: "Plaza de Isabel II", type: "sign", lat: 40.418183, lng: -3.709769, primary: "false", id: "64581"},
                {name: "Royal Theatre", type: "theater", lat: 40.418168, lng: -3.709807, primary: "true", id: "107064"},
                {name: "San Fernando Royal Academy of Fine Arts", type: "museums", lat: 40.417548, lng: -3.700751, primary: "true", id: "61563"},
                {name: "Teatro Alfil", type: "theater", lat: 40.423131, lng: -3.7045447, primary: "false", id: "17300"} 
            ],

            center: {lat: 40.4207292704618, lng: -3.70406571837089}, 
            polygon: [
                {lng: -3.707147, lat: 40.417979},{lng: -3.706913, lat: 40.417983},{lng: -3.699329, lat: 40.417272},{lng: -3.695727, lat: 40.417692},{lng: -3.695848, lat: 40.418969},{lng: -3.701064, lat: 40.420988},{lng: -3.700692, lat: 40.424031},{lng: -3.707373, lat: 40.42611},{lng: -3.708209, lat: 40.425065},{lng: -3.706111, lat: 40.424393},{lng: -3.709182, lat: 40.422552},{lng: -3.71077, lat: 40.423436},{lng: -3.711004, lat: 40.423272},{lng: -3.70866, lat: 40.42179},{lng: -3.710663, lat: 40.418426},{lng: -3.708656, lat: 40.417064},{lng: -3.707147, lat: 40.417979}
            ],  
            staticMapUrl: "40.417979,-3.707147|40.417983,-3.706913|40.417272,-3.699329|40.417692,-3.695727|40.418969,-3.695848|40.420988,-3.701064|40.424031,-3.700692|40.42611,-3.707373|40.425065,-3.708209|40.424393,-3.706111|40.422552,-3.709182|40.423436,-3.71077|40.423272,-3.711004|40.42179,-3.70866|40.418426,-3.710663|40.417064,-3.708656|40.417979,-3.707147"
        },
        {
            name: "Puerta del Sol",
            nid: "1695228",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production149/d1658/ffe7fc80-ac67-11e4-be0e-d89d672bfba8.jpg",
            tags: "Historical, Architecture, Sightseeing, Shopping, Food",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "Puerta del Sol's a vibrant plaza in the heart of historic Madrid. Wide, pedestrian-friendly streets radiate from it, full of shops, restaurants, and grand hotels. Fountains and the charming bear statue draw locals and tourists together in the main square, particularly in the evening. Visit the nearby Plaza Mayor, surrounded on all sides by beautifully-decorated, 4-storey buildings, punctuated with towers. Visit a traditional tapas restaurant for freshly sliced Iberian ham.",
            
            landmarks: [
                {name: "El Oso y el Madrono", type: "monument", lat: 40.417196, lng: -3.703551, primary: "false", id: "32582"},
                {name: "Teatro Caser Calderon de Madrid", type: "theater", lat: 40.41418, lng: -3.703562, primary: "true", id: "88193"},
                {name: "Teatro Pavon", type: "theater", lat: 40.409986, lng: -3.706311, primary: "true", id: "3143"}  
            ],

            center: {lat: 40.4120674293253, lng: -3.70243894117329}, 
            polygon: [
                {lng: -3.705559, lat: 40.415905},{lng: -3.70571, lat: 40.413061},{lng: -3.707089, lat: 40.413177},{lng: -3.707026, lat: 40.40821},{lng: -3.695458, lat: 40.408787},{lng: -3.695481, lat: 40.410521},{lng: -3.699917, lat: 40.412823},{lng: -3.701628, lat: 40.413393},{lng: -3.700839, lat: 40.417379},{lng: -3.706199, lat: 40.417866},{lng: -3.705559, lat: 40.415905}
            ], 
            staticMapUrl: "40.415905,-3.705559|40.413061,-3.70571|40.413177,-3.707089|40.40821,-3.707026|40.408787,-3.695458|40.410521,-3.695481|40.412823,-3.699917|40.413393,-3.701628|40.417379,-3.700839|40.417866,-3.706199|40.415905,-3.705559"
            }, 

        {
            name: "Salamanca",
            nid: "1736870",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production145/d259/ffd537d0-ac67-11e4-be0e-d89d672bfba8.jpg",
            tags: "Shopping, Luxury, Trendy, Cafes, Museums",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "Salamanca is Madrid’s most affluent district, with wide, tree-lined streets and peaceful squares aplenty. It has a collection of little museums, ranging in subject from archaeology to abstract sculpture. Calle Serrano is the high point of Madrid’s shopping scene, laden with ultra-expensive designer shops. Once you’ve window-shopped, stop at one of the many cafés to enjoy coffee and pastries and listen to the chit chat of locals.",
            
            landmarks: [
                {name: "ABC Serrano", type: "shopping", lat: 40.431935, lng: -3.686815, primary: "false", id: "63968"},
                {name: "Fundacion Juan March", type: "civic", lat: 40.431447, lng: -3.681394, primary: "false", id: "45614"},
                {name: "Fundacion Lazaro Galdiano", type: "museums", lat: 40.436904, lng: -3.685288, primary: "false", id: "40616"},
                {name: "La Caixa Foundation", type: "civic", lat: 40.428817, lng: -3.687214, primary: "false", id: "46623"},
                {name: "Lazaro Galdiano Museum", type: "museums", lat: 40.432108, lng: -3.689333, primary: "false", id: "57093"},
                {name: "Museum of Public Art", type: "museums", lat: 40.417196, lng: -3.703551, primary: "true", id: "66372"},
                {name: "National Archaeological Museum of Spain", type: "museums", lat: 40.423298, lng: -3.688574, primary: "true", id: "92880"},
                {name: "National Library", type: "civic", lat: 40.423772, lng: -3.690323, primary: "true", id: "77490"},
                {name: "Sports Palace Madrid", type: "stadium", lat: 40.4246, lng: -3.67178, primary: "false", id: "122830"},
                {name: "Teatro Fernan Gomez", type: "theater", lat: 40.424454, lng: -3.689988, primary: "false", id: "44482"},
                {name: "U.S. Embassy", type: "civic", lat: 40.43506, lng: -3.68651, primary: "false", id: "123616"}
                 
            ],

            center: {lat: 40.428112336445538, lng: -3.67818108521239}, 
            polygon: [
                {lng: -3.692375, lat: 40.419611},{lng: -3.688595, lat: 40.420568},{lng: -3.68308, lat: 40.421155},{lng: -3.679434, lat: 40.421821},{lng: -3.659243, lat: 40.421934},{lng: -3.66054, lat: 40.428235},{lng: -3.668416, lat: 40.428153},{lng: -3.677703, lat: 40.437592},{lng: -3.687333, lat: 40.438063},{lng: -3.689153, lat: 40.437377},{lng: -3.690229, lat: 40.42455},{lng: -3.692375, lat: 40.419611}
            ],
            staticMapUrl: "40.419611,-3.692375|40.420568,-3.688595|40.421155,-3.68308|40.421821,-3.679434|40.421934,-3.659243|40.428235,-3.66054|40.428153,-3.668416|40.437592,-3.677703|40.438063,-3.687333|40.437377,-3.689153|40.42455,-3.690229|40.419611,-3.692375"
        },

        
        {
            name: "Moncloa - Arguelles",
            nid: "1649700",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production184/d1880/00ad6f60-ac68-11e4-be0e-d89d672bfba8.jpg",
            tags: "Monuments, Gardens, Walking, Relaxing, Family friendly",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "Adjacent to the Plaza de Espana, the Moncloa-Arguelles district contains several monuments, including the grandiose and controversial Arco de la Victoria, a stone arch built by Franco to celebrate his victory. It also encompasses the extensive Parque del Oeste, a green oasis in the city. Walk through the fragrant and romantic rose garden and explore the extraordinary Temple of Debod, a piece of ancient Egypt relocated to this Spanish park.",
            
            landmarks: [
                {name: "Cementerio de La Florida", type: "historic", lat: 40.427053, lng: -3.724564, primary: "false", id: "12402"},
                {name: "Convent of las Comendadoras de Santiago", type: "monument", lat: 40.42737, lng: -3.708868, primary: "false", id: "36334"},
                {name: "Hospital Moncloa", type: "medical", lat: 40.433264, lng: -3.733654, primary: "false", id: "91323"},
                {name: "Museo de Historia de Madrid", type: "museums", lat: 40.425756, lng: -3.701051, primary: "true", id: "68816"},
                {name: "Museo Municipal de Arte Contemporaneo", type: "museums", lat: 40.427288, lng: -3.710571, primary: "false", id: "33248"},
                {name: "Museum of Romanticism", type: "museums", lat: 40.425634, lng: -3.699195, primary: "true", id: "61687"},
                {name: "Plaza del Dos de Mayo", type: "sign", lat: 40.427237, lng: -3.704031, primary: "true", id: "98838"},
                {name: "Principe Pio", type: "shopping", lat: 40.421264, lng: -3.720563, primary: "false", id: "118601"},
                {name: "San Antonio de la Florida Hermitage", type: "monument", lat: 40.425487, lng: -3.725685, primary: "false", id: "98675"},
                {name: "Temple of Debod", type: "monument", lat: 40.42427, lng: -3.716737, primary: "false", id: "90374"}    
            ], 

            center: {lat: 40.4285349363548, lng: -3.72054580900964}, 
            polygon: [
                {lng: -3.735942, lat: 40.433733},{lng: -3.722136, lat: 40.419168},{lng: -3.71642, lat: 40.421913},{lng: -3.714197, lat: 40.428101},{lng: -3.707374, lat: 40.426148},{lng: -3.700725, lat: 40.42413},{lng: -3.696767, lat: 40.42428},{lng: -3.697023, lat: 40.425892},{lng: -3.697711, lat: 40.426227},{lng: -3.698984, lat: 40.427207},{lng: -3.702184, lat: 40.427149},{lng: -3.716552, lat: 40.43054},{lng: -3.721426, lat: 40.437022},{lng: -3.735942, lat: 40.433733}
            ],
            staticMapUrl: "40.433733,-3.735942|40.419168,-3.722136|40.421913,-3.71642|40.428101,-3.714197|40.426148,-3.707374|40.42413,-3.700725|40.42428,-3.696767|40.425892,-3.697023|40.426227,-3.697711|40.427207,-3.698984|40.427149,-3.702184|40.43054,-3.716552|40.437022,-3.721426|40.433733,-3.735942"
        },

        {
            name: "Atocha",
            nid: "1659515",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production104/d1718/ffe7d570-ac67-11e4-955a-d89d672c79ac.jpg",
            tags: "Gardens, Theatre, Art, Culture, Relaxing",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "Madrid's palatial Atocha Station is the beating heart of a bustling neighborhood. Take the weight off your feet and stretch out across the exquisite parkland of the Madrid Botanical Gardens, or take in an extravagant show at the Calderon Theater. Art buffs flock to the CaixaForum gallery, with its stunning vertical garden and the Queen Sofia Arts Center, bursting with modern, cutting edge Spanish art.",
           
            landmarks: [
                {name: "Gate of Toledo", type: "monument", lat: 40.406556, lng: -3.711724, primary: "true", id: "117336"},
                {name: "La Casa Encendida", type: "civic", lat: 40.405828, lng: -3.699784, primary: "false", id: "70297"},
                {name: "Madrid (XOC-Atocha Train Station)", type: "train", lat: 40.40621, lng: -3.691866, primary: "true", id: "113968"},
                {name: "Madrid Railway Museum", type: "museums", lat: 40.40002, lng: -3.694039, primary: "true", id: "81297"},
                {name: "Museo Nacional Centro de Arte Reina Sofia", type: "museums", lat: 40.408628, lng: -3.693895, primary: "true", id: "117909"},
                {name: "Valle-Inclan Theater", type: " theater", lat: 40.408374, lng: -3.700688, primary: "false", id: "36424"}
                   
            ], 

            center: {lat: 40.3996720079084, lng: -3.69716551310342}, 
            polygon: [
                {lng: -3.712515, lat: 40.407853},{lng: -3.717811, lat: 40.397799},{lng: -3.705743, lat: 40.39295},{lng: -3.699366, lat: 40.387609},{lng: -3.680137, lat: 40.395501},{lng: -3.674284, lat: 40.401576},{lng: -3.687345, lat: 40.406375},{lng: -3.691415, lat: 40.408704},{lng: -3.695598, lat: 40.408721},{lng: -3.712515, lat: 40.407853}
            ],
            staticMapUrl: "40.407853,-3.712515|40.397799,-3.717811|40.39295,-3.705743|40.387609,-3.699366|40.395501,-3.680137|40.401576,-3.674284|40.406375,-3.687345|40.408704,-3.691415|40.408721,-3.695598|40.407853,-3.712515"
        
        }
        
    ], 

    milan: [

        {
            name: "Citta Studi",
            nid: "1663700",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production153/d964/57ce5570-05bf-11e4-b376-d89d672c79ac.jpg",
            tags: "Cafes, Bars, Architecture, Urban, Friendly people, University",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "As you might expect from the name, Citta Studi has a bustling student population – and that means plenty of lively cafes and bars to choose from. There's also history to be had here as well – the arches and pillars of the 15th Century Ca' Granda make it one of the most distinctive buildings in the district, and nearby is the Basilica of Sant'Ambrogio, which is almost a thousand years old.",
            landmarks: "Carlo Besta Neurological Institute,  Politecnico di Milano,   Orto Botanico di Cascina Rosa  ",
            center: {lat: 45.4785329057188, lng: 9.22841001200823}, 
            polygon: [
                {lng: 9.209916, lat: 45.474781},{lng: 9.216609, lat: 45.471937},{lng: 9.216658, lat: 45.469478},{lng: 9.21826, lat: 45.469484},{lng: 9.223832, lat: 45.46888},{lng: 9.224153, lat: 45.466295},{lng: 9.237976, lat: 45.466479},{lng: 9.241219, lat: 45.493605},{lng: 9.236744, lat: 45.491515},{lng: 9.232457, lat: 45.48962},{lng: 9.222021, lat: 45.488606},{lng: 9.216648, lat: 45.486242},{lng: 9.217278, lat: 45.485897},{lng: 9.217621, lat: 45.479122},{lng: 9.209916, lat: 45.474781}
            ],  
            staticMapUrl: "45.474781,9.209916|45.471937,9.216609|45.469478,9.216658|45.469484,9.21826|45.46888,9.223832|45.466295,9.224153|45.466479,9.237976|45.493605,9.241219|45.491515,9.236744|45.48962,9.232457|45.488606,9.222021|45.486242,9.216648|45.485897,9.217278|45.479122,9.217621|45.474781,9.209916"
        },
        {
            name: "Milan Centre",
            nid: "1663697",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production194/d1418/58357bb0-05bf-11e4-b376-d89d672c79ac.jpg",
            tags: "Monuments, Cathedral, Shopping, Historical",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "Mere words can't really express the majesty of Milan's Duomo. One of the world's largest cathedrals, it's a lavish palace of worship bedecked with hundreds of spires and statues – a Gothic glory which took six centuries to complete. It sits in the Piazza del Duomo, a short walk from the legendary Quadrilatero shopping district, where the most exclusive fashion houses have boutiques lining streets like Via Sant'Andrea and Via Verri.",
            landmarks: "Cathedral of Milan,  Piazza del Duomo,    Leonardo da Vinci Museum of Science and Technology,  Galleria Vittorio Emanuele II",
            center: {lat: 45.46515333796, lng: 9.18834910309862}, 
            polygon: [
                {lng: 9.166676, lat: 45.472029},{lng: 9.165601, lat: 45.469966},{lng: 9.163996, lat: 45.461176},{lng: 9.163809, lat: 45.46009},{lng: 9.165309, lat: 45.460052},{lng: 9.177458, lat: 45.452276},{lng: 9.202129, lat: 45.451996},{lng: 9.203182, lat: 45.453977},{lng: 9.207938, lat: 45.460913},{lng: 9.209196, lat: 45.469338},{lng: 9.216707, lat: 45.469543},{lng: 9.216609, lat: 45.471937},{lng: 9.2099, lat: 45.474771},{lng: 9.208178, lat: 45.475533},{lng: 9.205151, lat: 45.474474},{lng: 9.200201, lat: 45.477455},{lng: 9.197129, lat: 45.478562},{lng: 9.193477, lat: 45.478063},{lng: 9.183898, lat: 45.475533},{lng: 9.179829, lat: 45.47558},{lng: 9.175082, lat: 45.477554},{lng: 9.166676, lat: 45.472029}
            ], 
            staticMapUrl: "45.472029,9.166676|45.469966,9.165601|45.461176,9.163996|45.46009,9.163809|45.460052,9.165309|45.452276,9.177458|45.451996,9.202129|45.453977,9.203182|45.460913,9.207938|45.469338,9.209196|45.469543,9.216707|45.471937,9.216609|45.474771,9.2099|45.475533,9.208178|45.474474,9.205151|45.477455,9.200201|45.478562,9.197129|45.478063,9.193477|45.475533,9.183898|45.47558,9.179829|45.477554,9.175082|45.472029,9.166676"
            }, 

        {
            name: "San Siro Stadium",
            nid: "1637553",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production26/d338/594e65c0-05bf-11e4-b376-d89d672c79ac.jpg",
            tags: "Soccer, Entertainment, Business, Tours",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "Fashion shows, modernist furniture displays, and other major events are put on at Fiera Milano City, one of Europe's most prestigious exhibition spots. It may be big, but local bus services make it a breeze to explore. Meanwhile, soccer fans will want to make a pilgrimage to San Siro stadium – the shared home of Inter Milan and AC Milan, it's also hosted superstars like David Bowie and U2.",
            landmarks: "Milan Convention Centre (MIC),  Fiera Milano City, San Siro Stadium",
            center: {lat: 45.4763411809471, lng: 9.12517343851838}, 
            polygon: [
                {lng: 9.163797, lat: 45.460124},{lng: 9.165608, lat: 45.469959},{lng: 9.166647, lat: 45.472022},{lng: 9.175185, lat: 45.47765},{lng: 9.178123, lat: 45.479901},{lng: 9.165138, lat: 45.491747},{lng: 9.141704, lat: 45.504923},{lng: 9.127008, lat: 45.493349},{lng: 9.073132, lat: 45.484364},{lng: 9.07996, lat: 45.457071},{lng: 9.135875, lat: 45.456634},{lng: 9.135784, lat: 45.460028},{lng: 9.163797, lat: 45.460124}
            ],
            staticMapUrl: "45.460124,9.163797|45.469959,9.165608|45.472022,9.166647|45.47765,9.175185|45.479901,9.178123|45.491747,9.165138|45.504923,9.141704|45.493349,9.127008|45.484364,9.073132|45.457071,9.07996|45.456634,9.135875|45.460028,9.135784|45.460124,9.163797"
        },

        
        {
            name: "Northern Milan",
            nid: "1719940",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production142/d798/59abef10-05bf-11e4-b376-d89d672c79ac.jpg",
            tags: "Trendy, Luxury, Architecture, Monuments",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "Head to Northern Milan for a reminder there's more to the city than urban glamor and high fashion. Parco Sempione is a vast rolling island of greenery boasting landmarks including the Arco della Pace, a Neo-Classical triumphal arch covered in intricate carvings depicting battles and ancient gods. More history awaits you at Sforza Castle, a 15th Century citadel featuring art by Titian and Leonardo da Vinci.",
            landmarks: "Sforza Castle, Arco della Pace, Parco Sempione",
            center: {lat: 45.5821933082653, lng: 9.19350798917113}, 
            polygon: [
                {lng: 9.171316, lat: 45.529904},{lng: 9.228419, lat: 45.523723},{lng: 9.262637, lat: 45.550876},{lng: 9.243891, lat: 45.563666},{lng: 9.241701, lat: 45.623601},{lng: 9.158005, lat: 45.627098},{lng: 9.097841, lat: 45.613144},{lng: 9.173683, lat: 45.562734},{lng: 9.177241, lat: 45.548008},{lng: 9.171316, lat: 45.529904}
            ],
            staticMapUrl: "45.529904,9.171316|45.523723,9.228419|45.550876,9.262637|45.563666,9.243891|45.623601,9.241701|45.627098,9.158005|45.613144,9.097841|45.562734,9.173683|45.548008,9.177241|45.529904,9.171316"
        },

        {
            name: "Corso Buenos Aires",
            nid: "1637831",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production104/d1718/ffe7d570-ac67-11e4-955a-d89d672c79ac.jpg",
            tags: "Shopping, Cafes, Architecture, Luxury",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "Any sightseeing trip around Milan should include the Porta Venezia, a handsome city gate which is close to the Quadrilatero – the shopping district which makes Milan one of the fashion capitals of the world. Speaking of shopping, if you're after high street names rather than super-chic boutiques, then you also have to check out Corso Buenos Aires, the busy high street in which hundreds of stores jostle amid Neo-Classical grandeur.",
            landmarks: "Porta Venezia, Quadrilatero, Spazio Oberdan Casa-Museo, Boschi Di Stefano",
            center: {lat: 45.4802601982405, lng: 9.21183677835495}, 
            polygon: [
                {lng: 9.213919, lat: 45.487277},{lng: 9.203317, lat: 45.475601},{lng: 9.205173, lat: 45.474501},{lng: 9.20818, lat: 45.475536},{lng: 9.209889, lat: 45.474788},{lng: 9.217619, lat: 45.479142},{lng: 9.217268, lat: 45.485952},{lng: 9.213919, lat: 45.487277}
            ],
            staticMapUrl: "45.487277,9.213919|45.475601,9.203317|45.474501,9.205173|45.475536,9.20818|45.474788,9.209889|45.479142,9.217619|45.485952,9.217268|45.487277,9.213919"
        
        }
        
    ], 

    newyork: [
        {
            name: "Broadway - Times Square",
            nid: "1662301",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production179/d925/11c336e0-ac68-11e4-99a1-d89d672bd508.jpg",
            tags: "Monuments, Theatre, Culture, Family friendly",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "Known as the 'Crossroads of the World', Times Square is a dazzling intersection famed for its lavish neon signs, grand theaters, and pulsating crowds. Whether you're on your way to a Broadway show, a buzzing bar or one of the family-friendly restaurant that line the streets, look out for iconic structures like the Paramount Building and One Times Square – site of the celebrated New Year's Eve ball drop.",
            
            landmarks: [
                {name: "American Folk Art Museum", type: "museums", lat: 40.76102, lng: -73.97727, primary: "false", id: "73425"}, 
                {name: "August Wilson Theater", type: "theater", lat: 40.763156, lng: -73.984361, primary: "false", id: "118938"}, 
                {name: "Broadway", type: "theater", lat: 40.75799, lng: -73.98556, primary: "true", id: "129374"},  
                {name: "Bryant Park", type: "tree", lat: 40.75332, lng: -73.98438, primary: "false", id: "127999"},
                {name: "Carnegie Hall", type: "theater", lat: 40.7653, lng: -73.98022, primary: "false", id: "128085"},
                {name: "Circle in the Square Theater", type: "theater", lat: 40.76151, lng: -73.98401, primary: "false", id: "89994"},
                {name: "Ed Sullivan Theater", type: "theater", lat: 40.76365, lng: -73.9827, primary: "false", id: "113614"},
                {name: "Gershwin Theater", type: "theater", lat: 40.76224, lng: -73.98391, primary: "false", id: "127243"},
                {name: "International Center of Photography", type: "museums", lat: 40.7559, lng: -73.98343, primary: "false", id: "45345"},
                {name: "Madame Tussauds Wax Museum", type: "museums", lat: 40.75653, lng: -73.98814, primary: "true", id: "122651"},
                {name: "Minskoff Theater ", type: "theater", lat: 40.75819, lng: -73.98607, primary: "false", id: "124608"},
                {name: "Museum of Modern Art (MOMA)", type: "museums", lat: 40.76106, lng: -73.97741, primary: "true", id: "129424"},
                {name: "Museum of Television and Radio", type: "museums", lat: 40.76024, lng: -73.97736, primary: "false", id: "99249"},
                {name: "NBC Studios", type: "icecream", lat: 40.758478, lng: -73.978906, primary: "true", id: "117576"},
                {name: "New Amsterdam Theater", type: "theater", lat: 40.75631, lng: -73.98773, primary: "false", id: "121845"},
                {name: "New York Public Library", type: "civic" , lat: 40.7526, lng: -73.9827, primary: "false", id: "120349"},
                {name: "Port Authority Bus Terminal", type: "civic" , lat: 40.756811, lng: -73.990117, primary: "false", id: "129422"},
                {name: "Radio City Music Hall", type: "theater" , lat: 40.76024, lng: -73.98014, primary: "false", id: "128990"},
                {name: "Rockefeller Center", type: "historic", lat: 40.7587, lng: -73.9787, primary: "true", id: "129423"},
                {name: "Roseland Ballroom ", type: "theater", lat: 40.763127, lng: -73.984215, primary: "false", id: "37471"},
                {name: "The Majestic Theater", type: "theater", lat: 40.758253, lng: -73.988217, primary: "false", id: "122819"},
                {name: "Times Square", type: "sign", lat: 40.758896, lng: -73.985130, primary: "true", id: "129656"},
                {name: "Top of the Rock Observation Deck", type: "icecream", lat:40.759258, lng: -73.978947, primary: "false", id: "78926"},
                {name: "Toys 'R' Us Times Square", type: "shopping", lat: 40.75654, lng: -73.98659, primary: "false", id: "116335"},
                {name: "Trump Tower", type: "monument", lat: 40.762481, lng: -73.974339, primary: "false", id: "126073"}
            ],

            center: {lat: 40.7590562537867, lng: -73.984508248797}, 
            polygon: [
                {lng: -73.985265, lat: 40.768532},{lng: -73.995544, lat: 40.754642},{lng: -73.983701, lat: 40.749557},{lng: -73.973503, lat: 40.763546},{lng: -73.985265, lat: 40.768532}
            ],
            staticMapUrl: "40.768532,-73.985265|40.754642,-73.995544|40.749557,-73.983701|40.763546,-73.973503|40.768532,-73.985265"
        
        },
        {
            name: "Central Park",
            nid: "1707357",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production173/d963/10ef9330-ac68-11e4-be0e-d89d672bfba8.jpg",
            tags: "Gardens, Zoo, Family friendly, Natural parks",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "At the heart of Manhattan lies Central Park – a district in its own right and nearly as famous as the city it serves - this green, or autumnal orange, swathe of forest, lawns, gardens, fountains, statues, and lake is a recreational oasis in the heart of New York’s never-sleeping metropolis. Clamber aboard a horse-drawn carriage and trot past the likes of Central Park Zoo and 19th Century Belvedere Castle.",
            
        
            landmarks: [
                {name: "American Museum of Natural History", type: "museums", lat: 40.7805, lng: -73.97286, primary: "true", id: "127683"},
                {name: "Barney's", type: "shopping", lat: 40.76454, lng: -73.97072, primary: "false", id: "95698"},
                {name: "Belvedere Castle", type: "historic", lat: 40.77795, lng: -73.96666, primary: "false", id: "117924"},
                {name: "Bethesda Fountain", type: "monument", lat: 40.77372, lng: -73.97095, primary: "false", id: "77810"},
                {name: "Central Park Zoo", type: "icecream", lat: 40.76881, lng: -73.97204, primary: "true", id: "124959"},
                {name: "Columbus Circle", type: "sign", lat: 40.768058, lng: -73.981893, primary: "false", id: "128332"},
                {name: "Conservatory Garden", type: "tree", lat: 40.79402, lng: -73.95127, primary: "false", id: "74489"},
                {name: "Cooper Hewitt Design Museum", type: "museums", lat: 40.784401, lng: -73.958297, primary: "false", id: "82231"},
                {name: "El Museo del Barrio", type: "museums", lat: 40.7933, lng: -73.95186, primary: "false", id: "70401"},
                {name: "Frick Collection", type: "museums", lat: 40.77157, lng: -73.96695, primary: "false", id: "91592"},
                {name: "Hayden Planetarium", type: "museums", lat: 40.78019, lng: -73.97308, primary: "true", id: "96466"},
                {name: "Metropolitan Museum of Art (The Met)", type: "museums", lat: 40.77896, lng: -73.96235, primary: "true", id: "126938"},
                {name: "Museum of Arts and Design", type: "museums", lat: 40.767536, lng: -73.981973, primary: "false", id: "32759"},
                {name: "Museum of Biblical Art", type: "museums", lat: 40.77896, lng: -73.96235, primary: "false", id: "8387"},
                {name: "Museum of the City of New York", type: "museums", lat: 40.79257, lng: -73.95241, primary: "false", id: "107844"},
                {name: "National Academy of Design Museum", type: "museums", lat: 40.78377, lng: -73.95876, primary: "false", id: "83121"},
                {name: "Neue Galerie New York", type: "museums", lat: 40.78128, lng: -73.96061, primary: "false", id: "79649"},
                {name: "Rose Center for Earth and Space", type: "museums", lat: 40.78073, lng: -73.97267, primary: "false", id: "52696"},
                {name: "Solomon R. Guggenheim Museum", type: "museums", lat: 40.78324, lng: -73.95917, primary: "false", id: "116741"},
                {name: "Strawberry Fields - John Lennon Memorial", type: "monument", lat: 40.77604, lng: -73.97552, primary: "false", id: "95702"},
                {name: "The Jewish Museum", type: "museums", lat: 40.78547, lng: -73.95756, primary: "false", id: "79236"},
                {name: "The New York Historical Society", type: "museums", lat: 40.77971, lng: -73.97415, primary: "false", id: "98161"},
                {name: "Theodore Roosevelt Memorial", type: "monument", lat: 40.780738, lng: -73.9727, primary: "false", id: "94359"},
                {name: "Time Warner Center", type: "shopping", lat: 40.76777, lng: -73.98221, primary: "false", id: "115296"}
            ], 

            center: {lat: 40.78247996663, lng: -73.9657516646959}, 
            polygon: [
                {lng: -73.946688, lat: 40.797505},{lng: -73.958607, lat: 40.802403},{lng: -73.984923, lat: 40.768282},{lng: -73.971857, lat: 40.762859},{lng: -73.96334, lat: 40.77458},{lng: -73.955833, lat: 40.785088},{lng: -73.951462, lat: 40.791071},{lng: -73.946688, lat: 40.797505}
            ],  
            staticMapUrl: "40.797505,-73.946688|40.802403,-73.958607|40.768282,-73.984923|40.762859,-73.971857|40.77458,-73.96334|40.785088,-73.955833|40.791071,-73.951462|40.797505,-73.946688"
        },

        {
            name: "Midtown East - Grand Central",
            nid: "1707375",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production128/d1669/10fb2bf0-ac68-11e4-99a1-d89d672bd508.jpg",
            tags: "Architecture, Monuments, Sightseeing, Shopping",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "Think 'New York City' and the sights of Midtown East will spring to mind . There's the towering Art Deco splendor of the Chrysler Building, the gleaming edges of the Empire State Building, and the opulence of Grand Central – arguably the world's most famous train station. For top flight shopping, make your way to Saks Fifth Avenue, and you can even walk the corridors of power at the UN Headquarters.",
                      
            landmarks: [
                {name: "Chrysler Building", type: "historic", lat: 40.75173, lng: -73.97588, primary: "true", id: "117137"},
                {name: "Dahesh Museum", type: "museums", lat: 40.762, lng: -73.97259, primary: "false", id: "58028"},
                {name: "Grand Central Terminal", type: "historic", lat: 40.75237, lng: -73.97754, primary: "true", id: "129376"},
                {name: "Sony Wonder Technology Lab", type: "icecream", lat: 40.76131, lng: -73.97308, primary: "true", id: "68247"},
                {name: "St. Patrick's Cathedral", type: "monument", lat: 40.75885, lng: -73.97692, primary: "false", id: "125413"},
                {name: "The Morgan Library and Museum", type: "museums", lat: 40.74918, lng: -73.982, primary: "false", id: "100997"},
                {name: "Tiffany & Co.", type: "shopping", lat: 40.76285, lng: -73.97359, primary: "true", id: "107302"},
                {name: "Tramway Plaza", type: "tree", lat: 40.76086, lng: -73.96415, primary: "false", id: "851"},
                {name: "United Nations Headquarters", type: "civic", lat: 40.75003, lng: -73.96838, primary: "true", id: "128008"}
            ],

            center: {lat: 40.751425343466, lng: -73.9728319043845}, 
            polygon: [
                {lng: -73.958333, lat: 40.758495},{lng: -73.971154, lat: 40.763839},{lng: -73.971864, lat: 40.762859},{lng: -73.97351, lat: 40.763542},{lng: -73.982287, lat: 40.751507},{lng: -73.982464, lat: 40.751586},{lng: -73.98646, lat: 40.745931},{lng: -73.986371, lat: 40.745886},{lng: -73.987327, lat: 40.744575},{lng: -73.97267, lat: 40.738486},{lng: -73.958333, lat: 40.758495}
            ],
            staticMapUrl: "40.758495,-73.958333|40.763839,-73.971154|40.762859,-73.971864|40.763542,-73.97351|40.751507,-73.982287|40.751586,-73.982464|40.745931,-73.98646|40.745886,-73.986371|40.744575,-73.987327|40.738486,-73.97267|40.758495,-73.958333"
        
        },

        {
            name: "SoHo - Tribeca",
            nid: "1662303",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production132/d1390/119289f0-ac68-11e4-955a-d89d672c79ac.jpg",
            tags: "Shopping, Food, Trendy, Urban",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "Once New York’s industrial heartland, these lively Manhattan neighborhoods have undergone radical changes over the years. Now home to the super rich and famous, Tribeca’s once abandoned warehouses became squatting artists’ studios and gritty clubs before the luxurious six-figure apartments took hold, while SoHo’s elegantly preserved industrial buildings now house exclusive designer boutiques. Head off Broadway to find tenement-lined cobble stone streets dotted with old-school style local bakeries.",
           
            
            landmarks: [
                {name: "African Burial Ground National Monument", type: "monument", lat: 40.714322, lng: -74.004222, primary: "false", id: "8144"},
                {name: "Canal Park", type: "tree", lat: 40.72537, lng: -74.01063, primary: "false", id: "73759"},
                {name: "Children's Museum of the Arts", type: "museums", lat: 40.72066, lng: -73.99856, primary: "true", id: "66685"},
                {name: "Collect Pond Park", type: "tree", lat: 40.715926, lng: -74.002127, primary: "false", id: "23546"},
                {name: "Holland Tunnel", type: "historic", lat: 40.723844, lng: -74.007946, primary: "true", id: "110234"},
                {name: "New York City Fire Museum", type: "museums", lat: 40.72582, lng: -74.00679, primary: "true", id: "104036"},
                {name: "Washington Market Park", type: "tree", lat: 40.716557, lng: -74.011544, primary: "false", id: "82881"}
                
            ], 

            center: {lat: 40.7219590673274, lng: -74.0069763854816}, 
            polygon: [
                {lng: -74.014717, lat: 40.729268},{lng: -74.016793, lat: 40.718487},{lng: -74.006746, lat: 40.713538},{lng: -74.005086, lat: 40.712268},{lng: -74.00346, lat: 40.714225},{lng: -74.002094, lat: 40.71568},{lng: -73.998515, lat: 40.719959},{lng: -73.997648, lat: 40.72154},{lng: -73.995531, lat: 40.724778},{lng: -74.001364, lat: 40.728278},{lng: -74.014717, lat: 40.729268}
            ], 
            staticMapUrl: "40.729268,-74.014717|40.718487,-74.016793|40.713538,-74.006746|40.712268,-74.005086|40.714225,-74.00346|40.71568,-74.002094|40.719959,-73.998515|40.72154,-73.997648|40.724778,-73.995531|40.728278,-74.001364|40.729268,-74.014717"
            }, 

        {
            name: "Upper East Side",
            nid: "1421960",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production26/d338/594e65c0-05bf-11e4-b376-d89d672c79ac.jpg",
            tags: "Shopping, Luxury, Museums, Fine dining, Art",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "Upper East Side has long been synonymous with wealth – think luxury Park Avenue apartments, select boutiques where the designer items are so exclusive they don’t have price tags, and high-heel clad ladies-who-lunch tottering with their miniature poodles. Recently hubs of downtown style have stretched into the neighborhood so you can try out funky restaurants as well as upscale bistros. Don’t miss Museum Mile – home to the famous Guggenheim.",
            landmarks: [
                {name: "Gracie Mansion", type: "historic", lat: 40.77654, lng: -73.94364, primary: "true", id: "87865"},
                {name: "Memorial Sloan-Kettering Cancer Center", type: "medical", lat: 40.764014, lng: -73.957057, primary: "true", id: "82881"}
            ],

            center: {lat: 40.778305692793, lng: -73.9510503325489}, 
            polygon: [
                {lng: -73.945294, lat: 40.799216},{lng: -73.955874, lat: 40.785119},{lng: -73.963333, lat: 40.774621},{lng: -73.971072, lat: 40.763853},{lng: -73.95834, lat: 40.758502},{lng: -73.942965, lat: 40.772203},{lng: -73.940841, lat: 40.779023},{lng: -73.932447, lat: 40.793947},{lng: -73.945294, lat: 40.799216}
            ],
            staticMapUrl: "40.799216,-73.945294|40.785119,-73.955874|40.774621,-73.963333|40.763853,-73.971072|40.758502,-73.95834|40.772203,-73.942965|40.779023,-73.940841|40.793947,-73.932447|40.799216,-73.945294"
        },

        
        {
            name: "East Village - Lower East Side",
            nid: "1705326",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production165/d1304/11b6dad0-ac68-11e4-be0e-d89d672bfba8.jpg",
            tags: "Shopping, Food, Cafes, Bars",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "Once synonymous with student grunge hang-outs, artsy cafés, and eclectic clothes stores, East Village and Lower East Side have plaid host to typical New York gentrification over the years with super expensive apartments and exclusive designer boutiques now scattering these neighborhoods. If you fancy some serious bargain hunting head to eclectic Orchard Street, while foodies will enjoy the area’s cool mix of trendy bistros, old-town delis, and diverse restaurants.",
 
            
            landmarks: [
                {name: "Eldridge Street Synagogue", type: "historic", lat: 40.7148, lng: -73.9937, primary: "false", id: "64617"},
                {name: "Lower East Side Tenement Museum", type: "museums", lat: 40.71839, lng: -73.99008, primary: "false", id: "115348"},
                {name: "Manhattan Bridge", type: "historic", lat: 40.71017, lng: -73.99242, primary: "true", id: "117723"},
                {name: "Merchant's House Museum", type: "museums", lat: 40.72758, lng: -73.9925, primary: "true", id: "61767"},
                {name: "Mott Street", type: "shopping", lat: 40.723161, lng: -73.994876, primary: "false", id: "105365"},
                {name: "Museum of Chinese in Americas", type: "museums", lat: 40.71622, lng: -73.99917, primary: "false", id: "92894"},
                {name: "New Museum", type: "museums", lat: 40.722372, lng: -73.993251, primary: "false", id: "67047"},
                {name: "Peter Cooper Park", type: "tree", lat: 40.72838, lng: -73.990974, primary: "false", id: "93990"},
                {name: "The Orpheum Theater", type: "theater", lat: 40.72869, lng: -73.98779, primary: "true", id: "111378"}
            ],

            center: {lat: 40.718564877237, lng: -73.987148172463}, 
            polygon: [
                {lng: -73.98995, lat: 40.733312},{lng: -73.990422, lat: 40.730904},{lng: -73.995483, lat: 40.724771},{lng: -73.997122, lat: 40.722302},{lng: -73.997607, lat: 40.721437},{lng: -73.99844, lat: 40.719938},{lng: -74.002374, lat: 40.715311},{lng: -74.003426, lat: 40.714215},{lng: -74.0051, lat: 40.712237},{lng: -73.998058, lat: 40.706664},{lng: -73.97575, lat: 40.710311},{lng: -73.971317, lat: 40.725696},{lng: -73.98995, lat: 40.733312}
            ],
            staticMapUrl: "40.733312,-73.98995|40.730904,-73.990422|40.724771,-73.995483|40.722302,-73.997122|40.721437,-73.997607|40.719938,-73.99844|40.715311,-74.002374|40.714215,-74.003426|40.712237,-74.0051|40.706664,-73.998058|40.710311,-73.97575|40.725696,-73.971317|40.733312,-73.98995"
        },


        {
            name: "Midtown West",
            nid: "1662024",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production78/d326/10f4ea60-ac68-11e4-955a-d89d672c79ac.jpg",
            tags: "Theatre, Art, Museum, Restaurants",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "Anyone visiting the Big Apple will want to explore Midtown West – this is where the razzle dazzle of Times Square is, after all. Take in a show on Broadway or, if you fancy giving your mind a workout, take a tour of the celebrated Museum of Modern Art (or MoMA). And when your tummy starts rumbling, check out the French brasseries, sushi bars and Russian eateries on Restaurant Row.",

            landmarks: [
                {name: "Intrepid Sea, Air and Space Museum", type: "museums", lat: 40.76453, lng: -73.99871, primary: "true", id: "123826"},
                {name: "Manhattan Cruise Terminal", type: "anchor", lat: 40.768078, lng: -73.996324, primary: "true", id: "128748"}
            ],

            center: {lat: 40.7632680302231, lng: -73.9955586265658}, 
            polygon: [
                {lng: -73.994335, lat: 40.773217},{lng: -74.007299, lat: 40.754619},{lng: -74.00387, lat: 40.753184},{lng: -74.00107, lat: 40.757183},{lng: -73.995257, lat: 40.754783},{lng: -73.994076, lat: 40.756466},{lng: -73.984759, lat: 40.769211},{lng: -73.994335, lat: 40.773217}
            ],
            staticMapUrl: "40.773217,-73.994335|40.754619,-74.007299|40.753184,-74.00387|40.757183,-74.00107|40.754783,-73.995257|40.756466,-73.994076|40.769211,-73.984759|40.773217,-73.994335"
        
        },

        {
            name: "Upper West Side",
            nid: "1497254",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production24/d1906/10fbef40-ac68-11e4-be0e-d89d672bfba8.jpg",
            tags: "Entertainment, Nightlife, Relaxing, Museums, River",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "Sandwiched between the winding Hudson River and lush Central Park, Manhattan's Upper West Side is home to New York's most exclusive high-rise apartments, as well as Columbia University. The American Museum of Natural History makes it a history-buff's dream, while the Lincoln Center showcases everything from opera to jazz. A stroll around Riverside Park in full bloom is a fine way to spend a sunny day.",
            landmarks: ", ,  ,  ",
            
            landmarks: [
                {name: "Avery Fisher Hall", type: "theater", lat: 40.77206, lng: -73.98276, primary: "false", id: "89035"},
                {name: "Beacon Theater", type: "theater", lat: 40.780397, lng: -73.981352, primary: "false", id: "127056"},
                {name: "Cathedral of St. John the Divine", type: "monument", lat: 40.80451, lng: -73.96149, primary: "false", id: "95389"},
                {name: "Children's Museum of Manhattan", type: "museums", lat: 40.785959, lng: -73.976939, primary: "true", id: "119092"},
                {name: "Columbia University", type: "school", lat: 40.80785, lng: -73.96035, primary: "false", id: "128865"},
                {name: "Damrosch Park", type: "tree", lat: 40.76453, lng: -73.986007, primary: "false", id: "56304"},
                {name: "Dante Park", type: "tree", lat: 40.771825, lng: -73.982552, primary: "false", id: "63127"},
                {name: "David H. Koch Theater", type: "theater", lat: 40.77181, lng: -73.98294, primary: "false", id: "110631"},
                {name: "Juilliard School", type: "school", lat: 40.773131, lng: -73.982358, primary: "false", id: "120101"},
                {name: "Lincoln Center for the Performing Arts", type: "theater", lat: 40.77233, lng: -73.98248, primary: "false", id: "128324"},
                {name: "Metropolitan Opera House", type: "theater", lat: 40.77227, lng: -73.982919999999993, primary: "true", id: "124338"},
                {name: "New York Public Library for the Performing Arts", type: "school", lat: 40.7723, lng: -73.982919999999993, primary: "true", id: "79579"},
                {name: "Tom's Diner (Seinfeld Diner)", type: "historic", lat: 40.80546, lng: -73.96565, primary: "false", id: "59194"}
                
            ],

            center: {lat: 40.7918357210547, lng: -73.9745897404072}, 
            polygon: [
                {lng: -73.994335, lat: 40.773217},{lng: -73.984363, lat: 40.769058},{lng: -73.982525999999993, lat: 40.771445},{lng: -73.954502, lat: 40.80828},{lng: -73.967616, lat: 40.813406},{lng: -73.994335, lat: 40.773217}
            ],
            staticMapUrl: "40.773217,-73.994335|40.769058,-73.984363|40.771445,-73.982525999999993|40.80828,-73.954502|40.813406,-73.967616|40.773217,-73.994335"
        
        },

        {
            name: "Union Square",
            nid: "1635517",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production95/d425/11c09ed0-ac68-11e4-99a1-d89d672bd508.jpg",
            tags: "Natural parks, Gardens, Relaxing, Shopping, Markets",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "Once a shouting spot of political unrest, Union Square’s leafy recreational plaza is now known for its colorful summertime Greenmarket. Away from the square, Gramercy Flatiron district abounds with restaurants, bars, and shops among iconic Manhattan skyscrapers, including the wedge-like Flatiron Building. If you fancy some peace, wander down to leafy Gramercy Park – park-side residents hold New York’s most sought-after key, allowing them access to the small, but perfectly-formed gardens.",
            
            landmarks: [
                {name: "Gramercy Park", type: "tree", lat: 40.73821, lng: -73.98568, primary: "true", id: "127645"},
                {name: "Madison Square Park", type: "tree", lat: 40.74316, lng: -73.98744, primary: "true", id: "124402"},
                {name: "Union Square", type: "tree", lat: 40.73574, lng: -73.99048, primary: "true", id: "63127"}
            ],

            center: {lat: 40.7355870084321, lng: -73.9812694057496}, 
            polygon: [
                {lng: -73.987314, lat: 40.744585},{lng: -73.99357, lat: 40.735911},{lng: -73.989766, lat: 40.73436},{lng: -73.98995, lat: 40.733325},{lng: -73.971242, lat: 40.725754},{lng: -73.972643, lat: 40.738472},{lng: -73.987314, lat: 40.744585}
            ],
            staticMapUrl: "40.744585,-73.987314|40.735911,-73.99357|40.73436,-73.989766|40.733325,-73.98995|40.725754,-73.971242|40.738472,-73.972643|40.744585,-73.987314"
        
        }
        
    ], 

prague: [

        {
            name: "Josefov (Jewish Quarter)",
            nid: "1699126",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production166/d1799/20152370-ac68-11e4-99a1-d89d672bd508.jpg",
            tags: "Historical, Architecture, Culture, Friendly people",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "Located in the center of Prague, sandwiched between the Old Town and the river Josefov is Josefov, the old Jewish Quarter, dating back to medieval times. It has 6 distinct synagogues in different styles, ranging from the simple, austere Old-New Synagogue to the flamboyant and decorative Spanish Synagogue. The Jewish Cemetery is well worth a visit – the centuries-old gravestones are packed so tightly together that they lean in all directions.",
            landmarks: "lCharles University, Old Jewish Cemetery, Rudolfinum,  St. Agnes Convent",
            
            landmarks: [
                {name: "Ceremonial Hall", type: "museums", lat: 50.09017, lng: 14.417142, primary: "true"},
                {name: "Charles University", type: "school", lat: 50.08871, lng: 14.41553, primary: "false"},
                {name: "Klausen Synagogue", type: "museums", lat: 50.090052, lng: 14.417292, primary: "false"},
                {name: "Maisel Synagogue", type: "museums", lat: 50.08863, lng: 14.41852, primary: "false"},
                {name: "Old Jewish Cemetery", type: "historic", lat: 50.09006, lng: 14.41717, primary: "false"},
                {name: "Old-New Synagogue", type: "monument", lat: 50.09005, lng: 14.4186, primary: "false"},
                {name: "Pinkas Synagogue", type: "museums", lat: 50.08905, lng: 14.41712, primary: "false"},
                {name: "Rudolfinum", type: "historic", lat: 50.08969, lng: 14.41477, primary: "false"},
                {name: "Spanish Synagogue", type: "museums", lat: 50.09031, lng: 14.42054, primary: "false"},
                {name: "St. Agnes Convent", type: "historic", lat: 50.09201, lng: 14.42402, primary: "false"}
            ],

            center: {lat: 50.0903417035908, lng: 14.4190186443565}, 
            polygon: [
                {lng: 14.416694, lat: 50.09257},{lng: 14.413591, lat: 50.090166},{lng: 14.412789, lat: 50.086166},{lng: 14.414698, lat: 50.086747},{lng: 14.415328, lat: 50.088434},{lng: 14.424825, lat: 50.088786},{lng: 14.423799, lat: 50.089988},{lng: 14.424989, lat: 50.090749},{lng: 14.424099, lat: 50.093236},{lng: 14.416694, lat: 50.09257}
            ],  
            staticMapUrl: "50.09257,14.416694|50.090166,14.413591|50.086166,14.412789|50.086747,14.414698|50.088434,14.415328|50.088786,14.424825|50.089988,14.423799|50.090749,14.424989|50.093236,14.424099|50.09257,14.416694"
        },
        {
            name: "Mala Strana (Lesser Town)",
            nid: "1646018",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production171/d676/200bfbb0-ac68-11e4-be0e-d89d672bfba8.jpg",
            tags: "Architecture, Gardens, Natural parks, Monuments, Relaxing",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "A treasure trove of Baroque architecture on the left bank of the Vltava, Mala Strana is a highlight of any Prague city break. Wallenstein Palace, with its arches, sculptures, and idyllic Italian garden, is a huge draw, although you'll enjoy simply walking the winding lanes of this quaint quarter just as much. Charles Bridge, with its array of statues, is a symbol of Prague and leads to the Old Town.",
            
            landmarks: [
                {name: "Charles Bridge", type: "monument", lat: 50.08643, lng: 14.41121, primary: "true"},
                {name: "Czech Museum of Music", type: "museums", lat: 50.08518, lng: 14.40428, primary: "false"},
                {name: "Franza Kafka Museum", type: "museums", lat: 50.088186, lng: 14.409955, primary: "false"},
                {name: "Historical Pharmacy Museum", type: "museums", lat: 50.08846, lng: 14.39849, primary: "false"},
                {name: "Jan Zizka Statue", type: "historic", lat: 50.08348, lng: 14.39492, primary: "false"},
                {name: "Kampa Park", type: "tree", lat: 50.08396, lng: 14.40825, primary: "false"},
                {name: "Lennon Wall", type: "monument", lat: 50.08615, lng: 14.40704, primary: "false"},
                {name: "Lesser Town Bridge Tower", type: "monument", lat: 50.08724, lng: 14.40694, primary: "false"},
                {name: "Lesser Town Square", type: "sign", lat: 50.08854, lng: 14.40377, primary: "true"},
                {name: "Lobkowicz Palace", type: "museums", lat: 50.09121, lng: 14.40312, primary: "false"},
                {name: "Loreta ", type: "monument", lat: 50.08916, lng: 14.39129, primary: "false"},
                {name: "Memorial to the Victims of Communism", type: "monument", lat: 50.081023, lng: 14.404458, primary: "false"},
                {name: "Old Royal Palace", type: "historic", lat: 50.09035, lng: 14.40092, primary: "false"},
                {name: "Prague Castle", type: "monument", lat: 50.090473, lng: 14.398901, primary: "true"},
                {name: "Schwarzenberg Palace", type: "historic", lat: 50.08932, lng: 14.39681, primary: "false"},
                {name: "St. Vitus Cathedral", type: "monument", lat: 50.09097, lng: 14.40204, primary: "false"},
                {name: "Sternberg Palace National Gallery", type: "museums", lat: 50.09061, lng: 14.39583, primary: "false"},
                {name: "Sternberk Palace", type: "historic", lat: 50.08975, lng: 14.39659, primary: "false"},
                {name: "Wallenstein Palace Gardens", type: "tree", lat: 50.09002, lng: 14.40807, primary: "false"},
                {name: "Wallenstein Riding School", type: "museums", lat: 50.091255, lng: 14.409804, primary: "false"}
            ],

            center: {lat: 50.086133748991, lng: 14.4011153739354}, 
            polygon: [
                {lng: 14.41266, lat: 50.089541},{lng: 14.410214, lat: 50.091965},{lng: 14.38959, lat: 50.091719},{lng: 14.384961, lat: 50.089404},{lng: 14.400672, lat: 50.078165},{lng: 14.411149, lat: 50.079633},{lng: 14.41266, lat: 50.089541}
            ], 
            staticMapUrl: "50.089541,14.41266|50.091965,14.410214|50.091719,14.38959|50.089404,14.384961|50.078165,14.400672|50.079633,14.411149|50.089541,14.41266"
        }, 

        {
            name: "Nove Mesto (New Town)",
            nid: "1646017",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production40/d894/20091580-ac68-11e4-955a-d89d672c79ac.jpg",
            tags: "Museums, Nightlife, Bars, Architecture, Entertainment",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "It may be 'New Town' but the Nove Mesto district was actually founded in the 14th Century. Its vibrant hub is Wenceslas Square, site of historic events, demonstrations, revolutionary fervor, and demonstrations, as well as home to the National Museum. This is also the center of Prague's nightlife, with jumping venues from jazz clubs to cabarets all around. Don't forget to check out the bending, surreal Dancing House, a modern architectural masterpiece.",
            landmarks: "Wenceslas Square,   Czech National Museum,   Prague Dancing House,   Czech Technical University",
            
            landmarks: [
                {name: "Charles Square", type: "sign", lat: 50.075802, lng: 14.419942, primary: "true"},
                {name: "Church of Saints Cyril and Methodius", type: "monument", lat: 50.07583, lng: 14.41759, primary: "false"},
                {name: "Czech National Museum", type: "museums", lat: 50.07948, lng: 14.43023, primary: "true"},
                {name: "Czech Technical University", type: "school", lat: 50.07609, lng: 14.41923, primary: "false"},
                {name: "Jan Palach Memorial", type: "monument", lat: 50.0795, lng: 14.43033, primary: "false"},
                {name: "Jindrisska Tower", type: "monument", lat: 50.085137, lng: 14.429869, primary: "false"},
                {name: "Langhans Gallery", type: "museums", lat: 50.0815, lng: 14.42507, primary: "false"},
                {name: "Laterna Magika", type: "theater", lat: 50.08135, lng: 14.41473, primary: "false"},
                {name: "Lucerna Arcade", type: "shopping", lat: 50.081169, lng: 14.425015, primary: "false"},
                {name: "Lucerna Palace", type: "shopping", lat: 50.08085, lng: 14.42646, primary: "false"},
                {name: "Mucha Museum", type: "museums", lat: 50.08429, lng: 14.42741, primary: "false"},
                {name: "Prague Dancing House", type: "monument", lat: 50.0756, lng: 14.41396, primary: "false"},
                {name: "Prague National Theatre", type: "theater", lat: 50.08105, lng: 14.41306, primary: "true"},
                {name: "Saint Wenceslaus Monument", type: "monument", lat: 50.079856, lng: 14.429907, primary: "false"},
                {name: "Slavic Island", type: "tree", lat: 50.07962, lng: 14.41327, primary: "false"},
                {name: "Wenceslas Square", type: "sign", lat: 50.08104, lng: 14.42771, primary: "true"}
            ],

            center: {lat: 50.078758339939, lng: 14.4262345489025}, 
            polygon: [
                {lng: 14.412949, lat: 50.081382},{lng: 14.414375, lat: 50.068111},{lng: 14.433231, lat: 50.068186},{lng: 14.434739, lat: 50.070109},{lng: 14.434911, lat: 50.069921},{lng: 14.437044, lat: 50.070457},{lng: 14.431259, lat: 50.07894},{lng: 14.437628, lat: 50.086583},{lng: 14.437714, lat: 50.09508},{lng: 14.429698, lat: 50.094428},{lng: 14.429388, lat: 50.086949},{lng: 14.424489, lat: 50.084107},{lng: 14.421511, lat: 50.083267},{lng: 14.419894, lat: 50.082468},{lng: 14.416436, lat: 50.081802},{lng: 14.412949, lat: 50.081382}
            ],
            staticMapUrl: "50.081382,14.412949|50.068111,14.414375|50.068186,14.433231|50.070109,14.434739|50.069921,14.434911|50.070457,14.437044|50.07894,14.431259|50.086583,14.437628|50.09508,14.437714|50.094428,14.429698|50.086949,14.429388|50.084107,14.424489|50.083267,14.421511|50.082468,14.419894|50.081802,14.416436|50.081382,14.412949"
        },

        
        {
            name: "Smichov",
            nid: "1646021",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production120/d1795/2014ae40-ac68-11e4-99a1-d89d672bd508.jpg",
            tags: "Natural parks, Relaxing, Entertainment, Walking",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "Close to the more famous Mala Strana district, Smichov has plenty of its own charms, including loads of lovely little parks dotted here – great for relaxing in after an amble along Smichov's streets. Music lovers may also be interested in checking out Bertramka, the historic estate which is now forever linked with the name of Mozart as the great composer stayed there to finish his masterpiece, Don Giovanni.",
    
            landmarks: [
                {name: "Bertramka", type: "museums", lat: 50.070799, lng: 14.395617, primary: "false"},
                {name: "Mrazovka Park", type: "tree", lat: 50.070544, lng: 14.397478, primary: "false"},
                {name: "Novy Smichov Shopping Centre", type: "shopping", lat: 50.074005, lng: 14.402073, primary: "true"},
                {name: "Sacre Coeur Park", type: "tree", lat: 50.074351, lng: 14.397752, primary: "false"},
                {name: "Staropramen Brewery", type: "historic", lat: 50.068426, lng: 14.406499, primary: "true"}
            ],

            center: {lat: 50.0705850883383, lng: 14.4035328610567}, 
            polygon: [
                {lng: 14.41293, lat: 50.06208},{lng: 14.411279, lat: 50.079654},{lng: 14.391635, lat: 50.076833},{lng: 14.397783, lat: 50.062128},{lng: 14.41293, lat: 50.06208}
            ],
            staticMapUrl: "50.06208,14.41293|50.079654,14.411279|50.076833,14.391635|50.062128,14.397783|50.06208,14.41293"
        },

        {
            name: "Vinohrady",
            nid: "1646023",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production80/d1821/20154a80-ac68-11e4-955a-d89d672c79ac.jpg",
            tags: "Monumnets, Theatre, Nightlife, Sightseeing, Gardens",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "Once covered in vineyards, Vinohrady is now one of Prague's most elegant residential neighborhoods, boasting Art Nouveau and Neo-Renaissance architecture. The vibe here is serene and understated, and you can chill out on the grass in Peace Square and admire landmarks like the Vinohrady Theater. That said, the area is also known for its nightlife, with clubs to suit all tastes.",
            
            landmarks: [
                {name: "Peace Square", type: "sign", lat: 50.07527, lng: 14.435247, primary: "false"},
                {name: "Prague State Opera", type: "theater", lat: 50.08037, lng: 14.43348, primary: "true"},
                {name: "Riegrovy Sady", type: "tree", lat: 50.079145, lng: 14.440938, primary: "false"}
            ],

            center: {lat: 50.0777965474997, lng: 14.4609897318995}, 
            polygon: [
                {lng: 14.437644, lat: 50.086108},{lng: 14.431406, lat: 50.079019},{lng: 14.437118, lat: 50.070454},{lng: 14.434905, lat: 50.0699},{lng: 14.434748, lat: 50.070054},{lng: 14.433335, lat: 50.068203},{lng: 14.43643, lat: 50.068217},{lng: 14.438672, lat: 50.068148},{lng: 14.447698, lat: 50.072428},{lng: 14.495564, lat: 50.075177},{lng: 14.489874, lat: 50.084954},{lng: 14.451475, lat: 50.080303},{lng: 14.437644, lat: 50.086108}
            ],
            staticMapUrl: "50.086108,14.437644|50.079019,14.431406|50.070454,14.437118|50.0699,14.434905|50.070054,14.434748|50.068203,14.433335|50.068217,14.43643|50.068148,14.438672|50.072428,14.447698|50.075177,14.495564|50.084954,14.489874|50.080303,14.451475|50.086108,14.437644"
        }
        
    ],

    rome: [

        {
            name: "Navona",
            nid: "1663690",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production118/d1358/2910ca60-ac68-11e4-99a1-d89d672bd508.jpg",
            tags: "Sightseeing, Monuments, Historical, Romantic",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "Rome’s most celebrated square is a constant hubbub of activity. Tourists are drawn magnetically to the Fountain of the Four Rivers, with its classical statues, while a parade of performers, hawkers, and locals play out daily scenes against the backdrop of the beautiful baroque Sant Agnese Church. You can’t leave Rome without visiting the nearby Pantheon, one of the best-preserved Roman buildings in the world, with a magnificent, light-filled dome.",
            landmarks: "Piazza Navona,   Pantheon,   Campo de Fiori",
            center: {lat: 41.8973868957701, lng: 12.4735871982869}, 
            polygon: [
                {lng: 12.463176, lat: 41.899761},{lng: 12.466068, lat: 41.895919},{lng: 12.472241, lat: 41.891439},{lng: 12.477438, lat: 41.891442},{lng: 12.478891, lat: 41.890636},{lng: 12.483201, lat: 41.895759},{lng: 12.482141, lat: 41.897145},{lng: 12.48111, lat: 41.89929},{lng: 12.47989, lat: 41.899198},{lng: 12.477697, lat: 41.902644},{lng: 12.474319, lat: 41.904034},{lng: 12.471387, lat: 41.902548},{lng: 12.465047, lat: 41.901687},{lng: 12.463407, lat: 41.900673},{lng: 12.463176, lat: 41.899761}
            ],  
            staticMapUrl: "41.899761,12.463176|41.895919,12.466068|41.891439,12.472241|41.891442,12.477438|41.890636,12.478891|41.895759,12.483201|41.897145,12.482141|41.89929,12.48111|41.899198,12.47989|41.902644,12.477697|41.904034,12.474319|41.902548,12.471387|41.901687,12.465047|41.900673,12.463407|41.899761,12.463176"
        },
        {
            name: "Vatican",
            nid: "1808834",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production160/d670/2904e380-ac68-11e4-be0e-d89d672bfba8.jpg",
            tags: "Historical, Sightseeing, Shopping, Fine dining",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "Less than 2 kilometers from Piazza Navona, the Vatican is the world’s smallest country. Enter its hallowed streets under the watch of the flamboyantly-dressed Swiss Guard. St. Peter’s Basilica and the frescoes of the Sistine Chapel are surreally familiar from countless pictures and films, but seeing them for real is thrilling. Prati, the Italian district just outside the Vatican, offers classy boulevards, upmarket restaurants, and some of Rome’s best shopping.",
            landmarks: "Sistine Chapel, St Peter's Basilica,  St Peter's Square",
            center: {lat: 41.90828610202, lng: 12.4542003220552}, 
            polygon: [
                {lng: 12.474311, lat: 41.904034},{lng: 12.474488, lat: 41.906776},{lng: 12.472327, lat: 41.909723},{lng: 12.471153, lat: 41.912937},{lng: 12.470633, lat: 41.914487},{lng: 12.470774, lat: 41.918742},{lng: 12.468698, lat: 41.921758},{lng: 12.462825, lat: 41.923349},{lng: 12.460289, lat: 41.925009},{lng: 12.45498, lat: 41.923032},{lng: 12.445717, lat: 41.916557},{lng: 12.43267, lat: 41.91141},{lng: 12.434444, lat: 41.904314},{lng: 12.435393, lat: 41.899976},{lng: 12.449451, lat: 41.893273},{lng: 12.458861, lat: 41.893696},{lng: 12.460055, lat: 41.896073},{lng: 12.464916, lat: 41.897408},{lng: 12.46313, lat: 41.899724},{lng: 12.463407, lat: 41.900666},{lng: 12.465036, lat: 41.901698},{lng: 12.471394, lat: 41.902541},{lng: 12.474311, lat: 41.904034}
            ], 
            staticMapUrl: "41.904034,12.474311|41.906776,12.474488|41.909723,12.472327|41.912937,12.471153|41.914487,12.470633|41.918742,12.470774|41.921758,12.468698|41.923349,12.462825|41.925009,12.460289|41.923032,12.45498|41.916557,12.445717|41.91141,12.43267|41.904314,12.434444|41.899976,12.435393|41.893273,12.449451|41.893696,12.458861|41.896073,12.460055|41.897408,12.464916|41.899724,12.46313|41.900666,12.463407|41.901698,12.465036|41.902541,12.471394|41.904034,12.474311"
        }, 

        {
            name: "Colosseum",
            nid: "709950",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production24/d1887/2904e380-ac68-11e4-99a1-d89d672bd508.jpg",
            tags: "Monuments, Historical, Cafes, Culture",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "Dating back to 80 AD, the Colosseum is an enduring symbol both of Imperial Rome and the modern Italian capital. This grand amphitheater, once the setting of brutal gladiatorial games, is an impressive monument to an incredible history. Not forgetting the nearby Roman Forum, where the ruins of the Temple of Saturn and other majestic monuments of the Ancient Era still inspire awe today.",
            landmarks: "Colosseum, Roman Forum",
            center: {lat: 41.890219854748, lng: 12.4919428800416}, 
            polygon: [
                {lng: 12.498806, lat: 41.895349},{lng: 12.498602, lat: 41.896647},{lng: 12.499194, lat: 41.897128},{lng: 12.496909, lat: 41.898122},{lng: 12.495762, lat: 41.899092},{lng: 12.493501, lat: 41.896858},{lng: 12.488892, lat: 41.89637},{lng: 12.484412, lat: 41.896555},{lng: 12.482857, lat: 41.896199},{lng: 12.483216, lat: 41.895752},{lng: 12.478931, lat: 41.890681},{lng: 12.479751, lat: 41.888659},{lng: 12.493729, lat: 41.881385},{lng: 12.504262, lat: 41.887293},{lng: 12.500048, lat: 41.894881},{lng: 12.498806, lat: 41.895349}
            ],
            staticMapUrl: "41.895349,12.498806|41.896647,12.498602|41.897128,12.499194|41.898122,12.496909|41.899092,12.495762|41.896858,12.493501|41.89637,12.488892|41.896555,12.484412|41.896199,12.482857|41.895752,12.483216|41.890681,12.478931|41.888659,12.479751|41.881385,12.493729|41.887293,12.504262|41.894881,12.500048|41.895349,12.498806"
        },

        
        {
            name: "Spanish Steps",
            nid: "1737636",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production79/d1783/29105530-ac68-11e4-955a-d89d672c79ac.jpg",
            tags: "Sightseeing, Culture, Relaxing",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "A stone fantasia of winged horses and mythical figures, the Trevi Fountain is to water features what the Colosseum is to theaters. When visiting this landmark, forever linked with classic film La Dolce Vita, be sure to toss in a coin to ensure you'll return to Rome. Almost as iconic are the Spanish Steps: climb this vast stairway to reach the twin-domed Renaissance splendor of the Trinita dei Monti church.",
            landmarks: "Trevi Fountain",
            center: {lat: 41.9071495473849, lng: 12.478321344854}, 
            polygon: [
                {lng: 12.48693, lat: 41.904781},{lng: 12.484378, lat: 41.90651},{lng: 12.484596, lat: 41.906735},{lng: 12.477663, lat: 41.910953},{lng: 12.475879, lat: 41.913811},{lng: 12.471234, lat: 41.912913},{lng: 12.471191, lat: 41.912913},{lng: 12.472349, lat: 41.909774},{lng: 12.474558, lat: 41.906824},{lng: 12.47436, lat: 41.904074},{lng: 12.477692, lat: 41.902695},{lng: 12.478528, lat: 41.901346},{lng: 12.484927, lat: 41.903251},{lng: 12.48693, lat: 41.904781}
            ],
            staticMapUrl: "41.904781,12.48693|41.90651,12.484378|41.906735,12.484596|41.910953,12.477663|41.913811,12.475879|41.912913,12.471234|41.912913,12.471191|41.909774,12.472349|41.906824,12.474558|41.904074,12.47436|41.902695,12.477692|41.901346,12.478528|41.903251,12.484927|41.904781,12.48693"
        },

        {
            name: "Via Veneto",
            nid: "1696478",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production49/d358/29097760-ac68-11e4-955a-d89d672c79ac.jpg",
            tags: "Nightlife, Bars, Entertainment",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "For your very own taste of La Dolce Vita, Via Veneto is the place to be. Immortalised by that classic film, the whole area oozes style and glamour – the street is lined with the intricate facades of grand hotels, uber-chic bars serving perfectly mixed cocktails, and elegant cafes. There are few better places to recline with an espresso and watch Rome's beautiful people go by.",
            landmarks: "Rome Historic Centre,    Piazza Fiume,   Monumental Cemetery of the Capuchin Brothers           ",
            center: {lat: 41.9088427733687, lng: 12.4937745297425}, 
            polygon: [
                {lng: 12.484373, lat: 41.90652},{lng: 12.490734, lat: 41.902196},{lng: 12.498965, lat: 41.907585},{lng: 12.498859, lat: 41.908053},{lng: 12.501173, lat: 41.909604},{lng: 12.502215, lat: 41.909713},{lng: 12.503909, lat: 41.911034},{lng: 12.497843, lat: 41.914808},{lng: 12.491135, lat: 41.912551},{lng: 12.484373, lat: 41.90652}
            ],
            staticMapUrl: "41.90652,12.484373|41.902196,12.490734|41.907585,12.498965|41.908053,12.498859|41.909604,12.501173|41.909713,12.502215|41.911034,12.503909|41.914808,12.497843|41.912551,12.491135|41.90652,12.484373"
        }
        
    ], 

    singapore: [

        {
            name: "Marina Bay",
            nid: "1645325",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production49/d122/336a2c90-ac68-11e4-955a-d89d672c79ac.jpg",
            tags: "Monuments, Gardens, Entertainment, Urban",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "Home to flashy Singapore development projects, Marina Bay is a gleaming world of high-rises – many offer sweeping roof-top city views – futuristic gardens, and tourist appeal. At night the area sparkles as twinkly skyline lights reflect on the calm marina shores, lasers span out from the Singapore Flyer, a giant observation wheel modeled on the London Eye, and glowing artificial trees shine out from the Gardens by the Bay.",
            landmarks: "Marina Bay Sands, Casino Gardens by the Bay,  Suntec Singapore,    Suntec City Singapore Flyer",
            center: {lat: 1.28034152745788, lng: 103.861203595264}, 
            polygon: [
                {lng: 103.85684, lat: 1.29589},{lng: 103.8542, lat: 1.29199},{lng: 103.85386, lat: 1.28694},{lng: 103.85331, lat: 1.2853},{lng: 103.85269, lat: 1.28353},{lng: 103.85203, lat: 1.28217},{lng: 103.851072, lat: 1.280659},{lng: 103.850217, lat: 1.281216},{lng: 103.847262, lat: 1.276693},{lng: 103.85234, lat: 1.27384},{lng: 103.85947, lat: 1.26418},{lng: 103.87651, lat: 1.27714},{lng: 103.86655, lat: 1.286923},{lng: 103.8653, lat: 1.29426},{lng: 103.86198, lat: 1.29542},{lng: 103.85906, lat: 1.2984},{lng: 103.85684, lat: 1.29589}
            ],  
            staticMapUrl: "1.29589,103.85684|1.29199,103.8542|1.28694,103.85386|1.2853,103.85331|1.28353,103.85269|1.28217,103.85203|1.280659,103.851072|1.281216,103.850217|1.276693,103.847262|1.27384,103.85234|1.26418,103.85947|1.27714,103.87651|1.286923,103.86655|1.29426,103.8653|1.29542,103.86198|1.2984,103.85906|1.29589,103.85684"
        },
        {
            name: "Clarke Quay",
            nid: "1771966",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production184/d51/34393c60-ac68-11e4-be0e-d89d672bfba8.jpg",
            tags: "Nightlife, Restaurants, Food",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "A vibrant downtown district of Singapore, Clarke Quay is an explosion of color. Old riverfront warehouses have been transformed into a strip of shops, restaurants and clubs, with each building painted a different, eye-popping shade. At night, the whole place is lit up with neon lights which reflect magically in the water. Be sure to dine at a floating boat restaurant and try the fiery chili crab – a Singapore specialty.",
            landmarks: "",
            center: {lat: 1.28997957429355, lng: 103.845243477856}, 
            polygon: [
                {lng: 103.846288, lat: 1.286789},{lng: 103.848844, lat: 1.289949},{lng: 103.84394, lat: 1.293214},{lng: 103.841797, lat: 1.289921},{lng: 103.846288, lat: 1.286789}
            ], 
            staticMapUrl: "1.286789,103.846288|1.289949,103.848844|1.293214,103.84394|1.289921,103.841797|1.286789,103.846288"
        }, 

        {
            name: "Bugis Village",
            nid: "1716539",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production136/d857/336f83c0-ac68-11e4-99a1-d89d672bd508.jpg",
            tags: "Shopping, Food, Markets, Friendly people",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "Immerse yourself in Singapore’s bustling and quirky shopping scene in Bugis Village, home to the island’s busiest and largest shopping street. With over 800 shops crammed in beneath swathes of colorful bunting, you can find everything, from the latest south Asian fashion, to cutting-edge technology gadgets. When you need to refuel, head to Tamei, Bugis Village’s fast food joint, where you can munch on seaweed-flavor tofu fries and chicken tempura.",
            landmarks: "Bugis Street Shopping District,  Bugis Junction Shopping Center, Batam Batu Besar (BTH-Hang Nadim),   Haji Lane",
            center: {lat: 1.30069668743654, lng: 103.855761606712}, 
            polygon: [
                {lng: 103.85445, lat: 1.30329},{lng: 103.85186, lat: 1.30029},{lng: 103.85603, lat: 1.29693},{lng: 103.85954, lat: 1.30117},{lng: 103.85637, lat: 1.30412},{lng: 103.85445, lat: 1.30329}
            ],
            staticMapUrl: "1.30329,103.85445|1.30029,103.85186|1.29693,103.85603|1.30117,103.85954|1.30412,103.85637|1.30329,103.85445"
        },

        
        {
            name: "Geylang",
            nid: "1645323",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production122/d1710/33796ed0-ac68-11e4-be0e-d89d672bfba8.jpg",
            tags: "Food, Budget, Urban, Shopping",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "Geylang is Singapore for the adventurous. The streets here are not the sparkling type you’ll find elsewhere in the city: here they’re dirty and rammed with people. A dizzying array of goods, from textiles to spices, spill from shops. This is the city’s red light district, but stick to the odd-numbered lorongs, or alleys, and you’ll discover Singapore’s best food, including Frogs’ Legs Porridge, for those with suitably hardened stomachs.",
            landmarks: "Singapore National Stadium",
            center: {lat: 1.31186428181015, lng: 103.888283248626}, 
            polygon: [
                {lng: 103.86917, lat: 1.31537},{lng: 103.86887, lat: 1.31275},{lng: 103.86994, lat: 1.31065},{lng: 103.86818, lat: 1.30503},{lng: 103.87114, lat: 1.30027},{lng: 103.87728, lat: 1.29902},{lng: 103.88015, lat: 1.30112},{lng: 103.888775, lat: 1.30082},{lng: 103.89079, lat: 1.30009},{lng: 103.89706, lat: 1.30203},{lng: 103.90019, lat: 1.30301},{lng: 103.90848, lat: 1.30829},{lng: 103.905, lat: 1.31777},{lng: 103.90577, lat: 1.32614},{lng: 103.88496, lat: 1.32219},{lng: 103.87243, lat: 1.3191},{lng: 103.87209, lat: 1.31734},{lng: 103.86917, lat: 1.31537}
            ],
            staticMapUrl: "1.31537,103.86917|1.31275,103.86887|1.31065,103.86994|1.30503,103.86818|1.30027,103.87114|1.29902,103.87728|1.30112,103.88015|1.30082,103.888775|1.30009,103.89079|1.30203,103.89706|1.30301,103.90019|1.30829,103.90848|1.31777,103.905|1.32614,103.90577|1.32219,103.88496|1.3191,103.87243|1.31734,103.87209|1.31537,103.86917"
        },

        {
            name: "Colonial District - Beach Road",
            nid: "1692382",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production70/d778/33796ed0-ac68-11e4-955a-d89d672c79ac.jpg",
            tags: "Historical, Sightseeing, Architecture, Dining, Family friendly",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "At the center of downtown Singapore, Beach Road offers the grand buildings of the colonial era. Start at the City Hall and Supreme Court building, reminiscent of London’s classical architecture. In the evening, retire to the magnificent Raffles Hotel. Resplendent in white and fringed with exuberant, peacock-like palms, it is a true throwback to colonial splendor. Be sure to order the signature cocktail, a Singapore Sling, in the wood-paneled bar.",
            landmarks: "Singapore City Hall, National Museum of Singapore,    Bugis Junction Shopping Center,  Raffles City,    Peninsula Plaza",
            center: {lat: 1.2963811876242, lng: 103.851281458227}, 
            polygon: [
                {lng: 103.8444, lat: 1.30361},{lng: 103.84644, lat: 1.30016},{lng: 103.84833, lat: 1.29954},{lng: 103.84869, lat: 1.29861},{lng: 103.84715, lat: 1.29673},{lng: 103.84695, lat: 1.29272},{lng: 103.84879, lat: 1.29113},{lng: 103.84792, lat: 1.28979},{lng: 103.84923, lat: 1.28912},{lng: 103.85049, lat: 1.28669},{lng: 103.85198, lat: 1.28639},{lng: 103.85362, lat: 1.28829},{lng: 103.8542, lat: 1.29199},{lng: 103.85684, lat: 1.29589},{lng: 103.859006, lat: 1.298437},{lng: 103.861046, lat: 1.30047},{lng: 103.860546, lat: 1.301086},{lng: 103.857227, lat: 1.298091},{lng: 103.855292, lat: 1.29997},{lng: 103.85127, lat: 1.30315},{lng: 103.84956, lat: 1.30306},{lng: 103.84528, lat: 1.30578},{lng: 103.8444, lat: 1.30361}
            ],
            staticMapUrl: "1.30361,103.8444|1.30016,103.84644|1.29954,103.84833|1.29861,103.84869|1.29673,103.84715|1.29272,103.84695|1.29113,103.84879|1.28979,103.84792|1.28912,103.84923|1.28669,103.85049|1.28639,103.85198|1.28829,103.85362|1.29199,103.8542|1.29589,103.85684|1.298437,103.859006|1.30047,103.861046|1.301086,103.860546|1.298091,103.857227|1.29997,103.855292|1.30315,103.85127|1.30306,103.84956|1.30578,103.84528|1.30361,103.8444"
        }
        
    ], 

    stockholm: [

        {
            name: "Gamla Stan",
            nid: "1649484",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production64/d1105/5da67fd0-05c0-11e4-b376-d89d672c79ac.jpg",
            tags: "Historical, Architecture, Food, Restaurants",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "With the Baroque splendor of the Royal Palace and medieval churches rubbing shoulders with Renaissance townhouses, every corner of Gamla Stan transports you to the past. Check out the famed facades of Riddarholmen Church and Stockholm Cathedral, wander the cobbled streets, and dine al fresco in Stortorget square. But for an authentic flavor of old Sweden, bathe in the Storkyrkobadet spa, where you'll sauna in a centuries-old wine cellar.",
            landmarks: "Central Stockholm,   Stortorget,  Stockholm Royal Palace (Stockholms Slott),   Gamla stan T-Bana,   Stockholm Stock Exchange Building (Borshuset),   Swedish Parliament (Sveriges riksdag)",
            center: {lat: 59.3249450443048, lng: 18.0694536356057}, 
            polygon: [
                {lng: 18.05731, lat: 59.32749},{lng: 18.060279, lat: 59.323214},{lng: 18.078623, lat: 59.320538},{lng: 18.077746, lat: 59.32838},{lng: 18.05731, lat: 59.32749}
            ],  
            staticMapUrl: "59.32749,18.05731|59.323214,18.060279|59.320538,18.078623|59.32838,18.077746|59.32749,18.05731"
        },
        {
            name: "Norrmalm",
            nid: "1649483",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production51/d59/5e0e4250-05c0-11e4-8314-d89d672bd508.jpg",
            tags: "Shops, Bars, Adventure, Culture, Entertainment",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "The heart of Stockholm, Norrmalm is where buzzing shops and equally lively bars meet to create a haven for adventurous visitors. Splash-out on designer wares at the famous Nordiska Kompaniet and PUB department stores and feast upon piquant gravlax in the restaurants. The Royal Swedish Opera's heart-wrenching performances will bring a tear to your eye, while a traditional sauna at Sturebadet should leave you floating on air.",
            landmarks: "Royal Swedish Opera (Kungliga Operan),   Hotorget Square King's Garden,  Stockholm Waterfront Congress Centre",
            center: {lat: 59.3358027265138, lng: 18.0584323906075}, 
            polygon: [
                {lng: 18.05694, lat: 59.327562},{lng: 18.08074, lat: 59.328362},{lng: 18.060041, lat: 59.345421},{lng: 18.031027, lat: 59.338324},{lng: 18.047605, lat: 59.335387},{lng: 18.05694, lat: 59.327562}
            ], 
            staticMapUrl: "59.327562,18.05694|59.328362,18.08074|59.345421,18.060041|59.338324,18.031027|59.335387,18.047605|59.327562,18.05694"
        }, 

        {
            name: "Ostermalm",
            nid: "1649482",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production111/d1171/5e728260-05c0-11e4-b376-d89d672c79ac.jpg",
            tags: "Shopping, Culture, Museums, Historical",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "A haven of whitewashed townhouses and Stockholm Harbour's vast swathes of blue, Ostermalm is the favourite hangout of Sweden's rich and famous. Indulge in high-end shopping along Biblioteksgatan, where stellar designer names light up the streets. For a spot of culture, immerse yourself in the Museum of National Antiquities and the Natural History Museum for an informative and fascinating insight into ancient and modern Swedish history.",
            landmarks: "Stureplan,   Karlaplan T-Bana,    Tekniska hogskolan T-Bana,  Humlegarden Park",
            center: {lat: 59.3382359544868, lng: 18.082259004012}, 
            polygon: [
                {lng: 18.060132, lat: 59.345457},{lng: 18.07768, lat: 59.33094},{lng: 18.097908, lat: 59.331039},{lng: 18.103746, lat: 59.338198},{lng: 18.067392, lat: 59.347289},{lng: 18.060132, lat: 59.345457}
            ],
            staticMapUrl: "59.345457,18.060132|59.33094,18.07768|59.331039,18.097908|59.338198,18.103746|59.347289,18.067392|59.345457,18.060132"
        },

        
        {
            name: "Sodermalm",
            nid: "1649481",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production55/d114/5ee08670-05c0-11e4-b02d-d89d672bfba8.jpg",
            tags: "Art, Museums, Bars, Live music, Nightlife, Friendly people",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "A thriving bohemian district with a vibrant arts scene, Sodermalm's the go-to quarter for Stockholm's trendiest. Venture down Hornsgatan and experience the sensory bombardment of its galleries, with contemporary paintings and sculptures in every window. Or quench your thirst for local music and local beer at any of the inviting live music venues along Slussen, before strolling down towards Medborgarplatsen square to revel through until the small hours.",
            landmarks: "Maria Square, Medborgarplatsen",
            center: {lat: 59.3136404351256, lng: 18.0674242824757}, 
            polygon: [
                {lng: 18.023793, lat: 59.315986},{lng: 18.061747, lat: 59.304477},{lng: 18.075155, lat: 59.30307},{lng: 18.098444, lat: 59.3074},{lng: 18.109558, lat: 59.316231},{lng: 18.06276, lat: 59.322768},{lng: 18.024157, lat: 59.319414},{lng: 18.023793, lat: 59.315986}
            ],
            staticMapUrl: "59.315986,18.023793|59.304477,18.061747|59.30307,18.075155|59.3074,18.098444|59.316231,18.109558|59.322768,18.06276|59.319414,18.024157|59.315986,18.023793"
        },

        {
            name: "Vasastan",
            nid: "1649480",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production61/d371/5f4cb5c0-05c0-11e4-b376-d89d672c79ac.jpg",
            tags: "Theatre, Trendy, Culture, Sightseeing",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "Striding through the bustling Odenplan square and past its thriving theater district, it's easy to see why Vasastaden is one of Stockholm's trendiest quarters. Skip down Rörstrandsgatan and sup a perfectly-poured beer or some of the famous local vodka in one of its many welcoming pubs and bars. Or explore the wonders of the universe at the Stockholm Observatory and leaf through literary masterworks at the striking red-bricked Public Library.",
            landmarks: "Karlberg Castle Park, Gustav Vasa Church, Bellevue Park",
            center: {lat: 59.34657242855, lng: 18.0433817981191}, 
            polygon: [
                {lng: 18.021398, lat: 59.339837},{lng: 18.030998, lat: 59.338395},{lng: 18.068299, lat: 59.34752},{lng: 18.046516, lat: 59.356133},{lng: 18.039744, lat: 59.353545},{lng: 18.0378, lat: 59.348443},{lng: 18.021765, lat: 59.343996},{lng: 18.021398, lat: 59.339837}
            ],
            staticMapUrl: "59.339837,18.021398|59.338395,18.030998|59.34752,18.068299|59.356133,18.046516|59.353545,18.039744|59.348443,18.0378|59.343996,18.021765|59.339837,18.021398"
        }
        
    ], 

    venice: [

        {
            name: "Cannaregio",
            nid: "1663691",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production14/d814/82f5d980-05bf-11e4-b376-d89d672c79ac.jpg",
            tags: "Sightseeing, Architecture, Culture, Scenery, Romantic",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "The best way to travel in Cannaregio is to navigate the beautiful still waters of the picturesque Royal Canal in a gondola, taking in the gorgeous sights of the Ca d'Oro Palace and the baroque Palazzo Labia. There's plenty to see on dry land too – the area encompasses the old Venetian Ghetto, still a hub of Jewish culture, and there's a plethora of churches to admire, such as Santa Maria dei Miracoli.",
            landmarks: "Venetian Ghetto Casino of Venice,    Ca' d'Oro,   Guglie Bridge,  Ca' D'Oro Waterbus,  Riva de Biasio Waterbus",
            center: {lat: 45.4442451822996, lng: 12.3300747872874}, 
            polygon: [
                {lng: 12.316327, lat: 45.44535},{lng: 12.322276, lat: 45.441143},{lng: 12.327557, lat: 45.442355},{lng: 12.331433, lat: 45.441699},{lng: 12.332748, lat: 45.441061},{lng: 12.336146, lat: 45.438865},{lng: 12.336077, lat: 45.438213},{lng: 12.33792, lat: 45.43797},{lng: 12.338526, lat: 45.43894},{lng: 12.340583, lat: 45.438469},{lng: 12.343201, lat: 45.442345},{lng: 12.33844, lat: 45.445818},{lng: 12.327383, lat: 45.449434},{lng: 12.3197, lat: 45.448338},{lng: 12.31646, lat: 45.445476},{lng: 12.316327, lat: 45.44535}
            ],  
            staticMapUrl: "45.44535,12.316327|45.441143,12.322276|45.442355,12.327557|45.441699,12.331433|45.441061,12.332748|45.438865,12.336146|45.438213,12.336077|45.43797,12.33792|45.43894,12.338526|45.438469,12.340583|45.442345,12.343201|45.445818,12.33844|45.449434,12.327383|45.448338,12.3197|45.445476,12.31646|45.44535,12.316327"
        },
        {
            name: "Castello",
            nid: "1663692",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production33/d647/83662780-05bf-11e4-b376-d89d672c79ac.jpg",
            tags: "Monuments, Shopping, Seafood, Restaurants, Natural park",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "The Venetian Arsenal, the shipyard complex where Galileo once walked, known for its iconic marble lion statues, dominates the quarter of Castello. Indulge in retail therapy down the bustling Via Garibaldi or Riva Degli Schiavoni, lined with high-end boutiques and buzzing eateries serving the freshest local seafood and finest Italian wines. You can even kick-back and relax in the Giardini park, one of the most stunning green spaces in Venice.",
            landmarks: "Venetian Arsenal,    Giardini della Biennale, Basilica di San Giovanni e Paolo,   Church of San Zaccaria,  San Pietro di Castello",
            center: {lat: 45.4343084042112, lng: 12.3554603166307}, 
            polygon: [
                {lng: 12.343199, lat: 45.442345},{lng: 12.340586, lat: 45.438462},{lng: 12.338535, lat: 45.438933},{lng: 12.337922, lat: 45.43797},{lng: 12.337693, lat: 45.438001},{lng: 12.337568, lat: 45.436754},{lng: 12.34026, lat: 45.435918},{lng: 12.341833, lat: 45.434548},{lng: 12.34173, lat: 45.433103},{lng: 12.347182, lat: 45.432967},{lng: 12.355916, lat: 45.428165},{lng: 12.360744, lat: 45.423668},{lng: 12.369632, lat: 45.424665},{lng: 12.36346, lat: 45.441108},{lng: 12.343199, lat: 45.442345}
            ], 
            staticMapUrl: "45.442345,12.343199|45.438462,12.340586|45.438933,12.338535|45.43797,12.337922|45.438001,12.337693|45.436754,12.337568|45.435918,12.34026|45.434548,12.341833|45.433103,12.34173|45.432967,12.347182|45.428165,12.355916|45.423668,12.360744|45.424665,12.369632|45.441108,12.36346|45.442345,12.343199"
        }, 

        {
            name: "San Marco",
            nid: "1663693",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production185/d146/83d7ae00-05bf-11e4-b02d-d89d672bfba8.jpg",
            tags: "Romantic, Food, Markets, Churches, Relaxing",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "Standing at the center of the buzzing Piazza San Marco, flanked by the breathtaking Byzantine domes of St Mark's Basilica, the imposing Clock Tower and the ancient Lion of Venice, a sculpture dating back thousands of years, you'll see why San Marco is Venice's visitor hub. Tour the museum within Doge's Palace – a masterpiece of the Venetian Gothic style - or enjoy pizza in one of the plush pavement cafes.",
            landmarks: "St. Mark's Square,   Rialto Bridge,   St. Mark's Basilica, Bridge of Sighs, Doge's Palace",
            center: {lat: 45.4340855872463, lng: 12.334644304416}, 
            polygon: [
                {lng: 12.327118, lat: 45.434774},{lng: 12.327618, lat: 45.432557},{lng: 12.329944, lat: 45.43129},{lng: 12.337358, lat: 45.431065},{lng: 12.341727, lat: 45.433117},{lng: 12.341825, lat: 45.434565},{lng: 12.340589, lat: 45.435624},{lng: 12.340274, lat: 45.435897},{lng: 12.33757, lat: 45.436754},{lng: 12.337703, lat: 45.438001},{lng: 12.33607, lat: 45.438209},{lng: 12.334067, lat: 45.437103},{lng: 12.328647, lat: 45.435241},{lng: 12.327118, lat: 45.434774}
            ],
            staticMapUrl: "45.434774,12.327118|45.432557,12.327618|45.43129,12.329944|45.431065,12.337358|45.433117,12.341727|45.434565,12.341825|45.435624,12.340589|45.435897,12.340274|45.436754,12.33757|45.438001,12.337703|45.438209,12.33607|45.437103,12.334067|45.435241,12.328647|45.434774,12.327118"
        },

        
        {
            name: "San Polo",
            nid: "1663694",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production133/d1831/843425e0-05bf-11e4-b02d-d89d672bfba8.jpg",
            tags: "tag1, tag2, tag3",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "This hustling, bustling central neighborhood is a haven for romantics and foodies alike. There are few things more peaceful than an alfresco dinner for two along the Grand Canal, by the gorgeous stone Rialto Bridge. Head down to Campo San Giacomo and delight in fresh fruits, vegetables, and local seafood, or explore San Polo's history at the ancient San Giacomo di Rialto church, with its huge 15th Century clock.",
            landmarks: "Campo San Polo,  Palazzo Barbarigo,   St. Mary of the Friars,  Palazzo Tiepolo",
            center: {lat: 45.4376622815706, lng: 12.3296202276995}, 
            polygon: [
                {lng: 12.322675, lat: 45.43616},{lng: 12.324327, lat: 45.4356},{lng: 12.32497, lat: 45.436239},{lng: 12.328153, lat: 45.435129},{lng: 12.334044, lat: 45.437089},{lng: 12.336079, lat: 45.438206},{lng: 12.336144, lat: 45.438872},{lng: 12.332791, lat: 45.441023},{lng: 12.331119, lat: 45.439008},{lng: 12.323511, lat: 45.438223},{lng: 12.322675, lat: 45.43616}
            ],
            staticMapUrl: "45.43616,12.322675|45.4356,12.324327|45.436239,12.32497|45.435129,12.328153|45.437089,12.334044|45.438206,12.336079|45.438872,12.336144|45.441023,12.332791|45.439008,12.331119|45.438223,12.323511|45.43616,12.322675"
        },

        {
            name: "Santa Croce",
            nid: "1663695",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production79/d55/849ad6f0-05bf-11e4-8314-d89d672bd508.jpg",
            tags: "Cafes, Churches, Bars, Museums, Family friendly",
            transport: [
                {name: "transport1", type: "type1"},
                {name: "transport2", type: "type2"},
                {name: "transport3", type: "type3"}
            ],
            description: "This chilled-out district is a tonic after the buzz of downtown Venice. The clothes exhibits at the Mocenigo Palace museum will delight fashionistas and history-buffs alike, while the Campo San Giacomo dell’Orio square, with its picturesque church and numerous Italian cafes would delight even the most discerning traveler. A stroll to the Piazzale Roma square, with its high-end designer stores and wine bars is also a must.",
            landmarks: "Piazzale Roma,   Papadopoli Gardens, San Stae",
            center: {lat: 45.4389015720612, lng: 12.3230108900258}, 
            polygon: [
                {lng: 12.320018, lat: 45.439032},{lng: 12.317327, lat: 45.440135},{lng: 12.31463, lat: 45.437673},{lng: 12.316824, lat: 45.433804},{lng: 12.320552, lat: 45.43686},{lng: 12.322663, lat: 45.436157},{lng: 12.323519, lat: 45.438219},{lng: 12.331138, lat: 45.439008},{lng: 12.332773, lat: 45.441037},{lng: 12.331433, lat: 45.441689},{lng: 12.32752, lat: 45.442345},{lng: 12.322953, lat: 45.441255},{lng: 12.320018, lat: 45.439032}
            ],
            staticMapUrl: "45.439032,12.320018|45.440135,12.317327|45.437673,12.31463|45.433804,12.316824|45.43686,12.320552|45.436157,12.322663|45.438219,12.323519|45.439008,12.331138|45.441037,12.332773|45.441689,12.331433|45.442345,12.32752|45.441255,12.322953|45.439032,12.320018"
        }
        
    ]

}


function getObjects(obj, key, val) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getObjects(obj[i], key, val));
        } else if (i == key && obj[key] == val) {
            objects.push(obj);
        }
    }
    return objects;
}