import Link from "next/link";

const Navigation = ({ title, image }: { title: string; image: string }) => {
  return (
    <div>
      <div className="bg-color_bg_00 opacity-70 text-white">
        <div className="flex justify-between pl-7 md:pl-32 border-b border-color_border_70">
          <div className="flex items-end py-5">
            <div>
              <img src={image} className="h-[4.7rem]" alt="" />
            </div>
            <div>
              <h1 className=" text-4xl font-bold pl-2">{title}</h1>
              <p className="pl-2">Spain</p>
            </div>
          </div>
          <div className="flex justify-end "></div>
        </div>
        <div className="flex justify-between px-10 md:px-32 pr-24 pt-3">
          <div className="flex  sticky top-0 gap-8 font-bold text-sm">
            <Link
              href="./"
              className="border-theme_border_100 border-b-4 border-transparent px-2 pb-1 footballnav"
            >
              Latest news
            </Link>
            <Link
              href="/football"
              className="border-theme_border_100 border-b-4 border-transparent px-2 pb-1 footballnav"
            >
              Club info
            </Link>
            <Link
              href="./squad"
              className="hover:border-theme_border_100 border-b-4 border-transparent px-2 pb-1"
            >
              Squad
            </Link>
            <Link
              href="./squad"
              className="hover:border-theme_border_100 border-b-4 border-transparent px-2 pb-1"
            >
              Schedule
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
