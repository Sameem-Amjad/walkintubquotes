import Footer from "../components/Footer";
import Header from "../components/Header";
import checkarrow from '../assets/download.svg';
import arrow from '../assets/arrow_line.png';
import { useState, useEffect } from "react";
import absaab from '../assets/absasb.png';

import arrayPartners, { privacyPolicyContent } from "../components/arraysFormodal";
import { termsAndConditionsArray } from "../components/arraysFormodal";
import { useNavigate } from "react-router-dom";


const FinalForm = () =>
{
    const [ isModalOpen, setModalOpen ] = useState( false );
    const [ fullName, setFullName ] = useState( "" );
    const [ streetAddress, setStreetAddress ] = useState( "" );
    const [ city, setCity ] = useState( "United States" );
    const [ phoneNumber, setPhoneNumber ] = useState( "" );
    const [ email, setEmail ] = useState( "" );
    const [ isPhoneNumberValid, setPhoneNumberValid ] = useState( true );
    const [ isPrivacyModalOpen, setPrivacyModalOpen ] = useState( false );
    const [ isPartnersModalOpen, setPartnersModalOpen ] = useState( false );
    const [ isChangeLocation, setIsChangeLocation ] = useState( false );
    const [ zipCode, setZipCode ] = useState( "" );
    const [ button, setButton ] = useState( "Submit" );
    const [ emailSendingUrl, setEmailUrl ] = useState( "" );
    const navigate = useNavigate();
    const [disabled,setDisabled]=useState("")
    useEffect( () =>
    {
        const data = JSON.parse( localStorage.getItem( "User" ) );
        setEmailUrl( JSON.stringify( import.meta.env.VITE_REACT_EMAIL_SENDING_URL ) );
        // console.log( data);
        const load = async () =>
        {
            let response = await fetch( `https://api.zippopotam.us/us/${ data.zipCode }` );
            if ( response.ok )
            {
                let responseData = await response.json();
                responseData = responseData.places[ 0 ];
                // console.log( responseData[ "place name" ] );
                // console.log( responseData[ "state abbreviation" ] );
                setCity( `${ responseData[ "place name" ] }, ${ responseData[ "state abbreviation" ] } ` );
            } else
            {
                console.error( `Error: ${ response.status } - ${ response.statusText }` );
            }
        };
        load();
    }, [] );
    useEffect( () =>
    {
        if ( zipCode !== "" )
        {
            const load = async () =>
            {
                let response = await fetch( `https://api.zippopotam.us/us/${ zipCode }` );
                if ( response.ok )
                {
                    let responseData = await response.json();
                    responseData = responseData.places[ 0 ];
                    // console.log( responseData[ "place name" ] );
                    // console.log( responseData[ "state abbreviation" ] );
                    setCity( `${ responseData[ "place name" ] }, ${ responseData[ "state abbreviation" ] } ` );
                } else
                {
                    console.error( `Error: ${ response.status } - ${ response.statusText }` );
                    setCity( "Wrong zip code" );
                }
            };
            load();
        }
    }, [ phoneNumber ] );
    const handleZipCodeChange = ( e ) =>
    {
        // Ensure only numbers are entered by using a regular expression
        const inputValue = e.target.value.replace( /\D/g, "" );
        setZipCode( inputValue );

    };
    const openModal = () =>
    {
        setModalOpen( true );
    };

    const closeModal = () =>
    {
        setModalOpen( false );
        setPrivacyModalOpen( false );
        setPartnersModalOpen( false );
    };
    const validatePhoneNumber = ( number ) =>
    {
        // Use a regular expression to check if the phone number matches the format (555) 555-1234
        const regex = /^\(\d{3}\) \d{3}-\d{4}$/;
        return regex.test( number );
    };

    const handlePhoneNumberChange = ( e ) =>
    {
        const inputValue = e.target.value;
        setPhoneNumber( inputValue );
        setPhoneNumberValid( validatePhoneNumber( inputValue ) );
    };
    useEffect( () =>
    {
        if ( isModalOpen )
        {
            document.body.style.overflow = 'hidden';
        } else
        {
            document.body.style.overflow = 'unset';
        }

        // Cleanup the effect
        return () =>
        {
            document.body.style.overflow = 'unset';
        };
    }, [ isModalOpen ] );

    const openPartnersModal = () =>
    {
        setPartnersModalOpen( true );
    };
    const openPrivacyModal = () =>
    {
        setPrivacyModalOpen( true );
    };
    const Submit = async () =>
    {
        setButton("Please wait ...")
        let data = JSON.parse( localStorage.getItem( "User" ) );
        if ( data && fullName!="" && email!="" && phoneNumber!="" )
        {
            const response = await fetch( 'https://nodemailersameem-amjad.onrender.com/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify( {
                    to: email,
                    subject: 'Test Email',
                    text: `Dear ${ fullName }\nWelcome to Walk In Tub Quotes\nYour Address: ${ streetAddress }\nYour Phone Number: ${ phoneNumber }\nReason To Buy: ${ data.reason } \n Type of Tub You Choose: \n${ data.selectedInputs.map( ( e, index ) => ( `${ index }: ${ e }\n` ) ) }\nYour Timeframe: ${ data.timeframe }\nYour authority on Property: ${ data.property }\nYour Zip code: ${ zipCode }\n `,
                } ),
            } );

            const result = await response.text();
            if ( result )
            {
                setButton( "Successfully send Email" );
                localStorage.clear();
                setTimeout( () =>
                {
                    navigate( "/firstForm" );
                }, 1000 );
            }
        }
        else
        {
            if ( data )
            {
                alert("Please fill this form")
            } else
            {
                alert( "Please Fill the first Form " )
                navigate( "/firstForm" );    
            }
        }
        console.log( result );
    };
    return (
        <div className='flex min-h-screen flex-col items-center gap-4 tracking-widest overflow-x-hidden mb-8 mt-8'>
            <Header />
            <div className='flex lg:flex-row flex-col-reverse  items-center   lg:w-[100%]  lg:h-[850px]'>
                <div className='flex flex-col max-h-full bg-[#252d38] lg:w-[400px] w-[100%] lg:h-[100%] p-2 gap-2 items-center justify-around'>
                    <div className="flex flex-col items-center">
                        <img className=" w-20 h-20 " src={ checkarrow } alt="checkArrow" />
                        <strong className="text-[24px]">PERFECT!</strong>
                        <span className="font-normal text-[17px] tracking-widest leading-tight">Your cost estimates are ready!</span>
                        <span className="font-normal w-[95%] text-[17px] tracking-wider leading-tight">Simply enter your details so we can send them to you.</span>
                    </div>
                    <div className="flex h-[40%] w-full items-start justify-center">
                        <div className='lg:flex hidden flex-row w-[100%] -ml-4 items-center mb-4'><span className='w-[80%] p-[7px] font-bold text-lg bg-white text-right text-[#39a2ae]'>Start Comparing Now!</span><img src={ arrow } alt="" /></div>
                    </div>
                </div>
                <div className='flex lg:w-[430px] lg:h-[100%] w-[100%] items-center bg-gray-200 justify-start flex-col'>
                    <div className='bg-[#39a2ae] flex flex-row lg:h-[60px] items-center p-3 gap-1 w-[100%]  font-bold text-white justify-center'>Great! Please complete to receive your estimates. </div>
                    <div className={ ` text-black w-[94%] flex flex-col items-start p-2  ` }>
                        <span className=' font-bold leading-7 text-[18px] -tracking-wide '>Full Name</span>
                        <div className=' w-[95%]'>
                            <input
                                type='text'
                                className='border border-slate-400 tracking-wider p-1 pl-3 w-[100%] outline-none'
                                placeholder='Please enter first and last name'
                                value={ fullName }
                                onChange={ ( e ) => setFullName( e.target.value ) }
                            />
                        </div>
                    </div>
                    <div className={ ` text-black w-[94%] flex flex-col items-start p-2  ` }>
                        <span className=' font-bold leading-7 text-[18px] -tracking-wide '>Street Address</span>
                        <div className=' w-[95%]'>
                            <input type='text' className='border border-slate-400 tracking-wider p-1 pl-3 w-[100%] outline-none' placeholder={ `Please enter the project's street address?` }
                                value={ streetAddress }
                                onChange={ ( e ) => setStreetAddress( e.target.value ) }
                            />
                        </div>
                    </div>
                    <div className="flex flex-row w-[91%] justify-between"><span className="text-black text-[14px] text-left w-[95%]">{ city }</span> <span className="underline hover:text-black text-[#1e71b8] hover:cursor-pointer text-[14px]  w-[70%]" onClick={ () => setIsChangeLocation( !isChangeLocation ) }>{isChangeLocation===false?"Change Location":"No Change"} </span></div>
                    { isChangeLocation === true ?
                        <div className={ ` text-black w-[95%] flex flex-col items-start p-3  lg:mt-[0px]` }>
                            <span className='font-bold'>Please enter your ZIP Code:</span>
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
                        </div> : ''
                    }
                    <div className={ ` text-black w-[94%] flex flex-col items-start p-2  ` }>
                        <span className=' font-bold leading-7 text-[18px] -tracking-wide '>Phone <span className="text-[12px] tracking-widest font-thin text-[#a5a5a5]">We highly respect your privacy</span></span>
                        <div className=' w-[95%]'>
                            <input
                                type='text'
                                className={ `border ${ isPhoneNumberValid ? 'border-slate-400' : 'border-red-500' } tracking-wider p-1 pl-3 w-[100%] outline-none` }
                                placeholder='Your Phone Number'
                                value={ phoneNumber }
                                onChange={ handlePhoneNumberChange }
                            />
                            { !isPhoneNumberValid && (
                                <p className="text-red-500 text-[12px]">Please enter a valid American phone number (e.g., (555) 555-1234).</p>
                            ) }
                        </div>
                    </div>
                    <div className={ ` text-black w-[94%] flex flex-col items-start p-2  ` }>
                        <span className=' font-bold leading-7 text-[18px] -tracking-wide '>Email <span className="text-[12px] tracking-widest font-thin text-[#a5a5a5]">Absolutely no spam</span></span>
                        <div className=' w-[95%]'>
                            <input
                                type='email'
                                className='border border-slate-400 tracking-wider p-1 pl-3 w-[100%] outline-none'
                                placeholder='Your Email Address'
                                value={ email }
                                onChange={ ( e ) => setEmail( e.target.value ) }
                            />
                        </div>
                    </div>
                    <button className='bg-[#fe7f2d] text-2xl mt-[10px] font-extrabold w-[88%] mb-4 p-3 -ml-5 rounded-md hover:bg-[#f76201]' onClick={ Submit }>{ button }</button>

                    <div className="text-[12px] text-[#999] w-[88%] mr-4 text-justify">
                        By submitting, I agree to the <span className="underline outline-none hover:cursor-pointer hover:text-black " onClick={ openModal }>Terms and Conditions</span> and <span className="underline outline-none hover:cursor-pointer hover:text-black " onClick={ openPrivacyModal }>Privacy Policy</span>  and authorize up to 4 home improvement companies, their contractors and <span className="underline outline-none hover:cursor-pointer hover:text-black " onClick={ openPartnersModal }>partners</span> to contact me with home improvement offers or service by telephone calls, artificial voice, email, and pre-recorded/text messages, using an automated telephone technology, to the number I provided above, even if my number is a mobile number or is currently listed on any state, federal or corporate Do Not Call list. I understand that my consent here is not a condition of purchase of any goods or services. Message and data rates may apply.
                    </div>
                    <div className="w-[90%] mt-auto mb-12 flex justify-center"><img className=" w-[60%]" src={ absaab } alt="" /></div>
                </div>
                { isModalOpen && (
                    <div className="fixed  inset-0 z-50 overflow-y-auto   bg-gray-600 bg-opacity-75 flex items-center justify-center  " onClick={ closeModal }>
                        {/* Modal Content */ }

                        <div className=" h-[100%] flex  flex-col p-8 rounded-lg w-[60%] text-[8px]  text-justify items-center ">
                            <div className="bg-white w-full rounded-t-lg justify-center flex">
                                <span className=" font-bold lg:text-[24px] md:text-[24px] sm:text-[24px] text-black text-center  p-2 w-full   ">Terms and Conditions</span>
                                <button onClick={ closeModal } className="lg:text-xl md:text-xl text-md pl-4 pr-4 rounded-3xl bg-black text-white font-bold -mr-5 -mt-5 mb-5 ">X</button>
                            </div>
                            <p className="text-black bg-white p-2 lg:text-[18px] md:text-[18px] sm:text-[18px]">Last updated January, 2024<br />

                                If you continue to browse and use walkintubquotes.com you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern walkintubquotes.com's relationship with you in relation to walkintubquotes.com.
                                <br />
                                The term "walkintubquotes.com" or "us" or "we" refers to the owner of the website. The term "you" refers to the user or viewer of walkintubquotes.com.<br />The use of walkintubquotes.com is subject to the following terms of use:</p>
                            <ul className="text-black list-disc lg:text-[18px] md:text-[18px] sm:text-[18px] w-[100%] m-2 mt-0 p-2 flex rounded-b-lg bg-white flex-col items-center">

                                { termsAndConditionsArray.map( ( e, index ) =>
                                (
                                    <li className="w-[93%]" key={ index }>{ e }</li>
                                ) ) }
                            </ul>
                            {/* Close Button */ }
                            <span className="p-2"> </span>
                        </div>


                    </div>
                ) }
                { isPrivacyModalOpen && (
                    <div className="fixed  inset-0 z-50 overflow-y-auto   bg-gray-600 bg-opacity-75 flex items-center justify-center  " onClick={ closeModal }>
                        {/* Modal Content */ }

                        <div className=" h-[100%] flex  flex-col p-8 rounded-lg w-[60%] text-[8px]  text-justify items-center ">
                            <div className="bg-white w-full rounded-t-lg justify-center flex">
                                <span className=" font-bold lg:text-[24px] md:text-[24px] sm:text-[24px] text-black text-center  p-2 w-full   ">Privacy Policy</span>
                                <button onClick={ closeModal } className="lg:text-xl md:text-xl text-md pl-4 pr-4 rounded-3xl bg-black text-white font-bold -mr-5 -mt-5 mb-5 ">X</button>
                            </div>

                            <p className="text-black bg-white p-2 lg:text-[18px] md:text-[18px] sm:text-[18px]">Last updated January, 2024<br />
                                walkintubquotes.com collects and uses the personal information that you submit online as described herein. walkintubquotes.com reserves the right to modify the terms of this policy at any time. Such modifications shall become effective immediately upon posting. Your continued use of, or registration with, walkintubquotes.com shall constitute your acceptance of these terms. If you do not agree to the terms of this policy, in whole or in part, you are not authorized to use the website and should terminate registration by following the opt-out instructions.</p>
                            { privacyPolicyContent.map( ( e, index ) => (
                                <div className="flex flex-col w-[100%]" key={ index }><span className=" font-bold lg:text-[24px] md:text-[24px] sm:text-[24px] text-black text-center w-full p-2 bg-white">{ e.heading }</span>
                                    <p className="text-black bg-white p-2 lg:text-[18px] md:text-[18px] sm:text-[18px]">
                                        { e.content }
                                    </p></div>
                            ) ) }

                            <span className="p-2"> </span>
                        </div>


                    </div>
                ) }
                { isPartnersModalOpen && (
                    <div className="fixed  inset-0 z-50 overflow-y-auto   bg-gray-600 bg-opacity-75 flex items-center justify-center  " onClick={ closeModal }>
                        {/* Modal Content */ }

                        <div className=" h-[100%] flex  flex-col p-8 rounded-lg w-[60%] text-[8px]  text-justify items-center ">
                            <div className="bg-white w-full rounded-t-lg justify-center flex">
                                <span className=" font-bold lg:text-[24px] md:text-[24px] sm:text-[24px] text-black text-center  p-2 w-full   ">Matched companies included but not limited to:</span>
                                <button onClick={ closeModal } className="lg:text-xl md:text-xl text-md pl-4 pr-4 rounded-3xl bg-black text-white font-bold -mr-5 -mt-5 mb-5 ">X</button>
                            </div>
                            <ul className="text-black w-full rounded-b-lg  bg-white p-6 lg:text-[18px] md:text-[18px] sm:text-[18px] list-disc">
                                { arrayPartners.map( ( e, index ) => (
                                    <li className="" key={ index }>{ e }</li>
                                ) ) } </ul>

                            <span className="p-2"> </span>
                        </div>


                    </div>
                ) }
            </div>
            <Footer />
        </div>
    );
};
export default FinalForm;