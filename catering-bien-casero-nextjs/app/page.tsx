import type { Metadata } from "next";
import { Counter } from "./components/counter/Counter";
import { IndexBanner } from "./components/IndexBanner/IndexBanner";

export default function IndexPage() {
  return <IndexBanner />;
}

export const metadata: Metadata = {
  title: "Catering Bien Casero",
};
