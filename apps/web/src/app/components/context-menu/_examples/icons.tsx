"use client";

import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/registry/web/ui";
import { User, CreditCard, Users, Settings } from "lucide-react";

export const code = `import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { User, CreditCard, Users, Settings } from "lucide-react";

export default function IconsContextMenuExample() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-24 w-full max-w-sm items-center justify-center rounded-md border border-dashed border-border text-sm text-muted-foreground">
        کلیک راست با آیکون
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem className="flex items-center gap-2">
          <User className="h-4 w-4" />
          <span>پروفایل</span>
        </ContextMenuItem>
        <ContextMenuItem className="flex items-center gap-2">
          <CreditCard className="h-4 w-4" />
          <span>پرداخت</span>
        </ContextMenuItem>
        <ContextMenuItem className="flex items-center gap-2">
          <Users className="h-4 w-4" />
          <span>اعضای تیم</span>
        </ContextMenuItem>
        <ContextMenuItem className="flex items-center gap-2">
          <Settings className="h-4 w-4" />
          <span>تنظیمات</span>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
`;

export default function IconsContextMenuExample() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-24 w-full max-w-sm items-center justify-center rounded-md border border-dashed border-border text-sm text-muted-foreground">
        کلیک راست با آیکون
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem className="flex items-center gap-2">
          <User className="h-4 w-4" />
          <span>پروفایل</span>
        </ContextMenuItem>
        <ContextMenuItem className="flex items-center gap-2">
          <CreditCard className="h-4 w-4" />
          <span>پرداخت</span>
        </ContextMenuItem>
        <ContextMenuItem className="flex items-center gap-2">
          <Users className="h-4 w-4" />
          <span>اعضای تیم</span>
        </ContextMenuItem>
        <ContextMenuItem className="flex items-center gap-2">
          <Settings className="h-4 w-4" />
          <span>تنظیمات</span>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}

