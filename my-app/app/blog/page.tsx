import { Metadata } from "next";

export const metadata: Metadata= {
  // title: "Blog",
  title: {
    absolute: "Blog",
  }
}

export default async function Blog() {
  await new Promise((resolve)=>{
    setTimeout(()=>{
      resolve("Intentional delay");
    },2000)
  })
  return <div>Blog</div>;
}

