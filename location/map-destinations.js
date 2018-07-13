



var destinationList = {
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
        {str: "New York", val: "newyork", map:"New York,USA", zoom:11, staticMapZoom:11, panX:0, panY:-150},

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
    newyork: [
        {
            name: "Broadway - Times Square",
            nid: "1662301",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production179/d925/11c336e0-ac68-11e4-99a1-d89d672bd508.jpg",
            tags: "Monuments, Theatre, Culture, Family friendly",
            description: "Known as the 'Crossroads of the World', Times Square is a dazzling intersection famed for its lavish neon signs, grand theaters, and pulsating crowds. Whether you're on your way to a Broadway show, a buzzing bar or one of the family-friendly restaurant that line the streets, look out for iconic structures like the Paramount Building and One Times Square – site of the celebrated New Year's Eve ball drop.",
            center: {lat: 40.7590562537867, lng: -73.984508248797}, 
            polygon: [
                {lng: -73.985265, lat: 40.768532},{lng: -73.995544, lat: 40.754642},{lng: -73.983701, lat: 40.749557},{lng: -73.973503, lat: 40.763546},{lng: -73.985265, lat: 40.768532}
            ]
        },
        {
            name: "Central Park",
            nid: "1707357",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production173/d963/10ef9330-ac68-11e4-be0e-d89d672bfba8.jpg",
            tags: "Gardens, Zoo, Family friendly, Natural parks",
            description: "At the heart of Manhattan lies Central Park – a district in its own right and nearly as famous as the city it serves - this green, or autumnal orange, swathe of forest, lawns, gardens, fountains, statues, and lake is a recreational oasis in the heart of New York’s never-sleeping metropolis. Clamber aboard a horse-drawn carriage and trot past the likes of Central Park Zoo and 19th Century Belvedere Castle.",
            center: {lat: 40.78247996663, lng: -73.9657516646959}, 
            polygon: [
                {lng: -73.946688, lat: 40.797505},{lng: -73.958607, lat: 40.802403},{lng: -73.984923, lat: 40.768282},{lng: -73.971857, lat: 40.762859},{lng: -73.96334, lat: 40.77458},{lng: -73.955833, lat: 40.785088},{lng: -73.951462, lat: 40.791071},{lng: -73.946688, lat: 40.797505}
            ]  
        },

        {
            name: "Midtown East - Grand Central",
            nid: "1707375",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production128/d1669/10fb2bf0-ac68-11e4-99a1-d89d672bd508.jpg",
            tags: "Architecture, Monuments, Sightseeing, Shopping",
            description: "Think 'New York City' and the sights of Midtown East will spring to mind . There's the towering Art Deco splendor of the Chrysler Building, the gleaming edges of the Empire State Building, and the opulence of Grand Central – arguably the world's most famous train station. For top flight shopping, make your way to Saks Fifth Avenue, and you can even walk the corridors of power at the UN Headquarters.",
            center: {lat: 40.751425343466, lng: -73.9728319043845}, 
            polygon: [
                {lng: -73.958333, lat: 40.758495},{lng: -73.971154, lat: 40.763839},{lng: -73.971864, lat: 40.762859},{lng: -73.97351, lat: 40.763542},{lng: -73.982287, lat: 40.751507},{lng: -73.982464, lat: 40.751586},{lng: -73.98646, lat: 40.745931},{lng: -73.986371, lat: 40.745886},{lng: -73.987327, lat: 40.744575},{lng: -73.97267, lat: 40.738486},{lng: -73.958333, lat: 40.758495}
            ]
        },

        {
            name: "SoHo - Tribeca",
            nid: "1662303",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production132/d1390/119289f0-ac68-11e4-955a-d89d672c79ac.jpg",
            tags: "Shopping, Food, Trendy, Urban",
            description: "Once New York’s industrial heartland, these lively Manhattan neighborhoods have undergone radical changes over the years. Now home to the super rich and famous, Tribeca’s once abandoned warehouses became squatting artists’ studios and gritty clubs before the luxurious six-figure apartments took hold, while SoHo’s elegantly preserved industrial buildings now house exclusive designer boutiques. Head off Broadway to find tenement-lined cobble stone streets dotted with old-school style local bakeries.",
            center: {lat: 40.7219590673274, lng: -74.0069763854816}, 
            polygon: [
                {lng: -74.014717, lat: 40.729268},{lng: -74.016793, lat: 40.718487},{lng: -74.006746, lat: 40.713538},{lng: -74.005086, lat: 40.712268},{lng: -74.00346, lat: 40.714225},{lng: -74.002094, lat: 40.71568},{lng: -73.998515, lat: 40.719959},{lng: -73.997648, lat: 40.72154},{lng: -73.995531, lat: 40.724778},{lng: -74.001364, lat: 40.728278},{lng: -74.014717, lat: 40.729268}
            ] 
        },

        {
            name: "Upper East Side",
            nid: "1421960",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production26/d338/594e65c0-05bf-11e4-b376-d89d672c79ac.jpg",
            tags: "Shopping, Luxury, Museums, Fine dining, Art",
            description: "Upper East Side has long been synonymous with wealth – think luxury Park Avenue apartments, select boutiques where the designer items are so exclusive they don’t have price tags, and high-heel clad ladies-who-lunch tottering with their miniature poodles. Recently hubs of downtown style have stretched into the neighborhood so you can try out funky restaurants as well as upscale bistros. Don’t miss Museum Mile – home to the famous Guggenheim.",
            center: {lat: 40.778305692793, lng: -73.9510503325489}, 
            polygon: [
                {lng: -73.945294, lat: 40.799216},{lng: -73.955874, lat: 40.785119},{lng: -73.963333, lat: 40.774621},{lng: -73.971072, lat: 40.763853},{lng: -73.95834, lat: 40.758502},{lng: -73.942965, lat: 40.772203},{lng: -73.940841, lat: 40.779023},{lng: -73.932447, lat: 40.793947},{lng: -73.945294, lat: 40.799216}
            ]
        },

        
        {
            name: "East Village - Lower East Side",
            nid: "1705326",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production165/d1304/11b6dad0-ac68-11e4-be0e-d89d672bfba8.jpg",
            tags: "Shopping, Food, Cafes, Bars",
            description: "Once synonymous with student grunge hang-outs, artsy cafés, and eclectic clothes stores, East Village and Lower East Side have plaid host to typical New York gentrification over the years with super expensive apartments and exclusive designer boutiques now scattering these neighborhoods. If you fancy some serious bargain hunting head to eclectic Orchard Street, while foodies will enjoy the area’s cool mix of trendy bistros, old-town delis, and diverse restaurants.",
            center: {lat: 40.718564877237, lng: -73.987148172463}, 
            polygon: [
                {lng: -73.98995, lat: 40.733312},{lng: -73.990422, lat: 40.730904},{lng: -73.995483, lat: 40.724771},{lng: -73.997122, lat: 40.722302},{lng: -73.997607, lat: 40.721437},{lng: -73.99844, lat: 40.719938},{lng: -74.002374, lat: 40.715311},{lng: -74.003426, lat: 40.714215},{lng: -74.0051, lat: 40.712237},{lng: -73.998058, lat: 40.706664},{lng: -73.97575, lat: 40.710311},{lng: -73.971317, lat: 40.725696},{lng: -73.98995, lat: 40.733312}
            ]
        },

        {
            name: "Midtown West",
            nid: "1662024",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production78/d326/10f4ea60-ac68-11e4-955a-d89d672c79ac.jpg",
            tags: "Theatre, Art, Museum, Restaurants",
            description: "Anyone visiting the Big Apple will want to explore Midtown West – this is where the razzle dazzle of Times Square is, after all. Take in a show on Broadway or, if you fancy giving your mind a workout, take a tour of the celebrated Museum of Modern Art (or MoMA). And when your tummy starts rumbling, check out the French brasseries, sushi bars and Russian eateries on Restaurant Row.",
            center: {lat: 40.7632680302231, lng: -73.9955586265658}, 
            polygon: [
                {lng: -73.994335, lat: 40.773217},{lng: -74.007299, lat: 40.754619},{lng: -74.00387, lat: 40.753184},{lng: -74.00107, lat: 40.757183},{lng: -73.995257, lat: 40.754783},{lng: -73.994076, lat: 40.756466},{lng: -73.984759, lat: 40.769211},{lng: -73.994335, lat: 40.773217}
            ]
        },

        {
            name: "Upper West Side",
            nid: "1497254",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production24/d1906/10fbef40-ac68-11e4-be0e-d89d672bfba8.jpg",
            tags: "Entertainment, Nightlife, Relaxing, Museums, River",
            
            description: "Sandwiched between the winding Hudson River and lush Central Park, Manhattan's Upper West Side is home to New York's most exclusive high-rise apartments, as well as Columbia University. The American Museum of Natural History makes it a history-buff's dream, while the Lincoln Center showcases everything from opera to jazz. A stroll around Riverside Park in full bloom is a fine way to spend a sunny day.",
            
            center: {lat: 40.7918357210547, lng: -73.9745897404072}, 
            polygon: [
                {lng: -73.994335, lat: 40.773217},{lng: -73.984363, lat: 40.769058},{lng: -73.982525999999993, lat: 40.771445},{lng: -73.954502, lat: 40.80828},{lng: -73.967616, lat: 40.813406},{lng: -73.994335, lat: 40.773217}
            ]
        },

        {
            name: "Union Square",
            nid: "1635517",
            hasContent : true,
            image: "https://a1.cdn-hotels.com/cos/production95/d425/11c09ed0-ac68-11e4-99a1-d89d672bd508.jpg",
            tags: "Natural parks, Gardens, Relaxing, Shopping, Markets",
            description: "Once a shouting spot of political unrest, Union Square’s leafy recreational plaza is now known for its colorful summertime Greenmarket. Away from the square, Gramercy Flatiron district abounds with restaurants, bars, and shops among iconic Manhattan skyscrapers, including the wedge-like Flatiron Building. If you fancy some peace, wander down to leafy Gramercy Park – park-side residents hold New York’s most sought-after key, allowing them access to the small, but perfectly-formed gardens.",
            center: {lat: 40.7355870084321, lng: -73.9812694057496}, 
            polygon: [
                {lng: -73.987314, lat: 40.744585},{lng: -73.99357, lat: 40.735911},{lng: -73.989766, lat: 40.73436},{lng: -73.98995, lat: 40.733325},{lng: -73.971242, lat: 40.725754},{lng: -73.972643, lat: 40.738472},{lng: -73.987314, lat: 40.744585}
            ]
        }, 

        {
            name: "Wall Street - Financial District",
            nid: "522",
            hasContent: false
        },
        
        {
            name: "Brooklyn",
            nid: "1740471",
            hasContent: false
        },
        {
            name: "Downtown Jersey City",
            nid: "1661558",
            hasContent: false
        },
        {
            name: "Greenwich Village",
            nid: "1098",
            hasContent: false
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