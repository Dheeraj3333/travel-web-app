import Image from "next/image";
import React from "react";


// will make it dynamic after sometime
const PersonalityCard = () => {
  return (
    <div className=" max-w-full grid grid-cols-3 gap-8 max-md:grid-cols-1">
      <div className="image-holder relative aspect-video ">
        <Image
          src={
            "https://www.bharatbooking.com/admin/webroot/img/uploads/leaders/thumbnail/1737463772_661409-Mr-Sahil.webp"
          }
          alt="leader-image"
          fill
          objectFit="cover"
        />
      </div>
      <div className="info-section-1 text-[14px] text-foreground flex flex-col gap-4">
        <div>
          <span className="font-bold">Name</span> : <span>Mr. Jhon Doe</span>
        </div>
        <div>
          <span className="font-bold">Designation</span> :{" "}
          <span>Universal Programmer Example</span>
        </div>
        <div>
          <span className="font-bold">Email</span> :{" "}
          <span>jhonDoe@gmail.com</span>
        </div>
        <div>
          <span className="font-bold">Mob</span> : <span>+91 1234567890</span>
        </div>
        <div>
          <span className="font-bold">Proficiency</span> :{" "}
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            necessitatibus veritatis, dicta itaque libero laudantium molestiae a
            at vero aut.
          </span>
        </div>
      </div>
      <div className="info-section-2 text-[14px]">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta rem quo
          nobis veniam, veritatis ab nesciunt sunt autem libero, doloribus
          accusantium dolor unde tempore quis quam optio porro quasi. Ratione et
          cumque odio blanditiis alias, voluptatibus ut similique unde quo a.
          Mollitia neque ab sunt facilis nulla dolorum quaerat, porro quas odio
          reiciendis beatae. Quo eveniet cumque neque excepturi ad maiores
          voluptates nesciunt, quis, earum atque provident nam facilis
          perspiciatis. Non vero possimus sequi accusantium veritatis odio,
          reprehenderit tempore laboriosam!
        </p>
      </div>
    </div>
  );
};

export default PersonalityCard;
