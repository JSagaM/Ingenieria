import '../../index.css';
import { EditButton } from '../navigation/EditButton';

export function MainInfo({ username, profileImg, location, occupation }) {
    return (
        <>
            <div className='w-full md:p-[60px] p-[20px] flex flex-col md-flex-row items-start rounded-2xl font-main border-solid border-[0.5px] border-custom-blue border-opacity-50 bg-white relative'>

                <div className='flex max-sm:flex-col flex-row md:gap-[40px] gap-[20px] justify-between text-custom-dark '> {/**profile content */}

                    {/**profile image */}
                    <div>
                        <img className='w-32 h-32 md:w-[180px] md:h-[180px] rounded-full ' src={profileImg} alt="" />
                    </div>
                    {/**profile image */}

                    {/**profile info */}
                    <div className='flex gap-4 flex-col'>
                        <h1 className='text-[40px] font-secondary font-bold '>{username}</h1>

                        <div className='flex gap-2 items-center'>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_2557_13)">
                                    <path d="M16.043 14.0006H7.957C6.64281 14.0022 5.3829 14.525 4.45363 15.4542C3.52435 16.3835 3.00159 17.6434 3 18.9576V24.0006H21V18.9576C20.9984 17.6434 20.4756 16.3835 19.5464 15.4542C18.6171 14.525 17.3572 14.0022 16.043 14.0006V14.0006Z" fill="#5F5FF6" />
                                    <path d="M12 12C15.3137 12 18 9.31371 18 6C18 2.68629 15.3137 0 12 0C8.68629 0 6 2.68629 6 6C6 9.31371 8.68629 12 12 12Z" fill="#5F5FF6" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2557_13">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p className='text-[20px] opacity-75 font-medium'>{occupation}</p>
                        </div>

                        <div className='flex gap-2 items-center'>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_2557_19)">
                                    <path d="M19.0709 2.92896C18.1432 1.99428 17.0401 1.25202 15.8248 0.744804C14.6096 0.237586 13.3061 -0.024606 11.9892 -0.0267205C10.6723 -0.028835 9.36801 0.22917 8.15112 0.732483C6.93422 1.2358 5.82872 1.9745 4.89808 2.9062C3.96744 3.8379 3.22998 4.94423 2.72804 6.1617C2.22611 7.37916 1.96958 8.68377 1.97318 10.0006C1.97679 11.3175 2.24045 12.6207 2.74905 13.8354C3.25764 15.0501 4.00114 16.1524 4.93687 17.079L11.9999 23.987L19.0709 17.071C20.9462 15.1956 21.9997 12.6521 21.9997 9.99996C21.9997 7.34783 20.9462 4.80432 19.0709 2.92896V2.92896ZM15.9999 11H12.9999V14H10.9999V11H7.99987V8.99996H10.9999V5.99996H12.9999V8.99996H15.9999V11Z" fill="#5161FF" />
                                </g>
                                <circle cx="12" cy="10" r="5" fill="white" />
                                <defs>
                                    <clipPath id="clip0_2557_19">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <p className='text-[20px] opacity-75 font-medium'>{location}</p>
                        </div>
                    </div>
                    {/**profile info */}

                </div> {/**profile content */}

                <EditButton href="#"/>
            </div>
        </>
    )
}