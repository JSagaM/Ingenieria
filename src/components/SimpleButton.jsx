import myImage from '../assets/imgs/task-placeholder.png';
import '../index.css';

export function SimpleButton({ href, name }) {
    return (
        <>
            <a className='font-main font-semibold text-white bg-custom-blue px-10 py-4 w-fit rounded-md hover:opacity-90 duration-300 transition-all shadow-[0_8px_28px_0_rgba(81,97,255,0.35)]' href={href}>{name}</a>
        </>
    )

}