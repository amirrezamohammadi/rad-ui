"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/registry/web/ui";
import { Card, CardContent } from "@/registry/web/ui";

export const code = `import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export default function SizesCarouselExample() {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem className="basis-1/3">
          <Card>
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <span className="text-4xl font-semibold">۱</span>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem className="basis-1/3">
          <Card>
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <span className="text-4xl font-semibold">۲</span>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem className="basis-1/3">
          <Card>
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <span className="text-4xl font-semibold">۳</span>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem className="basis-1/3">
          <Card>
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <span className="text-4xl font-semibold">۴</span>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem className="basis-1/3">
          <Card>
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <span className="text-4xl font-semibold">۵</span>
            </CardContent>
          </Card>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
`;

export default function SizesCarouselExample() {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem className="basis-1/3">
          <Card>
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <span className="text-4xl font-semibold">۱</span>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem className="basis-1/3">
          <Card>
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <span className="text-4xl font-semibold">۲</span>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem className="basis-1/3">
          <Card>
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <span className="text-4xl font-semibold">۳</span>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem className="basis-1/3">
          <Card>
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <span className="text-4xl font-semibold">۴</span>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem className="basis-1/3">
          <Card>
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <span className="text-4xl font-semibold">۵</span>
            </CardContent>
          </Card>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
