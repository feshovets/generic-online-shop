import { FormEvent } from "react";

function PageFooter() {
    return (
        <footer className="flex flex-col font-inter">
            <section className="bg-gradient-to-b from-white from-50% to-50% to-custom-gray px-4 md:px-[6.25rem]">
                <div className="flex flex-col bg-black rounded-[1.25rem] py-9 px-6 md:flex-row md:px-16">
                    <div className="flex shrink items-center">
                        <h3 className="text-white font-montserrat font-black uppercase text-balance text-3xl md:text-5xl">
                            STAY UP TO DATE ABOUT OUR LATEST OFFERS
                        </h3>
                    </div>
                    <form className="flex flex-col gap-3 grow min-w-80 justify-center" id="subscribtion"
                        onSubmit={(e: FormEvent) => {
                            e.preventDefault();
                            console.log("Form submited.")
                        }}
                    >
                        <input className="flex grow h-12 max-h-12 bg-white rounded-full"
                            type={'email'} placeholder={"Enter your email address"}
                        />
                        <button className="flex grow h-12 max-h-12 bg-white rounded-full font-medium justify-center items-center">
                            Subscribe to Newsletter
                        </button>
                    </form>
                </div>
            </section>
            <section className="bg-custom-gray px-4 pb-16 md:pb-20 md:px-[6.25rem]">
                <div className="flex flex-wrap justify-between py-16 gap-6 md:flex-nowrap md:gap-4">
                    <div className="flex flex-col basis-full space-y-6">
                        <h3 className="font-montserrat font-black text-4xl uppercase">Shop.co</h3>
                        <p className="font-inter text-stone-600 text-sm max-w-[45ch] md:max-w-[32ch]">
                            We have clothes that suits your style and which you’re proud to wear. From women to men.
                        </p>
                        <ul>
                            <li><a href="/"></a></li>
                            <li><a href="/"></a></li>
                            <li><a href="/"></a></li>
                            <li><a href="/"></a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col grow basis-2/5 text-sm space-y-4 md:space-y-6 md:text-base justify-start">
                        <h4 className="tracking-widest uppercase font-medium">Company</h4>
                        <ul className="space-y-4 text-stone-600">
                            <li><a href="/">About</a></li>
                            <li><a href="/">Features</a></li>
                            <li><a href="/">Works</a></li>
                            <li><a href="/">Career</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col grow basis-2/5 text-sm space-y-4 md:space-y-6 md:text-base">
                        <h4 className="tracking-widest uppercase font-medium">About</h4>
                        <ul className="space-y-4 text-stone-600">
                            <li><a href="/">Customer Support</a></li>
                            <li><a href="/">Delivery Details</a></li>
                            <li><a href="/">Terms & Conditions</a></li>
                            <li><a href="/">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col grow basis-2/5 text-sm space-y-4 md:space-y-6 md:text-base">
                        <h4 className="tracking-widest uppercase font-medium">FAQ</h4>
                        <ul className="space-y-4 text-stone-600">
                            <li><a href="/">Account</a></li>
                            <li><a href="/">Manage Deliveries</a></li>
                            <li><a href="/">Orders</a></li>
                            <li><a href="/">Payments</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col grow basis-2/5 text-sm space-y-4 md:space-y-6 md:text-base">
                        <h4 className="tracking-widest uppercase font-medium">Resources</h4>
                        <ul className="space-y-4 text-stone-600">
                            <li><a href="/">Free eBooks</a></li>
                            <li><a href="/">Developement Tutorial</a></li>
                            <li><a href="/">How to - Blog</a></li>
                            <li><a href="/">YouTube Playlist</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col items-center space-x-4 border-t-2 border-t-stone-200 py-4 md:py-6 md:flex-row md:justify-between">
                    <p className="text-stone-600">Shop.co © 2000-2024, All Rights Reserved</p>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}

export default PageFooter;