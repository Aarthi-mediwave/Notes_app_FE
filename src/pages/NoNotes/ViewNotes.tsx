import React from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";

interface ViewNotesProps {}

export const ViewNotes: React.FC<ViewNotesProps> = ({}) => {
  return (
    <>
      <Header />
      <div className="p-8"></div>
      <Footer />
    </>
  );
};
