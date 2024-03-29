import React, { useEffect, useState } from 'react';
import { Card } from 'flowbite-react';
import Navbars from '../../../Components/Header/Navbar/Navbar';
import Footers from '../../../Components/Footer/Footers';
import PricingHeader from '../../../Components/Body/pricingcomponent/Pricingheader/PricingHeader';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import pricinghead from '../../../Assets/pricinghead2.jpg'

const ChoosePricing = () => {

    const [packagename, setpackagename] = useState()
    const navigate = useNavigate();
    const { id } = useParams();
    const [singleproduct, setsingleproduct] = useState([]);
    const [name, setName] = useState("");
    
    const fetchSingleProduct = async() => {
        const response = await axios.get(`http://localhost:8000/singleuser/${id}`);
        console.log("response: ", response);
      console.log(singleproduct);
      setsingleproduct(response.data.Product);
            }

    const handlecchange = (ev) => {
        const {value, name} = ev.target;
        setsingleproduct(()=> {
            return {
                ...singleproduct, [name]: value
            }
        })
    }
    const handlesubmit = async () => {
        setsingleproduct((prevEmployee) => {
            return {
              ...prevEmployee,
              //packagename: packagename,
            };
          });
        const productData = { ...singleproduct};
        const response = await axios.put(`http://localhost:8000/editteduser/${id}`, productData);

navigate('/Addlisting')
    }
    

    useEffect (()=> {
        fetchSingleProduct()

    },[]);
  const divStyle = {
    backgroundImage: `url(${pricinghead})`,
    /* Other styles you might want to apply */
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    width: '320px', // Adjust the width as needed
    // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };



  return (
    <>
    <Navbars/>
    <PricingHeader/>
    <div className='flex  justify-center flex-wrap my-4' >

      <div style={containerStyle}>
      <Card className='max-w-sm'>
      <h5 className="mb-4 text-xl font-medium text-gray-500 ">Free plan</h5>
      <div className="flex items-baseline text-gray-900">
        <span className="text-3xl font-semibold">PKR.</span>
        <span className="text-5xl font-extrabold tracking-tight">00</span>
        <span className="ml-1 text-xl font-normal text-gray-500 ">/month</span>
      </div>
      <ul className="my-7 space-y-5">
        <li className="flex space-x-3">
          <svg
            className="h-5 w-5 shrink-0 text-cyan-600"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500 ">1 Listing allowed</span>
        </li>
        <li className="flex space-x-3">
          <svg
            className="h-5 w-5 shrink-0 text-cyan-600"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500 ">
            3 KeyWords
          </span>
        </li>
        <li className="flex space-x-3">
          <svg
            className="h-5 w-5 shrink-0 text-cyan-600"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500 ">1 Image Allowed</span>
        </li>
        <li className="flex space-x-3 line-through decoration-gray-500">
          <svg
            className="h-5 w-5 shrink-0 text-gray-400 "
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500">Search Engine Results</span>
        </li>
        <li className="flex space-x-3 line-through decoration-gray-500">
          <svg
            className="h-5 w-5 shrink-0 text-gray-400 "
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500">Customer Support</span>
        </li>
        <li className="flex space-x-3 line-through decoration-gray-500">
          <svg
            className="h-5 w-5 shrink-0 text-gray-400 "
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500">Hot Listings</span>
        </li> 
        <li className="flex space-x-3 line-through decoration-gray-500">
          <svg
            className="h-5 w-5 shrink-0 text-gray-400 "
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500">Front Page Listings</span>
        </li>
      </ul>
      <button onTouchStart={() => { setsingleproduct((prevEmployee) => {
            return {
              ...prevEmployee,
              packagename: "Free Plan",
            };
          });}}
         onMouseEnter={() => { setsingleproduct((prevEmployee) => {
            return {
              ...prevEmployee,
              packagename: "Free Plan",
            };
          });}} onClick={handlesubmit}
        type="button"
        className="inline-flex w-full justify-center rounded-lg bg-black px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-violet-500 focus:outline-none focus:ring-4 focus:ring-cyan-200 "
      >
        Choose plan
      </button>
    </Card>



      </div>
      <div style={containerStyle}>
      <Card className='max-w-sm'>
      <h5 className="mb-4 text-xl font-medium text-gray-500 ">Basic Plan</h5>
      <div className="flex items-baseline text-gray-900">
        <span className="text-3xl font-semibold">PKR.</span>
        <span className="text-5xl font-extrabold tracking-tight">1K</span>
        <span className="ml-1 text-xl font-normal text-gray-500 ">/3 Months</span>
      </div>
      <ul className="my-7 space-y-5">
        <li className="flex space-x-3">
          <svg
            className="h-5 w-5 shrink-0 text-cyan-600"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500 ">3 Listings Allowed</span>
        </li>
        <li className="flex space-x-3">
          <svg
            className="h-5 w-5 shrink-0 text-cyan-600"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500 ">
            3 KeyWords / Listing
          </span>
        </li>
        <li className="flex space-x-3">
          <svg
            className="h-5 w-5 shrink-0 text-cyan-600"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500 ">3 Images Allowed</span>
        </li>
        <li className="flex space-x-3">
          <svg
            className="h-5 w-5 shrink-0 text-cyan-600"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500 ">Search Engine Results</span>
        </li>
        <li className="flex space-x-3">
          <svg
            className="h-5 w-5 shrink-0 text-cyan-600"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500 ">Customer Support</span>
        </li>
        <li className="flex space-x-3 line-through decoration-gray-500">
          <svg
            className="h-5 w-5 shrink-0 text-gray-400 "
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500">Hot Listings</span>
        </li>
        <li className="flex space-x-3 line-through decoration-gray-500">
          <svg
            className="h-5 w-5 shrink-0 text-gray-400 "
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500">Front Page Listings</span>
        </li>
      </ul>
      <button onTouchStart={() => { setsingleproduct((prevEmployee) => {
            return {
              ...prevEmployee,
              packagename: "Basic Plan",
            };
          });}}
         onMouseEnter={() => { setsingleproduct((prevEmployee) => {
            return {
              ...prevEmployee,
              packagename: "Basic Plan",
            };
          });}} onClick={handlesubmit}
        type="button"
        className="inline-flex w-full justify-center rounded-lg bg-black px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-violet-500 focus:outline-none focus:ring-4 focus:ring-cyan-200 "
      >
        Choose plan
      </button>
    </Card>



      </div>
      <div style={containerStyle}>
      <Card className='max-w-sm'>
      <h5 className="mb-4 text-xl font-medium text-gray-500 ">Standard Plan</h5>
      <div className="flex items-baseline text-gray-900">
        <span className="text-3xl font-semibold">PKR.</span>
        <span className="text-5xl font-extrabold tracking-tight">2K</span>
        <span className="ml-1 text-xl font-normal text-gray-500 ">/3 Months</span>
      </div>
      <ul className="my-7 space-y-5">
        <li className="flex space-x-3">
          <svg
            className="h-5 w-5 shrink-0 text-cyan-600"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500 ">3 Listings Allowed</span>
        </li>
        <li className="flex space-x-3">
          <svg
            className="h-5 w-5 shrink-0 text-cyan-600"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500 ">
            6 KeyWords / Listing
          </span>
        </li>
        <li className="flex space-x-3">
          <svg
            className="h-5 w-5 shrink-0 text-cyan-600"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500 ">6 Images Allowed</span>
        </li>
        <li className="flex space-x-3">
          <svg
            className="h-5 w-5 shrink-0 text-cyan-600"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500 ">2 Front Page Listings</span>
        </li>
        <li className="flex space-x-3">
          <svg
            className="h-5 w-5 shrink-0 text-cyan-600"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500 ">Search Engine Results</span>
        </li>
        <li className="flex space-x-3">
          <svg
            className="h-5 w-5 shrink-0 text-cyan-600"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500 ">Customer Support</span>
        </li>
        <li className="flex space-x-3 line-through decoration-gray-500">
          <svg
            className="h-5 w-5 shrink-0 text-gray-400 "
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500">Hot Listings</span>
        </li>

      </ul>
      <button onTouchStart={() => { setsingleproduct((prevEmployee) => {
            return {
              ...prevEmployee,
              packagename: "Standard Plan",
            };
          });}}
         onMouseEnter={() => { setsingleproduct((prevEmployee) => {
            return {
              ...prevEmployee,
              packagename: "Standard Plan",
            };
          });}} onClick={handlesubmit}
        type="button"
        className="inline-flex w-full justify-center rounded-lg bg-black px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-violet-500 focus:outline-none focus:ring-4 focus:ring-cyan-200 "
      >
        Choose plan
      </button>
    </Card>



      </div>
      <div style={containerStyle}>
      <Card className='max-w-sm'>
      <h5 className="mb-4 text-xl font-medium text-gray-500 ">Premium Plan</h5>
      <div className="flex items-baseline text-gray-900">
        <span className="text-3xl font-semibold">PKR.</span>
        <span className="text-5xl font-extrabold tracking-tight">5K</span>
        <span className="ml-1 text-xl font-normal text-gray-500 ">/Year</span>
      </div>
      <ul className="my-7 space-y-5">
        <li className="flex space-x-3">
          <svg
            className="h-5 w-5 shrink-0 text-cyan-600"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500 ">5 Listings Allowed</span>
        </li>
        <li className="flex space-x-3">
          <svg
            className="h-5 w-5 shrink-0 text-cyan-600"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500 ">
            12 KeyWords / Listing
          </span>
        </li>
        <li className="flex space-x-3">
          <svg
            className="h-5 w-5 shrink-0 text-cyan-600"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500 ">6 Images Allowed</span>
        </li>
        <li className="flex space-x-3">
          <svg
            className="h-5 w-5 shrink-0 text-cyan-600"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500 ">Search Engine Results</span>
        </li>
        <li className="flex space-x-3">
          <svg
            className="h-5 w-5 shrink-0 text-cyan-600"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500 ">2 Hot Listings</span>
        </li>
        <li className="flex space-x-3">
          <svg
            className="h-5 w-5 shrink-0 text-cyan-600"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500 ">2 Front Page Listings</span>
        </li>
        <li className="flex space-x-3">
          <svg
            className="h-5 w-5 shrink-0 text-cyan-600"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500 ">Customer Support</span>
        </li>


      </ul>
      <button onTouchStart={() => { setsingleproduct((prevEmployee) => {
            return {
              ...prevEmployee,
              packagename: "Premium Plan",
            };
          });}}
         onMouseEnter={() => { setsingleproduct((prevEmployee) => {
            return {
              ...prevEmployee,
              packagename: "Premium Plan",
            };
          });}} onClick={handlesubmit}
        type="button"
        className="inline-flex w-full justify-center rounded-lg bg-black px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-violet-500 focus:outline-none focus:ring-4 focus:ring-cyan-200 "
      >
        Choose plan
      </button>
    </Card>



      </div>
    </div>
    <Footers/>
    </>
  );
}

export default ChoosePricing;
