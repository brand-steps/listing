import React, { useEffect } from "react"
import Navbars from "../../../Components/Header/Navbar/Navbar";
import Footers from "../../../Components/Footer/Footers";

const Terms = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    
    padding: '20px',
    //border: '1px solid #ccc',
    //borderRadius: '8px',
    //boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    width: '300px', // Adjust the width as needed
    // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };

  const containerStyle2 = {
    display: 'flex',
    flexDirection: 'column',
    
    justifyContent: 'center',
    padding: '20px',
    //border: '1px solid #ccc',
    //borderRadius: '8px',
    //boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    width: '900px', // Adjust the width as needed
    //justifyContent: 'center', background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };
      useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (

<>
<Navbars/>
<div>
    <h1 className="font-bold text-4xl text-center text-black mx-6 my-6">Our Terms and Conditions</h1>
</div>
<div className='flex  justify-evenly flex-wrap mb-6' >
      
      <div style={containerStyle}>
        <h1 className='mb-6 font-bold text-xl'>Articles In This Section </h1>
        <ol style={{ listStyleType: 'decimal' }}>
                    <li className="font-semibold mb-2 text-base"> Account Registration </li>
                    <li className="font-semibold mb-2 text-base">Product Listings </li>
                    <li className="font-semibold mb-2 text-base">User Conduct </li>
                    <li className="font-semibold mb-2 text-base">Privacy </li>
                    <li className="font-semibold mb-2 text-base">Termination </li>
                    <li className="font-semibold mb-2 text-base">Modification of Terms </li>
                    <li  className="font-semibold mb-2 text-base"> warranty</li>
                    <li  className="font-semibold mb-2 text-base"> Limitation of Liability</li>
                    <li  className="font-semibold mb-2 text-base"> Governing Law</li>
                </ol>
      </div>
      <div style={containerStyle2} className="bg-slate-100 rounded-xl">
        <p className=""> By using listit.pk, you agree to comply with and be bound by the following terms and conditions. Please read these terms carefully before using the platform.
</p>      
<div>
<h1 className="font-bold text-2xl text-black mx-6 my-6">Account Registration</h1>
<ul style={{ listStyleType: 'disc' }} className="ml-12">
                    <li>To access certain features of the platform, you may be required to register for an account.</li>
                    <li> You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.</li>
                    <li> You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account or password.</li>
                </ul>
</div>
<div>
<h1 className="font-bold text-2xl text-black mx-6 my-6">Product Listings</h1>
<ul style={{ listStyleType: 'disc' }} className="ml-12">
                    <li>listit.pk provides a platform for users to list and showcase their products.</li>
                    <li>Users are responsible for the accuracy and completeness of the information provided in their product listings.</li>
                    <li>The platform reserves the right to moderate and remove listings that violate our guidelines or applicable laws.</li>
                </ul>

                </div>
                <div>
<h1 className="font-bold text-2xl text-black mx-6 my-6">User Conduct</h1>
<ul style={{ listStyleType: 'disc' }} className="ml-12">
                    <li>Users agree to use the platform for lawful purposes and in a way that does not infringe the rights of any third party.</li>
                    <li> Users must not use the platform to post, transmit, or share content that is offensive, harmful, or violates any applicable laws.</li>
                </ul>

                </div>
                <div>
                <h1 className="font-bold text-2xl text-black mx-6 my-6">Privacy</h1>
                <ul style={{ listStyleType: 'disc' }} className="ml-12">
                    <li>Your use of the platform is also governed by our Privacy Policy.</li>
                </ul>
                </div>
                <div>
<h1 className="font-bold text-2xl text-black mx-6 my-6">Termination</h1>
<ul style={{ listStyleType: 'disc' }} className="ml-12">
                    <li>listit.pk reserves the right to terminate or suspend your account and access to the platform at any time for any reason without notice.</li>
                </ul>

                </div>
                <div>
                <h1 className="font-bold text-2xl text-black mx-6 my-6"> Modification of Terms</h1>
                <ul style={{ listStyleType: 'disc' }} className="ml-12">
                    <li>listit.pk reserves the right to modify these terms at any time. Updated terms will be effective upon posting on the platform.</li>
                    <li> Users are encouraged to review the terms regularly to stay informed of any changes.</li>

                </ul>
                </div>

                <div>
                <h1 id="contact" className="font-bold text-2xl text-black mx-6 my-6">warranty</h1>
                <ul style={{ listStyleType: 'disc' }} className="ml-12">
                    <li>The platform is provided on an "as-is" and "as-available" basis. ListIt.pk makes no representations or warranties of any kind, express or implied.</li>
                </ul>
                </div>

                <div>
                <h1 id="contact" className="font-bold text-2xl text-black mx-6 my-6">Limitation of Liability</h1>
                <ul style={{ listStyleType: 'disc' }} className="ml-12">
                    <li>listit.pk shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.</li>
                </ul>
                </div>
                <div>
                <h1 id="contact" className="font-bold text-2xl text-black mx-6 my-6">Governing Law</h1>
                <ul style={{ listStyleType: 'disc' }} className="ml-12">
                    <li> These terms and conditions shall be governed by and construed in accordance with the laws.</li>
                </ul>
                </div>
                <div>
                <h1 id="contact" className="font-bold text-2xl text-black mx-6 my-6">Contact Us</h1>
                <ul style={{ listStyleType: 'disc' }} className="ml-12">
                    <li>If you have any questions or concerns regarding our Privacy Policy, please contact us at info@listit.pk.</li>
                </ul>
                </div>

</div>
    </div>

{/*}
<div className="mt-10 ml-12 mr-6 mb-6">
<p> By using listit.pk, you agree to comply with and be bound by the following terms and conditions. Please read these terms carefully before using the platform.</p>
<h1 className="font-bold text-2xl text-black mx-6 my-6">1. Account Registration</h1>
<p> <span className="font-bold">1.1 </span>To access certain features of the platform, you may be required to register for an account.</p>
<p> <span className="font-bold">1.2 </span> You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.</p>
<p> <span className="font-bold">1.3 </span>  You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account or password.</p>

<h1 className="font-bold text-2xl text-black mx-6 my-6">2. Product Listings</h1>
<p> <span className="font-bold">2.1 </span>  listit.pk provides a platform for users to list and showcase their products.</p>
<p> <span className="font-bold">2.2 </span> Users are responsible for the accuracy and completeness of the information provided in their product listings.</p>
<p> <span className="font-bold">2.3 </span> The platform reserves the right to moderate and remove listings that violate our guidelines or applicable laws.</p>

<h1 className="font-bold text-2xl text-black mx-6 my-6">3. User Conduct</h1>
<p> <span className="font-bold">3.1 </span>   Users agree to use the platform for lawful purposes and in a way that does not infringe the rights of any third party.</p>
<p> <span className="font-bold">3.2 </span> Users must not use the platform to post, transmit, or share content that is offensive, harmful, or violates any applicable laws.</p>

<h1 className="font-bold text-2xl text-black mx-6 my-6">4. Privacy</h1>

<p> <span className="font-bold">4.1 </span> Your use of the platform is also governed by our Privacy Policy</p>

<h1 className="font-bold text-2xl text-black mx-6 my-6">5. Termination</h1>
<p> <span className="font-bold">5.1 </span>  listit.pk reserves the right to terminate or suspend your account and access to the platform at any time for any reason without notice.</p>

<h1 className="font-bold text-2xl text-black mx-6 my-6">6. Modification of Terms</h1>
<p> <span className="font-bold">6.1 </span>  listit.pk reserves the right to modify these terms at any time. Updated terms will be effective upon posting on the platform.</p>
<p> <span className="font-bold">6.2 </span> Users are encouraged to review the terms regularly to stay informed of any changes.</p>

<h1 className="font-bold text-2xl text-black mx-6 my-6">7. warranty</h1>
<p> <span className="font-bold">7.1 </span>  The platform is provided on an "as-is" and "as-available" basis. ListIt.pk makes no representations or warranties of any kind, express or implied.</p>

<h1 className="font-bold text-2xl text-black mx-6 my-6">8. Limitation of Liability</h1>
<p> <span className="font-bold">8.1 </span> listit.pk shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.</p>

<h1 className="font-bold text-2xl text-black mx-6 my-6">9. Governing Law</h1>
<p> <span className="font-bold">9.1 </span> These terms and conditions shall be governed by and construed in accordance with the laws.</p>

<p className="mt-4">By using ListIt.pk, you acknowledge that you have read, understood, and agree to these terms and conditions. If you do not agree with these terms, please do not use the platform. ListIt.pk reserves the right to take legal action against users who violate these terms.</p>
<h1 className="font-bold text-2xl text-black mx-6 my-6">Contact Us</h1>
<p>If you have any questions or concerns regarding our Privacy Policy, please contact us at info@listit.pk.</p>

</div>
*/}
<Footers/>
</>

  )
}

export default Terms;