import React, { useEffect, useState } from "react";
import { useAuth } from "../src/store/auth";
import {
  FaMoneyBillWave,
  FaExchangeAlt,
  FaPhoneAlt,
  FaWallet,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiReact,
  SiJavascript,
  SiMongodb,
  SiRedux,
  SiExpress,
} from "react-icons/si";
import { Link } from "react-router-dom";
import Send from "./Transfer";

const Home = () => {
  const { user, tokenval, balance, getBalance } = useAuth();

  useEffect(() => {
    getBalance();
  }, [balance]);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
   

      {/* Main Content */}
      <main className="container flex flex-row-reverse gap-[5vw]  mx-auto py-8 w-[100vw]">
        {/* Welcome Section */}
        <section className="bg-white shadow-md rounded-lg p-6 mb-8 animate-fadeIn w-[40vw]">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {" "}
            <p className="text-[4vh]">
              Hi,
              {`${user.username}`}
            </p>
          </h2>
          <p className="text-gray-600 text-2xl ">
            Here's an overview of your wallet:
          </p>
          {/* Wallet Balance */}
          <div className="bg-green-100 rounded-lg p-4 mt-4">
            <h3 className="text-lg font-bold text-green-800">Wallet Balance</h3>
            <p className="text-3xl font-bold text-green-800 animate-pulse">
              {" "}
              &#8377; {Math.round(balance * 100) / 100}
            </p>
          </div>

          <section className="bg-white shadow-md rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Recent Transactions
            </h2>
            <ul>
              {/* Transactions List */}
              <li className="flex items-center justify-between py-2 border-b border-gray-200">
                <div>
                  <p className="text-gray-800 font-bold">
                    Payment to ABC Company
                  </p>
                  <p className="text-gray-500 text-sm">May 28, 2024</p>
                </div>
                <p className="text-red-600 font-bold">- ₹ 1,000</p>
              </li>
              {/* Add more transactions */}
            </ul>
          </section>
        </section>
        <section className="flex flex-col w-[50vw] ">
          <section className="flex flex-col md:flex-row items-center justify-between mb-12 p-7 rounded-md bg-[#343736]">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold text-white mb-4 flex gap-[1vw]">
                Welcome to Graytm Wallet{" "}
                {/* <FaWallet className="text-yellow-500" /> */}
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Graytm is a secure and convenient digital wallet that allows you
                to transfer money.The Money provided to you is Random.You can
                send this money to anyone connected to the platform{" "}
                <b> Graytm </b> .
              </p>
              <button className="bg-green-500 text-white py-2 text-3xl px-4 rounded-md shadow-md hover:bg-green-600 transition-colors duration-300 flex items-center">
                <FaMoneyBillWave className="mr-2" />
                Get Started
              </button>
            </div>
            <div className="md:w-1/2 flex justify-center animate-bounce  mt-[4vh] ">
            <FaMoneyBillWave className="text-green-500 w-[30vw] h-[15vh] text-6xl" />
          </div>
          </section>
          {/* Recent Transactions */}

          {/* Offers and Promotions */}
          <section className="bg-white shadow-md rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Offers & Promotions
            </h2>
            <div className="flex overflow-x-auto">
              {/* Offer Cards */}
              <div className="flex-shrink-0 w-64 mr-4 rounded-lg overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 animate-slideInLeft">
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white mb-2">
                    Flat 20% Off
                  </h3>
                  <p className="text-white">On all movie ticket bookings</p>
                </div>
              </div>
              {/* Add more offer cards */}
            </div>
          </section>

          {/* Services */}
          <section className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Service Cards */}
              <div className="bg-blue-100 rounded-lg p-4 animate-slideInUp">
                <h3 className="text-lg font-bold text-blue-800 mb-2">
                  Pay Bills
                </h3>
                <p className="text-gray-600">Easily pay your utility bills</p>
              </div>
              {/* Add more service cards */}
            </div>
          </section>
          <section className="bg-neutral-800 p-8 rounded-lg shadow-md mt-8">
          <h3 className="text-2xl font-bold text-white mb-4">Technologies Used in this Project</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            <div className="flex flex-col items-center text-center text-white">
              <SiTailwindcss className="text-4xl mb-2" />
              <span>Tailwind CSS</span>
            </div>
            <div className="flex flex-col items-center text-center text-white">
              <SiReact className="text-4xl mb-2 text-green-500" />
              <span>React</span>
            </div>
            <div className="flex flex-col items-center text-center text-white">
              <SiJavascript className="text-4xl mb-2 text-yellow-300" />
              <span>JavaScript</span>
            </div>
            <div className="flex flex-col items-center text-center text-white">
              <SiMongodb className="text-4xl mb-2 text-green-500" />
              <span>MongoDB</span>
            </div>
            <div className="flex flex-col items-center text-center text-white">
              <SiExpress className="text-4xl mb-2 text-gray-400" />
              <span>Express</span>
            </div>
            <div className="flex flex-col items-center text-center text-white">
              <SiRedux className="text-4xl mb-2 text-purple-600" />
              <span>Redux</span>
            </div>
          </div>
        </section>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Graytm Wallet. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;

// const Home = () => {
//   return (
//     <div className="bg-[#343736] min-h-[90vh]">
//       {/* Header */}

//       {/* Main Content */}
//       <main className="container mx-auto w-[70vw] py-12 px-4">
//         {/* Hero Section */}
//         <section className="flex flex-col md:flex-row items-center justify-between mb-12">
//           <div className="md:w-1/2">
//             <h2 className="text-4xl font-bold text-white mb-4 flex gap-[1vw]">Welcome to Graytm Wallet <FaWallet className='text-yellow-500'/></h2>
//             <p className="text-lg text-gray-300 mb-8">
//               Graytm is a secure and convenient digital wallet that allows you to transfer money.The Money provided to you is Random.You can send this money to anyone connected to the platform <b> Graytm </b> .</p>
//             <button className="bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition-colors duration-300 flex items-center">
//               <FaMoneyBillWave className="mr-2" />
//               Get Started
//             </button>
//           </div>
//           <div className="md:w-1/2 flex justify-center animate-bounce  ">
//             <FaMoneyBillWave className="text-green-500 w-[34vw] h-[20vh] text-8xl" />
//           </div>
//         </section>
//         <section className="bg-[#409DB9] py-4 shadow-md">
//         <div className="container mx-auto flex justify-between items-center px-4">

//           <nav>
//             <ul className="flex space-x-4">
//               <li>
//                 <Link
//                   to="/graytm/transfer"
//                   className="text-white hover:text-green-500 transition-colors duration-300 flex items-center"
//                 >
//                   <FaExchangeAlt className="mr-2" />
//                   Transfer
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/contact"
//                   className="text-white hover:text-green-500 transition-colors duration-300 flex items-center"
//                 >
//                   <FaPhoneAlt className="mr-2" />
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </section>
//         {/* Technologies Section */}
//         <section className="bg-neutral-800 p-8 rounded-lg shadow-md mb-12">
//           <h3 className="text-2xl font-bold text-white mb-4">Technologies Used</h3>
//           <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
//             <div className="flex flex-col items-center text-center text-white">
//               <SiTailwindcss className="text-4xl mb-2" />
//               <span>Tailwind CSS</span>
//             </div>
//             <div className="flex flex-col items-center text-center text-white">
//               <SiReact className="text-4xl mb-2 text-green-500" />
//               <span>React</span>
//             </div>
//             <div className="flex flex-col items-center text-center text-white">
//               <SiJavascript className="text-4xl mb-2 text-yellow-300" />
//               <span>JavaScript</span>
//             </div>
//             <div className="flex flex-col items-center text-center text-white">
//               <SiMongodb className="text-4xl mb-2 text-green-500" />
//               <span>MongoDB</span>
//             </div>
//             <div className="flex flex-col items-center text-center text-white">
//               <SiExpress className="text-4xl mb-2 text-gray-400" />
//               <span>Express</span>
//             </div>
//             <div className="flex flex-col items-center text-center text-white">
//               <SiRedux className="text-4xl mb-2 text-purple-600" />
//               <span>Redux</span>
//             </div>
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="bg-[#409DB9] py-4 text-center text-white">
//         <p>&copy; {new Date().getFullYear()} Graytm. All rights reserved.</p>
//       </footer>
//     </div>
//   );
//  };

//  export default Home;
