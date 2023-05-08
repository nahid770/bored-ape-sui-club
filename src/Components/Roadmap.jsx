import React from 'react';
import './Roadmap.css'

const Roadmap = () => {
    return (
        <div className='pb-16 md:pb-32'>
            <h2 className='text-white text-4xl md:text-5xl text-center font-bold pb-24 font-Poppins'>Roadmap</h2>
            <div className='flex justify-center'>
                <div className='h-auto w-4 bg-white rounded-lg'></div>
            </div>



            {/* roadmap-wrapper */}
            <div className='flex flex-col md:flex-row justify-center gap-5 mb-12 mx-6 md:mx-0'>   
                <div data-aos="fade-up" data-aos-duration="2000" className='text-white rounded-md shadow-xl p-5 border-l-4 border-white'>
                    <h5 className='text-2xl pb-3 font-bold font-Roboto'>- PHASE 1</h5>
                    <ul>
                        <li className='font-Roboto'>1. Building a strong and solid community.</li>
                        <li className='font-Roboto'>2. Engage in co-marketing opportunities with partner projects.</li>
                        <li className='font-Roboto'>3. Distribute rewards, whitelists and NFTs throught Twitter and Zaely contests.</li>
                        <li className='font-Roboto'>4. Increase visibility of the project by participating in public events.</li>
                        <li className='font-Roboto'>5. Secure partnership with a Launchpad on Sui.</li>
                        <li className='font-Roboto'>6. Launch our colletion Bored Ape Sui Club on Sui Testnet.</li>
                    </ul>
                </div>
                <div data-aos="fade-up" data-aos-duration="2000" className='text-white rounded-md shadow-xl p-5 border-l-4 border-white'>
                    <h5 className='text-2xl pb-3 font-bold font-Roboto'>- PHASE 2</h5>
                    <ul>
                        <li className='font-Roboto'>1. Building a strong and solid community.</li>
                        <li className='font-Roboto'>2. Engage in co-marketing opportunities with partner projects.</li>
                        <li className='font-Roboto'>3. Distribute rewards, whitelists and NFTs throught Twitter and Zaely contests.</li>
                        <li className='font-Roboto'>4. Increase visibility of the project by participating in public events.</li>
                        <li className='font-Roboto'>5. Secure partnership with a Launchpad on Sui.</li>
                        <li className='font-Roboto'>6. Launch our colletion Bored Ape Sui Club on Sui Testnet.</li>
                    </ul>
                </div>
            </div>
            
            <div className='flex flex-col md:flex-row justify-center gap-5 mb-12 mx-6 md:mx-0'>
                <div data-aos="fade-up" data-aos-duration="2500" className='text-white border-l-4 border-white rounded-md shadow-xl p-5'>
                    <h5 className='text-2xl pb-3 font-bold font-Roboto'>- PHASE 3</h5>
                    <ul className='font-Roboto'>
                        <li>1. Building a strong and solid community.</li>
                        <li>2. Engage in co-marketing opportunities with partner projects.</li>
                        <li>3. Distribute rewards, whitelists and NFTs throught Twitter and Zaely contests.</li>
                        <li>4. Increase visibility of the project by participating in public events.</li>
                        <li>5. Secure partnership with a Launchpad on Sui.</li>
                        <li>6. Launch our colletion Bored Ape Sui Club on Sui Testnet.</li>
                    </ul>
                </div>
                <div data-aos="fade-up" data-aos-duration="2500" className='text-white border-l-4 border-white rounded-md shadow-xl p-5'>
                    <h5 className='text-2xl pb-3 font-bold font-Roboto'>- PHASE 4</h5>
                    <ul className='font-Roboto'>
                        <li>1. Building a strong and solid community.</li>
                        <li>2. Engage in co-marketing opportunities with partner projects.</li>
                        <li>3. Distribute rewards, whitelists and NFTs throught Twitter and Zaely contests.</li>
                        <li>4. Increase visibility of the project by participating in public events.</li>
                        <li>5. Secure partnership with a Launchpad on Sui.</li>
                        <li>6. Launch our colletion Bored Ape Sui Club on Sui Testnet.</li>
                    </ul>
                </div>
            </div>

            <div  className='flex flex-col md:flex-row justify-center mb-5 mx-6 md:mx-0'>
                <div data-aos="fade-up" data-aos-duration="3000" className='text-white border-l-4 border-white rounded-md shadow-xl p-5'>
                    <h5 className='text-2xl pb-3 font-bold font-Roboto'>- PHASE 5</h5>
                    <ul className='font-Roboto'>
                        <li>1. Building a strong and solid community.</li>
                        <li>2. Engage in co-marketing opportunities with partner projects.</li>
                        <li>3. Distribute rewards, whitelists and NFTs throught Twitter and Zaely contests.</li>
                        <li>4. Increase visibility of the project by participating in public events.</li>
                        <li>5. Secure partnership with a Launchpad on Sui.</li>
                        <li>6. Launch our colletion Bored Ape Sui Club on Sui Testnet.</li>
                    </ul>
                </div>
            </div>



            
        </div>
    );
};

export default Roadmap;