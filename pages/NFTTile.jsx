import React from 'react';

function NFTTile({ data }) {
    const GetIpfsUrlFromPinata = (pinataUrl) => {
        var IPFSUrl = pinataUrl.split("/");
        const lastIndex = IPFSUrl.length;
        IPFSUrl = "https://ipfs.io/ipfs/" + IPFSUrl[lastIndex - 1];
        return IPFSUrl;
    };

    const IPFSUrl = GetIpfsUrlFromPinata(data.image);

    const handleCardClick = () => {
        window.location.pathname = "/NFTPage";
    };

    return (
        <div
            onClick={handleCardClick}
            className="border-2 ml-12 mt-5 mb-12 flex flex-col items-center rounded-lg w-48 md:w-72 shadow-2xl cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-3xl overflow-hidden relative"
        >
            <img src={IPFSUrl} alt={data.name} className="w-full h-80 rounded-lg object-cover" />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-75 text-white">
                <h3 className="text-xl font-bold mb-1 truncate">{data.name}</h3>
                <p className="text-sm line-clamp-2">{data.description}</p>
            </div>
        </div>
    );
}

export default NFTTile;