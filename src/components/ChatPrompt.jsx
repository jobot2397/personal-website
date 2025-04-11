export const ChatPrompt = () => {
    return (
        <div className="bg-transparent w-full flex flex-col">
            <div className="flex justify-center py-2 text-text font-semibold text-[28px]">
                What can I help with?
            </div>
            <div className="flex justify-center">
                <div className="flex flex-col bg-secondary-grey rounded-3xl min-w-10/12">
                    <div className="flex justify-start pt-4 pb-2 pl-4 text-text text-[14px]">
                        Ask anything
                    </div>
                    <div className="flex items-center justify-between p-2">
                        <div className="flex flex-row gap-2 justify-center">
                            <div className="h-fit bg-transparent rounded-3xl px-4 py-2 border-[1px] border-border text-text text-[13px] font-semibold">
                                Experience
                            </div>
                            <div className="h-fit bg-transparent rounded-3xl px-4 py-2 border-[1px] border-border text-text text-[13px] font-semibold">
                                Patents
                            </div>
                            <div className="h-fit bg-transparent rounded-3xl px-4 py-2 border-[1px] border-border text-text text-[13px] font-semibold">
                                Skills
                            </div>
                            <div className="h-fit bg-transparent rounded-3xl px-4 py-2 border-[1px] border-border text-text text-[13px] font-semibold">
                                Education
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <div className="flex bg-border rounded-full aspect-square justify-center items-center p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="rgb(48, 48, 48)" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}