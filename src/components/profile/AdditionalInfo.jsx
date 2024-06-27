import '../../index.css';
import { EditButton } from '../navigation/EditButton';

export function AdditionalInfo({ hours, diseases, sports }) {
    return (
        <>
            <div className='w-full  md:p-[60px] p-[20px] md:gap-[40px] gap-[20px] flex flex-col items-start rounded-2xl font-main border-solid border-[0.5px] border-custom-blue border-opacity-50 bg-white relative'>
                {/* Título y botón de edición */}
                <div className='w-full flex justify-between items-center text-custom-dark'>
                    <h1 className='text-2xl md:text-4xl font-secondary font-bold'>Additional Information</h1>
                    <EditButton href="#" />
                </div>
                {/* Título y botón de edición */}

                {/* Contenedor de información */}
                <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-5 text-custom-dark'>
                    {/* Bloques de información */}
                    <div className='flex flex-col gap-1'>
                        <div className='flex gap-2  '>
                            <p className='text-xs md:text-sm opacity-75 font-normal'>Actividades Físicas</p>
                        </div>
                        <p className='text-base md:text-lg font-bold'>{sports}</p>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <div className='flex gap-2  '>
                            <p className='text-xs md:text-sm opacity-75 font-normal'>Horas de sueño</p>
                        </div>
                        <p className='text-base md:text-lg font-bold'>{hours}</p>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <div className='flex gap-2  '>
                            <p className='text-xs md:text-sm opacity-75 font-normal'>Problemas de salud</p>
                        </div>
                        <p className='text-base md:text-lg font-bold'>{diseases}</p>
                    </div>
                    {/* Bloques de información */}
                </div>
                {/* Contenedor de información */}
            </div>
        </>
    )

}