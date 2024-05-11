"use client";

import Lottie from "react-lottie";

import * as automateLottieJson from "~/lotties/automate.json";

export default function AutomateLottie() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: automateLottieJson,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} speed={0.5} isClickToPauseDisabled />;
}
