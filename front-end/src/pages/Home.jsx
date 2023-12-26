import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
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
            title: "mantap",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quas!",
            img: "/bg.png"
        },
    ]


    return (
        <>
            <img className='absolute -z-10 h-screen w-screen object-cover' src="./esports.jpg" alt="esports" />
            <div className='absolute -z-10 h-screen w-full  bg-black bg-opacity-80' ></div>
            <div className='pt-24 md:pt-28'>
                <div className='container mx-auto'>
                    <div className='h-[600px] text-slate-100 flex flex-col items-center text-center'>
                        <h1 className='text-5xl sm:text-6xl font-bold mt-16 sm:mt-20 md:mt-24'>Welcome to E-Sports News!</h1>
                        <p className='mt-10 w-11/12 sm:w-9/12 md:w-1/2'>Immerse yourself in the latest and most in-depth world of E-Sports news. We are the go-to source for all the latest updates on games, tournaments, star players, and the hottest trends in the E-Sports universe. From gaming arenas to behind-the-scenes stories, we bring it all right to your fingertips.</p>
                        <div className="down-arrow"></div>
                    </div>
                    <h1 className='text-4xl font-bold mb-8'>Recent News 🔥</h1>
                    <div className='grid gap-x-10 gap-y-10 sm:gap-y-14 sm:gap-x-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pb-40'>
                        {
                            posts.map((post) => (
                                <div className='grid gap-2' key={post.id}>
                                    <img className='object-cover h-48 w-full rounded' src={post.img} alt={post.title} />
                                    <h1 className='text-2xl font-bold'>{post.title}</h1>
                                    <p>{post.desc}</p>
                                    <div className='flex justify-end'>
                                        <Link to={`/post/${post.id}`}>
                                            <p className='bg-red-900 text-slate-100 font-medium p-2 rounded inline-block'>Read More</p>
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home