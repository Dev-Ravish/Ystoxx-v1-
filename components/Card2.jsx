import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ethers } from 'ethers';

export default function Card2( nft ) {
	const [nftData, setNftData] = useState(nft);
	const getNftData = async () => {
		// const res = await fetch(nft.tokenUri);
		// const data = await res.json();
		console.log(nftData);
	};
	useEffect(() => {
		getNftData();
	}, []);
	return (
		<div className='text-white p-3 rounded-lg flex flex-col justify-evenly items-center border border-white w-66 min-h-80'>
			<img 
				src={nftData.nft.image} 
				alt={nftData.nft.name}
				className="w-full rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105 h-3/5"
			/>
			<div className='flex flex-col items-center w-full'>
				<p className='font-bold text-xl self-center my-4'>{ nftData.nft.name}</p>
				<div className='grid grid-cols-2 w-full justify-between'>
					<p className='text-sm text-gray-400 font-thin'>
						Creator : {nftData.nft.name}
					</p>
					{/* <p className='text-sm text-right text-gray-400 font-thin'>
						Language : {nftData.language}
					</p> */}
					{/* <p className='text-sm  text-gray-400 font-thin'>
						Type : {nftData.typeofSong}
					</p> */}
					<p className='text-sm text-right text-gray-400 font-thin'>
						Price : {nftData.nft.price} 
					</p>
					<p className='text-sm text-gray-400 font-thin '>
						Quantity : {nftData.nft.quantity} 
					</p>
				</div>
			</div>
		</div>
	);
}
