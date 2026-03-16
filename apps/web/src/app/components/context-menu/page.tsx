"use client";

import {
  InstallCodeBlock,
  InlineCodeBlock,
} from "@/components/docs/code-block";
import { ComponentExample } from "@/components/docs/component-example";
import {
  ApiReferenceSection,
  PropsTable,
  type PropDefinition,
} from "@/components/docs/props-table";
import BasicContextMenuExample, {
  code as basicCode,
} from "./_examples/basic";
import IconsContextMenuExample, {
  code as iconsCode,
} from "./_examples/icons";
import GroupsContextMenuExample, {
  code as groupsCode,
} from "./_examples/groups";
import CheckboxRadioContextMenuExample, {
  code as checkboxRadioCode,
} from "./_examples/checkbox-radio";

const contextMenuProps: PropDefinition[] = [
  {
    name: "open",
    type: "boolean",
    defaultValue: "undefined",
    description: "کنترل باز/بسته بودن منو در حالت کنترل‌شده.",
  },
  {
    name: "onOpenChange",
    type: "(open: boolean) => void",
    defaultValue: "undefined",
    description: "تابع فراخوانی هنگام تغییر وضعیت باز/بسته.",
  },
];

const contextMenuTriggerProps: PropDefinition[] = [
  {
    name: "asChild",
    type: "boolean",
    defaultValue: "false",
    description:
      "در صورت true شدن، عنصر فرزند به عنوان تریگر استفاده می‌شود (بدون افزودن wrapper اضافی).",
  },
  {
    name: "className",
    type: "string",
    defaultValue: "-",
    description: "کلاس‌های CSS سفارشی برای ناحیه‌ای که کلیک راست روی آن انجام می‌شود.",
  },
];

const contextMenuItemProps: PropDefinition[] = [
  {
    name: "inset",
    type: "boolean",
    defaultValue: "false",
    description: "افزودن فاصله داخلی بیشتر برای هم‌تراز شدن با آیکون‌ها یا زیرمنوها.",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "غیرفعال کردن آیتم منو.",
  },
  {
    name: "className",
    type: "string",
    defaultValue: "-",
    description: "کلاس‌های CSS سفارشی.",
  },
];

const usageCode = `import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

export default function ContextMenuUsageExample() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-24 w-full max-w-sm items-center justify-center rounded-md border border-dashed border-border text-sm text-muted-foreground">
        روی این ناحیه کلیک راست کنید
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuLabel inset>حساب کاربری</ContextMenuLabel>
        <ContextMenuItem>پروفایل</ContextMenuItem>
        <ContextMenuItem>صورت‌حساب</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>خروج</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
`;

export default function ContextMenuPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">
          منوی زمینه (Context Menu)
        </h1>
        <p className="text-lg text-muted-foreground">
          منویی از اقدامات که با کلیک راست یا لمس طولانی روی یک ناحیه ظاهر
          می‌شود. مناسب برای نمایش اکشن‌های مرتبط با محتوای خاص بدون شلوغ کردن
          رابط کاربری اصلی.
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <InstallCodeBlock
          code="npx @quark-lab/rad-ui add context-menu"
          language="bash"
        />
      </section>

      {/* Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نمونه‌ها (Examples)</h2>

        <ComponentExample
          title="نمونه پایه"
          titleEn="Basic"
          description="منوی زمینه ساده با چند اکشن عمومی."
          code={basicCode}
        >
          <BasicContextMenuExample />
        </ComponentExample>

        <ComponentExample
          title="با آیکون"
          titleEn="With Icons"
          description="افزودن آیکون به آیتم‌ها برای اسکن سریع‌تر."
          code={iconsCode}
        >
          <IconsContextMenuExample />
        </ComponentExample>

        <ComponentExample
          title="گروه‌ها و جداکننده‌ها"
          titleEn="Groups"
          description="گروه‌بندی اکشن‌ها و جداسازی آن‌ها با Separator."
          code={groupsCode}
        >
          <GroupsContextMenuExample />
        </ComponentExample>

        <ComponentExample
          title="چک‌باکس و گزینه‌های رادیویی"
          titleEn="Checkbox & Radio"
          description="استفاده از آیتم‌های چک‌باکس و رادیویی برای تنظیمات سریع."
          code={checkboxRadioCode}
        >
          <CheckboxRadioContextMenuExample />
        </ComponentExample>
      </section>

      {/* API Reference */}
      <ApiReferenceSection>
        <PropsTable
          title="ContextMenu"
          description="کامپوننت ریشه که رفتار باز/بسته شدن منوی زمینه را مدیریت می‌کند."
          props={contextMenuProps}
        />
        <PropsTable
          title="ContextMenuTrigger"
          description="ناحیه‌ای که با کلیک راست روی آن منوی زمینه باز می‌شود."
          props={contextMenuTriggerProps}
        />
        <PropsTable
          title="ContextMenuItem"
          description="آیتم‌های ساده در منوی زمینه."
          props={contextMenuItemProps}
        />
      </ApiReferenceSection>

      {/* Accessibility */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          دسترسی‌پذیری (Accessibility)
        </h2>
        <div className="space-y-4 text-muted-foreground">
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              کیبورد (Keyboard)
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Arrow Down / Arrow Up
                </code>{" "}
                — حرکت بین آیتم‌های منو.
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Enter
                </code>{" "}
                — فعال کردن آیتم انتخاب‌شده.
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Escape
                </code>{" "}
                — بستن منوی زمینه.
              </li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              استفاده با صفحه‌خوان
            </h3>
            <p>
              منوی زمینه بر اساس Radix Context Menu ساخته شده و از نقش‌ها و
              ویژگی‌های ARIA مناسب برای منوها و آیتم‌های منو استفاده می‌کند.
            </p>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          بهترین شیوه‌ها (Best Practices)
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3">
              فقط برای اکشن‌های ثانویه استفاده کنید
            </h3>
            <p className="text-muted-foreground">
              اکشن‌های اصلی را همیشه به صورت دکمه یا منوی قابل مشاهده نمایش
              دهید. منوی زمینه برای اکشن‌های تکمیلی و ثانویه مناسب است.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">توضیح رفتار</h3>
            <p className="text-muted-foreground">
              در صورت نیاز، یک متن راهنما (hint) در رابط کاربری قرار دهید تا
              کاربر بداند می‌تواند روی یک ناحیه کلیک راست کند.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">گروه‌بندی منظم</h3>
            <p className="text-muted-foreground">
              اکشن‌های مرتبط را در کنار هم و با استفاده از Label و Separator
              گروه‌بندی کنید تا منو واضح‌تر و قابل اسکن‌تر باشد.
            </p>
          </div>
        </div>
      </section>

      {/* Usage */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          نحوه استفاده (Usage)
        </h2>
        <InlineCodeBlock code={usageCode} />
      </section>
    </div>
  );
}

