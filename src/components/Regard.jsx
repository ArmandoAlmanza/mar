import Hearts from "./Hearts";

const Regard = () => {
    const facts = [
        {
            title: "Te Amo",
            body: "Eres la persona que más amo en este planeta, tu me enseñaste que soy capaz de amar y lo que realmente significa este hermoso sentimiento que toda mi vida anhele y contigo lo encontre. No buscaba nada y lo encontre todo; de la nada la vida me puso en frente a la muejer con la que quiero pasar mi vida entera, a la persona que se volvio el amor de mi vida y a la que mi corazón le pertenecera durante toda mi vida y más allá.",
        },
        {
            title: "Ta Admiro",
            body: "Eres una persona a la que admiro mucho ya que ha pasado por muchas cosas y que aún aqui sigue, demostrando que todos se la pelan por que ella sera una gran diseñadora, sera capaz de cumplir todo lo que ella se proponga por que dios sabe que el cielo es tu limite y lo que te propongas lo lograras y por supuesto yo estare ahi para aplaudir cada pequeño y gran logro... nmms me van a doler las manos por que seran demasiados logros.",
        },
        {
            title: "Me Enorgullezco",
            body: "Me enorgullece ver tu crecimiento, me siento orgulloso de poder decir que soy tu novio por que eres una persona que crece continuamente, que es mejor día con día y que lucha con cientos de cosas que solo la fortalecen. Muchas personas quisieran a una pareja como tu, que los inspire a ser mejor día con día.",
        },
        {
            title: "Lo Intentare",
            body: "Intentare seguir manteniendo ese sentimiento que tienes por mi vigente, intentare día con día enamorarte y que digas 'quiero quedarme contigo otro día' y así todos los días, te prometo que no habra día en el que no vea por ti, que no me preocupe y que no te diga cuanto te amo... realmente eso ultimo vale pa pura de aquella por que realmente lo hare de cualquier forma, en cualquier lugar y a cualquier hora por que me sale del corazón, pero aún así yo intentare ser mejor por ti ya que tu mereces lo mejor y quiero ser lo mejor para tí, hoy y siempre, incluso cuando estemos hechos pasita recordando viejos momentos y nos digan 'ya abuelitos ya duermanse' jajajaja, siempre te amare e intentare demostrartelo de mil y un formas.",
        },
    ];

    const memories = [
        {
            title: "El comienzo...",
            body: "no tengo foto de este día pero vaya que lo aprecio y recuerdo con enorme cariño... quien diria que quedarme en la escuela hasta las 10pm seria la mejor desición de mi vida y todo por esperar a una persona que conoci semanas antes, ese día conoci a una persona increible de la cual me enamore y empece a admirar demasiado y me dije a mi mismo 'quiero conocerla, quiero saber quien es Marlene' y al día de hoy me falta un chingoooooooooooo, pero conocerte fue la mejor desición de mi vida.",
            img: "",
        },
        {
            title: "Munal",
            body: "Nunca olvidare este día ya que fue el día en el que mi vida empezo a cambiar... me hiciste ver la vida de una forma unica, de una manera que nunca crei ver y que incluso decia 'son tonterias' y no, realmente la vi.... 'ella veia su arte mientras yo veia el mio', nunca olvidare nada de este día por que es un día que quedara marcado en mi corazón para siempre.",
            img: "/inicio_real.jpg",
        },
        {
            title: "07/10/2023",
            body: "Ese día estaba demasiado nervioso jajajaja, me sentia como un adolescente intentado declarar su amor por su crush... cosa que realmente paso y al día sigues siendo mi crush, maldita sea aun no me creo que seas mi novia. Pero el punto es que ese día fue el día que quedara marcado como el del 'comienzo'... me entiendes jaja, y esta vez no tendra un final... bueno a lo mejor y sí pero sera distinto, he intentado demostrate que te amo, que me quedare contigo aunque me apunten con una pistola, me quedare a tu lado aunque el mundo se acabe por que te amo y no veo mi vida sin ti a mi lado, compartiendo cada detalle de la misma. Te amo y es un te amo que tiene inicio pero no final.",
            img: "/inicio.jpg",
        },
        {
            title: "El brillas",
            body: "Wow realmente me sacaste de mi cueva para ir a ver hippies y vaya que me gusto jajajaja, no creia que fuera una experiencia así, magnifica y que nunca podre olvidar ya que verte disfrutar y vibrar de esa manera es algo que JAMAS podre olvidar... y pinche fotaza nos tomamos enserio <3",
            img: "/chingon.jpg",
        },
        {
            title: "Juagolin",
            body: "Nunca podre el primer halloween que pasamos juntos por que es la primera vez que hago algo así sabes, nunca me habia ido con alguien a su casa a pasar una festividad y fue el mejor puto momento de la vida... siempre recordare con cariño todo ese día y ansio que llegue el siguiente para parlo de nuevo contigo... si es que quieres claro 👉👈.",
            img: "/juagolin.jpg",
        },
        {
            title: "Sidharta",
            body: "Enserio debo describir este maravilloso día donde estuve todo un fin de semana con el amor de mi vida? Maldita sea verte tan feliz, tan hermosa, cantarte unicos en vivo y sentir que eramos tu y yo solamente con las estrellas y sidharta de fondo... simplemente es algo que no podre olvidar y que claro que vendran más conciertos juntos pero ninguno como el primero, el primer voltear a verte cantando a todo pulmon y llorando de alegria y luego irme a dormir contigo... aunque fue un caos que casi nos vamos caminando y todo JAJAJAJAJA, pero es un recuerdo eterno que siempre vere atras y sorneire como baboso, gracias.",
            img: "/concierto.jpg",
        },
    ];

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold text-center">
                Para mí niña preciosa
            </h1>
            <Hearts />

            <div className="border border-gray-200 p-4 my-3 grid gap-4 rounded-xl">
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
                            className="border border-gray-400 p-2 rounded-xl shadow-md "
                        >
                            <summary className="text-lg font-bold">
                                {fact.title}
                            </summary>
                            {fact.body}
                        </details>
                    );
                })}
            </div>

            <div className="border border-gray-200 p-4 my-3 grid gap-4 rounded-xl">
                <div>
                    <h2 className="text-2xl">Nuestros recuerdos</h2>
                    <p>
                        aunque sean poco el tiempo de hablar, salir y todo...
                        realmente tengo muchisimos recuerdos contigo JAJAJAJA,
                        quiza no todos esten documentados pero los albergo en lo
                        más profundo de mi corazón todos y cada uno de ellos.
                    </p>
                </div>
                <div>
                    {memories.map((memorie, i) => {
                        return (
                            <article key={i} className="border border-gray-200 p-4">
                                <h2 className="font-bold text-2xl">{memorie.title}</h2>
                                <p>{memorie.body}</p>
                                {memorie.img !== "" ? (
                                    <img src={memorie.img} alt="memorie" className="h-96 mx-auto rounded-xl shadow-md" />
                                ) : (
                                    ""
                                )}
                            </article>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Regard;
