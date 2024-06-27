import myImage from '../../assets/imgs/task-placeholder.png';
import { SimpleButton } from '../SimpleButton.jsx'
import '../../index.css';

export function HorizontalCard({ title, course }) {
    return (
        <>
            {/* must change width based on the place where Card is needed */}
            <div className='w-fit grid grid-flow-col gap-5 p-4 bg-white rounded-xl font-main'>
                <div className='grid'>
                    <img className='h-full w-full max-sm:hidden' src={myImage} alt="" />
                </div>

                <div className='grid gap-10 content-between'>
                    <div className='grid gap-4'>
                        <h3 className='font-secondary font-bold text-2xl'>{title}</h3>
                        <p className='font-regular'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore optio rem qui excepturi non, quia sint nesciunt pariatur omnis ut tempore commodi dicta odit quaerat accusantium assumenda illo ad amet?</p>
                    </div>

                    <div className='flex items-center justify-between'>
                        <p className='font-bold'>{course}</p>
                        <SimpleButton href="{#}" name="View Details" />
                    </div>
                </div>

            </div>
        </>
    )

}