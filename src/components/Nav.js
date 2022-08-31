import React from 'react';

function Nav() {
    const categories = [
        {
            name: 'commercial',
            decription: 'Photo of grocery stores, food trucks, and other commerical projects'
        },
        {
            name: 'portraits', 
            description: 'Portraits of people in my life'
        },
        {
            name: 'food',
            description: 'Delecious delicacies'
        }, 
        {
            name: 'landscape',
            description: 'Fields, farmhouses, waterfalls, nad the beauty of nature'
        }
    ]

    function categorySelected(name) {
        console.log(`${name} clicked`)
    }

    return (
        <header>
            <h2>
                <a href='/'>
                    <span role='img' aria-label='camera'>📸</span> Oh Snaps!
                </a>
            </h2>
            <nav>
                <ul className='flex-row'>
                    <li className='mx-2'>
                        <a href='#about'>About me</a>
                    </li>
                    <li className='mx-2'>
                        <a href='#contact'>Contact</a>
                    </li>
                    {categories.map((category) => (
                        <li className='mx-1' key={category.name}>
                            {/* onClick expects a callback function so it wont be called whenever the componets renders only when cliked */}
                            <span onClick={() => categorySelected(category.name)}>
                                {category.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
};

export default Nav;