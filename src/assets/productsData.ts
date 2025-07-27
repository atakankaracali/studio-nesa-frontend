interface Product {
    id: string;
    images: string[];
    name: {
        en: string;
        ru: string;
        lv: string;
    };
    description: {
        en: string;
        ru: string;
        lv: string;
    };
}

const productsData: Product[] = [
    {
        id: "product1",
        images: ["/products-optimized/audi.webp"],
        name: {
            en: "Audi Crochet Pillow",
            ru: "Вязаная подушка Audi",
            lv: "Audi tamborēts spilvens"
        },
        description: {
            en: "Handmade pillow featuring the Audi logo, crocheted with black and red yarn.",
            ru: "Ручная работа: подушка с логотипом Audi, выполненная в технике вязания крючком.",
            lv: "Roku darbs: Audi logo tamborēts spilvens, melns ar sarkanu."
        }
    },
    {
        id: "product2",
        images: ["/products-optimized/baby-jacket-hood.webp"],
        name: {
            en: "Striped Baby Jacket with Hood",
            ru: "Полосатая детская куртка с капюшоном",
            lv: "Svītraina bērnu jaka ar kapuci"
        },
        description: {
            en: "Warm and colorful handmade jacket for babies with a cozy hood.",
            ru: "Теплая и красочная детская куртка ручной работы с капюшоном.",
            lv: "Silta un krāsaina bērnu jaka ar kapuci – roku darbs."
        }
    },
    {
        id: "product3",
        images: ["/products-optimized/baby-jacket-without-hood.webp"],
        name: {
            en: "Striped Baby Jacket with Deer Button",
            ru: "Полосатая детская куртка с пуговицей-олененком",
            lv: "Svītraina bērnu jaka ar briedēna pogu"
        },
        description: {
            en: "Cute handmade jacket with a tiny deer button. Soft and warm.",
            ru: "Милая детская куртка с маленькой пуговицей-олененком. Теплая и мягкая.",
            lv: "Mīļa bērnu jaka ar briedēna pogu. Silta un mīksta."
        }
    },
    {
        id: "product4",
        images: ["/products-optimized/barbie-flavor.webp"],
        name: {
            en: "Crochet Rose Flower",
            ru: "Вязаная роза",
            lv: "Tamborēts rožu zieds"
        },
        description: {
            en: "Barbie pink rose made with layered crochet technique. A cute decoration.",
            ru: "Розовая роза в стиле Барби, связанная крючком. Милый декоративный элемент.",
            lv: "Barbijrozā rozīte, tamborēta slāņos. Dekoratīvs aksesuārs."
        }
    },
    {
        id: "product5",
        images: ["/products-optimized/barbiee.webp"],
        name: {
            en: "Pink Feather Earrings",
            ru: "Серьги с розовыми перьями",
            lv: "Rozā spalvu auskari"
        },
        description: {
            en: "Soft feather earrings in Barbie pink, perfect for a playful style.",
            ru: "Мягкие серьги с розовыми перьями – для игривого образа.",
            lv: "Maigi rozā spalvu auskari – rotaļīgam tēlam."
        }
    },
    {
        id: "product6",
        images: ["/products-optimized/berries.webp"],
        name: {
            en: "Golden Earrings with Beads",
            ru: "Золотые серьги с бусинами",
            lv: "Zelta auskari ar pērlītēm"
        },
        description: {
            en: "Elegant dangling earrings decorated with red and white beads.",
            ru: "Элегантные серьги с подвесками из красных и белых бусин.",
            lv: "Eleganti auskari ar sarkanām un baltām pērlītēm."
        }
    },
    {
        id: "product7",
        images: ["/products-optimized/big-heart.webp"],
        name: {
            en: "Heart-Shaped Earrings",
            ru: "Серьги в форме сердца",
            lv: "Sirds formas auskari"
        },
        description: {
            en: "Romantic heart earrings with detailed metal patterns and hanging pearls.",
            ru: "Романтичные серьги-сердца с узором и подвесками в виде жемчужин.",
            lv: "Romantiski sirds auskari ar metāla rakstu un pērlītēm."
        }
    },
    {
        id: "product8",
        images: ["/products-optimized/black-lady.webp"],
        name: {
            en: "Black Tassel Earrings",
            ru: "Серьги с черными кисточками",
            lv: "Melni bārkstaini auskari"
        },
        description: {
            en: "Bold black earrings with golden details and transparent gem.",
            ru: "Смелые черные серьги с золотыми деталями и прозрачным камешком.",
            lv: "Izteiksmīgi melni auskari ar zelta detaļām un caurspīdīgu akmeni."
        }
    },
    {
        id: "product9",
        images: ["/products-optimized/blue-baby-1.webp", "/products-optimized/blue-baby-2.webp"],
        name: {
            en: "Blue Striped Baby Booties",
            ru: "Синие полосатые пинетки",
            lv: "Zilās svītrainās zīdaiņu čības"
        },
        description: {
            en: "Tiny cozy handmade baby shoes with sparkling blue stripes.",
            ru: "Маленькие уютные пинетки ручной работы с блестящими синими полосками.",
            lv: "Mazas, ērtas zīdaiņu čības ar mirdzošām zilām svītrām – roku darbs."
        }
    },
    {
        id: "product10",
        images: ["/products-optimized/blue-leaf.webp"],
        name: {
            en: "Blue Crystal Leaf Earrings",
            ru: "Серьги с синими кристаллами и листьями",
            lv: "Zilas kristāla lapu auskari"
        },
        description: {
            en: "Elegant earrings with blue crystals and silver leaf charms.",
            ru: "Элегантные серьги с синими кристаллами и подвесками в виде листьев.",
            lv: "Eleganti auskari ar ziliem kristāliem un lapu piekariņiem."
        }
    },
    {
        id: "product11",
        images: ["/products-optimized/blue-long.webp"],
        name: {
            en: "Pearl Feather Earrings",
            ru: "Серьги с перьями и жемчугом",
            lv: "Spalvu un pērļu auskari"
        },
        description: {
            en: "Long earrings with purple feathers and pearl tops.",
            ru: "Длинные серьги с фиолетовыми перьями и жемчужными верхушками.",
            lv: "Garie auskari ar violetām spalvām un pērļu galviņām."
        }
    },
    {
        id: "product12",
        images: ["/products-optimized/blue-pillow.webp"],
        name: {
            en: "Blue Crochet Pillow",
            ru: "Синяя вязаная подушка",
            lv: "Zils tamborēts spilvens"
        },
        description: {
            en: "Soft handmade crochet pillow in icy blue tones.",
            ru: "Мягкая вязаная подушка ручной работы в голубых тонах.",
            lv: "Maigs tamborēts spilvens ledaini zilās krāsās."
        }
    },
    {
        id: "product13",
        images: ["/products-optimized/blue-ship.webp"],
        name: {
            en: "Anchor Earrings",
            ru: "Серьги с якорями",
            lv: "Auskari ar enkurīšiem"
        },
        description: {
            en: "Nautical-themed earrings with blue beads and anchor charms.",
            ru: "Морские серьги с синими бусинами и якорями.",
            lv: "Jūras tematikas auskari ar zilām pērlēm un enkuriem."
        }
    },
    {
        id: "product14",
        images: ["/products-optimized/blue-silver-w.webp"],
        name: {
            en: "Teardrop Blue Crystal Earrings",
            ru: "Серьги с каплевидными синими кристаллами",
            lv: "Asaras formas auskari ar ziliem kristāliem"
        },
        description: {
            en: "Stylish silver earrings with dangling blue crystals and white pearls.",
            ru: "Модные серебряные серьги с синими кристаллами и белыми жемчужинами.",
            lv: "Stilīgi sudraba auskari ar ziliem kristāliem un baltām pērlēm."
        }
    },
    {
        id: "product15",
        images: ["/products-optimized/blue-socks.webp"],
        name: {
            en: "Blue Baby Socks",
            ru: "Синие детские носки",
            lv: "Zilas mazuļu zeķītes"
        },
        description: {
            en: "Handmade baby socks in sparkly blue and cream.",
            ru: "Детские носки ручной работы блестящих синих и кремовых тонов.",
            lv: "Roku darbs mazuļu zeķītes mirdzoši zilā un krēmkrāsā."
        }
    },
    {
        id: "product16",
        images: ["/products-optimized/blue-some-s.webp"],
        name: {
            en: "Dark Blue Pearl Earrings",
            ru: "Серьги с темно-синими жемчужинами",
            lv: "Tumši zili pērļu auskari"
        },
        description: {
            en: "Dark blue pearls and crystal earrings with golden hooks.",
            ru: "Серьги с темно-синими жемчужинами и кристаллами на золотых крючках.",
            lv: "Tumši zili pērļu auskari ar zelta āķīšiem."
        }
    },
    {
        id: "product17",
        images: ["/products-optimized/blue-star.webp"],
        name: {
            en: "Star-Shaped Pillow",
            ru: "Подушка в форме звезды",
            lv: "Zvaigznes formas spilvens"
        },
        description: {
            en: "Blue and cream star-shaped handmade crochet pillow.",
            ru: "Ручная подушка в форме звезды, сине-кремовая.",
            lv: "Tamborēts spilvens zvaigznes formā zilā un krēmkrāsā."
        }
    },
    {
        id: "product18",
        images: ["/products-optimized/botton.webp"],
        name: {
            en: "Los Angeles Coin Earrings",
            ru: "Серьги-монеты 'Los Angeles'",
            lv: "Losandželosas monētu auskari"
        },
        description: {
            en: "Unique earrings made with coin-style pendants and crystals.",
            ru: "Уникальные серьги с монетами и кристаллами.",
            lv: "Unikāli auskari ar monētām un kristāliem."
        }
    },
    {
        id: "product19",
        images: ["/products-optimized/bronze.webp"],
        name: {
            en: "Bronze Dangle Earrings",
            ru: "Бронзовые серьги с подвесками",
            lv: "Bronzas auskari ar piekariņiem"
        },
        description: {
            en: "Detailed bronze earrings with crystal dangles.",
            ru: "Детализированные бронзовые серьги с кристаллами.",
            lv: "Bronzas auskari ar detaļām un kristāliem."
        }
    },
    {
        id: "product20",
        images: ["/products-optimized/cherry-yogurt.webp"],
        name: {
            en: "Cherry Yogurt Earrings",
            ru: "Серьги Вишнёвый йогурт",
            lv: "Ķiršu jogurta auskari"
        },
        description: {
            en: "Bold round earrings with cherry swirl pattern. Glossy finish.",
            ru: "Яркие круглые серьги с узором из вишневого йогурта. Глянцевое покрытие.",
            lv: "Koši auskari ar ķiršu rakstu un spīdīgu pārklājumu."
        }
    },
    {
        id: "product21",
        images: ["/products-optimized/complex.webp"],
        name: {
            en: "Compass Chain Earrings",
            ru: "Серьги с компасом и цепями",
            lv: "Kompasu ķēdīšu auskari"
        },
        description: {
            en: "Vintage-style earrings featuring a compass, beads, and chains.",
            ru: "Винтажные серьги с компасом, бусинами и цепочками.",
            lv: "Vintage auskari ar kompasu, pērlēm un ķēdītēm."
        }
    },
    {
        id: "product22",
        images: ["/products-optimized/diamond-blue.webp"],
        name: {
            en: "Blue Diamond Earrings",
            ru: "Синие бриллиантовые серьги",
            lv: "Zilie dimanta auskari"
        },
        description: {
            en: "Crystal-clear drop earrings with layered diamond shapes.",
            ru: "Каплевидные серьги с прозрачными синими бриллиантами.",
            lv: "Lāsveida auskari ar slāņotiem dimantiem zilā tonī."
        }
    },
    {
        id: "product23",
        images: ["/products-optimized/dream-catcher.webp"],
        name: {
            en: "Green Dreamcatcher",
            ru: "Зелёный ловец снов",
            lv: "Zaļš sapņu ķērājs"
        },
        description: {
            en: "Large handmade green dreamcatcher with feathers and beads.",
            ru: "Большой зелёный ловец снов ручной работы с перьями и бусинами.",
            lv: "Liels roku darbs sapņu ķērājs ar zaļām spalvām un pērlēm."
        }
    },
    {
        id: "product24",
        images: ["/products-optimized/fancy-gold.webp"],
        name: {
            en: "Fancy Gold Earrings",
            ru: "Шикарные золотые серьги",
            lv: "Grezni zelta auskari"
        },
        description: {
            en: "Baroque-style golden earrings with turquoise and pearl beads.",
            ru: "Золотые серьги в барочном стиле с бирюзовыми и жемчужными бусинами.",
            lv: "Baroka stila zelta auskari ar tirkīza un pērļu pērlītēm."
        }
    },
    {
        id: "product25",
        images: ["/products-optimized/gipsy-black.webp"],
        name: {
            en: "Black Gypsy Earrings",
            ru: "Чёрные гламурные серьги",
            lv: "Melni čigānu auskari"
        },
        description: {
            en: "Dark crystal and silver circle earrings with a bold look.",
            ru: "Тёмные серьги с кристаллами и серебром в виде круга.",
            lv: "Tumši auskari ar kristāliem un sudraba apli – drosmīgs stils."
        }
    },
    {
        id: "product26",
        images: ["/products-optimized/gipsy-heart.webp"],
        name: {
            en: "Golden Heart Earrings",
            ru: "Золотые серьги-сердца",
            lv: "Zelta sirds auskari"
        },
        description: {
            en: "Elegant heart-shaped earrings with black crystals.",
            ru: "Элегантные серьги в форме сердца с чёрными кристаллами.",
            lv: "Eleganti sirds formas auskari ar melniem kristāliem."
        }
    },
    {
        id: "product27",
        images: ["/products-optimized/gipsy.webp"],
        name: {
            en: "Red Crystal Hoop Earrings",
            ru: "Серьги-кольца с красными кристаллами",
            lv: "Sarkanie kristālu stīpu auskari"
        },
        description: {
            en: "Bronze hoop earrings with red gems and light blue beads.",
            ru: "Бронзовые серьги-кольца с красными камнями и голубыми бусинами.",
            lv: "Bronzas auskari ar sarkaniem un gaiši ziliem kristāliem."
        }
    },
    {
        id: "product28",
        images: ["/products-optimized/gold-pink.webp"],
        name: {
            en: "Pink Blossom Earrings",
            ru: "Серьги Розовый цветок",
            lv: "Rozā zieda auskari"
        },
        description: {
            en: "Delicate floral earrings with gold-tone design and pink crystals.",
            ru: "Нежные серьги с золотистым цветочным дизайном и розовыми кристаллами.",
            lv: "Smalki ziedu auskari ar rozā kristāliem un zelta detaļām."
        }
    },
    {
        id: "product29",
        images: ["/products-optimized/good-black.webp"],
        name: {
            en: "Black Leaf Earrings",
            ru: "Серьги с чёрным листом",
            lv: "Melno lapu auskari"
        },
        description: {
            en: "Stylish leaf-shaped earrings with black gem details.",
            ru: "Модные серьги в виде листа с чёрными вставками.",
            lv: "Stilīgi lapu formas auskari ar melnām pērlītēm."
        }
    },
    {
        id: "product30",
        images: ["/products-optimized/green-circle.webp"],
        name: {
            en: "Green Crystal Circle Earrings",
            ru: "Серьги Круглые Зеленые Кристаллы",
            lv: "Zaļie kristālu apļa auskari"
        },
        description: {
            en: "Shiny green round earrings with bright sparkle.",
            ru: "Блестящие круглые серьги с зелёными кристаллами.",
            lv: "Spīdīgi zaļi auskari apaļā formā ar dzirksti."
        }
    },
    {
        id: "product31",
        images: ["/products-optimized/green-glass-circle.webp"],
        name: {
            en: "Glass Green Circle Earrings",
            ru: "Серьги Круглые из Зелёного Стекла",
            lv: "Zaļā stikla apļa auskari"
        },
        description: {
            en: "Elegant glass earrings in circular form, soft green tint.",
            ru: "Элегантные серьги из стекла с зелёным оттенком.",
            lv: "Eleganti stikla auskari ar maigu zaļu nokrāsu."
        }
    },
    {
        id: "product32",
        images: ["/products-optimized/green-long.webp"],
        name: {
            en: "Long Green Earrings",
            ru: "Длинные зелёные серьги",
            lv: "Garie zaļie auskari"
        },
        description: {
            en: "Bright green long-style earrings, perfect for bold outfits.",
            ru: "Яркие зелёные серьги в удлинённом стиле – смелый образ.",
            lv: "Koši, gari zaļi auskari drosmīgam izskatam."
        }
    },
    {
        id: "product33",
        images: ["/products-optimized/green-pillows.webp"],
        name: {
            en: "Green Crochet Pillow",
            ru: "Зеленая вязаная крючком подушка",
            lv: "Zaļš tamborēts spilvens"
        },
        description: {
            en: "Handmade green pillow with soft texture.",
            ru: "Зелёная подушка ручной работы с мягкой текстурой.",
            lv: "Ar rokām darināts zaļš spilvens ar maigu tekstūru."
        }
    },
    {
        id: "product34",
        images: ["/products-optimized/green-ship.webp"],
        name: {
            en: "Green Ship Earrings",
            ru: "Серьги с зелёными бусинами и штурвалом",
            lv: "Zaļas auskari ar stūres piekariņu"
        },
        description: {
            en: "Green bead earrings featuring a nautical ship wheel charm.",
            ru: "Зелёные серьги с подвеской в виде штурвала.",
            lv: "Zaļas auskari ar jūras motīvu – stūres piekariņš."
        }
    },
    {
        id: "product35",
        images: ["/products-optimized/green-soft.webp"],
        name: {
            en: "Fluffy Green Feather Earrings",
            ru: "Пушистые зелёные серьги с перьями",
            lv: "Zaļi spalvu auskari"
        },
        description: {
            en: "Handmade green feather earrings with a soft and vibrant touch.",
            ru: "Зелёные серьги с перьями – ручная работа, мягкие и яркие.",
            lv: "Roku darbs – spalvu auskari zaļā tonī, viegli un pamanāmi."
        }
    },
    {
        id: "product36",
        images: ["/products-optimized/green-sparkle.webp", "/products-optimized/green-sparkle2.webp"],
        name: {
            en: "Green Sparkle Earrings",
            ru: "Зелёные блестящие серьги",
            lv: "Zaļi dzirkstoši auskari"
        },
        description: {
            en: "Glittering green earrings with dazzling details.",
            ru: "Зелёные серьги с блестящими деталями.",
            lv: "Dzirkstoši auskari ar mirdzošiem elementiem."
        }
    },
    {
        id: "product37",
        images: ["/products-optimized/green-yellow.webp"],
        name: {
            en: "Green & Yellow Earrings",
            ru: "Зелёно-жёлтые серьги",
            lv: "Zaļi un dzelteni auskari"
        },
        description: {
            en: "Playful earrings with green and yellow color combo.",
            ru: "Озорные серьги в зелёно-жёлтой цветовой гамме.",
            lv: "Spēlīgi auskari ar zaļi-dzeltenu kombināciju."
        }
    },
    {
        id: "product38",
        images: ["/products-optimized/green_gipsy.webp"],
        name: {
            en: "Green Gipsy Style Earrings",
            ru: "Зелёные цыганские серьги",
            lv: "Zaļi čigānu stila auskari"
        },
        description: {
            en: "Unique green earrings with traditional gipsy aesthetic.",
            ru: "Уникальные зелёные серьги в традиционном стиле.",
            lv: "Zaļi auskari ar tradicionālu čigānu izskatu."
        }
    },
    {
        id: "product40",
        images: ["/products-optimized/hippie.webp", "/products-optimized/hippie2.webp"],
        name: {
            en: "Hippie Style Earrings",
            ru: "Серьги в стиле хиппи",
            lv: "Hipiju stila auskari"
        },
        description: {
            en: "Colorful handmade earrings with cheerful style.",
            ru: "Разноцветные серьги ручной работы в стиле хиппи.",
            lv: "Koši auskari ar priecīgu hipiju stilu."
        }
    },
    {
        id: "product41",
        images: ["/products-optimized/honey-melons.webp"],
        name: {
            en: "Honey Melon Earrings",
            ru: "Серьги Медовые Дыни",
            lv: "Medus melones auskari"
        },
        description: {
            en: "Cute melon-inspired earrings with yellow beads.",
            ru: "Милые серьги в виде дынь с жёлтыми бусинами.",
            lv: "Mīļi auskari ar dzeltenām bumbiņām kā melones."
        }
    },
    {
        id: "product43",
        images: ["/products-optimized/latvian-pillow.webp", "/products-optimized/long-purple.webp"],
        name: {
            en: "Latvian Handmade Pillow",
            ru: "Латвийская подушка ручной работы",
            lv: "Latviešu tamborēts spilvens"
        },
        description: {
            en: "Blue-toned crochet pillow inspired by Latvian patterns.",
            ru: "Подушка с латвийским узором, связанная крючком.",
            lv: "Zilā tonī tamborēts spilvens ar latviešu rakstiem."
        }
    },
    {
        id: "product44",
        images: ["/products-optimized/lotus.webp"],
        name: {
            en: "Lotus Earrings",
            ru: "Серьги Лотос",
            lv: "Lotosa auskari"
        },
        description: {
            en: "Golden earrings with a lotus flower shape.",
            ru: "Золотистые серьги в форме цветка лотоса.",
            lv: "Zelta auskari lotosa formas dizainā."
        }
    },
    {
        id: "product45",
        images: ["/products-optimized/money-pink.webp"],
        name: {
            en: "Money Pink Earrings",
            ru: "Серьги Денежно-Розовые",
            lv: "Naudas rozā auskari"
        },
        description: {
            en: "Bright pink earrings with a charming and rich tone.",
            ru: "Яркие розовые серьги с богатым оттенком.",
            lv: "Koši rozā auskari ar elegantu toni."
        }
    },
    {
        id: "product46",
        images: ["/products-optimized/zombiee.webp"],
        name: {
            en: "Zombie Feather Earrings",
            ru: "Серьги с перьями 'Зомби'",
            lv: "Zombiju spalvu auskari"
        },
        description: {
            en: "Wild and vivid earrings with green and purple feathers, a true zombie vibe.",
            ru: "Яркие и дерзкие серьги с зелеными и фиолетовыми перьями, стиль зомби.",
            lv: "Spilgtas un trakas auskari ar zaļām un violetām spalvām, īsts zombiju stils."
        }
    },
    {
        id: "product47",
        images: ["/products-optimized/nesa-tree.webp"],
        name: {
            en: "Tree of Life Earrings",
            ru: "Серьги 'Дерево жизни'",
            lv: "Dzīvības koka auskari"
        },
        description: {
            en: "Green handmade earrings with symbolic tree charm and elegant beads.",
            ru: "Зелёные серьги ручной работы с символом дерева и элегантными бусинами.",
            lv: "Zaļi auskari ar dzīvības koka piekariņu un pērļu detaļām."
        }
    },
    {
        id: "product48",
        images: ["/products-optimized/orange.webp", "/products-optimized/orange2.webp"],
        name: {
            en: "Orange Feather Earrings",
            ru: "Серьги с оранжевыми перьями",
            lv: "Oranži spalvu auskari"
        },
        description: {
            en: "Handmade bright orange feather earrings, cozy and stylish for any look.",
            ru: "Яркие оранжевые серьги с перьями ручной работы, уютные и стильные.",
            lv: "Koši oranži spalvu auskari, roku darbs, silti un stilīgi."
        }
    },
    {
        id: "product49",
        images: ["/products-optimized/pillows.webp"],
        name: {
            en: "Colorful Crochet Pillows",
            ru: "Яркие вязаные подушки",
            lv: "Koši tamborēti spilveni"
        },
        description: {
            en: "Large crochet pillows with multiple colors, soft texture.",
            ru: "Большие подушки ручной работы с мягкой текстурой и цветами.",
            lv: "Lieli tamborēti spilveni ar krāsainu un mīkstu dizainu."
        }
    },
    {
        id: "product50",
        images: ["/products-optimized/pink-baby-1.webp", "/products-optimized/pink-baby-2.webp", "/products-optimized/pink-baby-3.webp"],
        name: {
            en: "Pink Baby Booties",
            ru: "Розовые детские пинетки",
            lv: "Rozā bērnu zābaciņi"
        },
        description: {
            en: "Cozy pink handmade baby booties with a sparkly finish.",
            ru: "Уютные розовые детские пинетки ручной работы с блестящей отделкой.",
            lv: "Mājīgi rozā roku darināti mazuļa zābaciņi ar mirdzošu apdari."
        }
    },
    {
        id: "product51",
        images: ["/products-optimized/pink-heart.webp"],
        name: {
            en: "Heart Shaped Earrings",
            ru: "Серьги в форме сердца",
            lv: "Sirds formas auskari"
        },
        description: {
            en: "Romantic pink heart earrings with a golden hook.",
            ru: "Романтичные серьги-сердца с золотым крючком.",
            lv: "Romantiski rozā sirds auskari ar zelta āķīti."
        }
    },
    {
        id: "product52",
        images: ["/products-optimized/pink-long.webp", "/products-optimized/pink-long2.webp"],
        name: {
            en: "Long Pink Earrings",
            ru: "Длинные розовые серьги",
            lv: "Garas rozā auskari"
        },
        description: {
            en: "Elegant long pink earrings with a shiny finish.",
            ru: "Элегантные длинные розовые серьги с блестящим покрытием.",
            lv: "Eleganti garie rozā auskari ar spīdīgu apdari."
        }
    },
    {
        id: "product53",
        images: ["/products-optimized/pink-triangle.webp"],
        name: {
            en: "Triangle Pink Earrings",
            ru: "Треугольные розовые серьги",
            lv: "Trīsstūrveida rozā auskari"
        },
        description: {
            en: "Unique triangle earrings in soft pink color.",
            ru: "Уникальные треугольные серьги нежно-розового цвета.",
            lv: "Unikāli trīsstūrveida rozā auskari."
        }
    },
    {
        id: "product54",
        images: ["/products-optimized/pink-yellow-barbie.webp"],
        name: {
            en: "Pink-Yellow Barbie Earrings",
            ru: "Серьги Барби розово-жёлтые",
            lv: "Rozā-dzelteni 'Barbie' auskari"
        },
        description: {
            en: "Playful Barbie-themed earrings in pink and yellow.",
            ru: "Игривые серьги в стиле Барби в розово-жёлтых тонах.",
            lv: "Rotaļīgi rozā un dzelteni 'Barbie' auskari."
        }
    },
    {
        id: "product56",
        images: ["/products-optimized/planets.webp"],
        name: {
            en: "Planet Charm Earrings",
            ru: "Серьги с подвесками-планетами",
            lv: "Auskari ar planētu piekariņiem"
        },
        description: {
            en: "Cosmic earrings with bead planets and silver hoops.",
            ru: "Космические серьги с бусинами-планетами и серебристыми кольцами.",
            lv: "Kosmiski auskari ar lodīšu planētām un sudraba aplīšiem."
        }
    },
    {
        id: "product57",
        images: ["/products-optimized/purple-glass.webp"],
        name: {
            en: "Purple Glass Earrings",
            ru: "Серьги с фиолетовым стеклом",
            lv: "Violetas stikla auskari"
        },
        description: {
            en: "Elegant glass bead earrings in deep purple tone.",
            ru: "Элегантные серьги с бусинами из стекла фиолетового цвета.",
            lv: "Eleganti stikla lodīšu auskari violetā tonī."
        }
    },
    {
        id: "product58",
        images: ["/products-optimized/purple-orange.webp"],
        name: {
            en: "Purple-Orange Hoop Earrings",
            ru: "Фиолетово-оранжевые серьги-кольца",
            lv: "Violeti-oranži gredzenveida auskari"
        },
        description: {
            en: "Vibrant hoop earrings with bright purple and orange gems.",
            ru: "Яркие серьги-кольца с фиолетовыми и оранжевыми камнями.",
            lv: "Koši gredzenveida auskari ar violetiem un oranžiem akmeņiem."
        }
    },
    {
        id: "product59",
        images: ["/products-optimized/rainbow-star.webp"],
        name: {
            en: "Rainbow Star Pillow",
            ru: "Подушка в форме радужной звезды",
            lv: "Varavīksnes zvaigznes spilvens"
        },
        description: {
            en: "Handmade pillow shaped like a star in rainbow colors.",
            ru: "Ручная работа: подушка в форме звезды с радужными цветами.",
            lv: "Roku darbs: spilvens zvaigznes formā ar varavīksnes krāsām."
        }
    },
    {
        id: "product60",
        images: ["/products-optimized/zombie-barbie.webp"],
        name: {
            en: "Pink & Green Feather Earrings",
            ru: "Серьги с розовыми и зелёными перьями",
            lv: "Rozā un zaļi spalvu auskari"
        },
        description: {
            en: "Bold handmade earrings with vibrant pink and green feathers and crystal pink beads.",
            ru: "Смелые серьги ручной работы с яркими розовыми и зелёными перьями и розовыми бусинами.",
            lv: "Izteiksmīgi roku darināti auskari ar košām rozā un zaļām spalvām un rozā pērlēm."
        }
    },
    {
        id: "product61",
        images: ["/products-optimized/purple-feather.webp"],
        name: {
            en: "Purple Feather Earrings",
            ru: "Фиолетовые серьги с перьями",
            lv: "Violeti spalvu auskari"
        },
        description: {
            en: "Elegant purple feather earrings with clear glass beads. Lightweight and striking.",
            ru: "Элегантные фиолетовые серьги с прозрачными бусинами. Лёгкие и эффектные.",
            lv: "Eleganti violeti spalvu auskari ar caurspīdīgām pērlēm – viegli un pamanāmi."
        }
    }
];

export type { Product };
export default productsData;
