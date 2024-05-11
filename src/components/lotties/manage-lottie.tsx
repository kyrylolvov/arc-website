"use client";

import Lottie from "react-lottie";

import * as manageLottieJson from "~/lotties/manage.json";

export default function ManageLottie() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: manageLottieJson,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} speed={0.5} isClickToPauseDisabled />;
}
