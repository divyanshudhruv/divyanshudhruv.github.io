"use client";

import { useState } from "react";
import { Text, Button, Row, Flex, Input } from "@once-ui-system/core";
import { ArrowRightIcon, KeyIcon } from "@phosphor-icons/react";
import { useWebHaptics } from "web-haptics/react";
import usePageViews from "@/hooks/usePageViews";

export default function PasswordGate({
  itemId,
  onUnlock,
}: {
  itemId: string;
  onUnlock: () => void;
}) {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const { views } = usePageViews("divyanshudhruv.is-a.dev", "/");
  const haptic = useWebHaptics();

  const handleCheck = () => {
    haptic.trigger("light");
    if (input === `${itemId}-${views}`) {
      onUnlock();
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <Flex direction="column" gap="m">
      <Text variant="body-default-l" onBackground="neutral-weak" className="lh">
        <b>This section is password protected.</b>
      </Text>
      <Input
        id="password"
        value={input}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setInput(e.target.value);
          setError(false);
        }}
        placeholder="Enter password (PF-xxxx-xxxx)"
        height="s"
        error={error}
        errorMessage={error ? "Incorrect password" : ""}
        hasPrefix={
          <Flex center fill>
            <Text onBackground="neutral-medium">
              <KeyIcon size={18} weight="light" />
            </Text>
          </Flex>
        }
      />
      <Button variant="primary" size="m" onClick={handleCheck}>
        <Text variant="code-default-s">
          <Row vertical="center" gap="4">
            <ArrowRightIcon size={18} weight="light" /> CHECK
          </Row>
        </Text>
      </Button>
    </Flex>
  );
}
