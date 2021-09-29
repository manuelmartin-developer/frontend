import pizza from "./assets/pizza.jpg";
import sopa from "./assets/sopa.jpg";
import paella from "./assets/paella.jpeg";

// Para "precarga" de datos
let data = [
  {
    name: "Pizza",
    desc: "Delecious BBQ pizza",
    empresa: "ThePizza&CO",
    price: 6,
    url: pizza,
  },
  { name: "Paella", desc: "Delecious seafood paella", price: 25, url: paella },
  {
    name: "Soup",
    desc: "Tasty Mushrooms soup",
    empresa: "TastySoups",
    price: 8,
    url: sopa,
  },
];
export default data;
