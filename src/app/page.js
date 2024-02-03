import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* header */}

      <HomeHeader />

      {/* body */}

      <div className="flex flex-col items-center mt-24">
        <Image src={"/Google.png"} width={"300"} height={"100"} />
        <HomeSearch />
      </div>
    </>
  );
}
