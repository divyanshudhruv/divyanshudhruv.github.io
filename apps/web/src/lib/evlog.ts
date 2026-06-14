import { createEvlog } from "evlog/next";
import { defineNodeInstrumentation } from "evlog/next/instrumentation";

export const { withEvlog, useLogger, log, createError } = createEvlog({
	service: "homepage-web",
});

export const { register, onRequestError } = defineNodeInstrumentation({
	service: "homepage-web",
});
