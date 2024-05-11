"use client";

import { useTheme } from "next-themes";
import { useMemo } from "react";
import Lottie, { Options } from "react-lottie";

import * as priceLottieDarkJson from "~/lotties/price-dark.json";
import * as priceLottieLightJson from "~/lotties/price-light.json";

export default function PriceLottie() {
  const { theme } = useTheme();

  const defaultOptions: Options = useMemo(
    () => ({
      loop: true,
      autoplay: true,
      animationData: theme === "light" ? priceLottieLightJson : priceLottieDarkJson,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    }),
    [theme],
  );

  return <Lottie options={defaultOptions} speed={0.5} isClickToPauseDisabled />;
}
