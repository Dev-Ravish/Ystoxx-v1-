import React, { useState } from 'react';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is Ystoxx?',
      answer: 'Ystoxx is a platform that allows YouTube channels to go public, enabling viewers to invest in their favorite creators and profit from their growth.',
    },
    {
      question: 'How does Ystoxx work?',
      answer: 'We create NFTs representing shares of a YouTube channel. Viewers can buy, trade, and earn royalties while YouTubers retain control of their channel.',
    },
    {
      question: 'What benefits do YouTubers get?',
      answer: 'YouTubers gain a new revenue stream through share trading royalties without losing control over their channel.',
    },
    {
      question: 'Who can join Ystoxx?',
      answer: 'Any YouTube channel can join Ystoxx and offer NFTs for trading, unlocking new investment opportunities for viewers.',
    },
    {
      question: 'What makes Ystoxx unique?',
      answer: 'Ystoxx bridges Web2 (YouTube) and Web3, creating a novel investment avenue by combining the content economy with blockchain technology.',
    },
  ];

  return (
    <section className="bg-black py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-lightBlue">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-dark-gray p-5 rounded-lg shadow-md">
              <button
                onClick={() => toggleFaq(index)}
                className="flex justify-between items-center w-full text-left text-white font-semibold text-lg focus:outline-none"
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 01.707.293l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707A1 1 0 014.293 8.293l5-5A1 1 0 0110 3z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="mt-4 text-white">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
