import ItemCard from "../components/ItemCard";
import { newArrivals } from "../data";
import { LogoCalvin, LogoGucci, LogoPrada, LogoVersace, LogoZara } from "../icons";

function Home() {
    return (
        <main className="font-inter">
            <section id="hero" className="relative flex flex-col md:flex-row bg-custom-gray">
                <div className="flex flex-col z-10 gap-4 px-4 pt-10 md:py-24 md:ps-[6.25rem] md:pe-0 md:w-1/2">
                    <h1 className="font-montserrat font-black uppercase text-4xl md:text-7xl">
                        FIND CLOTHES <br />
                        THAT MATCHES <br />
                        YOUR STYLE
                    </h1>
                    <p className="font-inter text-stone-500 max-w-[60ch] text-sm md:text-base">
                        Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                    </p>
                    <button className="font-inter bg-black rounded-full py-3.5 text-white font-medium my-2 md:my-4 md:max-w-56">
                        Shop Now
                    </button>
                    <ul className="flex flex-wrap justify-center gap-3 md:justify-start md:mt-4 md:flex-nowrap">
                        <li>
                            <h4 className="font-inter font-bold text-2xl md:text-4xl">200+</h4>
                            <p className="font-inter text-stone-500 text-xs md:text-base">International Brands</p>
                        </li>
                        <span className="bg-stone-200 mx-8 w-0.5 md:hidden"></span>
                        <li className="border-stone-200 md:border-x-2 md:px-8 md:mx-8">
                            <h4 className="font-inter font-bold text-2xl md:text-4xl">2,000+</h4>
                            <p className="font-inter text-stone-500 text-xs md:text-base">High-Quality Products</p>
                        </li>
                        <li className="flex flex-col items-center basis-full md:block md:basis-auto">
                            <h4 className="font-inter font-bold text-2xl md:text-4xl">30,000+</h4>
                            <p className="font-inter text-stone-500 text-xs md:text-base">Happy Customers</p>
                        </li>
                    </ul>
                </div>
                <div className="relative overflow-hidden md:px-4 md:w-1/2">
                    <img className="md:absolute" src={"./hero.png"} alt={"Men and women models"} />
                </div>
            </section>
            <section id="brands" className="flex bg-black py-12 md:px-[6.25rem]">
                <ul className="flex flex-wrap grow text-white gap-y-5 justify-evenly md:gap-5 xl:justify-between">
                    <li className="flex basis-1/4 justify-center xl:block xl:basis-auto"><LogoVersace className="h-6 sm:h-8 lg:h-10" /></li>
                    <li className="flex basis-1/4 justify-center xl:block xl:basis-auto"><LogoZara className="h-6 sm:h-8 lg:h-10" /></li>
                    <li className="flex basis-1/4 justify-center xl:block xl:basis-auto"><LogoGucci className="h-6 sm:h-8 lg:h-10" /></li>
                    <li className="flex basis-1/4 justify-center xl:block xl:basis-auto"><LogoPrada className="h-6 sm:h-8 lg:h-10" /></li>
                    <li className="flex basis-1/4 justify-center xl:block xl:basis-auto"><LogoCalvin className="h-6 sm:h-8 lg:h-10" /></li>
                </ul>
            </section>
            <section id="trending" className="py-20">
                <div className="flex flex-col items-center md:px-[6.25rem]">
                    <h2 className="font-montserrat font-black text-5xl uppercase">
                        New Arrivals
                    </h2>
                    <div>
                        {
                            newArrivals.map(item => <ItemCard
                                id={item.id}
                                name={item.name}
                                imgUrl={item.imgUrl}
                                price={item.price}
                                rating={item.rating}
                                discount={item.discount}
                            />)
                        }
                    </div>
                    <button className="font-inter min-w-56 border border-stone-200 rounded-full py-3.5 font-medium my-4">
                        View All
                    </button>
                </div>
                <div className="flex flex-col items-center md:px-[6.25rem]">
                    <h2 className="font-montserrat font-black text-5xl uppercase">
                        Top Selling
                    </h2>
                    <div>


                    </div>
                    <button className="font-inter min-w-56 border border-stone-200 rounded-full py-3.5 font-medium my-4">
                        View All
                    </button>
                </div>
            </section>
            <section id="browse" className="px-4 md:px-[6.25rem]">
                <div className="bg-custom-gray rounded-[2.5rem] px-6 pt-10 pb-8 md:py-16 md:px-16 md:space-y-12">
                    <h2 className="font-montserrat font-black text-5xl uppercase text-center">
                        Browse By Dress Style
                    </h2>
                    <div className="flex flex-wrap gap-5">
                        <div className="flex basis-1/3 md:min-h-60 bg-white rounded-[1.25rem] px-9 py-6">
                            <h3 className="font-inter font-bold text-4xl">Casual</h3>
                        </div>
                        <div className="flex basis-1/2 grow md:min-h-60 bg-white rounded-[1.25rem] px-9 py-6">
                            <h3 className="font-inter font-bold text-4xl">Formal</h3>
                        </div>
                        <div className="flex basis-1/2 grow md:min-h-60 bg-white rounded-[1.25rem] px-9 py-6">
                            <h3 className="font-inter font-bold text-4xl">Party</h3>
                        </div>
                        <div className="flex basis-1/3 md:min-h-60 bg-white rounded-[1.25rem] px-9 py-6">
                            <h3 className="font-inter font-bold text-4xl">Gym</h3>
                        </div>
                    </div>
                </div>
            </section>
            <section id="testimonials" className="ps-4 md:px-[6.25rem] py-20">
                <div>
                    <h2 className="font-montserrat font-black text-5xl uppercase">
                        Our Happy Customers
                    </h2>
                    <div>
                        <button>
                            {"<"}
                        </button>
                        <button>
                            {">"}
                        </button>
                    </div>
                </div>

            </section>
        </main>
    )
}
export default Home;
