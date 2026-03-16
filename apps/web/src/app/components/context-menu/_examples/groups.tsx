"use client";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/registry/web/ui";

export const code = `import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

export default function GroupsContextMenuExample() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-24 w-full max-w-sm items-center justify-center rounded-md border border-dashed border-border text-sm text-muted-foreground">
        کلیک راست با گروه‌ها
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuLabel inset>حساب کاربری</ContextMenuLabel>
        <ContextMenuGroup>
          <ContextMenuItem>پروفایل</ContextMenuItem>
          <ContextMenuItem>صورت‌حساب</ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuLabel inset>تیم</ContextMenuLabel>
        <ContextMenuGroup>
          <ContextMenuItem>اعضای تیم</ContextMenuItem>
          <ContextMenuItem>دعوت به تیم</ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  );
}
`;

export default function GroupsContextMenuExample() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-24 w-full max-w-sm items-center justify-center rounded-md border border-dashed border-border text-sm text-muted-foreground">
        کلیک راست با گروه‌ها
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuLabel inset>حساب کاربری</ContextMenuLabel>
        <ContextMenuGroup>
          <ContextMenuItem>پروفایل</ContextMenuItem>
          <ContextMenuItem>صورت‌حساب</ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuLabel inset>تیم</ContextMenuLabel>
        <ContextMenuGroup>
          <ContextMenuItem>اعضای تیم</ContextMenuItem>
          <ContextMenuItem>دعوت به تیم</ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  );
}

