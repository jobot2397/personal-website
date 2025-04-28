import { useState } from "react";
import ResumeDialog from "./ResumeDialog";
import ContactDialog from "./ContactDialog";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import posthog from "posthog-js";

export const Header = () => {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="flex flex-row justify-between w-full content-center h-fit pb-4">
      <div className="flex items-center justify-center">
        <div className="w-fit h-fit ">
          {/* s */}
          <PencilSquareIcon className="stroke-primary-white size-6 stroke-2" />
        </div>
        <div className="inline-flex w-full justify-center items-center gap-x-1.5 rounded-lg bg-transparent px-2 py-1">
          <div className=" text-text font-sans font-semibold text-[24px] bg-transparent">
            JoeGPT
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-2 items-center">
        <button
          className="text-black h-fit font-sans text-[14px] hover:text-text bg-primary-white rounded-3xl px-4 py-2 hover:bg-border align-middle"
          onClick={() => {setResumeOpen(true); posthog?.capture("Resume Opened");}}
        >
          Resume
        </button>
        <div
          className="bg-transparent h-fit rounded-3xl px-4 py-2 border-[1px] border-border text-text font-sans text-[14px] hover:bg-primary-white hover:text-black"
          onClick={() => {setContactOpen(true); posthog?.capture("Contact Opened");}}
        >
          Contact
        </div>
      </div>
      {resumeOpen && <ResumeDialog setIsOpen={setResumeOpen} />}
      {contactOpen && <ContactDialog setIsOpen={setContactOpen} />}
    </div>
  );
};
