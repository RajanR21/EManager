import React, { ReactNode } from "react";
import Navbar from "./(components)/Navbar";
import Sidebar from "./(components)/Sidebar";

type Props = {};

const DashboardWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
      <Sidebar />
      <main className="flex w-full flex-col bg-gray-50 dark:bg-dark-bg">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardWrapper;
