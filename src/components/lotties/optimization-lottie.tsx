"use client";

import { Player } from "@lottiefiles/react-lottie-player";

import * as optimizationLottieJson from "~/lotties/optimization.json";

export default function OptimizationLottie() {
  return <Player src={optimizationLottieJson} loop autoplay speed={0.5} />;
}
