import { Link } from 'react-router-dom';
import { Cart, Profile } from '../icons';

function NavBar() {
    return (
        <nav className='flex items-center md:px-[6.25rem] md:h-24 md:gap-10 shadow-md'>
            <div className='font-montserrat font-black uppercase md:text-3xl'>Shop.co</div>
            <ul className='flex gap-6'>
                <li className='transition-color hover:text-stone-400'><Link to="/">Shop</Link></li>
                <li className='transition-color hover:text-stone-400'><Link to="/">On Sale</Link></li>
                <li className='transition-color hover:text-stone-400'><Link to="/">New Arrivals</Link></li>
                <li className='transition-color hover:text-stone-400'><Link to="/">Brands</Link></li>
            </ul>
            <div className='relative flex grow h-12' role='search'>
                <input
                    className='flex grow bg-custom-gray shadow-inner px-4 rounded-full
                     focus:outline-stone-400 placeholder:text-stone-400'
                    type='text' placeholder={'Search for products...'}
                />
            </div>
            <div className='flex gap-3.5'>
                <Link to="/"><Cart /></Link>
                <Link to="/"><Profile /></Link>
            </div>
        </nav>
    )
}

export default NavBar;