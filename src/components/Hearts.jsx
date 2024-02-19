import { useState } from "react";

const Hearts = () => {
    const [hearts, setHearts] = useState(0);

    const handleLove = () => {
        setHearts(hearts + 1);
    };
    const renderHearts = () => {
        const love = [];
        for (let i = 0; i < hearts; i++) {
            love.push(<span key={i}>Te amo ❤️</span>);
        }
        return love;
    };
    return (
        <div className="border border-gray-200 p-4 grid gap-4 rounded-xl my-4">
            <button
                className="flex justify-center items-center gap-x-2 bg-black text-white py-3 px-[1.1rem] transition-colors duration-500 hover:bg-purple-200 text-xl mx-auto max-w-80"
                onClick={handleLove}
            >
                Obtener cariño
            </button>
            <div>{renderHearts()}</div>
        </div>
    );
};

export default Hearts;
