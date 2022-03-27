import React from "react";
import image1 from "./navpics/2021-01-22_09-38-38-455_Neneko_Aloha - Copy.png";
import image2 from "./navpics/2021-04-10_17-19-51-502_Simple.png";
import image3 from "./navpics/2021-04-14_23-00-17-078_Simple.png";
import image4 from "./navpics/2021-04-03_14-28-46-291_Simple.png";

function Navbar() {
  return (
    <div>
      <h1>I am </h1>
      <div className="crossfade">
        <img src={image1} />
        <img src={image2} />
        <img src={image3} />
        <img src={image4} />
        {/* <figure src="C:\Users\rroyc\Documents\Development\anima8\src\navfold\navpics\2022-02-17_22-31-29-530_Simple.png" />
        <figure src="C:\Users\rroyc\Documents\Development\anima8\src\navfold\navpics\2022-01-11_23-35-52-045_Simple.png" />
        <figure src="C:\Users\rroyc\Documents\Development\anima8\src\navfold\navpics\Val4.png" />
        <figure src="C:\Users\rroyc\Documents\Development\anima8\src\navfold\navpics\2021-08-16_00-52-07-003_Simple.png" />
        <figure src="C:\Users\rroyc\Documents\Development\anima8\src\navfold\navpics\2021-05-15_15-56-51-949_Simple.png" />
        <figure src="C:\Users\rroyc\Documents\Development\anima8\src\navfold\navpics\2022-03-18_17-45-53-120_Fairy Dancing Light Plague.png" /> */}
      </div>
    </div>
  );
}

export default Navbar;
