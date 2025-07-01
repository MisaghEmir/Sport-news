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
        <div>{nav}</div>
      </div>
    </div>
  );
}
