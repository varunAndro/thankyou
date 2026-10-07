export const brand = {
  name: "Thankyou",
  tagline: "Considered bathware for everyday rituals.",
  summary:
    "Thankyou designs faucets, showers, sanitaryware and kitchen fittings that feel calm in the hand and quiet in the room.",
  instagram: "https://www.instagram.com/thankyou_bath_india/",
  instagramHandle: "@thankyou_bath_india",
}

export const categories = [
  {
    slug: "faucets",
    name: "Bathroom Faucets",
    text: "Basin mixers, pillar cocks and wall-mounted taps.",
    image: "/images/marble.jpg",
  },
  {
    slug: "showers",
    name: "Showers",
    text: "Rain showers, hand showers and full columns.",
    image: "/images/b1.jpg",
  },
  {
    slug: "sanitaryware",
    name: "Sanitaryware",
    text: "Wall-hung closets and sculpted wash basins.",
    image: "/images/b3.jpg",
  },
  {
    slug: "accessories",
    name: "Bath Accessories",
    text: "Towel bars, dispensers and the smaller daily pieces.",
    image: "/images/b4.jpg",
  },
  {
    slug: "kitchen",
    name: "Kitchen Faucets",
    text: "Sink mixers with a steady pull and an easy clean.",
    image: "/images/kitchen.jpg",
  },
  {
    slug: "thermostatic",
    name: "Thermostatic",
    text: "Mixers and diverters that hold a chosen temperature.",
    image: "/images/sink.jpg",
  },
]

export const spaces = [
  {
    slug: "bathroom",
    name: "Bathroom",
    text: "A quieter room for washing, pausing and beginning the day.",
    image: "/images/b1.jpg",
  },
  {
    slug: "kitchen",
    name: "Kitchen",
    text: "Fittings that stay graceful beside heat, water and daily work.",
    image: "/images/kitchen.jpg",
  },
]

export const finishes = [
  { name: "Chrome", color: "#d5dbe3" },
  { name: "Brushed Gold", color: "#b7a15a" },
  { name: "Matte Black", color: "#2a2a2a" },
  { name: "Antique Brass", color: "#8d6840" },
]

export const products = [
  {
    slug: "aureum-basin-mixer",
    name: "Aureum Basin Mixer",
    category: "faucets",
    space: "bathroom",
    price: 8450,
    finish: "Brushed Gold",
    finishes: ["Brushed Gold", "Chrome", "Matte Black"],
    image: "/images/marble.jpg",
    summary: "A single-lever deck mixer with a low, quiet spout.",
    description:
      "Aureum is the basin mixer we reach for when a bathroom should feel composed. The spout sits low over the basin, the lever moves with a short, even travel, and the brushed gold finish softens light instead of flashing it back.",
    specs: [
      ["Material", "Lead-free brass body"],
      ["Installation", "Deck mounted, single hole"],
      ["Cartridge", "Ceramic disc"],
      ["Flow", "Aerator with a soft, aerated stream"],
      ["Warranty", "10 years on the body"],
    ],
  },
  {
    slug: "still-pillar-cock",
    name: "Still Pillar Cock",
    category: "faucets",
    space: "bathroom",
    price: 3250,
    finish: "Chrome",
    finishes: ["Chrome", "Matte Black"],
    image: "/images/sink.jpg",
    summary: "A slim pillar cock for basins that prefer a lighter line.",
    description:
      "Still is a straightforward pillar cock with a precise quarter-turn. It suits compact basins and guest baths where the fitting should be present without taking over the counter.",
    specs: [
      ["Material", "Brass body, chrome plated"],
      ["Installation", "Deck mounted"],
      ["Handle", "Quarter-turn ceramic"],
      ["Warranty", "7 years on the body"],
    ],
  },
  {
    slug: "lumen-wall-mixer",
    name: "Lumen Wall Mixer",
    category: "faucets",
    space: "bathroom",
    price: 9720,
    finish: "Matte Black",
    spaceNote: "Pairs with a wall spout",
    finishes: ["Matte Black", "Chrome", "Brushed Gold"],
    image: "/images/b4.jpg",
    summary: "A wall-mounted mixer that keeps the counter clear.",
    description:
      "Lumen moves the mixer off the deck and onto the wall. The matte black body reads as a single dark line against stone or plaster, and the spout reach is planned for basins set close to the wall.",
    specs: [
      ["Material", "Brass body"],
      ["Installation", "Concealed wall mounted"],
      ["Cartridge", "Ceramic disc"],
      ["Warranty", "10 years on the body"],
    ],
  },
  {
    slug: "haven-rain-shower",
    name: "Haven Rain Shower",
    category: "showers",
    space: "bathroom",
    price: 6890,
    finish: "Chrome",
    finishes: ["Chrome", "Brushed Gold", "Matte Black"],
    image: "/images/b1.jpg",
    summary: "A 250 mm overhead shower with an even, rain-like fall.",
    description:
      "Haven spreads water across a wide face so the shower feels full without a harsh centre jet. The face is easy to wipe, and the arm is sized for a standard Indian bathroom ceiling height.",
    specs: [
      ["Face", "250 mm"],
      ["Material", "Brass arm, ABS face with rubber nozzles"],
      ["Installation", "Wall or ceiling arm"],
      ["Warranty", "5 years on the arm"],
    ],
  },
  {
    slug: "drift-hand-shower",
    name: "Drift Hand Shower",
    category: "showers",
    space: "bathroom",
    price: 4120,
    finish: "Brushed Gold",
    finishes: ["Brushed Gold", "Chrome"],
    image: "/images/sink.jpg",
    summary: "A light hand shower with three considered spray modes.",
    description:
      "Drift is meant to be held often: rinsing the basin edge, washing hair, cleaning the enclosure. Three modes stay distinct, and the hose resists the twist that usually knots cheaper sets.",
    specs: [
      ["Modes", "Rain, massage, mixed"],
      ["Hose", "1.5 m stainless steel"],
      ["Finish", "Matched to the overhead set"],
      ["Warranty", "3 years"],
    ],
  },
  {
    slug: "alto-shower-column",
    name: "Alto Shower Column",
    category: "showers",
    space: "bathroom",
    price: 18450,
    finish: "Matte Black",
    finishes: ["Matte Black", "Chrome", "Antique Brass"],
    image: "/images/b1.jpg",
    summary: "Overhead, hand shower and a single diverter on one column.",
    description:
      "Alto gathers the shower into one vertical composition. A diverter switches between the rain face and the hand shower, so the wall needs fewer plates and the daily choice stays obvious.",
    specs: [
      ["Includes", "Overhead, hand shower, hose, diverter"],
      ["Installation", "Exposed column"],
      ["Recommended height", "2100 mm finished floor"],
      ["Warranty", "7 years on the column body"],
    ],
  },
  {
    slug: "forma-wall-hung",
    name: "Forma Wall Hung WC",
    category: "sanitaryware",
    space: "bathroom",
    price: 14900,
    finish: "Gloss White",
    finishes: ["Gloss White"],
    image: "/images/b3.jpg",
    summary: "A rimless wall-hung closet with a quiet close seat.",
    description:
      "Forma lifts the closet off the floor so the bathroom reads larger and the floor is simpler to clean. The rimless bowl is shaped for a complete flush, and the seat closes without a slam.",
    specs: [
      ["Type", "Wall hung, rimless"],
      ["Seat", "Soft-close"],
      ["Trap", "Concealed carrier compatible"],
      ["Warranty", "10 years on ceramic"],
    ],
  },
  {
    slug: "arc-table-basin",
    name: "Arc Table Basin",
    category: "sanitaryware",
    space: "bathroom",
    price: 7650,
    finish: "Gloss White",
    finishes: ["Gloss White", "Matte Sand"],
    image: "/images/marble.jpg",
    summary: "A table-top basin with a soft oval and a thin rim.",
    description:
      "Arc sits on the counter rather than inside it. The oval is wide enough for a comfortable wash and shallow enough that a low mixer, such as Aureum, meets the water cleanly.",
    specs: [
      ["Type", "Table top"],
      ["Material", "Vitreous ceramic"],
      ["Overflow", "Hidden rear overflow"],
      ["Warranty", "10 years on ceramic"],
    ],
  },
  {
    slug: "linea-towel-bar",
    name: "Linea Towel Bar",
    category: "accessories",
    space: "bathroom",
    price: 2890,
    finish: "Brushed Gold",
    finishes: ["Brushed Gold", "Chrome", "Matte Black"],
    image: "/images/b4.jpg",
    summary: "A 600 mm bar with a round profile and concealed fixings.",
    description:
      "Linea is the accessory that makes a finish family feel complete. The bar is long enough for a bath towel, and the brackets hide the screws so the wall stays calm.",
    specs: [
      ["Length", "600 mm"],
      ["Material", "Stainless steel"],
      ["Fixing", "Concealed"],
      ["Warranty", "5 years"],
    ],
  },
  {
    slug: "halo-soap-dispenser",
    name: "Halo Soap Dispenser",
    category: "accessories",
    space: "bathroom",
    price: 2460,
    finish: "Matte Black",
    finishes: ["Matte Black", "Chrome", "Brushed Gold"],
    image: "/images/b4.jpg",
    summary: "A countertop dispenser with a measured, quiet pump.",
    description:
      "Halo keeps soap beside the mixer without a plastic bottle in view. The pump is sized for a short press, and the bottle unscrews from below the counter for refilling.",
    specs: [
      ["Mount", "Countertop"],
      ["Capacity", "350 ml"],
      ["Material", "Brass head, refillable bottle"],
      ["Warranty", "3 years on the pump"],
    ],
  },
  {
    slug: "grove-sink-mixer",
    name: "Grove Sink Mixer",
    category: "kitchen",
    space: "kitchen",
    price: 9150,
    finish: "Chrome",
    finishes: ["Chrome", "Antique Brass", "Matte Black"],
    image: "/images/kitchen.jpg",
    summary: "A high-arc kitchen mixer with a swivel that clears the sink.",
    description:
      "Grove lifts the spout high enough for a deep pot and swings aside for a wide sink. The lever is placed so wet hands can find it without looking down.",
    specs: [
      ["Material", "Brass body"],
      ["Spout", "High arc, 360° swivel"],
      ["Installation", "Deck mounted"],
      ["Warranty", "10 years on the body"],
    ],
  },
  {
    slug: "vale-pullout-mixer",
    name: "Vale Pull-out Mixer",
    category: "kitchen",
    space: "kitchen",
    price: 12840,
    finish: "Antique Brass",
    finishes: ["Antique Brass", "Chrome", "Matte Black"],
    image: "/images/kitchen2.jpg",
    summary: "A pull-out spray for rinsing boards, bottles and corners.",
    description:
      "Vale adds a pull-out head to the kitchen mixer so water can travel to the work, not the other way around. The head docks with a firm seat and offers a stream or a rinse spray.",
    specs: [
      ["Spray", "Stream and rinse"],
      ["Hose", "Pull-out, weighted return"],
      ["Installation", "Deck mounted"],
      ["Warranty", "7 years on the body"],
    ],
  },
  {
    slug: "temper-thermostatic",
    name: "Temper Mixer",
    category: "thermostatic",
    space: "bathroom",
    price: 16400,
    finish: "Chrome",
    finishes: ["Chrome", "Matte Black"],
    image: "/images/sink.jpg",
    summary: "A thermostatic mixer that holds the temperature you set.",
    description:
      "Temper keeps shower water steady when another tap opens elsewhere in the home. The temperature stop is set for a safe daily heat, and the handle is readable with wet fingers.",
    specs: [
      ["Control", "Thermostatic"],
      ["Safety", "Temperature limit stop"],
      ["Installation", "Exposed"],
      ["Warranty", "7 years on the body"],
    ],
  },
  {
    slug: "nara-diverter",
    name: "Nara Diverter",
    category: "thermostatic",
    space: "bathroom",
    price: 5380,
    finish: "Brushed Gold",
    finishes: ["Brushed Gold", "Chrome", "Matte Black"],
    image: "/images/b1.jpg",
    summary: "A two-way diverter for overhead and hand shower.",
    description:
      "Nara sends water to the outlet you choose and closes with a clear stop. It is the small plate that makes a two-outlet shower feel deliberate rather than improvised.",
    specs: [
      ["Ways", "Two outlets"],
      ["Material", "Brass"],
      ["Installation", "Concealed, with visible plate"],
      ["Warranty", "7 years on the body"],
    ],
  },
]

export const articles = [
  {
    slug: "choosing-a-basin-mixer",
    title: "How to choose a basin mixer that fits the counter",
    date: "12 March 2026",
    image: "/images/marble.jpg",
    excerpt:
      "Spout height, hole count and the way the lever sits decide whether a mixer feels inevitable or slightly wrong.",
    body: [
      "Start with the basin, not the catalogue photograph. A table-top basin wants a lower spout so water lands in the bowl and not on the rim. A recessed basin can take a taller mixer, because the water has further to fall.",
      "Count the holes already cut in the counter. A single-hole mixer such as Aureum needs one opening. If the counter is already drilled for a three-hole set, forcing a single-hole mixer means filling holes that will always show.",
      "Then think about the hand that uses it half-asleep. A lever on the top is easy to find. A small knob at the side looks quieter, and it is easier to knock. In a family bathroom, the obvious handle wins.",
      "Finish is the last decision, and it should match the shower and the towel bar. A bathroom feels gathered when the metal agrees with itself.",
    ],
  },
  {
    slug: "finishes-that-stay-calm",
    title: "Finishes that stay calm after the first year",
    date: "2 February 2026",
    image: "/images/b4.jpg",
    excerpt:
      "Chrome, brushed gold, matte black and antique brass age differently. The right one depends on water, light and how often you wipe.",
    body: [
      "Chrome is the most forgiving in hard water. Spots show, and they also leave. A soft cloth and a drop of mild soap bring it back. It suits rooms with a lot of daylight.",
      "Brushed gold hides fingerprints better than a polished surface. It wants a dry wipe, not a scouring pad. The grain is the finish. Once that grain is cut, it does not return.",
      "Matte black looks precise against pale stone. It also shows pale water marks if the tap is left wet. A bathroom that is wiped after use will keep it. A bathroom that is not will look tired sooner.",
      "Antique brass is the warmest of the four and the most particular. It belongs with wood, limewash and warm light. In a very cool white room it can feel like it arrived from somewhere else.",
    ],
  },
  {
    slug: "planning-the-shower-wall",
    title: "Planning the shower wall before the tiles go on",
    date: "18 January 2026",
    image: "/images/b1.jpg",
    excerpt:
      "The diverter, the arm and the hand-shower holder are easier to place when the wall is still open.",
    body: [
      "Mark the finished floor, not the slab. Tile, waterproofing and a shower tray change the height you thought you had. An overhead arm that feels generous on a drawing can land too low once the floor is built.",
      "Decide whether the mixer is exposed or concealed before the plumber closes the wall. Temper, our thermostatic mixer, can sit proud of the tile. A concealed body has to be in place earlier, and the tile opening has to match the plate.",
      "Put the hand shower where the shortest person in the house can lift it off the holder without standing on the tray edge. That single measurement prevents most of the awkward showers we are asked to correct.",
      "If you are choosing Alto, the column carries the overhead, the hand shower and the diverter together. The wall only needs the hot and cold supplies at the right height. It is the simpler drawing.",
    ],
  },
]

export const principles = [
  {
    title: "Honest materials",
    text: "Brass bodies, ceramic discs and vitreous china. The parts you touch are made to be used every day, not only to be photographed.",
  },
  {
    title: "Finishes that agree",
    text: "Chrome, brushed gold, matte black and antique brass run across faucets, showers and accessories, so a room can be specified as one family.",
  },
  {
    title: "Care after fitting",
    text: "A bathroom is finished when the mixer is installed, the flush is quiet and someone can still be reached if a part needs attention.",
  },
]

export function formatPrice(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value)
}

export function getCategory(slug) {
  return categories.find((item) => item.slug === slug)
}

export function getProduct(slug) {
  return products.find((item) => item.slug === slug)
}

export function getArticle(slug) {
  return articles.find((item) => item.slug === slug)
}

export function filterProducts({ category = "all", space = "all" } = {}) {
  return products.filter((item) => {
    const categoryMatch = category === "all" || item.category === category
    const spaceMatch = space === "all" || item.space === space
    return categoryMatch && spaceMatch
  })
}

export function finishColor(name) {
  return finishes.find((item) => item.name === name)?.color ?? "#d7d2cb"
}
