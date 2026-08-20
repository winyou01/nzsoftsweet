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
    id: "electrolyte-gummies",
    name: "Electrolyte Gummies",
    description:
      "Chewy fruit gummies loaded with sodium, potassium and magnesium. Made for training, tramping, or shaking off a rough morning — and they actually taste good.",
    price: 24.90,
    image: "/images/products/electrolyte-gummies.jpg",
    category: "Gummies",
    featured: true,
  },
];
