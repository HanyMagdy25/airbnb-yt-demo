import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 px-10 md:px-20 py-14 bg-gray-100 text-gray-600 ">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMUNITY</h5>
        <p>Accessibility</p>
        <p>This is not a real site</p>
        <p>Its a pretty clone</p>
        <p>Referrals Accepted</p>
        <p>Flores</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p>Flores React</p>
        <p>Presents</p>
        <p>Zero to Full Stack Hero</p>
        <p>Hundreds of Students</p>
        <p>Join Now</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Center</p>
        <p>safety</p>
        <p>Say Hi YouTube</p>
        <p>Easter Eggs</p>
        <p>for the win</p>
      </div>
    </div>
  );
}

export default Footer;
