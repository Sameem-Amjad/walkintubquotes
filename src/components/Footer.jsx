import { useState } from "react";
import arrayPartners, { privacyPolicyContent,contentArray } from "../components/arraysFormodal";
import { termsAndConditionsArray } from "../components/arraysFormodal";

const Footer = () =>
{
    const [ isModalOpen, setModalOpen ] = useState( false );
    const [ isPrivacyModalOpen, setPrivacyModalOpen ] = useState( false );
    const [ isPartnersModalOpen, setPartnersModalOpen ] = useState( false );
    const [ isJoinOurNetworkModalOpen, setJoinOurNetworkModalOpen ] = useState( false );
    const openModal = () =>
    {
        setModalOpen( true );
    };

    const closeModal = () =>
    {
        setModalOpen( false );
        setPrivacyModalOpen( false );
        setPartnersModalOpen( false );
        setJoinOurNetworkModalOpen( false );
    };
    const openPartnersModal = () =>
    {
        setPartnersModalOpen( true );
    };
    const openPrivacyModal = () =>
    {
        setPrivacyModalOpen( true );
    };
    const openJoinOurNetworkModalOpen = () =>
    {
        setJoinOurNetworkModalOpen( true );
    };
    return (
        <div className='text-gray-600 text-[12px] flex flex-col'>
            <span>All Rights Reserved © 2024 WalkInTubQuotes.com</span>
            <span>Trademark and Patents featured on this website belong to their respective owners.</span>
            <ul className='flex lg:flex-row md:flex-row flex-col lg:gap-4 md:gap-4 gap-2'>
                <li className=' underline outline-none hover:cursor-pointer' onClick={ openModal }>Terms and Condition</li>
                <li className=' underline outline-none hover:cursor-pointer' onClick={ openPrivacyModal }>Privacy Policy & Contact</li>
                <li className=' underline outline-none hover:cursor-pointer' onClick={ openPartnersModal }>California Privacy</li>
                <li className=' underline outline-none hover:cursor-pointer' onClick={openJoinOurNetworkModalOpen}>Join our Services Pro Network</li>
            </ul>
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
            { isJoinOurNetworkModalOpen && (
                <div className="fixed  inset-0 z-50 overflow-y-auto   bg-gray-600 bg-opacity-75 flex items-center justify-center  " onClick={ closeModal }>
                    {/* Modal Content */ }

                    <div className=" h-[100%] flex  flex-col p-8 rounded-lg w-[60%] text-[8px]  text-justify items-center ">
                        <div className="bg-white w-full rounded-t-lg justify-center flex">
                            <span className=" font-bold lg:text-[24px] md:text-[24px] sm:text-[24px] text-black text-center  p-2 w-full   ">Join Our Network. <span className="underline">Why?</span></span>
                            <button onClick={ closeModal } className="lg:text-xl md:text-xl text-md pl-4 pr-4 rounded-3xl bg-black text-white font-bold -mr-5 -mt-5 mb-5 ">X</button>
                        </div>
                        <ul className="text-black w-full rounded-b-lg  bg-white p-6 lg:text-[18px] md:text-[18px] sm:text-[18px] list-disc">
                            { contentArray.map( ( e, index ) => (
                                <li className="" key={ index }>{ e }</li>
                            ) ) } </ul>

                        <span className="p-2"> </span>
                    </div>


                </div>
            ) }
        </div>

    );
};
export default Footer;