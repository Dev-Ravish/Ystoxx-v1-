import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar';
import { sampleData } from '../../constants/youtubedata';

const NFT = () => {
    const router = useRouter()
    const query=router.query.nft
    console.log(query)
     const [data, updateData] = useState({
        "name": "Mr. Beast",
        "description": "Mr. Beast",
        "website": "http://axieinfinity.io",
        "image": "https://yt3.ggpht.com/fxGKYucJAVme-Yz4fsdCroCFCrANWqw0ql4GYuvx8Uq4l_euNJHgE-w9MTkLQA805vWCi-kE0g=s176-c-k-c0x00ffffff-no-rj-mo",
        "price": "0.03",
        "currentlySelling": "True",
        "address": "0xe81Bf5A757CB4f7F82a2F23b1e59bE45c33c5b13",
    });
    const [message, updateMessage] = useState("");
    const [currAddress, updateCurrAddress] = useState("0x");
    const [showModal, setShowModal] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [totalNFTsLeft, setTotalNFTsLeft] = useState(100); // Assuming 100 NFTs are left
    useEffect(() => {
        if (query) {
            // Search the sampleData array for an item that matches the 'name' field with the query
            const matchedData = sampleData.find(item => item.name.toLowerCase() === query.toLowerCase());
            if (matchedData) {
                updateData(matchedData);  // Update state with matched data
            } else {
                updateMessage("No matching data found.");
            }
        }
    }, [query]);
    useEffect(() => {
        const container = document.querySelector('.nft-container');
        
        if (container) {
            container.classList.add('fade-in');
        }
    }, []);

    const buyNFT = async () => {
        try {
            // if (typeof window.ethereum === 'undefined') {
            //     throw new Error("No crypto wallet found. Please install MetaMask.");
            // }

            // await window.ethereum.request({ method: 'eth_requestAccounts' });
            // const provider = new ethers.providers.Web3Provider(window.ethereum);
            // const signer = provider.getSigner();

            // const totalPrice = (parseFloat(data.price) * quantity).toFixed(3);
            // const transaction = {
            //     to: data.address,
            //     value: ethers.utils.parseEther(totalPrice.toString())
            // };

            // const tx = await signer.sendTransaction(transaction);
            // await tx.wait();

            updateMessage(`Successfully bought ${quantity} NFT(s)!`);
            setTotalNFTsLeft(prev => prev - quantity);
            setShowModal(false);
        } catch (err) {
            updateMessage("Error: " + err.message);
        }

        const messageElement = document.querySelector('.message');
        if (messageElement) {
            messageElement.classList.add('show-message');
        }
    };

    return (
        <div className="bg-bgBlue min-h-screen px-8 md:px-12">
            <Navbar/>
            <div className="nft-container mt-10 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12 opacity-0">
                <div className="w-full md:w-2/5 image-container mb-10">
                    <img 
                        src={data.image} 
                        alt={data.name}
                        className="w-full rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105 h-3/5"
                    />
                </div>
                <div className="text-white w-full md:w-2/5 space-y-6 bg-dark-gray border border-white p-8 rounded-lg shadow-xl">
                    <h2 className="text-3xl font-bold">{data.name}</h2>
                    <p className="text-xl">{data.description}</p>
                    <div className="flex justify-between items-center">
                        <span className="text-2xl font-semibold"> Current Price: {data.price}</span>
                        
                    </div>
                    <div className="text-center">
                        <span className="text-sm opacity-75">
                            Owner: {`${data.address.slice(0, 6)}...${data.address.slice(-4)}`}
                        </span>
                    </div>
                    {currAddress !== data.address && (
                        <button 
                            className="w-full bg-lightBlue  text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 ease-in-out transform hover:scale-105 active:scale-95"
                            onClick={() => setShowModal(true)}
                        >
                            Buy this NFT
                        </button>
                    )}
                    {currAddress === data.address && (
                        <div className="text-emerald-400 text-center">You are the owner of this NFT</div>
                    )}
                    <div className="message text-green-400 text-center mt-4 opacity-0 transition-opacity duration-300">
                        {message}
                    </div>
                </div>
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                    <div className="bg-black rounded-lg p-6 max-w-sm w-full">
                        <h3 className="text-xl font-bold mb-4 text-gray-400">Buy NFT</h3>
                        <p className="text-gray-300 mb-4">Select the number of NFTs you want to purchase.</p>
                        <div className="mb-4">
                            <label htmlFor="quantity" className="block text-sm font-medium text-gray-400 mb-1">
                                Quantity
                            </label>
                            <input
                                type="number"
                                id="quantity"
                                value={quantity}
                                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                min="1"
                                max={totalNFTsLeft}
                                className="w-full px-3 py-2 border border-white bg-dark-gray rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white"
                            />
                        </div>
                        <p className="text-gray-300 mb-4">
                            Total Price: {(parseFloat(data.price) * quantity).toFixed(3)} ETH
                        </p>
                        <div className="flex justify-end space-x-3">
                            <button
                                onClick={() => setShowModal(false)}
                                className="px-4 py-2 border text-gray-300 border-gray-300 hover:bg-gray-800 rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={buyNFT}
                                className="px-4 py-2 bg-lightBlue border border-transparent rounded-md font-semibold text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Confirm Purchase
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                .nft-container {
                    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
                }
                .fade-in {
                    opacity: 1 !important;
                    transform: translateY(0) !important;
                }
                .show-message {
                    opacity: 1 !important;
                }
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                    100% { transform: translateY(0px); }
                }
                .image-container {
                    animation: float 6s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
}

export default NFT