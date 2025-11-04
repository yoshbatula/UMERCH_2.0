import Model from '../../images/Model.jpg'
export default function Knowledge() {

    return (
        <div className='mt-8 flex flex-col items-center text-center'>
            <div className='relative'>
                <img 
                src={Model} 
                alt="Model"
                className='w-[100rem] h-[31rem] object-cover'
                />
                <div className='absolute inset-0 bg-[#413101] opacity-40'></div>
                <div className='absolute inset-0 flex flex-col items-center justify-center text-white gap-6'>
                    <div className='text-start ml-85'>
                        <span className='font-semibold text-[16px]'>EXPLORE</span>
                        <div className='mt-2 font-semibold text-[36px] font-family: "Cormont Garamond"'>
                            <h1>Elevate your fashion, embrace</h1>
                            <h1>UM Timeless Style!</h1>
                        </div>
                        <div className='mt-1 flex flex-col font-semibold text-[14px]'>
                            <span>Explore our collections today and experience the joy of fashion.</span>
                            <span>Shop now for the ultimate casual style!</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    );
}