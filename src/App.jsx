import Accordian from "./Components/Accordian/accordian";
import ColorGenerator from "./Components/Random_color_genarator/ColorGenerator";
import StarRating from "./Components/StarRating/StarRating";
import ImageSlider from "./Components/Imageslider/ImageSlider";
import LoadMore from "./Components/Load-more/LoadMore";
import TreeView from "./Components/TreeView/TreeView";
import { menus } from "./Components/TreeView/Data";
import QRCodeGenerator from "./Components/QR-Code-generator/QR-Code";
import ScrollIndicator from "./Components/Scroll-indicator/ScrollIndicator";
import TabTest from "./Components/Tabs/Tabs-test";
import Modal from "./Components/Modal/Modal";
import GithubProfileFinder from "./Components/GithubProfileFinder/GithubProfileFinder";
import AutoComplete from "./Components/AutoComplete/AutoComplete";
import TicTacToe from "./Components/TicTacToe/TicTacToe";


function App() {
  
  return (
    <div className="flex flex-col gap-20">
      <ScrollIndicator />

      <Accordian className="h-[100vh]" />

      <ColorGenerator className="h-[100vh]" />

      <StarRating className="h-[100vh]" />

      <ImageSlider className="h-[100vh]"
        url="https://picsum.photos/v2/list"
        page={"1"}
        limit={"10"}
      />

      <LoadMore className="h-[100vh]" />

      <TreeView className="h-[100vh]" menus={menus} />

      <QRCodeGenerator className="h-[100vh]" />

      <TabTest className="h-[100vh]" />

      <Modal className="h-[100vh]" />

      <GithubProfileFinder className="h-[100vh]" />

      <AutoComplete className="h-[100vh]" />


      <TicTacToe className="h-[100vh]" />

    </div>
  );
}

export default App;
