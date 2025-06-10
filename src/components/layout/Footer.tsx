import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className="text-color_text_20  bg-background_body dark:bg-background_body_dark  text410  dark:text-white fixed bottom-0 left-0 w-full h-[29px] text-[11px] ">
      <div className="border-color_border_80 border-t dark:border-color_border_40 w-full h-full flex items-center">
        <div className="flex">
          <div className="flex justify-center px-7 border-l border-color_border_60">
            <Link href={"/overview"}>More Victory City</Link>
          </div>
          <div className="flex justify-center px-7 border-l border-color_border_60">
            English
          </div>
          <div className="flex justify-center px-7 border-l border-color_border_60">
            Try Victory City Pro
          </div>
          <div className="flex justify-center px-7 border-l border-color_border_60">
            More Victory City
          </div>
        </div>
        <div className="flex gap-5">
          <div>TOU</div>
          <div>Privacy</div>
          <div>Community</div>
          <div>Help</div>
          <div>Cookie preferences</div>
        </div>
        <div className="flex justify-end gap-5 flex-1 pr-2">
          <div>
            <img
              src="/images/logo/logo.png"
              className="w-9 h-9 bg-transparent"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}
