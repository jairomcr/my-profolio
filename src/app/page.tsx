import About from "@/components/about-me";
import Introduction from "@/components/introduction";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="pb-40" >
      <Navbar/>
      <Introduction/>
      <About/>
    </main>
  );
}
