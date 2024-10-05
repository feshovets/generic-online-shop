function ItemCard({
    id,
    name,
    imgUrl,
    price,
    rating,
    discount,
}: {
    id: string,
    name: string,
    imgUrl: string,
    price: number,
    rating: number,
    discount?: number
}) {
    return (
        <div key={id} className="flex flex-col space-y-1 md:space-y-2">
            <div className="bg-custom-gray rounded-[1.25rem] aspect-square overflow-hidden md-1 md:mb-2">
                <img src={imgUrl} alt={name} />
            </div>
            <h3 className="font-bold md:text-xl">
                {name}
            </h3>
            <div>
                <ul>
                </ul>
                <p className="text-xs md:text-sm">
                    <span className="text-black">{rating}/</span>
                    <span className="text-stone-500">5</span>
                </p>
            </div>
            <div className="flex items-center space-x-1 md:space-x-2.5">
                <span className="text-xl md:text-2xl font-bold text-black">${discount ? price * (1 - discount / 100) : price}</span>
                {
                    discount &&
                    <>
                        <span className="text-xl md:text-2xl font-bold line-through text-stone-400">
                            ${price}
                        </span>
                        <span className="flex justify-center items-center text-[0.625rem] md:text-xs text-red-500 bg-red-200 rounded-full font-medium h-4 w-8 md:h-6 md:w-12">
                            -{discount}%
                        </span>
                    </>
                }
            </div>
        </div >
    )
}

export default ItemCard;