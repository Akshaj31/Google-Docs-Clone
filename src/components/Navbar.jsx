import React, { useRef, useState } from 'react';
import logo from '/logo.svg';
import share from '/share.svg';

const Navbar = () => {
    const titleRef = useRef(null);
    const [title, setTitle] = useState('Untitled Document');

    const onClick = () => {
        if (titleRef.current) {
            titleRef.current.select();
        }
    }

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleBlur = () => {
        if (title.trim() === "") {
            setTitle("Untitled Document");
        }
    }

    const inputStyle = {
        width: `${(title === 'Untitled Document' ? title.length * 11 : title.length * 10 + 15)}px`, // Adjust the multiplier and add some extra width for better fitting
        maxWidth: '100%', // Ensure input doesn't overflow its container
    };

    return (
        <nav className='flex items-center md:px-2 py-3 justify-between'>
            <div className='flex gap-2 items-center'>
                <img src={logo} alt="logo" className='h-[40px]'/>
                <div className='relative group'>
                    <input 
                        type="text" 
                        value={title} 
                        className='text-lg' 
                        ref={titleRef} 
                        onClick={onClick} 
                        onChange={handleChange}
                        onBlur={handleBlur} // Handle onBlur event
                        style={inputStyle} // Set width dynamically
                    />
                    <div 
                        className='absolute left-1/2 transform -translate-x-1/2 mt-1 text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black text-white py-[0.12rem] px-1 rounded'
                        style={{ bottom: '-100%', left: '50%' }} // Adjust positioning
                    >
                        rename
                    </div>
                </div>
            </div>
            <div className='flex cursor-pointer'>
                <div className='border p-2 px-4 rounded-full flex gap-2'>
                    <h1>Share</h1>
                    <img src={share} alt="" className='' />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
