"use client";

import Lottie from "react-lottie";

import * as optimizationLottieJson from "~/lotties/optimization.json";

export default function OptimizationLottie() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: optimizationLottieJson,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} isClickToPauseDisabled />;
}
