import React from 'react';
import { useState } from 'react';
import { ChevronRight, Users, Lightbulb, Rocket } from 'lucide-react';

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState('team');

  const tabs = [
    { id: 'team', icon: Users, title: 'Our Team', 
      content: "We are a team born out of IIT Madras, having worked on some of the biggest projects in the country at highly recognized companies like Mudrex and NPCI. We've been immersed in the Web3 and crypto space since 2020, with experience reaching beyond what we can even recall." },
    { id: 'mission', icon: Lightbulb, title: 'Our Mission', 
      content: "Our mission is clear: to bridge the gap between Web2 and Web3, making the transition seamless and accessible for everyone. For this transition, we chose the creator economy as our focus and are capitalizing on its vast potential." },
    { id: 'vision', icon: Rocket, title: 'Our Vision', 
      content: "By empowering creators and investors through Web3 technology, we're unlocking new opportunities in this rapidly growing space. We envision a future where the creator economy thrives on decentralized platforms, offering unprecedented value and opportunities." }
  ];

  return (
    <div className=" text-white rounded-xl p-8 max-w-[1200px] mx-auto relative overflow-hidden">
      <h1 className='text-lightBlue text-2xl md:text-4xl text-center font-display my-6 md:my-0'>
        About Us
      </h1>
      
      <div className='text-center my-12 text-xl border border-white rounded-xl p-8 bg-dark-gray'>
        We are a team born out of IIT Madras, having worked on some of the biggest projects in the country at highly recognized companies like Mudrex and NPCI. We've been immersed in the Web3 and crypto space since 2020, with experience reaching beyond what we can even recall.

        Our mission is clear: to bridge the gap between Web2 and Web3, making the transition seamless and accessible for everyone. For this transition, we chose the creator economy as our focus and are capitalizing on its vast potential. By empowering creators and investors through Web3 technology, we're unlocking new opportunities in this rapidly growing space.
      </div>
      

    </div>
  );
};

export default AboutUs;