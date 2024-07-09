import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { Link, useNavigate } from 'react-router-dom';

const Products = () => {
    const navigate = useNavigate();
    const [show, setShow] = React.useState(false);

    const handleShowMore = () => {
        const showDiv = document.getElementById("showMore");

        setShow(!show);
        !show
            ?
            showDiv.className = "grid gap-x-4 gap-y-6 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4 " :
            showDiv.className = "grid gap-x-4 gap-y-6 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4 hidden"
    }

    useEffect(() => {
        const loginData = localStorage.getItem('login');
        if (!loginData || loginData.length === 0 || loginData === 'undefined') {
            alert("Please Login...");
            navigate('/signin');
            return;
        }
    }, [])

    return (
        <>
            <div className='container mx-auto p-4'>
                <Navbar categories={false} />
                <div className="bg-white py-6 sm:py-8 lg:py-12">
                    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                        <div className="mb-6 flex items-end justify-between gap-4">
                            <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                                Product List
                            </h2>
                            {show ? (<>
                                <button
                                    onClick={() => { handleShowMore() }}
                                    className="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
                                >
                                    Less
                                </button>
                            </>) : (
                                <button
                                    onClick={() => { handleShowMore() }}
                                    className="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
                                >
                                    Show more
                                </button>
                            )}
                        </div>
                        <div className="grid gap-x-4 gap-y-6 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
                            {/* product - start */}
                            <div>
                                <Link
                                    href="#"
                                    className="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1590756254933-2873d72a83b6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        loading="lazy"
                                        alt="Photo by Austin "
                                        className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                    />
                                </Link>
                                <div className="flex flex-col">
                                    <span className="text-gray-500">AC</span>
                                    <Link
                                        href="#"
                                        className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                                    >
                                        LG
                                    </Link>
                                </div>
                            </div>
                            {/* product - end */}
                            {/* product - start */}
                            <div>
                                <Link
                                    href="#"
                                    className="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1566917064245-1c6bff30dbf1?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        loading="lazy"
                                        alt="Photo by engin akyurt"
                                        className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                    />
                                </Link>
                                <div className="flex flex-col">
                                    <span className="text-gray-500">AC</span>
                                    <Link
                                        href="#"
                                        className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                                    >
                                        LG
                                    </Link>
                                </div>
                            </div>
                            {/* product - end */}
                            {/* product - start */}
                            <div>
                                <Link
                                    href="#"
                                    className="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
                                >
                                    <img
                                        src="https://plus.unsplash.com/premium_photo-1715620329655-b61bec83764c?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        loading="lazy"
                                        alt="Photo by Austin Wade"
                                        className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                    />
                                </Link>
                                <div className="flex flex-col">
                                    <span className="text-gray-500">AC</span>
                                    <Link
                                        href="#"
                                        className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                                    >
                                        Daikin
                                    </Link>
                                </div>
                            </div>
                            {/* product - end */}
                            {/* product - start */}
                            <div>
                                <Link
                                    href="#"
                                    className="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1617861648989-76a572012089?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        loading="lazy"
                                        alt="Photo by Austin Wade"
                                        className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                    />
                                </Link>
                                <div className="flex flex-col">
                                    <span className="text-gray-500">AC</span>
                                    <Link
                                        href="#"
                                        className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                                    >
                                        Daikin
                                    </Link>
                                </div>
                            </div>
                            {/* product - end */}
                        </div>
                        <br />

                        <div className=" hidden " id="showMore" >
                            {/* product - start */}
                            <div>
                                <Link
                                    href="#"
                                    className="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1590756254933-2873d72a83b6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        loading="lazy"
                                        alt="Photo by Austin Wade"
                                        className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                    />
                                </Link>
                                <div className="flex flex-col">
                                    <span className="text-gray-500">AC</span>
                                    <Link
                                        href="#"
                                        className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                                    >
                                        LG
                                    </Link>
                                </div>
                            </div>
                            {/* product - end */}
                            {/* product - start */}
                            <div>
                                <Link
                                    href="#"
                                    className="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1566917064245-1c6bff30dbf1?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        loading="lazy"
                                        alt="Photo by engin akyurt"
                                        className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                    />
                                </Link>
                                <div className="flex flex-col">
                                    <span className="text-gray-500">AC</span>
                                    <Link
                                        href="#"
                                        className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                                    >
                                        LG
                                    </Link>
                                </div>
                            </div>
                            {/* product - end */}
                            {/* product - start */}
                            <div>
                                <Link
                                    href="#"
                                    className="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
                                >
                                    <img
                                        src="https://plus.unsplash.com/premium_photo-1715620329655-b61bec83764c?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        loading="lazy"
                                        alt="Photo by Austin Wade"
                                        className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                    />
                                </Link>
                                <div className="flex flex-col">
                                    <span className="text-gray-500">AC</span>
                                    <Link
                                        href="#"
                                        className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                                    >
                                        Daikin
                                    </Link>
                                </div>
                            </div>
                            {/* product - end */}
                            {/* product - start */}
                            <div>
                                <Link
                                    href="#"
                                    className="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1617861648989-76a572012089?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        loading="lazy"
                                        alt="Photo by Austin Wade"
                                        className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                    />
                                </Link>
                                <div className="flex flex-col">
                                    <span className="text-gray-500">AC</span>
                                    <Link
                                        href="#"
                                        className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                                    >
                                        Daikin
                                    </Link>
                                </div>
                            </div>
                            {/* product - end */}
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Products