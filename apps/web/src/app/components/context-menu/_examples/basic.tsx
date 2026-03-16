"use client";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/registry/web/ui";

export const code = `import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

export default function BasicContextMenuExample() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-24 w-full max-w-sm items-center justify-center rounded-md border border-dashed border-border text-sm text-muted-foreground">
        برای دیدن منو کلیک راست کنید
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>پروفایل</ContextMenuItem>
        <ContextMenuItem>صورت‌حساب</ContextMenuItem>
        <ContextMenuItem>تیم</ContextMenuItem>
        <ContextMenuItem>اشتراک</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
`;

export default function BasicContextMenuExample() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-24 w-full max-w-sm items-center justify-center rounded-md border border-dashed border-border text-sm text-muted-foreground">
        برای دیدن منو کلیک راست کنید
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>پروفایل</ContextMenuItem>
        <ContextMenuItem>صورت‌حساب</ContextMenuItem>
        <ContextMenuItem>تیم</ContextMenuItem>
        <ContextMenuItem>اشتراک</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}

