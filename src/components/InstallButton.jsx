import { useState } from "react";

export const InstallButton = () => {
    const [deferredPrompt, setDeferredPrompt] = useState(null);

    const handleInstallClick = () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();

            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === "accepted") {
                    console.log("Usuario aceptó la instalación");
                } else {
                    console.log("Usuario rechazó la instalación");
                }
                setDeferredPrompt(null);
            });
        }
    };

    const handleBeforeInstallPrompt = (event) => {
        event.preventDefault();

        setDeferredPrompt(event);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return (
        <button
            className="flex justify-center items-center gap-x-2 bg-black text-white py-3 px-[1.1rem] transition-colors duration-500 hover:bg-purple-200 text-xl mx-auto max-w-80"
            onClick={handleInstallClick}
        >
            Instalar la aplicación
        </button>
    );
};

export default InstallButton;
