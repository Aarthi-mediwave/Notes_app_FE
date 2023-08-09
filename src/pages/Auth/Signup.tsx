import React from "react";
import Button from "../../components/Forms/Button";
import { TextInput } from "../../components/Forms/TextInput";

interface SignupProps {}

export const Signup: React.FC<SignupProps> = ({}) => {
  return (
    <>
      <TextInput
        type="text"
        label="Email"
        placeholder="Please enter your Email"
        name="Email"
      />
      <TextInput
        type="password"
        label="Password"
        placeholder="Please enter your Password"
        name="Password"
      />
      <TextInput
        type="password"
        label="Confirm Password"
        placeholder="Please enter your Confirm Password"
        name="Confirm Password"
      />

      <div className="text-center">
        <Button
          btntype="submit"
          text="Sign Up"
          addClass="mv-primary-btn mv-btn px-16"
          onClick={() => console.log("click on Log in")}
        />
      </div>
    </>
  );
};
