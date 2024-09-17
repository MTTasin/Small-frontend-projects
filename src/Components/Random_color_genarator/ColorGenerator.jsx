import { useState } from "react";
import { Button } from "flowbite-react";

export default function ColorGenerator() {
  const [color, setColor] = useState("#000000");

  const [typeOfColor, setTypeOfColor] = useState("");

  function handleCreateHexColor() {
    setTypeOfColor("hex");
    setColor("#" + Math.floor(Math.random() * 16777215).toString(16));
  }

  function handleCreateRGBColor() {
    setTypeOfColor("rgb");
    setColor(
      `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
        Math.random() * 255
      )}, ${Math.floor(Math.random() * 255)})`
    );
  }

  return (
    <>
      <div className="h-screen w-screen" style={{ backgroundColor: color }}>
        <div className="container flex justify-evenly">
          <Button
            onClick={handleCreateRGBColor}
            gradientMonochrome="cyan"
            pill
            className="m-2 text-black"
          >
            Get RGB Color
          </Button>
          <Button
            onClick={
              typeOfColor === "hex"
                ? handleCreateHexColor
                : handleCreateRGBColor
            }
            gradientMonochrome="cyan"
            pill
            className="m-2 text-black"
          >
            Get Random Color
          </Button>
          <Button
            onClick={handleCreateHexColor}
            gradientMonochrome="cyan"
            pill
            className="m-2 text-black"
          >
            Get HEX Color
          </Button>
        </div>

        <div className="flex h-[80vh] w-screen flex-col items-center justify-center">
          <h1 className="text-center text-5xl font-bold">{color}</h1>
          <h2 className="text-center text-4xl font-bold">
            {typeOfColor === "hex" ? "Color type is HEX" : "Color type is RGB"}
          </h2>
        </div>
      </div>
    </>
  );
}
