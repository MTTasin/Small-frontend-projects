import Tabs from "./Tabs";

function RandomComponent() {
  return <h1>Random Component</h1>;
}

export default function TabTest() {

    const tab1 = <div><h1 className="text-3xl text-blue-300 font-bold">Hello this is tab 1.</h1></div>

    const tab2 = <div><h1 className="text-3xl text-blue-300 font-bold">This is a test tab nothing else.</h1></div>

    const tab3 = <div><h1 className="text-3xl text-blue-300 font-bold">Also another tab you fool.</h1></div>

  const tabs = [
    {
      label: "Tab 1",
      content: tab1,
    },
    {
      label: "Tab 2",
      content: tab2,
    },
    {
      label: "Tab 3",
      content: tab3,
    },
  ];

  return <Tabs tabsContent={tabs}  />;
}
