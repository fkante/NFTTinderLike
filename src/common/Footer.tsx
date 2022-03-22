import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-300">
      <div className="max-w-6xl mx-auto py-6 px-6 lg:px-8 sm:flex sm:flex-row justify-between">
        <div>
          <div className="text-xs text-gray-600 mt-5">
            &copy; 2022 FK & SJ
          </div>
        </div>
        <div className="flex flex-col justify-center text-sm text-gray-600 mt-5 md:mt-0">
          <div>FK & SJ, France</div>
        </div>
      </div>
    </footer>
  );
}
