"use client";
import NewsRow from "@/components/news/NewsRow";
import NewsSm from "@/components/news/NewsSm";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Quicksand } from "next/font/google";
import { marked } from "marked";
import DOMPurify from "dompurify";
import { Skeleton } from "@/components/ui/skeleton";

const quicksand = Quicksand({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function page() {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    const fetchMarkdown = async () => {
      const res = await fetch(
        "https://xenodochial-perlman-taj1wyikh.storage.iran.liara.space/news/file/first-post.md"
      );
      const mdText = await res.text();

      const dirtyHTML: string = marked(mdText) as string;

      // تمیز کردن HTML برای امنیت
      const cleanHTML: string = DOMPurify.sanitize(dirtyHTML);
      setContent(cleanHTML);
    };

    fetchMarkdown();
  }, []);
  return (
    <div className="px-24 pt-5">
      <div>
        <h3 className="font-bold">SAUDI ARABIA</h3>
      </div>
      <div className="flex flex-col gap-5 items-center justify-center mt-7">
        <h4 className="bg-blue-500 text-sm p-[2px] px-5 font-bold  text-white rounded-2xl">
          SAUDI ARABIA
        </h4>
        <h1 className=" text-5xl font-bold px-16 text-center">
          All that glitters in the Saudi League is not gold
        </h1>
        <p className={`text-center px-32`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga numquam
          facilis praesentium quaerat Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Fuga numquam facilis praesentium quaerat
        </p>
      </div>
      <div className="grid grid-cols-12 gap-5 mt-16">
        <div className="col-span-12">
          <div className="">
            <div>
              <Link href={"/news/3"}>
                <img
                  src="/images/test/1.avif"
                  className="w-full rounded-md"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-5 mt-20">
        <div className="col-span-8 border-r pr-10">
          <p className={`text-xl ${quicksand.className}`}>
            En este primer tramo de la era Xabi Alonso al frente del Real
            Madrid, varios nombres han comenzado a emerger con fuerza dentro del
            nuevo proyecto. Jugadores como Gonzalo García, Dean Huijsen o Arda
            Güler han dado un paso al frente y se han ganado la confianza del
            técnico vasco con actuaciones destacadas y una rápida adaptación a
            las exigencias del equipo.
            <br />
            <br />
            Sin embargo, como suele ocurrir en el fútbol de élite, cada
            aparición estelar suele venir acompañada de una pérdida de espacio
            para otros. Brahim Díaz se presenta como uno de los principales
            damnificados en este proceso de transición. La tendencia quedó
            especialmente reflejada durante el Mundial de Clubes, un torneo que,
            por las rotaciones y la carga de partidos, podría haber representado
            una buena oportunidad para él.
          </p>
          <div className="w-full my-8 overflow-hidden rounded-sm">
            <img
              src="/images/test/2.avif"
              className="w-full rounded-sm hover:scale-125"
              alt=""
            />
          </div>
          <p className={`text-xl ${quicksand.className}`}>
            En este primer tramo de la era Xabi Alonso al frente del Real
            Madrid, varios nombres han comenzado a emerger con fuerza dentro del
            nuevo proyecto. Jugadores como Gonzalo García, Dean Huijsen o Arda
            Güler han dado un paso al frente y se han ganado la confianza del
            técnico vasco con actuaciones destacadas y una rápida adaptación a
            las exigencias del equipo.
            <br />
            <br />
            Sin embargo, como suele ocurrir en el fútbol de élite, cada
            aparición estelar suele venir acompañada de una pérdida de espacio
            para otros. Brahim Díaz se presenta como uno de los principales
            damnificados en este proceso de transición. La tendencia quedó
            especialmente reflejada durante el Mundial de Clubes, un torneo que,
            por las rotaciones y la carga de partidos, podría haber representado
            una buena oportunidad para él.
          </p>
          {content ? (

            <div
            className="prose mx-auto font-sans"
            dangerouslySetInnerHTML={{ __html: content }}
            />
          ): (
            <Skeleton className="h-96 w-full bg-zinc-400 rounded-none " />
          )}
        </div>
        <div className="col-span-4 flex flex-col gap-96 justify-center">
          <div className="flex flex-col justify-center ">
            <div className="border-b py-3">
              <NewsSm />
            </div>
            <div className="border-b py-3">
              <NewsRow />
            </div>
            <div className="border-b py-3">
              <NewsRow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
