import React from "react";

const Header = ({ bgImage, Heading }: { bgImage: string; Heading: string }) => {
  const style = {};

  return (
    <section
      style={{
        backgroundImage: `linear-gradient(#0000004f,#0000004f) , url(${
          bgImage ??
          "https://www.bharatbooking.com/webroot/images/header_contact.jpg"
        })`,
        backgroundAttachment: "fixed",
        // backgroundOrigin:"center",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="py-[140px]"
    >
      <h2 className="text-center font-bold text-6xl max-md:text-4xl max-sm:text-2xl text-shadow-[0_0_10px_#000] text-white">
        {Heading}
      </h2>
    </section>
  );
};

export default Header;
