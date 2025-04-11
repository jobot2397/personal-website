export const ChatResponse = ({questionText, responseText}) => {
    return (
        <div className="flex justify-center">
        <div className="h-full flex flex-col gap-4 min-w-3/5">
            <div className="flex justify-end">
                <div className="w-fit text-text bg-border rounded-3xl p-2">
                {questionText}
                </div>
            </div>
            <div className="text-text">
                {responseText}
            </div>
        </div>
        </div>
    )
}