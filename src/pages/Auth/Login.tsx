import React from "react";
import Button from "../../components/Forms/Button";
import { TextInput } from "../../components/Forms/TextInput";
import { Container } from "../../components/Container/Container";

interface LoginProps {}

export const Login: React.FC<LoginProps> = ({}) => {
  return (
    <Container>
      <>
        <h1 className="test">LogIn</h1>
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

        <div className="text-center">
          <Button
            btntype="submit"
            text="Log in"
            addClass="mv-primary-btn mv-btn px-16"
            onClick={() => console.log("click on Log in")}
          />
        </div>
      </>
    </Container>
  );
};
