import Image from "next/image";

export default function Home() {
  return (
    <div className="py-25 flex flex-col items-end justify-end px-10 ">
      <div className="flex flex-col p-5 w-[40vw]">
        <div className=" border rounded w-fit my-3 text-xs border-white py-0.5 px-2 uppercase">available for new opportunities </div>
      <div className="text-6xl font-bold py-3 italic">Ettu Habeebullahi</div>
      <div className="text-3xl font-semibold capitalize py-1 text-wrap">Software Engineer</div>
      <div className="text-lg font-normal py-1 text-wrap">I am a software engineer with a passion for building web applications that are both functional and visually appealing. I have experience in both frontend and backend development, and I am always looking to learn new technologies and improve my skills.</div>

      </div>
      
    </div>
  );
}
