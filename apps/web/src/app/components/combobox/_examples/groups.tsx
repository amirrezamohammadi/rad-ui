"use client";

import {
  Combobox,
  ComboboxTrigger,
  ComboboxPopover,
  ComboboxOption,
  ComboboxNoOptions,
  ComboboxGroup,
  ComboboxGroupHeader,
} from "@/registry/web/ui";

const timezones = [
  {
    group: "آمریکا",
    items: ["(GMT-5) New York", "(GMT-8) Los Angeles", "(GMT-3) São Paulo"],
  },
  {
    group: "اروپا",
    items: ["(GMT+0) London", "(GMT+1) Paris", "(GMT+1) Berlin"],
  },
] as const;

export const code = `import {
  Combobox,
  ComboboxTrigger,
  ComboboxPopover,
  ComboboxOption,
  ComboboxNoOptions,
  ComboboxGroup,
  ComboboxGroupHeader,
} from "@/components/ui/combobox";

const timezones = [
  {
    group: "آمریکا",
    items: ["(GMT-5) New York", "(GMT-8) Los Angeles", "(GMT-3) São Paulo"],
  },
  {
    group: "اروپا",
    items: ["(GMT+0) London", "(GMT+1) Paris", "(GMT+1) Berlin"],
  },
] as const;

export default function GroupedComboboxExample() {
  return (
    <Combobox items={timezones}>
      <ComboboxTrigger className="w-full max-w-xs" />
      <ComboboxPopover>
        <ComboboxNoOptions>منطقه زمانی پیدا نشد.</ComboboxNoOptions>
        <ComboboxGroup>
          <ComboboxGroupHeader>آمریکا</ComboboxGroupHeader>
        </ComboboxGroup>
        <ComboboxOption id="timezones" />
      </ComboboxPopover>
    </Combobox>
  );
}
`;

export default function GroupedComboboxExample() {
  return (
    <Combobox items={timezones}>
      <ComboboxTrigger className="w-full max-w-xs" />
      <ComboboxPopover>
        <ComboboxNoOptions>منطقه زمانی پیدا نشد.</ComboboxNoOptions>
        <ComboboxGroup>
          <ComboboxGroupHeader>آمریکا</ComboboxGroupHeader>
        </ComboboxGroup>
        <ComboboxOption id="timezones" />
      </ComboboxPopover>
    </Combobox>
  );
}

