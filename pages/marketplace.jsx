// import Card1 from '../components/Card1';
// import Navbar from '../components/Navbar';
// import { useRef, useEffect, useState } from 'react';
// import { getProviderOrSigner } from '../store/util';
// import { Contract } from 'ethers';
// import { abi, NFT_CONTRACT_ADDRESS } from '../constants';
// import useweb3store from '../store/web3store';



// export default function Marketplace() {
// 	const [marketItems, setMarketItems] = useState([]);
// 	const { web3modalRef } = useweb3store((state) => ({
// 		web3modalRef: state.web3Modal,
// 	}));

// 	const getMarketItems = async () => {
// 		try {
// 			const ethers = require("ethers");
// 			const provider = new ethers.providers.Web3Provider(window.ethereum);
// 			const signer = provider.getSigner();

// 			console.log('Signer obtained:', signer);
		
// 			let nftContract = new ethers.Contract(NFT_CONTRACT_ADDRESS, abi, signer)
// 			console.log('Contract instance created', nftContract);
			
// 			// Try to get the network
// 			const network = await signer.provider.getNetwork();
// 			console.log('Connected to network:', network.name, network.chainId);
			
// 			// Try calling getString

// 			const val = await nftContract.getString();
// 			console.log("market val******", val);
// 			// If getString succeeds, try fetchMarketItems
// 			console.log('Calling fetchMarketItems...');
// 			const _marketItems = await nftContract.fetchMarketItems();
// 			console.log('Fetched market items:', _marketItems);
		
// 			setMarketItems(_marketItems);
// 		  } catch (error) {
// 			console.error("Error:", error);
// 			if (error.reason) console.error("Error reason:", error.reason);
// 			if (error.code) console.error("Error code:", error.code);
// 			if (error.data) console.error("Error data:", error.data);
// 			if (error.transaction) console.error("Error transaction:", error.transaction);
// 		  }
// 		};
		
		
	

// 	useEffect(() => {
// 		getMarketItems();
// 	}, []);
// 	return (
// 		<div className='bg-bgBlue min-h-screen px-8 md:px-12'>
// 			<Navbar />

// 			<h1 className='mb-12 text-center text-transparent text-2xl md:text-4xl bg-rainbow bg-clip-text font-display'>
// 				Marketplace
// 			</h1>
// 			{marketItems.length === 0 && (
// 				<p className='mt-5 text-white text-center'>No MNFTs in market yet!</p>
// 			)}
// 			<div className='grid gap-8 pb-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-4'>
// 				{marketItems.map((nft) => {
// 					return <Card1 nft={nft} key={nft.tokenId} />;
// 				})}
// 			</div>
// 		</div>
// 	);
// }


import Navbar from "../components/Navbar";
import NFTTile from "./NFTTile";
// import MarketplaceJSON from "../Marketplace.json";
// import axios from "axios";
import { useState } from "react";
// import { GetIpfsUrlFromPinata } from "../utils";

export default function Marketplace() {
const sampleData = [
    {
        "name": "BB ki Vines",
        "description": "By Bhuvan Bam",
        "website":"http://axieinfinity.io",
        "image":"https://gateway.pinata.cloud/ipfs/QmRpYftdLp6aNA69Zx18XyVPF85zKAgm5u6DRw6fpGMFBi",
        "price":"0.03ETH",
        "currentlySelling":"True",
        "address":"0xe81Bf5A757CB4f7F82a2F23b1e59bE45c33c5b13",
    },
    {
        "name": "BB ki Vines",
        "description": "By Bhuvan Bam",
        "website":"http://axieinfinity.io",
        "image":"https://gateway.pinata.cloud/ipfs/QmRpYftdLp6aNA69Zx18XyVPF85zKAgm5u6DRw6fpGMFBi",
        "price":"0.03ETH",
        "currentlySelling":"True",
        "address":"0xe81Bf5A757CB4f7F82a2F23b1e59bE45c33c5b13",
    },
    {
        "name": "BB ki Vines",
        "description": "By Bhuvan Bam",
        "website":"http://axieinfinity.io",
        "image":"https://gateway.pinata.cloud/ipfs/QmRpYftdLp6aNA69Zx18XyVPF85zKAgm5u6DRw6fpGMFBi",
        "price":"0.03ETH",
        "currentlySelling":"True",
        "address":"0xe81Bf5A757CB4f7F82a2F23b1e59bE45c33c5b13",
    },
];
const [data, updateData] = useState(sampleData);

return (
    <div className="bg-bgBlue min-h-screen px-8 md:px-12">
        <Navbar></Navbar>
        <div className="flex flex-col place-items-center mt-20">
            <div className="md:text-xl font-bold text-white">
                Top NFTs
            </div>
            <div className="flex mt-5 justify-between flex-wrap max-w-screen-xl text-center">
                {data.map((value, index) => {
                    return <NFTTile data={value} key={index}></NFTTile>;
                })}
            </div>
        </div>            
    </div>
);

}