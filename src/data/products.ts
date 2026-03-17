export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "gummy-bears",
    name: "Classic Gummy Bears",
    description: "Soft, chewy gummy bears in a mix of fruity flavours. A timeless favourite for all ages.",
    price: 4.50,
    image: "/images/products/gummy-bears.jpg",
    category: "Gummies",
    featured: true,
  },
  {
    id: "sour-worms",
    name: "Sour Worms",
    description: "Tangy, sugar-coated worms with a sour kick. Perfect for those who love a bit of zing.",
    price: 5.00,
    image: "/images/products/sour-worms.jpg",
    category: "Sour",
    featured: true,
  },
  {
    id: "chocolate-truffles",
    name: "Chocolate Truffles",
    description: "Rich, handcrafted chocolate truffles with a smooth ganache centre. Pure indulgence.",
    price: 12.00,
    image: "/images/products/chocolate-truffles.jpg",
    category: "Chocolate",
    featured: true,
  },
  {
    id: "marshmallow-clouds",
    name: "Marshmallow Clouds",
    description: "Light, fluffy marshmallows in pastel colours. Melt-in-your-mouth goodness.",
    price: 6.00,
    image: "/images/products/marshmallow-clouds.jpg",
    category: "Marshmallows",
    featured: true,
  },
  {
    id: "fruit-drops",
    name: "Fruit Drops",
    description: "Hard-boiled fruit drops bursting with natural flavour. A classic NZ treat.",
    price: 3.50,
    image: "/images/products/fruit-drops.jpg",
    category: "Hard Candy",
  },
  {
    id: "liquorice-twists",
    name: "Liquorice Twists",
    description: "Traditional soft liquorice twists with a deep, satisfying flavour.",
    price: 5.50,
    image: "/images/products/liquorice-twists.jpg",
    category: "Liquorice",
  },
  {
    id: "caramel-chews",
    name: "Caramel Chews",
    description: "Buttery caramel chews made with real cream. Irresistibly smooth and chewy.",
    price: 7.00,
    image: "/images/products/caramel-chews.jpg",
    category: "Caramel",
  },
  {
    id: "jelly-beans",
    name: "Jelly Beans",
    description: "Colourful jelly beans in an assortment of fruity and fun flavours.",
    price: 4.00,
    image: "/images/products/jelly-beans.jpg",
    category: "Gummies",
  },
];
