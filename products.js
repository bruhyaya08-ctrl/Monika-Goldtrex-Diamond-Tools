/* ============================================================
   MONICA GOLDTREX DIAMOND TOOLS — PRODUCT LIST
   ============================================================
   HOW TO ADD A NEW PRODUCT
   1. Copy one whole block below, from the opening { to the
      closing },
   2. Paste it just above the closing ]; at the bottom of this
      file.
   3. Change the values on the right of each colon. Keep the
      quote marks "like this" around text, and do NOT put quote
      marks around numbers (price).
   4. Give every product a unique "id" (just count upwards).
   5. Save the file and refresh the website — that's it, no
      other file needs to change.

   FIELD GUIDE
   id          -> unique number, never repeat one already used
   name        -> product name shown on the card
   brand       -> "Bosch" | "DeWalt" | "Ralliwolf" | "Eastman" | "Other"
                  (adding a new brand here also adds it to the
                  brand filter automatically)
   category    -> "Power Tools" | "Diamond Blades & Cutting"
                  | "Consumables" | "Machinery" | "Household"
                  (same auto-filter behaviour as brand)
   price       -> number only, no ₹ symbol, no commas (e.g. 3499)
   unit        -> what the price is per, e.g. "piece", "set",
                  "box of 10", "meter"
   spec        -> one short line of specs, e.g. "4 inch, 850W"
   description -> one or two sentences for the detail line
   inStock     -> true or false
   ============================================================ */

const PRODUCTS = [
  {
    id: 1,
    name: "GSB 500 Impact Drill",
    brand: "Bosch",
    category: "Power Tools",
    price: 3299,
    unit: "piece",
    spec: "500W, 13mm chuck, reverse rotation",
    description: "All-purpose impact drill for wood, metal and masonry. Comes with side handle and depth gauge.",
    inStock: true
  },
  {
    id: 2,
    name: "GWS 750 Angle Grinder",
    brand: "Bosch",
    category: "Power Tools",
    price: 2799,
    unit: "piece",
    spec: "750W, 4 inch wheel, 11000 RPM",
    description: "Compact grinder for cutting, grinding and polishing metal and stone.",
    inStock: true
  },
  {
    id: 3,
    name: "DWE4257 Angle Grinder",
    brand: "DeWalt",
    category: "Power Tools",
    price: 4599,
    unit: "piece",
    spec: "1400W, 5 inch wheel",
    description: "Heavy-duty grinder built for daily site use with a tool-free guard.",
    inStock: true
  },
  {
    id: 4,
    name: "DCD host Cordless Drill Driver",
    brand: "DeWalt",
    category: "Power Tools",
    price: 6999,
    unit: "piece with battery + charger",
    spec: "18V, 13mm chuck, 2 speed",
    description: "Cordless drill driver for site work where a power point isn't handy.",
    inStock: true
  },
  {
    id: 5,
    name: "Ralliwolf Rotary Hammer Drill",
    brand: "Ralliwolf",
    category: "Power Tools",
    price: 5499,
    unit: "piece",
    spec: "800W, SDS chuck, hammer + rotary mode",
    description: "For drilling into concrete, brick and stone. Includes carry case.",
    inStock: true
  },
  {
    id: 6,
    name: "Ralliwolf Bench Grinder",
    brand: "Ralliwolf",
    category: "Machinery",
    price: 3999,
    unit: "piece",
    spec: "6 inch wheel, 375W, dual wheel",
    description: "Bench-mounted grinder for sharpening and finishing work in the workshop.",
    inStock: true
  },
  {
    id: 7,
    name: '4" Diamond Cutting Blade',
    brand: "Eastman",
    category: "Diamond Blades & Cutting",
    price: 149,
    unit: "piece",
    spec: "4 inch, wet/dry, tile & marble",
    description: "General purpose diamond blade for tile, marble and granite cutting.",
    inStock: true
  },
  {
    id: 8,
    name: '14" Diamond Cutting Blade',
    brand: "Eastman",
    category: "Diamond Blades & Cutting",
    price: 899,
    unit: "piece",
    spec: "14 inch, dry cutting, concrete & stone",
    description: "Heavy segment blade for concrete, brick and stone cutting on larger cutters.",
    inStock: true
  },
  {
    id: 9,
    name: "Diamond Core Bit Set",
    brand: "Eastman",
    category: "Diamond Blades & Cutting",
    price: 1899,
    unit: "set of 5",
    spec: "6mm–32mm assorted sizes",
    description: "Core drill bits for clean holes in tile, marble and concrete.",
    inStock: true
  },
  {
    id: 10,
    name: "Grinding Wheel",
    brand: "Bosch",
    category: "Consumables",
    price: 89,
    unit: "piece",
    spec: "4 inch, for metal grinding",
    description: "Standard grinding wheel, fits all 4 inch angle grinders.",
    inStock: true
  },
  {
    id: 11,
    name: "Cutting Wheel",
    brand: "Bosch",
    category: "Consumables",
    price: 45,
    unit: "piece",
    spec: "4 inch, thin, for metal cutting",
    description: "Thin cutting wheel for clean cuts on MS sheet, rod and pipe.",
    inStock: true
  },
  {
    id: 12,
    name: "Welding Electrodes",
    brand: "Other",
    category: "Consumables",
    price: 320,
    unit: "box of 5kg",
    spec: "2.5mm, general purpose MS welding",
    description: "General purpose welding rods for mild steel fabrication work.",
    inStock: true
  },
  {
    id: 13,
    name: "Masonry Drill Bit Set",
    brand: "Other",
    category: "Consumables",
    price: 399,
    unit: "set of 7",
    spec: "4mm–12mm, carbide tip",
    description: "For drilling into brick, block and concrete with a standard drill.",
    inStock: true
  },
  {
    id: 14,
    name: "Tile Cutting Machine",
    brand: "Other",
    category: "Machinery",
    price: 8999,
    unit: "piece",
    spec: "Table type, 4 inch blade capacity, water cooled",
    description: "Site-ready tile cutting table for straight and angled cuts.",
    inStock: true
  },
  {
    id: 15,
    name: "Extension Board",
    brand: "Other",
    category: "Household",
    price: 449,
    unit: "piece",
    spec: "4 socket, 5 meter cord, surge protected",
    description: "Heavy-duty extension board for home and site use.",
    inStock: true
  },
  {
    id: 16,
    name: "Tool Kit Box",
    brand: "Other",
    category: "Household",
    price: 999,
    unit: "kit",
    spec: "45 pieces — screwdrivers, pliers, wrenches, hammer",
    description: "Everyday household tool kit in a carry case.",
    inStock: true
  }
];
