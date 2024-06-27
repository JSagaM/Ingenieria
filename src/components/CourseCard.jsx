import myImage from '../assets/imgs/course-placeholder.png';
import '../index.css';

export function CourseCard({ title }) {
    return (
        <>
            <div className='p-4 bg-white rounded-xl border-solid border-custom-blue border-[0.5px] border-opacity-50'>
                <img className='h-fit w-full' src={myImage} alt="" />
                <h3 className='text-center font-main font-bold my-5'>{title}</h3>
            </div>
            
        </>
    )

}