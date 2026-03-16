"use client";

import * as React from "react";

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/registry/web/ui";

export const code = `"use client";

import * as React from "react";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

export default function CheckboxRadioContextMenuExample() {
  const [showLineNumbers, setShowLineNumbers] = React.useState(true);
  const [theme, setTheme] = React.useState("dark");

  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-24 w-full max-w-sm items-center justify-center rounded-md border border-dashed border-border text-sm text-muted-foreground">
        کلیک راست برای تنظیمات
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuLabel inset>نمایش</ContextMenuLabel>
        <ContextMenuCheckboxItem
          checked={showLineNumbers}
          onCheckedChange={(v) => setShowLineNumbers(!!v)}
        >
          نمایش شماره خطوط
        </ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuLabel inset>تم</ContextMenuLabel>
        <ContextMenuRadioGroup value={theme} onValueChange={setTheme}>
          <ContextMenuRadioItem value="light">روشن</ContextMenuRadioItem>
          <ContextMenuRadioItem value="dark">تاریک</ContextMenuRadioItem>
          <ContextMenuRadioItem value="system">سیستم</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  );
}
`;

export default function CheckboxRadioContextMenuExample() {
  const [showLineNumbers, setShowLineNumbers] = React.useState(true);
  const [theme, setTheme] = React.useState("dark");

  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-24 w-full max-w-sm items-center justify-center rounded-md border border-dashed border-border text-sm text-muted-foreground">
        کلیک راست برای تنظیمات
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuLabel inset>نمایش</ContextMenuLabel>
        <ContextMenuCheckboxItem
          checked={showLineNumbers}
          onCheckedChange={(v) => setShowLineNumbers(!!v)}
        >
          نمایش شماره خطوط
        </ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuLabel inset>تم</ContextMenuLabel>
        <ContextMenuRadioGroup value={theme} onValueChange={setTheme}>
          <ContextMenuRadioItem value="light">روشن</ContextMenuRadioItem>
          <ContextMenuRadioItem value="dark">تاریک</ContextMenuRadioItem>
          <ContextMenuRadioItem value="system">سیستم</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  );
}

