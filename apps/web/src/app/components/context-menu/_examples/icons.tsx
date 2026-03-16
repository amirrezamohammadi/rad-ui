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
        <ContextMenuItem>
          <User className="ms-2 h-4 w-4" />
          پروفایل
        </ContextMenuItem>
        <ContextMenuItem>
          <CreditCard className="ms-2 h-4 w-4" />
          پرداخت
        </ContextMenuItem>
        <ContextMenuItem>
          <Users className="ms-2 h-4 w-4" />
          اعضای تیم
        </ContextMenuItem>
        <ContextMenuItem>
          <Settings className="ms-2 h-4 w-4" />
          تنظیمات
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
        <ContextMenuItem>
          <User className="ms-2 h-4 w-4" />
          پروفایل
        </ContextMenuItem>
        <ContextMenuItem>
          <CreditCard className="ms-2 h-4 w-4" />
          پرداخت
        </ContextMenuItem>
        <ContextMenuItem>
          <Users className="ms-2 h-4 w-4" />
          اعضای تیم
        </ContextMenuItem>
        <ContextMenuItem>
          <Settings className="ms-2 h-4 w-4" />
          تنظیمات
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}

