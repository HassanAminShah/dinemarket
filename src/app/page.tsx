import { FaSearch } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <header className=" mx-[8%] my-[2%] flex justify-between ">
        <div className="flex items-center">
          <Image src="/logo.webp" width={170} height={80} alt={""} />
        </div>
        <div className="flex items-center">
          <div className="flex justify-between items-center lg:text-lg ">
            <div className="text-black mx-4">Female</div>
            <div className="text-black mx-4">Male</div>
            <div className="text-black mx-4">Kids</div>
            <div className="text-black sm:min-w-[100px] mx-4">All-Products</div>
          </div>
        </div>
        <div className="flex items-center border border-b-2 rounded px-1 w-[25%]">
          <FaSearch></FaSearch>
          <Input></Input>
        </div>
        <div className="flex items-center">Cart</div>
      </header>
      <body></body>
    </main>
  );
}
