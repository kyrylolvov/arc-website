"use client";

import Lottie from "react-lottie";

import * as speedLottieJson from "~/lotties/speed.json";

export default function SpeedLottie() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: speedLottieJson,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} speed={1} isClickToPauseDisabled />;
}
