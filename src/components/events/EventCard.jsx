import '../../index.css';

import { SimpleButton } from '../SimpleButton';

export function EventCard({ description, eventName, taskImg, category }) {
    return (
        <>
            <div className='w-auto p-[20px] flex max-sm:flex-col md:flex-col xl:flex-row items-start gap-6 max-sm:gap-4 rounded-[0.75rem] font-main bg-white relative text-custom-dark border-solid border-custom-blue border-[0.5px] border-opacity-50'>
                <img className='w-[160px] h-[160px] max-sm:w-[140px] max-sm:h-[140px] object-cover rounded-md' src={taskImg} alt="" />
                <div className='flex flex-col gap-5'>
                    <h2 className='font-secondary font-bold text-[24px]'>{eventName}</h2>
                    <p className='text-[14px] font-normal opacity-75'>{description}</p>
                    <div className='flex flex-row justify-between items-center gap-[10px]'>
                        <p className='text-[12px] font-bold'>{category}</p>
                        <a className='text-[12px] text-center bg-custom-blue text-white px-6 py-1 rounded-md hover:opacity-90 duration-300 transition-all shadow-[0_8px_28px_0_rgba(81,97,255,0.25)] ' href="">See more</a>
                    </div>
                </div>
            </div>
        </>
    )
}