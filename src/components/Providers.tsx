"use client";

import {
  DataThemeProvider,
  LayoutProvider,
  ThemeProvider,
  ToastProvider,
} from "@once-ui-system/core";
import { style, dataStyle } from "../resources/once-ui.config";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LayoutProvider>
      <ThemeProvider
        theme={style.theme as any}
        brand={style.brand as any}
        accent={style.accent as any}
        neutral={style.neutral as any}
        solid={style.solid as any}
        solidStyle={style.solidStyle as any}
        border={style.border as any}
        surface={style.surface as any}
        transition={style.transition as any}
        scaling={style.scaling as any}
      >
        <DataThemeProvider
          variant={dataStyle.variant as any}
          mode={dataStyle.mode as any}
          height={dataStyle.height}
          axis={{ stroke: dataStyle.axis.stroke }}
          tick={{
            fill: dataStyle.tick.fill,
            fontSize: dataStyle.tick.fontSize,
            line: dataStyle.tick.line,
          }}
        >
          <ToastProvider>{children}</ToastProvider>
        </DataThemeProvider>
      </ThemeProvider>
    </LayoutProvider>
  );
}
