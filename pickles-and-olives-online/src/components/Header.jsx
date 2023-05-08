import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <div className='flex flex-row justify-between items-center bg-themeYellow p-4 w-full'>
            <div className='flex flex-row items-center'>
            <img src='./public/Picklemoji.gif' className='max-h-20'/>
            <NavLink to='/'>
            <h2 className='text-lg p-4'>pickles + olives online</h2>
            </NavLink>
            
            </div>
            <div>
            <NavLink to='/memes'>
            <h2 className='p-4'>make a meme</h2>
            </NavLink>
            </div>
            <div>
            <NavLink to='/caesar-cipher'>
            <h2 className='p-4'>caesar cipher cracker</h2>
            </NavLink>
            </div>
 
      </div>

    )
}

