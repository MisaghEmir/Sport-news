import React from "react";

export default function layout({
  children,
  nav,
}: {
  children: React.ReactNode;
  nav: React.ReactNode;
}) {
  return (
    <div>
      <div>{children}</div>
      <div>
        <div className="px-36 mt-20">{nav}</div>
      </div>
    </div>
  );
}
