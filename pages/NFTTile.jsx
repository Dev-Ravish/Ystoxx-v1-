import Link from 'next/link';
import React from 'react';

function NFTTile({ data,url }) {
    const GetIpfsUrlFromPinata = (pinataUrl) => {
        var IPFSUrl = pinataUrl.split("/");
        const lastIndex = IPFSUrl.length;
        IPFSUrl = "https://ipfs.io/ipfs/" + IPFSUrl[lastIndex - 1];
        return IPFSUrl;
    };

    const IPFSUrl = GetIpfsUrlFromPinata(data.image);

    

    return (
        <Link
            href={`/nft/${data.name}`}
            className="border-2 ml-6 mt-5 mb-12 flex flex-col items-center rounded-lg w-40 md:w-60 shadow-2xl cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-3xl overflow-hidden relative"
        >
            <img src={url ?url: IPFSUrl} alt={data.name} className="w-full h-60 rounded-lg object-cover" />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-75 text-white">
                <h3 className="text-xl font-bold mb-1 truncate">{data.name}</h3>
                <p className="text-sm line-clamp-2">{data.description}</p>
            </div>
        </Link>
    );
}

export default NFTTile;