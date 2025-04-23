import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function ContactDialog({ setIsOpen }) {
  return (
    <div className="bg-primary-grey/90 fixed inset-0 flex items-center justify-center z-50 p-4">
      <div className="bg-primary-grey rounded-xl w-md sm:w-lg mx-auto overflow-hidden p-2 border-1 border-border">
        <div className="flex justify-end w-full">
          <div
            className="rounded-full p-1 text-primary-white w-fit"
            onClick={() => setIsOpen(false)}
          >
            <XMarkIcon className="size-8" />
          </div>
        </div>
        <div className="flex justify-center py-8">
          <img
            src="/images/profile-thinking.jpeg"
            alt="Profile"
            className="rounded-full max-w-60 border-1 border-border"
          />
        </div>
        <div className="text-balance px-8 pb-8 text-center text-text">
          Thanks for visiting my website! Feel free to reach out via any of the
          methods down below:
        </div>
        <div className="flex flex-row justify-between px-8 pb-4 text-text">
          <div>Email:</div>
          <div>josephflawler@pm.me</div>
        </div>
        <div className="flex flex-row justify-between px-8 pb-4 text-text">
          <div>Phone:</div>
          <div>737-704-7010</div>
        </div>
      </div>
    </div>
  );
}
