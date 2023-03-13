import React, {useState} from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";


function Phone(){
    const [phone, setPhone] = useState("");
   
  return (
    <div>
      <PhoneInput
        containerClass="phone-style"
        country={"my"}
        inputClass="phone-input-style"
        inputStyle={{padding:'.7rem 4rem', border:'1px solid grey', transition: 'none'}}
        enableSearch={true}
        value={phone}
        onChange={(phone) => setPhone(phone)}
    />
    </div>
    
  );
}

export default Phone;