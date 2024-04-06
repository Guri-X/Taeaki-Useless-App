import { CopyToClipboard } from 'react-copy-to-clipboard';
import Bacon from "../api/Bacon";
import { useState } from "react";

export function Home() {
    const [cookedBacon, setCookedBacon] = useState("")

    const getBacon = () => {
        Bacon().cook().then((data) => {
            const baconArr = data.data

            // Get random bacon to cook from the baconArr
            const rBacon = baconArr[Math.floor(Math.random() * baconArr.length)]

            setCookedBacon(rBacon)
        })
        .catch((err) => {
            console.error("Couldn't fetch bacon!")
            console.error(err)
        })
    }

    return (
        <div>
            <div className="flex items-center justify-center">
                <div className="flex flex-col items-center">
                    <div className="w-96 mt-36">
                        <textarea 
                            className="w-full h-64 resize-none border border-violet-300 rounded-md p-2" 
                            placeholder="Know How To Cook Bacon?"
                            defaultValue={cookedBacon}
                            disabled
                        ></textarea>
                    </div>

                    <div className="mt-10">
                        {/* Secretly copies to text to the clipboard for trolling */}

                        <CopyToClipboard text={cookedBacon}>
                            <button 
                                className="btn btn-primary"
                                onClick={getBacon}
                            >
                                Cook Bacon 🐷
                            </button>
                        </CopyToClipboard>
                    </div>
                </div>
            </div>
        </div>
    )
}