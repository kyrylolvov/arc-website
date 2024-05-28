"use client";

import { Player } from "@lottiefiles/react-lottie-player";
import { useTheme } from "next-themes";

import * as priceLottieDarkJson from "~/lotties/price-dark.json";
import * as priceLottieLightJson from "~/lotties/price-light.json";

export default function PriceLottie() {
  const { theme } = useTheme();

  return <Player src={theme === "light" ? priceLottieLightJson : priceLottieDarkJson} loop autoplay speed={0.5} />;
}
