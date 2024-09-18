import type { Metadata } from "next";
import { IndexBanner } from "./components/IndexBanner/IndexBanner";
import Cart from "./Cart";

export default function IndexPage() {
  return (
    <>
      <IndexBanner />
      <div>Cart</div>
      <Cart
        params={{
          user: "1",
        }}
      />
    </>
  );
}

export const metadata: Metadata = {
  title: "Catering Bien Casero",
  description: "Catering para eventos en Buenos Aires",
  authors: [
    {
      name: "Stefano Turcarelli",
    },
    {
      name: "Ileana Echeverria",
    },
  ],
  keywords: [
    "catering",
    "eventos",
    "buenos aires",
    "comida",
    "fiestas",
    "catering bien casero",
  ],
};
