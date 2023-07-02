import Link from "next/link";

const RightSide = () => {
  return (
    <div className=" h-full flex flex-col items-center justify-end gap-28">
      <Link href="mailto:jakareya1306@gmail.com">
        <p className="text-sm tracking-widest rotate-90  text-gray-400">
          Jakareya1306@gmail.com
        </p>
      </Link>
      <span className="w-[2px] h-32 bg-gray-600"></span>
    </div>
  );
};
export default RightSide;
