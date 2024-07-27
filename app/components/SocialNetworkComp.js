import React from "react";
import WhatsappBtn from "./Buttons/WhatsappBtn";
import YoutubeBtn from "./Buttons/YoutubeBtn";
import InstaBtn from "./Buttons/InstaBtn";

function SocialNetworkComp(props) {
  return (
    <div className="flex flex-col px-5 md:flex-row gap-3 justify-center items-center m-5 my-20">
      <h1>Alphaa Network</h1>
      <WhatsappBtn />
      <YoutubeBtn />
      <InstaBtn />
    </div>
  );
}

export default SocialNetworkComp;
