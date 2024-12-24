import QRCode from "react-qr-code";
import { useState } from "react";
export default function QRCodeGenerator() {
    const [link, setLink] = useState("");


    return (
        <div className="App text-center mt-10">
            <h1 className="text-3xl font-bold text-blue-500 mb-5">QR Code Generator</h1>
            <input className="border-2 border-blue-500 p-2 rounded-xl" type="text" name="link" onChange={(e) => setLink(e.target.value)} value={link} placeholder="eg: https://google.com" id="link" />
            <h2 className="text-2xl font-bold text-blue-500 mt-5">QRCode for</h2><span>{link}</span>
            <div className="w-full">
            {link ? <QRCode value={link} className="qrcode mx-auto mt-2" /> : null}
            </div>
        </div>
    )

}