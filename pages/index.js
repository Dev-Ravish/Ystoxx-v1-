import React from 'react';
import Navbar from '../components/Navbar';
import RegularButton from '../components/RegularButton';
import StrokeButton from '../components/StrokeButton';
import Link from 'next/link';
import CryptoListing from '../components/Chart';
import HomePageExtras from '../components/HomePageExtras';
import Faq from '../components/FrequentlyAnskedQuestions';
import Footer from '../components/Footer';
import MeetTheTeam from '../components/TeamMembers';
import AboutUs from '../components/AboutUs';

export default function Home() {
  return (
    <div className='bg-black min-h-screen text-white'>
      <Navbar />
      <main className='flex flex-col md:flex-row justify-between items-start px-6 md:px-12 mt-[80px] mb-[50px]'>
        <div className='w-full md:w-1/2 mb-8 md:mb-0 ml-16'>
          <h1 className='text-6xl md:text-8xl font-bold text-lightBlue mb-4'>
            Ystoxx
          </h1>
          <h2 className='text-2xl md:text-3xl font-semibold mb-8 text-gray-300'>
            A new chapter in Crypto Finance
          </h2>
          <div className='mb-6 flex flex-col md:flex-row'>
            <input
              type="text"
              placeholder="Email/Phone number"
              className='bg-dark-gray text-white p-3 rounded-md w-full md:w-64 mb-4 md:mb-0 md:mr-4'
            />
        	<RegularButton 
				text='Sign up'
			/>
          </div>
          <div className='flex space-x-4'>
            <Link href='/marketplace'>
              <RegularButton text={'Explore'} />
            </Link>
            <StrokeButton>
              <Link href='/create'>Create</Link>
            </StrokeButton>
          </div>
        </div>
        <div className='w-full md:w-1/2'>
          <CryptoListing />
        </div>
      </main>
      <HomePageExtras />
	  <Faq/>
	  <MeetTheTeam/>
	  <AboutUs/>
	  <Footer/>
    </div>
  );
}