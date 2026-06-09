"use client";

import "./../global.css";

import { others } from "@/data/data";
import ListPageLayout from "@/components/ListPageLayout";

export default function Others() {
  return <ListPageLayout title="Others" items={others} routePrefix="others" />;
}
