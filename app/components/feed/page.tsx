import React from "react";
import Post from "../Post/page";
import Stories from "../stories/page";
import Miniprofile from "../miniprofile/page";
import Suggetions from "../suggetions/page";

export default function Feed() {
  return (
   <main className=" grid grid-cols-1
   md:grid-cols-2 md:max-w-3xl xl:grid-cols-3
   xl:max-w-6xl mx-auto
   ">
    <section className="col-span-2">

<Stories/>
<Post/>
    </section>
    <section>
 <Miniprofile/>
 <Suggetions/>
    </section>

   </main>
  )
}
