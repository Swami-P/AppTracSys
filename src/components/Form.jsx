import React from "react";
import Input from "./Input";
import Label from "./Label";
import Phone from "./Phone";
import Countries from "./Countries";
import Currency from "./Currency";
import NoticePeriod from "./NoticePeriod";

function Form(props){
    return(
        <div className="form">
            <h2>Candidate Information</h2>
            <label>Position<span>*</span></label>
            <input placeholder="Position applied for"></input>
            <label>Name<span>*</span></label>
            <input placeholder="Enter the Full Name of the candidate"></input>
            <label>Email<span>*</span></label>
            <input placeholder="Enter the email address of the candidate"></input>
            <label>Mobile<span>*</span></label>
            <Phone />
            <label>Current Location<span>*</span></label>
            <Countries />
            <label>Nationality<span>*</span></label>
            <Countries />
            <label>Current Salary<span>*</span></label>
            <Currency placeholder="Current salary per month"/>
            <label>Expected Salary<span>*</span></label>
            <Currency placeholder="Expected salary per month"/>
            <label>Notice Period<span>*</span></label>
            <NoticePeriod placeholder="Notice period in days / months"/>
            <label>Reason for leaving<span>*</span></label>
            <Input placeholder="Reason for leaving the current job"/>
            <button className="button-style" type="submit" value="Submit">Submit</button>
            <button className="button-style" type="reset" value="Reset">Reset</button>
        </div>
    );
}

export default Form;