import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import file from '../assets/filesvg.svg';
import checkingsvg from '../assets/checkingsvg.svg';
import moving from '../assets/moving.svg';
import '../components/LoadingForm.css';
const LoadingForm = () =>
{
    const [ city, setCity ] = useState( "" );
    const [ showComponent, setShowComponent ] = useState( true );
    const [ images, setImages ] = useState( [ moving, moving, moving, moving ] ); // Initial images array
    const navigate = useNavigate();

    useEffect( () =>
    {
        const data = JSON.parse( localStorage.getItem( "User" ) );

        const load = async () =>
        {
            try
            {
                let response = await fetch( `https://api.zippopotam.us/us/${ data.zipCode }` );
                if ( response.ok )
                {
                    let responseData = await response.json();
                    responseData = responseData.places[ 0 ];
                    setCity( `${ responseData[ "place name" ] }, ${ responseData[ "state abbreviation" ] }` );
                } else
                {
                    console.error( `Error: ${ response.status } - ${ response.statusText }` );
                }
            } catch ( error )
            {
                console.error( "Error fetching data:", error );
            }
        };
        const imageChangeTimers = [
            setTimeout( () => setImages( [ checkingsvg, moving, moving, moving ] ), 1000 ),
            setTimeout( () => setImages( [ checkingsvg, checkingsvg, moving, moving ] ), 2000 ),
            setTimeout( () => setImages( [ checkingsvg, checkingsvg, checkingsvg, moving ] ), 3000 ),
            setTimeout( () => setImages( [ checkingsvg, checkingsvg, checkingsvg, checkingsvg ] ), 4000 )
        ];
        const timeout = setTimeout( () =>
        {
            // Hide the component after 7 seconds and navigate to /finalForm
            setShowComponent( false );
            navigate( "/finalForm" );
        }, 5000 );

        load();

        return () =>
        {
            clearTimeout( timeout );
            imageChangeTimers.forEach( clearTimeout );
        };
    }, [ navigate ] );

    return showComponent ? (
        <div className='flex flex-col items-center gap-4 mb-8 mt-8 overflow-hidden fade-down'>
            <Header />
            <div className="bg-[#252d38] w-full flex flex-col p-10 gap-4 items-center">
                <span className="text-[22px] font-bold ">
                    Sit Back While we Find Walk-in Tub Experts in { city }
                </span>
                <span className="text-[20px] tracking-wide leading-6">
                    Compare RISK-FREE Quotes Now for Great Deals
                </span>
                <div className="w-24 h-24 flip-card top-bottom-left-right">
                    <div className="flip-card-inner">
                        <img className="w-full h-full flip-card-image" src={ file } alt="file img" />
                    </div>
                </div>
                <ul className="">
                    <li className="flex flex-row gap-4 items-center">
                        <img className={ `m-2 ${ images[ 0 ] === moving ? 'animate-spin' : '' }` } src={ images[ 0 ] } alt="moving" />
                        <span>Location</span>
                    </li>
                    <li className="flex flex-row gap-4 items-center">
                        <img className={ `m-2 ${ images[ 1 ] === moving ? 'animate-spin' : '' }` } src={ images[ 1 ] } alt="moving" />
                        <span>Walk-In Tub Experts</span>
                    </li>
                    <li className="flex flex-row gap-4 items-center">
                        <img className={ `m-2 ${ images[ 2 ] === moving ? 'animate-spin' : '' }` } src={ images[ 2 ] } alt="moving" />
                        <span>Project Details</span>
                    </li>
                    <li className="flex flex-row gap-4 items-center">
                        <img className={ `m-2 ${ images[ 3 ] === moving ? 'animate-spin' : '' }` } src={ images[ 3 ] } alt="moving" />
                        <span>Price Comparison</span>
                    </li>
                </ul>
            </div>
            <Footer />
        </div>
    ) : null;
};

export default LoadingForm;
