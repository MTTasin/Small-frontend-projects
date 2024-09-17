import { useState } from "react"





export default function Tabs({ tabsContent, onTabChange }) {

    const [currentTabIndex, setCurrentTabIndex] = useState(0);


    function handleOnClick(getCurrenntIndex) {
        setCurrentTabIndex(getCurrenntIndex);
        onTabChange(getCurrenntIndex);
    }
    return (
        <div className="wrapper">
            <div className="heading flex justify-evenly p-2">
                {tabsContent.map((tabItem, index) => (
                    <div className="tab bg-green-400 w-full flex justify-evenly" onClick={() => handleOnClick(index)} key={tabItem.label}>
                        <span className={currentTabIndex === index ? "active bg-blue-300 w-full text-center p-4" : "p-4" }>{tabItem.label}</span>
                    </div>
                ))}

            </div>

            <div className="content">
                {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
            </div>
        </div>
    )
}