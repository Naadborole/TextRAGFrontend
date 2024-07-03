export default function ChatInput() {

    return (

        <div className="flex flex-col justify-between text-white w-full">
            <div className="flex items-stretch border-solid border-b border-b-black">
                <h3 className="p-4">Chat</h3>
            </div>
            <div className="flex-1 p-4">

            </div>
            <div className="flex justify-self-end flex-row pl-40 pr-40 pt-5 pb-5 gap-4 mb-4">
                <div className="flex bg-rich-black w-full items-center p-2 rounded-2xl focus-within:border focus-within:border-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
                    </svg>

                    <input type="text" id="Chat" class="bg-transparent border-none text-sm block w-full p-2.5 dark:bg-rich-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none" placeholder="Type Here" />

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>


                </div>
            </div>
        </div>
    )
}