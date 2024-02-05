import logo from '../assets/logo.png';
const Header = () =>
{
    return (
        <div className="flex flex-col items-center">
            <div className='flex flex-row  justify-center items-center lg:gap-4 gap-1 lg:max-w-[430px] lg:w-[100%] lg:max-h-[80px] md:max-w-[430px] sm:max-w-[400px]'>
                <img className=' lg:w-16 lg:h-16 md:w-16 md:h-16 h-10 w-10 text-[#024771]' src={ logo } alt="" />
                <span className='text-[#163c56] font-bold lg:text-[36px] md:text-[32px] text-[24px] '>Walk-InTubQuotes</span>
            </div>
            <span className=' text-[#024771] text-center lg:text-2xl md:text-xl sm:text-xl leading-7 font-normal  '>Get a Safer Walk In Tub at a Better Price!</span>
        </div>
    );
};
export default Header