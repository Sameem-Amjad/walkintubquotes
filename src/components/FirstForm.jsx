
import hero from '../assets/hero.jpg';
import certLogo from '../assets/cert-logos.png';
import CustomSVG from '../components/customSVG';
import arrow from '../assets/arrow_line.png';
import CustomDownSvg from '../components/CustomDownSvg';
import { useState } from 'react';
import CustomCheck from '../components/CustomCheck';
import airmassage from '../assets/airmassage.svg';
import hydroair from '../assets/hydroaircombo.svg';
import soaker from '../assets/soaker.svg';
import unsure from '../assets/unsure.svg';
import hydrojet from '../assets/hydrojet.svg';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useNavigate } from "react-router-dom";
const FirstForm = () =>
{
    //https://api.zippopotam.us/us/40410
    const array = [
        { name: 'soaker', svg: soaker },
        { name: 'Hydro Jet', svg: hydrojet },
        { name: 'Air Massage', svg: airmassage },
        { name: 'Hydro/Air Combo', svg: hydroair },
        { name: 'Please Advise Me', svg: unsure },
    ];
    const [ reason, setReason ] = useState( null );
    const [ timeframe, setTimeFrame ] = useState( null );
    const [ property, setProperty ] = useState( null );
    const [ selectedInputs, setSelectedInputs ] = useState( [] );
    const [ formHeadingColor, setFormHeadingColor ] = useState( 'red' );
    const [ zipCode, setZipCode ] = useState( "" );
    const [ button, setButton ] = useState( "Check Prices Now!" );
    const navigate = useNavigate();
    const handleZipCodeChange = ( e ) =>
    {
        // Ensure only numbers are entered by using a regular expression
        const inputValue = e.target.value.replace( /\D/g, "" );
        setZipCode( inputValue );
    };
    const Submit = () =>
    {
        if ( reason && timeframe && property && selectedInputs.length != 0 && zipCode != "" )
        {
            localStorage.setItem( "User", JSON.stringify( {
                reason,
                timeframe,
                property,
                selectedInputs,
                zipCode
            } ) );
            setReason( null );
            setTimeFrame( null );
            setProperty( null );
            setSelectedInputs( [] );
            setFormHeadingColor( 'red' );
            setZipCode( "" );
            setTimeout( () =>
            {
                navigate( "/loadingForm" );
            }, 500 );
        }
        else
        {
            setButton( "Check Prices Now!" );
            setTimeout( () =>
            {
                navigate( "/g" );
            }, 500 );
        }
    };
    const handleInputChange = ( value ) =>
    {
        setSelectedInputs( ( prevSelectedInputs ) =>
        {
            // Check if the input is already selected
            const isAlreadySelected = prevSelectedInputs.includes( value );

            // If it's selected, remove it; if not, add it to the selectedInputs
            const updatedSelectedInputs = isAlreadySelected
                ? prevSelectedInputs.filter( ( selected ) => selected !== value )
                : [ ...prevSelectedInputs, value ];

            // Update the form heading color based on whether the updatedSelectedInputs is empty or not
            setFormHeadingColor( ( prevColor ) => ( updatedSelectedInputs.length === 0 ? 'red' : 'black' ) );

            return updatedSelectedInputs; // Return the updated state
        } );
    };
    return (
        <div className='flex min-h-screen flex-col items-center gap-4 mb-8 mt-8 overflow-x-hidden'>
            <Header />
            <div className='flex lg:flex-row flex-col-reverse  items-center  lg:w-[100%]  lg:h-[900px]'>
                <div className='flex flex-col max-h-full bg-[#252d38] lg:max-w-[400px] w-[100%] lg:h-[100%] p-2 gap-4 items-center'>
                    <img src={ hero } alt="" />
                    <ul className='flex flex-col gap-4 lg:w-[78%]'>
                        <li className='flex flex-row gap-2 items-center '><div> <CustomSVG /></div> <span className='lg:text-left lg:text-xl'>Competing Quotes Help You Get <strong>Great Deals!</strong></span> </li>
                        <li className='flex flex-row gap-2 items-center '><div> <CustomSVG /></div> <span className='lg:text-left lg:text-xl'>Compare<strong> Local </strong> Pricing on Top Models</span> </li>
                        <li className='flex flex-row gap-2 items-center '><div> <CustomSVG /></div> <span className='lg:text-left lg:text-xl'>Completely <strong>RISK-FREE Service</strong>, No Obligation</span> </li>
                    </ul>
                    <img className='w-[70%] m-3' src={ certLogo } alt="" />
                    <div className=' flex-row w-[100%] hidden lg:flex -ml-4 items-center mt-auto mb-4'><span className='w-[80%] p-[7px] font-bold text-lg bg-white text-right text-[#39a2ae]'>Start Comparing Now!</span><img src={ arrow } alt="" /></div>
                </div>
                <div className='flex lg:w-[430px] lg:h-[100%] w-[100%] items-center bg-gray-200 justify-start flex-col'>
                    <div className='bg-[#39a2ae] flex flex-row lg:h-[60px] items-center p-3 gap-1 w-[100%] justify-center'><CustomDownSvg className="text-white h-4 w-4" /> <span className=' font-bold text-white'>Fill in our form below to unlock SAVINGS!</span> <CustomDownSvg className="text-white h-4 w-4" /> </div>
                    <div className='text-black w-[100%] flex flex-col items-start p-3'>
                        <span className='font-bold'>1. What is your main reason to buy?</span>
                        <div className='mt-[10px]'>
                            <form className='flex flex-col lg:flex-row lg:gap-3 gap-1 justify-center'>
                                <label className='flex flex-row gap-2 items-center font-normal text-gray-600'>
                                    { reason === "safety" ? <CustomCheck height={ 5 } width={ 5 } /> : <input className=' border-0 h-5 w-5' type="radio" name="radioGroup" value="safety" onClick={ ( e ) => setReason( e.target.value ) } /> }
                                    Safety
                                </label>
                                <label className='flex flex-row gap-2 items-center font-normal text-gray-600'>
                                    { reason === "Therapeutic Reasons" ? <CustomCheck height={ 5 } width={ 5 } /> : <input className=' border-0 h-5 w-5' type="radio" name="radioGroup" value="Therapeutic Reasons" onClick={ ( e ) => setReason( e.target.value ) } /> }
                                    Therapeutic Reasons
                                </label>
                                <label className='flex flex-row gap-2 items-center font-normal text-gray-600'>
                                    { reason === "Other" ? <CustomCheck height={ 5 } width={ 5 } /> : <input className=' border-0 h-5 w-5' type="radio" name="radioGroup" value="Other" onClick={ ( e ) => setReason( e.target.value ) } /> }
                                    Other
                                </label>
                            </form>
                        </div>
                    </div>
                    <hr className='w-[90%] h-[2px] bg-slate-300' />
                    <div className='text-black w-[100%] flex flex-col items-start p-3 gap-2'>
                        <h2 style={ { color: formHeadingColor } } className='font-bold'>2. What type of tub are you interested in?</h2>

                        <form className='flex flex-wrap flex-row  items-start gap-1 '>
                            { array.map( ( item, index ) => (

                                <div
                                    className={ `hover:cursor-pointer selectable-input ${ selectedInputs.includes( item.name ) ? 'selected' : ''
                                        } flex flex-col items-center justify-center  border w-28 h-28 lg:w-28 md:w-60 rounded-sm gap-4 ${ selectedInputs.includes( item.name )
                                            ? 'border-shadow-[#4bb5b2] shadow-2xl border-2 border-[#4bb5b2]'
                                            : 'border-black'
                                        }` }
                                    onClick={ () => handleInputChange( item.name ) }
                                    key={ index }
                                >
                                    { selectedInputs.includes( item.name ) ? (
                                        <svg className=' w-10 h-10' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='#39a2ae' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z' /></svg>
                                    ) : (
                                        <img className='w-10 h-10' src={ item.svg } alt={ item.name } />
                                    ) }
                                    <div className='text-[12px]'>{ item.name }</div>
                                </div>


                            ) ) }



                        </form>
                        { selectedInputs.length !== 0 ? '' : <span className='text-[#f76201] text-[12px]  opacity-0 transition-opacity duration-1000 animate__animated animate__fadeIn'>Please select at least one option</span> }
                        <hr className={ `transition-transform duration-1000 transform ${ selectedInputs.length !== 0 ? '' : 'translate-y-[20px]' } w-[90%] h-[2px] mt-[1px] bg-slate-300` } />
                    </div>
                    <div className={ `transition-transform duration-1000 transform ${ selectedInputs.length !== 0 ? '' : 'translate-y-[20px]' } text-black w-[100%] flex flex-col items-start p-3` }>
                        <span className='font-bold'>3. What's your timeframe?</span>
                        <div className='mt-[10px]'>
                            <form className='flex flex-col lg:flex-wrap lg:flex-row lg:gap-3 gap-1 justify-center lg:justify-start'>
                                <label className='flex flex-row gap-2 items-center font-normal text-gray-600'>
                                    { timeframe === "Immediately" ? <CustomCheck height={ 5 } width={ 5 } /> : <input className=' border-0 h-5 w-5' type="radio" name="radioGroup" value="Immediately" onClick={ ( e ) => setTimeFrame( e.target.value ) } /> }
                                    Immediately
                                </label>
                                <label className='flex flex-row gap-2 items-center font-normal text-gray-600'>
                                    { timeframe === "Within 6 Months" ? <CustomCheck height={ 5 } width={ 5 } /> : <input className=' border-0 h-5 w-5' type="radio" name="radioGroup" value="Within 6 Months" onClick={ ( e ) => setTimeFrame( e.target.value ) } /> }
                                    Within 6 Months
                                </label>
                                <label className='flex flex-row gap-2 items-center font-normal text-gray-600'>
                                    { timeframe === "Still planning" ? <CustomCheck height={ 5 } width={ 5 } /> : <input className=' border-0 h-5 w-5' type="radio" name="radioGroup" value="Still planning" onClick={ ( e ) => setTimeFrame( e.target.value ) } /> }
                                    Still planning
                                </label>
                            </form>
                        </div>
                    </div>
                    <hr className={ `transition-transform duration-1000 transform ${ selectedInputs.length !== 0 ? '' : 'translate-y-[20px]' } w-[90%] h-[2px] mt-[10px] bg-slate-300` } />
                    <div className={ `transition-transform duration-1000 transform ${ selectedInputs.length !== 0 ? '' : 'translate-y-[20px]' } text-black w-[100%] flex flex-col items-start p-3` }>
                        <span className='font-bold'>4. Do you own the property?</span>
                        <div className='mt-[10px]'>
                            <form className='flex flex-col lg:flex-wrap lg:flex-row lg:gap-3 gap-1 justify-center lg:justify-start'>
                                <label className='flex flex-row gap-2 items-center font-normal text-gray-600'>
                                    { property === "Yes" ? <CustomCheck height={ 5 } width={ 5 } /> : <input className=' border-0 h-5 w-5' type="radio" name="radioGroup" value="Yes" onClick={ ( e ) => setProperty( e.target.value ) } /> }
                                    Yes
                                </label>
                                <label className='flex flex-row gap-2 items-center font-normal text-gray-600 text-[12px] lg:text-[18px] md:text-[18px]'>
                                    { property === "No, but authorized to make changes" ? <CustomCheck height={ 5 } width={ 5 } /> : <input className=' border-0 h-5 w-5' type="radio" name="radioGroup" value="No, but authorized to make changes" onClick={ ( e ) => setProperty( e.target.value ) } /> }
                                    No, but authorized to make changes
                                </label>
                                <label className='flex flex-row gap-2 items-center font-normal text-gray-600'>
                                    { property === "No" ? <CustomCheck height={ 5 } width={ 5 } /> : <input className=' border-0 h-5 w-5' type="radio" name="radioGroup" value="No" onClick={ ( e ) => setProperty( e.target.value ) } /> }
                                    No
                                </label>
                            </form>
                        </div>
                    </div>
                    <hr className={ `transition-transform duration-1000 transform ${ selectedInputs.length !== 0 ? '' : 'translate-y-[20px]' } w-[90%] h-[2px] mt-[10px] bg-slate-300` } />
                    <div className={ `transition-transform duration-1000 transform ${ selectedInputs.length !== 0 ? '' : 'translate-y-[20px]' } text-black w-[100%] flex flex-col items-start p-3 mb-[15px] lg:mt-[0px]` }>
                        <span className='font-bold'>5. Please enter your ZIP Code:</span>
                        <div className='mt-[10px] w-[95%]'>
                            <input
                                type='number'
                                className='border pl-3 border-slate-400 p-1 w-[100%] outline-none'
                                placeholder='Zip Code'
                                value={ zipCode }
                                onChange={ handleZipCodeChange }
                            />

                        </div>
                        <span className='text-[12px] text-[#ec593c]'>Please Verify The Zip Code</span>
                    </div>
                    <button className='bg-[#fe7f2d] mt-auto text-2xl  font-extrabold w-[88%] mb-4 p-3 -ml-5 rounded-md hover:bg-[#f76201]' onClick={ () =>
                    {
                        Submit();
                        setButton( "Please Wait ..." );
                    } }>{ button }</button>
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default FirstForm;