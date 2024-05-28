"use client";

import { Player } from "@lottiefiles/react-lottie-player";

import * as speedLottieJson from "~/lotties/speed.json";

export default function SpeedLottie() {
  return <Player src={speedLottieJson} loop autoplay speed={0.5} />;
}
