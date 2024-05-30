"use client";

import generateId from "~/utils/uuid";

import FeatureCard, { FeatureCardProps } from "../feature-card";

export default function FeaturesCards({ features }: { features: FeatureCardProps[] }) {
  return (
    <>
      <div className="mx-auto mt-8 w-full lg:hidden">
        <div className="grid gap-6 sm:grid-cols-2">
          {features.slice(0, 2).map((feature, i) => (
            <div key={generateId()} className="feature-card">
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-6">
          {features.slice(2).map((feature, i) => (
            <div key={generateId()} className="feature-card w-full sm:w-[calc(50%-12px)] ">
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 hidden grid-cols-3 gap-6 lg:grid">
        {features.map((feature, i) => (
          <div key={generateId()} className="feature-card">
            <FeatureCard {...feature} />
          </div>
        ))}
      </div>
    </>
  );
}
