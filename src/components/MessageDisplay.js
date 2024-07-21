export default function MessageDisplay({message, type}) {

    let mssgClass = "flex flex-row" +  (type === "AI" ? " justify-end " : " justify-start ") + "w-full"

    return (
        <div className={mssgClass}>
            <div className="p-4 max-w-[60%] bg-rich-black rounded-xl">
                <p className="whitespace-pre-wrap">{message}</p>
            </div>
        </div>
    )
}