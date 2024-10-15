import React, { useState, useEffect } from 'react';

const CryptoListing = ({ fastUpdateInterval = 500, slowUpdateInterval = 1000, slowUpdateCount = 5 }) => {
  const [cryptoData, setCryptoData] = useState([
      { name: 'Mr. Beast', symbol: 'Mr. Beast', url: "https://yt3.ggpht.com/fxGKYucJAVme-Yz4fsdCroCFCrANWqw0ql4GYuvx8Uq4l_euNJHgE-w9MTkLQA805vWCi-kE0g=s176-c-k-c0x00ffffff-no-rj-mo", price: 82.34, change: 2.29 },
    { name: 'Logan Paul', symbol: 'Logan Paul', url: "/images/youtubersLogo/loganss.png", price: 52.34, change: 2.29 },
    { name: 'PewDiePie', symbol: 'PewDiePie', url: "/images/youtubersLogo/pdpss.png", price: 27.34, change: 2.29 },
    { name: 'UR · Cristiano', symbol: ' Cristiano', url: "/images/youtubersLogo/cr7ss.png", price: 51.34, change: 2.29 },
    { name: 'Mrwhosetheboss', symbol: 'Mrwhosetheboss', url: "/images/youtubersLogo/mrwhoss.png", price: 31.34, change: 2.29 },
    { name: 'Dude Perfectl', symbol: 'dudeperfect', url: "/images/youtubersLogo/dpss.png", price: 36.34, change: 2.29 },
    { name: 'Ksi', symbol: 'ksi', url: "/images/youtubersLogo/ksiss.png", price: 32.34, change: 2.29 },
    //   { name: 'Carryminati', symbol: 'Carryminati', url: "/images/youtubersLogo/carryss.png", price: 64262.34, change: 2.29 },
    // { name: 'Logan Paul', symbol: '', url: "/images/youtubersLogo/jake-paul.png", price: 64262.34, change: 2.29 },
    // { name: 'Logan Paul', symbol: '', url: "/images/youtubersLogo/sidemen.png", price: 64262.34, change: 2.29 },
    // { name: 'Logan Paul', symbol: '', url: "/images/youtubersLogo/speedss.png", price: 64262.34, change: 2.29 },
    // { name: 'Logan Paul', symbol: '', url: "/images/youtubersLogo/stokess.png", price: 64262.34, change: 2.29 },
   
    // { name: 'Nikhil Kamat', symbol: 'Nikhil Kamat', price: 2537.53, change: 3.03 },
    // { name: 'Samay Raina', symbol: 'Samay Raina', price: 582.50, change: 1.32 },
    // { name: 'Sumit007', symbol: 'Sumit007', price: 0.539, change: 0.47 },
    // { name: 'BB ki Vines', symbol: 'BB ki Vines', price: 153.05, change: 4.93 },
    ]);

  useEffect(() => {
    const updateCrypto = () => {
      setCryptoData(prevData =>
        prevData.map(crypto => {
          const priceChange = crypto.price * (Math.random() * 0.002 - 0.001);
          const newPrice = +(crypto.price + priceChange).toFixed(2);
          const newChange = +((newPrice / crypto.price - 1) * 100 + crypto.change).toFixed(2);
          return {
            ...crypto,
            price: newPrice,
            change: newChange,
          };
        })
      );
    };

    const fastInterval = setInterval(updateCrypto, fastUpdateInterval);
    const slowInterval = setInterval(() => {
      for (let i = 0; i < slowUpdateCount; i++) {
        updateCrypto();
      }
    }, slowUpdateInterval);

    return () => {
      clearInterval(fastInterval);
      clearInterval(slowInterval);
    };
  }, [fastUpdateInterval, slowUpdateInterval, slowUpdateCount]);

  return (
    <div className="bg-dark-gray p-4 rounded-lg w-full max-w-xl h-full border border-white">
      <div className="flex justify-between mb-4">
        <h2 className="text-white font-bold">Popular</h2>
        <a href="marketplace" className="text-blue-400 hover:underline">View All 50+ Channels</a>
      </div>
      <div className="space-y-3">
        {cryptoData.map((crypto, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${
                index === 0 ? 'bg-orange-500' :
                index === 1 ? 'bg-blue-500' :
                index === 2 ? 'bg-yellow-500' :
                index === 3 ? 'bg-gray-500' : 'bg-purple-500'
              }`}>
                <img src={crypto.url} alt={crypto.name} className='rounded-full h-full w-full object-cover' />
                {/* {crypto.symbol.charAt(0)} */}
              </div>
              <div>
                <span className="text-white font-semibold">{crypto.symbol}</span>
                <span className="text-gray-400 text-sm ml-2">{crypto.name}</span>
              </div>
            </div>
            <div className="text-right flex ">
              <div className="text-white">${crypto.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
              <div className={`text-sm ${crypto.change >= 0 ? 'text-green-500' : 'text-red-500'} my-auto pl-20`}>
                {crypto.change >= 0 ? '+' : ''}{crypto.change.toFixed(2)}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoListing;
