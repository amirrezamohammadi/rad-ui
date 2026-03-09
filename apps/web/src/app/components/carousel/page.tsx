"use client";

import { InstallCodeBlock, InlineCodeBlock } from "@/components/docs/code-block";
import {
  ComponentExample,
  ComponentExampleGroup,
  SubExample,
} from "@/components/docs/component-example";
import {
  ApiReferenceSection,
  PropsTable,
  type PropDefinition,
} from "@/components/docs/props-table";
import BasicCarouselExample, {
  code as basicCode,
} from "./_examples/basic";
import SizesCarouselExample, { code as sizesCode } from "./_examples/sizes";
import CarouselUsageExample, { code as usageCode } from "./_examples/usage";

const carouselProps: PropDefinition[] = [
  {
    name: "opts",
    type: "EmblaOptionsType",
    defaultValue: "undefined",
    description:
      "گزینه‌های Embla Carousel (مثل align، loop، و غیره). مستندات Embla را ببینید.",
  },
  {
    name: "plugins",
    type: "EmblaPluginType[]",
    defaultValue: "undefined",
    description: "پلاگین‌های Embla (مثل Autoplay).",
  },
  {
    name: "orientation",
    type: '"horizontal" | "vertical"',
    defaultValue: '"horizontal"',
    description: "جهت کاروسل: افقی یا عمودی.",
  },
  {
    name: "dir",
    type: '"ltr" | "rtl"',
    defaultValue: '"rtl"',
    description: "جهت متن. پیش‌فرض RTL برای پشتیبانی از زبان فارسی.",
  },
  {
    name: "setApi",
    type: "(api: CarouselApi) => void",
    defaultValue: "undefined",
    description: "تابع فراخوانی‌شده با نمونه API کاروسل برای کنترل برنامه‌ای.",
  },
  {
    name: "className",
    type: "string",
    defaultValue: "undefined",
    description: "کلاس‌های CSS سفارشی.",
  },
];

const carouselContentProps: PropDefinition[] = [
  {
    name: "className",
    type: "string",
    defaultValue: "undefined",
    description: "کلاس‌های CSS سفارشی برای کانتینر اسکرول.",
  },
];

const carouselItemProps: PropDefinition[] = [
  {
    name: "className",
    type: "string",
    defaultValue: "undefined",
    description:
      "کلاس‌های CSS سفارشی. از basis-1/3 برای نمایش چند اسلاید استفاده کنید.",
  },
];

export default function CarouselPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">کاروسل (Carousel)</h1>
        <p className="text-lg text-muted-foreground">
          کاروسل با انیمیشن و سوایپ ساخته‌شده با کتابخانه Embla. پشتیبانی کامل
          از RTL و زبان فارسی.
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <InstallCodeBlock
          code="npx @quark-lab/rad-ui add carousel"
          language="bash"
        />
      </section>

      {/* Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نمونه‌ها (Examples)</h2>

        <ComponentExample
          title="نمونه پایه"
          titleEn="Basic"
          description="کاروسل ساده با کارت‌ها و دکمه‌های ناوبری."
          code={basicCode}
          previewCentered={true}
          previewClassName="min-h-[280px]"
        >
          <BasicCarouselExample />
        </ComponentExample>

        <ComponentExample
          title="اندازه اسلایدها"
          titleEn="Sizes"
          description="استفاده از basis-1/3 برای نمایش سه اسلاید هم‌زمان."
          code={sizesCode}
          previewCentered={true}
          previewClassName="min-h-[200px]"
        >
          <SizesCarouselExample />
        </ComponentExample>
      </section>

      {/* API Reference */}
      <ApiReferenceSection>
        <PropsTable
          title="Carousel"
          description="کامپوننت ریشه که کاروسل را مدیریت می‌کند."
          props={carouselProps}
        />
        <PropsTable
          title="CarouselContent"
          description="کانتینر اسکرول‌پذیر که اسلایدها را در بر می‌گیرد."
          props={carouselContentProps}
        />
        <PropsTable
          title="CarouselItem"
          description="هر اسلاید در کاروسل."
          props={carouselItemProps}
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
              نقش‌های ARIA
            </h3>
            <p>
              هر CarouselItem دارای role="group" و aria-roledescription="slide"
              است. دکمه‌های قبلی/بعدی دارای متن جایگزین برای خوانندگان صفحه
              هستند.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              پشتیبانی RTL
            </h3>
            <p>
              کاروسل به‌طور پیش‌فرض با dir="rtl" کار می‌کند. آیکون‌های
              ناوبری با rtl:rotate-180 در جهت صحیح نمایش داده می‌شوند.
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
            <h3 className="font-semibold mb-3">چه زمانی از کاروسل استفاده کنیم؟</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>گالری تصاویر و محصولات.</li>
              <li>بنرهای تبلیغاتی و هیرو اسکشن.</li>
              <li>تستیمونیال‌ها و نظرات کاربران.</li>
              <li>نمایش کارت‌ها یا آیتم‌ها در فضای محدود.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">گزینه opts</h3>
            <p className="text-muted-foreground">
              برای حلقه بی‌نهایت از{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                opts={"{{ loop: true }}"}
              </code>{" "}
              استفاده کنید. مستندات کامل Embla Carousel را برای گزینه‌های بیشتر
              ببینید.
            </p>
          </div>
        </div>
      </section>

      {/* Usage */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نحوه استفاده (Usage)</h2>
        <InlineCodeBlock code={usageCode} />
      </section>

      {/* Advanced Examples */}
      <ComponentExampleGroup
        title="مثال‌های پیشرفته"
        titleEn="Advanced Examples"
      >
        <SubExample
          title="دسترسی به API"
          titleEn="API Access"
          description="استفاده از setApi برای کنترل کاروسل به‌صورت برنامه‌ای و نمایش شماره اسلاید فعلی."
          code={`import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";

export default function ApiExample() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div>
      <Carousel setApi={setApi}>
        <CarouselContent>
          <CarouselItem>...</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <p className="text-sm text-muted-foreground mt-2">
        اسلاید {current} از ...
      </p>
    </div>
  );
}`}
        >
          <div className="text-sm text-muted-foreground">
            نمونه زنده در بخش API Reference قابل مشاهده است.
          </div>
        </SubExample>
      </ComponentExampleGroup>
    </div>
  );
}
