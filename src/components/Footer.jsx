const Footer = () =>
{
    return (
        <div className='text-gray-600 text-[12px] flex flex-col'>
            <span>All Rights Reserved © 2024 WalkInTubQuotes.com</span>
            <span>Trademark and Patents featured on this website belong to their respective owners.</span>
            <ul className='flex lg:flex-row md:flex-row flex-col lg:gap-4 md:gap-4 gap-2'>
                <li className=' underline outline-none' ><a href="" >Terms and Condition</a></li>
                <li className=' underline outline-none'><a href="" >Privacy Policy & Contact</a></li>
                <li className=' underline outline-none'><a href="" >California Privacy</a></li>
                <li className=' underline outline-none'><a href="https://www.walkintubquotes.com/contractor-sign-up#/" target='_blank'>Join our Services Pro Network</a></li>
            </ul>
        </div>
    );
};
export default Footer;