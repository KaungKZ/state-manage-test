import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <main className="all-content-wrapper max-w-[1120px] mx-auto  py-8">
        {children}
      </main>
    </>
  );
}
