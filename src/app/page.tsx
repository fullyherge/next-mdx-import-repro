import dynamic from "next/dynamic";
import Image from "next/image";
// import Stuff from "./stuff.mdx"; // This works

export default async function Home() {
  const Stuff = dynamic(() => import(`./stuff.mdx`)); // This doesn't work
  // const Stuff = await import(`./stuff.mdx`); // This doesn't work either
  return (
    <div>
      <Stuff />
    </div>
  );
}
