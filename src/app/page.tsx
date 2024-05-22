"use client";
import { init } from "@airstack/airstack-react";
import Component from "@/component/test";

init(process.env.NEXT_PUBLIC_AIRSTACK_API_KEY ?? "");

export default function Home() {
  return <Component />;
}
