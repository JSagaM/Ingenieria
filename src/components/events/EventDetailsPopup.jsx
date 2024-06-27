import '../../index.css';

export function EventDetailsPopup({ eventName, course, date, category, status, description, eventImg }) {
    return (
        <>
            <div className='flex justify-center items-center fixed  top-0 bottom-0 w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.5)] z-[999] text-custom-dark font-main'>
                <div className='flex flex-col md:w-[60vw] max-sm:w-[90vw] h-[auto] p-6 md:p-[40px] bg-white rounded-2xl gap-[40px] relative'>

                    {/* Contenedor de imagen y datos de evento */}
                    <div className='w-[100%] max-sm:flex-col flex-row flex gap-[20px] justify-between'>
                        <div className='flex flex-col gap-[20px]'>
                            <h2 className='font-secondary text-[40px] font-bold'>{eventName}</h2>
                            <div className='grid grid-cols-2 text-[14px] gap-4'>
                                <p className='font-bold'>Course</p>
                                <p className='font-light'>{course}'</p>

                                <p className='font-bold'>Due Date</p>
                                <p className='font-light'>{date}</p>

                                <p className='font-bold'>Category</p>
                                <p className='font-light'>{category}</p>

                                <p className='font-bold'>Status</p>
                                <p className='font-light'>{status}</p>
                            </div>
                        </div>

                        <div>
                            <img className='object-cover rounded-2xl max-sm:w-[200px] max-sm:h-[120px] w-[400px] h-[220px]' src={eventImg} alt="" />
                        </div>



                    </div>

                    {/* Contenedor de descripción */}
                    <div className='w-[100%] grid gap-[20px]'>
                        <h3 className='text-[24px] font-bold'>Description</h3>
                        <p className='text-[14px] font-light'>{description}</p>
                    </div>

                    {/* Contenedor de botones */}
                    <div className='w-[100%] flex flex-row justify-center items-center gap-4 max-sm:flex-col'>
                    <a className='text-[15px] text-custom-dark font-semibold border-2 border-custom-dark rounded-md text-center px-6 py-2 w-[160px] transition-all duration-300 hover:bg-custom-dark hover:text-white' href="">Back</a>
                        <a className='text-[15px] text-white font-semibold border-2 border-custom-blue bg-custom-blue shadow-[0_8px_28px_0_rgba(81,97,255,0.3)] rounded-md text-center px-6 py-2 w-[160px] transition-all duration-300 hover:opacity-90 hover:shadow-[0_8px_28px_0_rgba(81,97,255,0.5)]' href="">Mark as Done</a>
                    </div>

                    {/* Botón de cierre */}
                    <a className='transition-all duration-300 ea absolute top-4 right-4  rounded-bl-lg rounded-tr-lg ' href="">
                        <svg className='hover:scale-125 transition-all duration-300' width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_2558_20)">
                                <path d="M24 1.414L22.586 0L12 10.586L1.414 0L0 1.414L10.586 12L0 22.586L1.414 24L12 13.414L22.586 24L24 22.586L13.414 12L24 1.414Z" fill="#333333" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2558_20">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                </div>
            </div>
        </>
    )
}