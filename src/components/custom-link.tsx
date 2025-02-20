import React from "react";

export function CustomLink({
  fontSize,
  children,
}: {
  href?: string;
  fontSize: 14 | 20;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`flex items-center gap-1 cursor-pointer group overflow-hidden leading-none`}
      style={{
        fontSize,
      }}
    >
      <span className="transition-all duration-700 ease-cubic-bezier-link opacity-0 -translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
        ↗
      </span>
      <span
        className={`transition-transform duration-700 ease-cubic-bezier-link group-hover:translate-x-0 ${fontSize === 14 ? "-translate-x-[14px]" : "-translate-x-[20px]"}`}
      >
        {children}
      </span>
      <span className="transition-all duration-700 ease-cubic-bezier-link opacity-1 -translate-x-full group-hover:-translate-y-full group-hover:translate-x-0 group-hover:opacity-0">
        ↗
      </span>
    </div>
  );
}
