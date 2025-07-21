import React from "react";

export default function layout({
  children,
  nav,
}: {
  children: React.ReactNode;
  nav: React.ReactNode;
}) {
  return (
    <div className="w-full">
      <div>{children}</div>
      <div className="w-full">
        <div>{nav}</div>
      </div>
    </div>
  );
}
