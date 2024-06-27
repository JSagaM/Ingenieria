import '../../index.css';
import { SimpleButton } from '../SimpleButton.jsx'

export function Welcome({ username }) {
    return (
        <>
            <div className='p-14 flex items-center justify-between gap-10 rounded-2xl font-main text-custom-dark bg-custom-light-blue max-sm:flex-col-reverse border-solid border-custom-blue border-[0.5px] border-opacity-50'>
                <div className='grid gap-4 max-sm:justify-items-center max-sm:text-center'>
                    <h1 className='text-5xl font-secondary font-black'>Welcome, {username}!</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibu</p>
                    <SimpleButton href="{#}" name="View Events" />
                </div>
                <div>
                    <p className='bg-custom-green text-center p-10 rounded-lg'>You have 2 pending tasks for today!</p>
                </div>
            </div>
        </>
    )

}