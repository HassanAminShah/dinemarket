import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import brushed from "../../../public/brushedRaglan.png";
import cameryn from "../../../public/Cameryn.png";
import flexSweatshirt from "../../../public/FlexSweatshirt.png";
import flexSweatpant from "../../../public/FlexSweatpants.png";
import pinkFleece from "../../../public/pinkFleeceSweatpants.png";
import liteSweatpants from "../../../public/liteSweatpants.png";
import imperialAlpacaHoodie from "../../../public/imperialAlpacaHoodie.png";
import flexPushButtonBomber from "../../../public/flexPushButtonBomber.png";
import muscleTank from "../../../public/muscleTank.png";
import brushedBomber from "../../../public/brushedbomber.png";
import raglanSweatshirt from "../../../public/raglanSweatshirt.png";
import Image from "next/image";
import Link from "next/link";
function ProductCard() {
  const imgz = [
    {
      cover: brushed,
      iname: "Brushed Raglan Sweatshirt",
      iprice: "$195",
      href: "/female",
    },

    {
      cover: cameryn,
      iname: "Cameryn Sash Tie Dress",
      iprice: "$545",
      href: "/male",
    },
    {
      cover: flexSweatshirt,
      iname: "Flex Sweatshirt",
      iprice: "$175",
      href: "/female",
    },
    {
      cover: flexSweatpant,
      iname: "Flex Sweatpant",
      iprice: "$175",
      href: "/female",
    },
    {
      cover: pinkFleece,
      iname: "Pink Fleece Sweatpants",
      iprice: "$195",
      href: "/female",
    },
    {
      cover: liteSweatpants,
      iname: "Lite Sweatpants",
      iprice: "$150",
      href: "/female",
    },
    {
      cover: imperialAlpacaHoodie,
      iname: "Imperial Alpaca Hoodie",
      iprice: "$525",
      href: "/female",
    },

    {
      cover: flexPushButtonBomber,
      iname: "Flex Push Button Bomber",
      iprice: "$225",
      href: "/female",
    },
    {
      cover: muscleTank,
      iname: "Muscle Tank",
      iprice: "$75",
      href: "/female",
    },
    {
      cover: brushedBomber,
      iname: "Brushed Bomber",
      iprice: "$75",
      href: "/female",
    },
    {
      cover: raglanSweatshirt,
      iname: "Raglan Sweatshirt",
      iprice: "$195",
      href: "/female",
    },
  ];
  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex justify-center items-center h-full my-20 max-w-[90%] xl:max-w-[95%] 2xl:max-w-[100%] ">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-[63%] sm:max-w-[67%] lg:max-w-[90%] xl:max-w-[88%] flex justify-between"
        >
          <CarouselContent>
            {imgz.map((el, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 w-[90%] xl:basis-1/3 flex flex-col justify-center items-center"
              >
                <Link href={el.href} key={el.href}>
                  <div>
                    <Image src={el.cover} width={350} height={400} alt="/" />
                    <div className="flex flex-col w-full justify-start   font-bold pt-3">
                      <div>{el.iname}</div>
                      <div>{el.iprice}</div>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
            {/* {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))} */}
          </CarouselContent>
          {/* <CarouselPrevious /> */}
          {/* <CarouselNext /> */}
        </Carousel>
      </div>
    </div>
  );
}

export default ProductCard;
