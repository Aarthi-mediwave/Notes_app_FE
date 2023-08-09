import React, { useEffect, useState } from "react";
import { TextInput } from "../../components/Forms/TextInput";
import TextArea from "../../components/Forms/TextArea";
import PaletteView from "../../components/Header/PaletteView";
import { Back } from "../../components/Header/Back";
import { Pin } from "../../components/Header/Pin";
import { Tick } from "../../components/Header/Tick";
import "../../styles/pages/Notes.css";
import { ReactComponent as Palette } from "../../assets/images/Palette.svg";
import { ReactComponent as PaletteTick } from "../../assets/images/PaletteTick.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface CreateNotesProps {}

export const CreateNotes: React.FC<CreateNotesProps> = ({}) => {
  const colors = [
    { name: "orange", hex: "#FFA186" },
    { name: "orange-yellow", hex: "#FFC575" },
    { name: "lemon-yellow", hex: "#E2EB90" },
    { name: "pale-green", hex: "#A5F982" },
    { name: "blue", hex: "#75D9E7" },
    { name: "pink", hex: "#E775DA" },
    { name: "dark-blue", hex: "#759EFF" },
    { name: "white", hex: "#FFFFFF" },
  ];
  const [state, setState] = useState({
    title: "",
    content: "",
    noteColour: "grey",
    pinPoint: "false",
  });

  const [showSecondDiv, setShowSecondDiv] = useState(false);
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleFirstDivClick = () => {
    setShowSecondDiv(!showSecondDiv);
  };

  const handleOnchange = (e: any) => {
    const { name, value } = e.target;

    setState((state: any) => {
      return {
        ...state,
        [name]: value,
      };
    });
  };

  const handleChange = (name: string, value: string) => {
    setState((state: any) => {
      return {
        ...state,
        [name]: value,
      };
    });
  };

  const handleClick = (name: string, value: string) => {
    setState((state: any) => {
      return {
        ...state,
        [name]: value,
      };
    });
  };

  const handleSubmit = () => {
    console.log(state, "state");
    setLoading(true);
    try {
      axios
        .post("http://localhost:3001/notes/create", state)
        .then((res) => {
          console.log(res, "res");
          // setData(res.data);
        })
        .catch((err) => {
          console.log(err, "err");
        });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      navigate("/notes");
    }
  };

  useEffect(() => {
    setLoading(true);
    console.log(location.pathname.split("/")[3], "location");
    const id = location.pathname.split("/")[3];
    if (id && id !== "") {
      try {
        axios
          .get(`http://localhost:3001/notes/${id}`)
          .then((res: any) => {
            console.log(res, "res");
            // setData(res.data);
            setState((state: any) => {
              return {
                title: res.title,
                content: res.content,
                noteColour: res.noteColour,
                pinPoint: res.pinPoint,
              };
            });
          })
          .catch((err) => {
            console.log(err, "err");
          });
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  }, []);

  return (
    <>
      <div className="top-header grid gap-5 grid-cols-2 justify-center">
        <div>
          <Back />
        </div>
        <div className="flex justify-end">
          {" "}
          <div className="menu-overall">
            <Pin
              name="pinPoint"
              values={state.pinPoint}
              onClick={() =>
                handleChange(
                  "pinPoint",
                  state.pinPoint === "false" ? "true" : "false"
                )
              }
            />
          </div>
          <div
            className={`bg-palette ${
              state.noteColour !== "" ? state.noteColour : ""
            }`}
          >
            <span onClick={handleFirstDivClick}>
              <Palette />
            </span>
          </div>
          <div className="menu-overall">
            <Tick state={state} handleSubmit={handleSubmit} />
          </div>
        </div>
      </div>
      {showSecondDiv && (
        <div className="palette-outer">
          {colors.map((color) => (
            <div className="relative">
              <div
                className="bg-palette"
                key={color.name}
                style={{
                  backgroundColor: color.hex,
                  width: "40px",
                  height: "40px",
                  display: "inline-block",
                  borderRadius: "100%",
                  marginLeft: "5px",
                  marginRight: "5px",
                }}
                onClick={() => handleClick("noteColour", color.name)}
              />
              {state.noteColour === color.name && (
                <span className="color-tick">
                  <PaletteTick />
                </span>
              )}
            </div>
          ))}
        </div>
      )}
      <div className="p-8">
        <div className="addnote">
          <TextInput
            type="text"
            placeholder="Title"
            name="title"
            onChange={handleOnchange}
            values={state.title}
          />
        </div>

        <TextArea
          placeholder="Type your notes here."
          name="content"
          onChange={handleOnchange}
          values={state.content}
        />
      </div>
    </>
  );
};
