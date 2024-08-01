import GetInTouch from "@/components/contact";
import Testimonial from "@/components/testimomnial";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-white text-black flex-col items-center justify-between p-24">
      <Testimonial/>
      <GetInTouch/>
    </main>
  );
}
