import Hearts from "./Hearts";

const Regard = () => {
    const facts = [
        {
            title: "Te Amo",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere enim libero nihil nobis cupiditate. Illum eligendi libero hic in neque. Aliquam dolore sequi officia corrupti pariatur mollitia magnam veritatis enim.",
        },
		{
            title: "Ta Admiro",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere enim libero nihil nobis cupiditate. Illum eligendi libero hic in neque. Aliquam dolore sequi officia corrupti pariatur mollitia magnam veritatis enim.",
        },
		{
            title: "Me Enorgullezco",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere enim libero nihil nobis cupiditate. Illum eligendi libero hic in neque. Aliquam dolore sequi officia corrupti pariatur mollitia magnam veritatis enim.",
        },
    ];

    return (
        <div className="p-4">
            <Hearts />

            <div className="border border-gray-200 p-4 my-3 grid gap-4">
                <div>
                    <h2 className="text-2xl">Te sientes mal? :c</h2>
                    <p>
                        No se lo que este pasando por tu cabecita pero quiero
                        recordarte unas cuantas cosas
                    </p>
                </div>
                {facts.map((fact, i) => {
                    return (
                        <details
                            key={i}
                            className="border border-gray-400 p-2 rounded-xl shadow-md"
                        >
                            <summary className="open:border-b open:border-b-black">
                                {fact.title}
                            </summary>
                            {fact.body}
                        </details>
                    );
                })}
            </div>
        </div>
    );
};

export default Regard;
