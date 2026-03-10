"use client";

import {
  Heading,
  Text,
  Button,
  Column,
  Badge,
  Logo,
  Line,
  LetterFx,
  ThemeSwitcher,
} from "@once-ui-system/core";

export default function Home() {
  return (
    <Column fillWidth center padding="l" style={{ minHeight: "100vh" }}>
     <h1 className="text-3xl font-bold underline text-red-100">
      Hello world!
    </h1>
    </Column>
  );
}
