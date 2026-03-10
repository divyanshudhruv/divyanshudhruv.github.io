"use client";

import {
Column
} from "@once-ui-system/core";
import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <Column fillWidth center padding="l" style={{ minHeight: "100vh" }}>
     <h1 className="text-3xl font-bold underline text-red-100">
      Hello world!
    </h1>
    <Button>Click me</Button>
    </Column>
  );
}
