

function ItemCard() {
    const handleButtonClick = () => {
        alert("button clicked");
    };

    return (
        <div id="card-container" className=" px-5 py-5 flex flex-row gap-5 flex-wrap rounded-lg">
            
            <div id="card" className="size-60  shadow-xl">
                <div id="card-picture" className="py-2 px-3">
                    <img src="" alt="Item picture" />
                    <div id="card-information" className="py-12">
                        <h2 className="font-mono font-bold py-7 px-3 uppercase ">Item 1</h2>
                        <div id="card-button" className="py-5 px-3">
                            <button
                                className="px-5 py-1 border-2 border-black hover:bg-gray-500 hover:text-white"
                                id="btn1"
                                onClick={handleButtonClick}
                            >
                                Like
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div id="card" className="size-60  shadow-xl">
                <div id="card-picture" className="py-2 px-3">
                    <img src="" alt="Item picture" />
                    <div id="card-information" className="py-12">
                        <h2 className="font-mono font-bold py-7 px-3 uppercase ">Item 1</h2>
                        <div id="card-button" className="py-5 px-3">
                            <button
                                className="px-5 py-1 border-2 border-black hover:bg-gray-500 hover:text-white"
                                id="btn1"
                                onClick={handleButtonClick}
                            >
                                Like
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div id="card" className="size-60  shadow-xl">
                <div id="card-picture" className="py-2 px-3">
                    <img src="" alt="Item picture" />
                    <div id="card-information" className="py-12">
                        <h2 className="font-mono font-bold py-7 px-3 uppercase ">Item 1</h2>
                        <div id="card-button" className="py-5 px-3">
                            <button
                                className="px-5 py-1 border-2 border-black hover:bg-gray-500 hover:text-white"
                                id="btn1"
                                onClick={handleButtonClick}
                            >
                                Like
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemCard;