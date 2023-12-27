import React from 'react'

const Menu = () => {
    const posts = [
        {
            id: 1,
            title: "faqih",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quas!",
            img: "/bg.png"
        },
        {
            id: 2,
            title: "faqih madani",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quas!",
            img: "/bg.png"
        },
        {
            id: 3,
            title: "faqih 3",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quas!",
            img: "/bg.png"
        },
        {
            id: 4,
            title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit Lorem, ipsum dolor sit amet consectetur adipisicing elit",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quas!",
            img: "/bg.png"
        },
    ]

    return (
        <div>
            <h1 className='text-lg font-semibold mb-5'>Other news you may like</h1>
            <div className='grid min-[400px]:grid-cols-2 md:grid-cols-1 gap-10 min-[400px]:gap-5 lg:gap-10'>
                {posts.map(post => (
                    <div key={post.id} className='cursor-pointer hover:underline'>
                        <img className='rounded h-42 w-full object-cover' src={post.img} alt={post.title} />
                        <h1 className='text-xl mt-2 font-bold line-clamp-2'>{post.title}</h1>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Menu 