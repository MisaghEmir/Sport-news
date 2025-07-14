import Link from "next/link";
import React from "react";

const NewsLg = () => {
  return (
    <div className="">
      <div>
        <Link href={"/news/3"}>
          <img src="/images/test/1.avif" className="w-full rounded-md" alt="" />
        </Link>
      </div>
      <div className="mt-1">
        <small className="text-color_text_23 text-xs">SAUDI ARABIA</small>
        <h3 className="text-4xl font-bold dark:text-color_text_27 mt-0">
          All that glitters in the Saudi League is not gold
        </h3>
        <p className="text-color_text_16 mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga numquam
          facilis praesentium quaerat eius eaque est similique, nisi odio error
          sunt hic harum illum in reiciendis soluta perspiciatis asperiores. Vel
          molestias illo quidem ipsa laudantium quas deleniti quis perspiciatis,
          minus earum nisi in alias accusantium accusamus optio, omnis,
          recusandae fugiat!
        </p>
        <div className="flex mt-7">
          <small className="text-color_text_23">
            Eduardo Burgos Rodríguez Calum Roche <span>22/08/2024 04:29</span>
          </small>
        </div>
      </div>
    </div>
  );
};

export default NewsLg;
