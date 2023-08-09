import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import CardList from "../../components/Container/Cardlist";
import { ReactComponent as Mainpic } from "../../assets/images/Mainpic.svg";
import "../../styles/pages/Notes.css";
import axios from "axios";

interface AddNotesProps {}

export const AddNotes: React.FC<AddNotesProps> = () => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [gridview, setGridview] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    try {
      axios
        .get("http://localhost:3001/notes?page=1&resultCount=100")
        .then((res) => {
          // console.log(res, "res");
          setData(res.data);
        })
        .catch((err) => {
          console.log(err, "err");
        });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);
  console.log("data", data);
  return (
    <>
      <Header setGridview={setGridview} gridview={gridview} />
      {data?.length > 0 ? (
        <div>
          <CardList gridview={gridview} data={data} />
        </div>
      ) : (
        <div>
          <div className="overall-img">
            <Mainpic />
          </div>
          <div className="imagetext">
            <p>You haven’t created notes yet. I am here to help you.</p>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};
