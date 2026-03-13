"use client";

import * as React from "react";
import {
  Combobox as BaseCombobox,
  ComboboxAnchor,
  ComboboxCancel,
  ComboboxClear,
  ComboboxContent,
  ComboboxControl,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxGroupLabel,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxPositioner,
  ComboboxTrigger as BaseComboboxTrigger,
  type ComboboxRootProps,
} from "@ark-ui/react/combobox";
import { X, ChevronDown } from "lucide-react";

import { cn } from "../../lib/utils";

type ArkComboboxProps<T extends React.ElementType> = ComboboxRootProps<T>;

const Combobox = BaseCombobox;

const ComboboxTrigger = React.forwardRef<
  React.ElementRef<typeof BaseComboboxTrigger>,
  React.ComponentPropsWithoutRef<typeof BaseComboboxTrigger>
>(({ className, ...props }, ref) => (
  <BaseComboboxTrigger
    ref={ref}
    className={cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-border bg-background px-3 py-2 text-sm",
      "ring-offset-background placeholder:text-muted-foreground",
      "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "aria-[invalid=true]:border-destructive aria-[invalid=true]:ring-destructive",
      "[&>span]:line-clamp-1 [&>span]:text-right",
      className
    )}
    dir="rtl"
    {...props}
  >
    <ComboboxControl className="flex w-full items-center gap-2">
      <ComboboxInput
        className={cn(
          "w-full bg-transparent text-right text-sm outline-none",
          "placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
        )}
      />
    </ComboboxControl>
    <div className="flex items-center gap-1 ps-2">
      <ComboboxClear asChild>
        <button
          type="button"
          className="flex h-6 w-6 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground"
          aria-label="پاک کردن مقدار"
        >
          <X className="h-3 w-3" />
        </button>
      </ComboboxClear>
      <ChevronDown className="h-4 w-4 opacity-50" aria-hidden="true" />
    </div>
  </BaseComboboxTrigger>
));
ComboboxTrigger.displayName = "ComboboxTrigger";

const ComboboxPopover = React.forwardRef<
  React.ElementRef<typeof ComboboxPositioner>,
  React.ComponentPropsWithoutRef<typeof ComboboxPositioner>
>(({ className, ...props }, ref) => (
  <ComboboxPositioner
    ref={ref}
    className={cn(
      "z-50 mt-1 w-full min-w-[12rem]",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
      "data-[side=bottom]:slide-in-from-top-2",
      "data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  >
    <ComboboxContent
      className={cn(
        "max-h-72 w-full overflow-hidden rounded-md border border-border bg-popover text-popover-foreground shadow-md"
      )}
    >
      <ComboboxList
        className={cn(
          "max-h-72 overflow-y-auto overflow-x-hidden py-1 text-sm"
        )}
      />
    </ComboboxContent>
  </ComboboxPositioner>
));
ComboboxPopover.displayName = "ComboboxPopover";

const ComboboxOption = React.forwardRef<
  React.ElementRef<typeof ComboboxItem>,
  React.ComponentPropsWithoutRef<typeof ComboboxItem>
>(({ className, ...props }, ref) => (
  <ComboboxItem
    ref={ref}
    className={cn(
      "flex w-full cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm outline-none",
      "data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  />
));
ComboboxOption.displayName = "ComboboxOption";

const ComboboxNoOptions = React.forwardRef<
  React.ElementRef<typeof ComboboxEmpty>,
  React.ComponentPropsWithoutRef<typeof ComboboxEmpty>
>((props, ref) => (
  <ComboboxEmpty
    ref={ref}
    className="px-3 py-2 text-sm text-muted-foreground"
    {...props}
  />
));
ComboboxNoOptions.displayName = "ComboboxNoOptions";

const ComboboxGroupRoot = React.forwardRef<
  React.ElementRef<typeof ComboboxGroup>,
  React.ComponentPropsWithoutRef<typeof ComboboxGroup>
>(({ className, ...props }, ref) => (
  <ComboboxGroup
    ref={ref}
    className={cn("px-1 py-1.5 text-foreground", className)}
    {...props}
  />
));
ComboboxGroupRoot.displayName = "ComboboxGroup";

const ComboboxGroupHeader = React.forwardRef<
  React.ElementRef<typeof ComboboxGroupLabel>,
  React.ComponentPropsWithoutRef<typeof ComboboxGroupLabel>
>(({ className, ...props }, ref) => (
  <ComboboxGroupLabel
    ref={ref}
    className={cn("px-3 pb-1 text-xs font-medium text-muted-foreground", className)}
    {...props}
  />
));
ComboboxGroupHeader.displayName = "ComboboxGroupHeader";

export type { ArkComboboxProps as ComboboxProps };

export {
  Combobox,
  ComboboxTrigger,
  ComboboxPopover,
  ComboboxOption,
  ComboboxNoOptions,
  ComboboxGroupRoot as ComboboxGroup,
  ComboboxGroupHeader,
};

