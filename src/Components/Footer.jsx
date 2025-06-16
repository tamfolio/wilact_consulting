import React from "react";
import { FormGroup, Input, Label } from "reactstrap";
import { FaFacebookF, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className="bg-[#1E1E1E] pt-[100px] pb-[30px]">
      {/* <div className="flex flex-col lg:flex-row lg:items-start items-center justify-center lg:gap-[200px]">
        <h1 className="text-[54px] text-white font-medium">
          LET'S WORK TOGETHER!
        </h1>
        <div className="flex flex-col gap-[20px] mt-[40px]">
          <div className="flex flex-col md:flex-row gap-[70px]">
            <FormGroup>
              <Label for="firstName" className="text-white">
                First Name
              </Label>
              <Input
                id="firstName"
                name="text"
                placeholder=""
                type="text"
                className="custom-input"
              />
            </FormGroup>
            <FormGroup>
              <Label for="lastName" className="text-white">
                Last Name
              </Label>
              <Input
                id="lastName"
                name="text"
                placeholder=""
                type="text"
                className="custom-input"
              />
            </FormGroup>
          </div>
          <div className="flex flex-col md:flex-row gap-[70px]">
            <FormGroup>
              <Label for="emailAddress" className="text-white">
                Email Address
              </Label>
              <Input
                id="emailAddress"
                name="email"
                placeholder=""
                type="email"
                className="custom-input"
              />
            </FormGroup>
            <FormGroup>
              <Label for="companyName" className="text-white">
                Company Name
              </Label>
              <Input
                id="companyName"
                name="text"
                placeholder=""
                type="text"
                className="custom-input"
              />
            </FormGroup>
          </div>
          <div className="flex gap-[70px]">
            <FormGroup className="lg:w-[550px]">
              <Label for="emailAddress" className="text-white">
                Message
              </Label>
              <Input
                id="emailAddress"
                name="email"
                placeholder=""
                type="email"
                className="custom-input w-full"
              />
            </FormGroup>
          </div>
          <div className="mt-[38px] mb-[100px]">
            <div className="bg-[#0B8E53] w-[150px] flex items-center justify-center py-2 rounded-[30px] mb-[60px]">
              <span className="text-white">Send a Message</span>
            </div>
            <div className="text-white flex flex-col">
              <span>Reach out to us at:</span>
              <span className="text-[#FFCC00] underline">
                advisory@wilactconsulting.com
              </span>
            </div>
          </div>
        </div>
      </div> 
      <div className="flex items-center justify-center mb-[50px]">
        <div className="w-[85%] h-[1px] bg-[#5E5E5E80]"></div>
      </div> */}
      <div className="flex flex-col lg:flex-row items-start justify-between px-[30px] lg:px-[100px]">
        <div className="w-full flex flex-col items-center lg:items-start">
          <img src="/assets/logo2.png" alt="" className="w-[55px] mb-[30px]" />
          <span className="text-[#FFCC00] underline mb-[10px]">
            +2348170420561
          </span>
          <span className="text-white w-[330px] text-center lg:!text-left">
            Address: 2nd Avenue, Prince Ademola Eletu,Lagos
          </span>
        </div>
        <div className="w-full flex flex-col md:flex-row text-white font-light gap-[30px] md:gap-[70px] items-center justify-start md:items-start md:justify-center lg:items-start  lg:justify-start mt-[40px] md:mt-[40px] lg:mt-0 mb-[40px] lg:mb-0">
          <div className="flex flex-col gap-[30px]">
            <span>About Us</span>
            <span>Services</span>
            <span>Clients</span>
          </div>
          <div className="flex flex-col gap-[30px]">
            <span>Blogs</span>
            <span>Careers</span>
            <span>Contact</span>
          </div>
          <div className="flex flex-col gap-[30px]">
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
          </div>
        </div>
        <div className="w-full flex items-center justify-center gap-[24px] mt-[20px] lg:mt-0 mb-10">
          <FaLinkedin className="text-white" />
          <FaFacebookF className="text-white" />
          <FaInstagram className="text-white" />
          <FaXTwitter className="text-white" />
        </div>
      </div>
      <div className="flex items-center justify-center mt-5 text-white">
        <p>&copy; Wilact {new Date().getFullYear()}</p>
      </div>
    </div>
  );
}

export default Footer;
