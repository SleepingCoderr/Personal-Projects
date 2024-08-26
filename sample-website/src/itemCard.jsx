document.getElementById('btn1').onclick = () => {
    alert("button clicked");
}


function ItemCard() {
    return (
        <div id="card-container" className="border-2 border-black px-5 py-2 flex flex-row gap-4 flex-wrap">

            <div id="card" className="size-60 border-2 border-black">
                <div id="card-picture" className="py-2">
                    <img src="" alt="Item picture" />
                    <div id="card-information" className="py-7 px-2">
                        <h2 className="font-mono font-bold">Item 1</h2>
                        <div id="card-button" className="py-16">
                            <button className="px-5 py-1 border-2 border-black hover:bg-gray-500 hover:text-white" id="btn1">Like</button>
                        </div>
                    </div>
                </div>
            </div>

           
        </div>
    )
}

export default ItemCard