import { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";


export default function Modal() {
    const [openModal, setOpenModal] = useState(false);


    return (
        <>
           <div className="flex justify-center items-center h-screen">
           <button
                onClick={() => setOpenModal(!openModal)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Open Modal
            </button>
           </div>

            {openModal && (
                <div>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-3/4 my-6 mx-auto max-w-3xl h-1/2">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Modal Title
                                    </h3>
                                    <button
                                        className="p-1 ml-auto border-0 text-black text-3xl font-semibold "
                                        onClick={() => setOpenModal(false)}
                                    >
                                        <span className="text-red-500 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            <IoIosCloseCircle />
                                        </span>
                                       
                                    </button>
                                </div>
                                <div className="relative p-6 flex-auto">
                                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                        I always felt like I could do anything. It
                                        was the best of times, it was the worst of
                                        times, it was the age of wisdom, it was
                                        the age of foolishness, it was the epoch
                                        of belief, it was the epoch of incredulity,
                                        it was the season of Light, it was the
                                        season of Darkness, it was the spring
                                        of hope, it was the winter of despair,
                                        we had everything before us, we had nothing
                                        before us, we were all going direct to
                                        Heaven, we were all going direct there.
                                    </p>
                                </div>
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setOpenModal(false)}
                                    >
                                    Close
                                    </button>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </div>
            )}

        </>
    );
}