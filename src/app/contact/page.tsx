import FormContainer from "@/containers/contactContainer/FormContainer";
import Header from "@/containers/contactContainer/Header";
import Offices from "@/containers/contactContainer/Offices";
import React from "react";

const page = () => {
  return (
    <>
      <Header
        bgImage="https://www.bharatbooking.com/webroot/images/header_contact.jpg"
        Heading="Contact Us"
      />
      <FormContainer />
      <Offices />
      <GoogleMap />
    </>
  );
};

export default page;

function GoogleMap() {
  return (
    <iframe className="w-full"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55967.15487877268!2d77.15516582194212!3d28.750993955014618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01d4f896099f%3A0xd856071fa2f0c441!2sBurari%2C%20Delhi%2C%20110084!5e0!3m2!1sen!2sin!4v1752508684464!5m2!1sen!2sin"
      width="600"
      height="450"
      // style="border:0"
      // allowfullscreen=""
      loading="lazy"
      // referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}
