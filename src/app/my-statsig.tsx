// app/my-statsig.tsx

"use client";

import {
  LogLevel,
  StatsigProvider,
  StatsigUser,
  useClientBootstrapInit, // <- Add this
} from "@statsig/react-bindings";
import { StatsigAutoCapturePlugin } from "@statsig/web-analytics";
import React, { useEffect } from "react";

export default function MyStatsig({
  children,
  bootstrapValues,
}: {
  bootstrapValues: { data: string; user: StatsigUser; key: string };
  children: React.ReactNode;
}) {
  // Update to using useClientBootstrapInit instead of auto initializing in the provider
  const client = useClientBootstrapInit(
    bootstrapValues.key,
    bootstrapValues.user,
    bootstrapValues.data,
    {
      logLevel: LogLevel.Debug,
      plugins: [new StatsigAutoCapturePlugin()],
    }
  );

  return <StatsigProvider client={client}>{children}</StatsigProvider>;
}
