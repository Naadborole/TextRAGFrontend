export default function
    DocumentList() {

    var documentList = [{ "name": "Document 1" }, { "name": "Document 2" }, { "name": "Document 3" }]


    return (
        <div>
            <div className="flex justify-center items-stretch border-solid border-b-2 border-b-black">
                <h3 className="p-4">Uploaded Documents</h3>
            </div>
            <div className="flex flex-auto mt-3 p-4 flex-col">
                {documentList.map((item) => (
                    <div className="flex items-center h-10">
                        {item.name}
                    </div>
                ))}
            </div>
        </div>
    )
}