import InstallButton from "./components/InstallButton";
import Regard from "./components/Regard";
import { useEffect, useState } from "react";
function App() {
    const [isStandalone, setIsStandalone] = useState(false);

    useEffect(() => {
        const checkStandalone = () => {
            if (window.matchMedia("(display-mode: standalone)").matches) {
                setIsStandalone(true);
            } else {
                setIsStandalone(false);
            }
        };

        checkStandalone();

        window.addEventListener("appinstalled", checkStandalone);

        return () => {
            window.removeEventListener("appinstalled", checkStandalone);
        };
    }, []);
    return (
        <div>
            {isStandalone ? (
                <Regard />
            ) : (
                <div className="h-screen flex items-center content-center w-full">
                    <InstallButton />
                </div>
            )}
        </div>
    );
}

export default App;
