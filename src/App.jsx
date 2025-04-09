import {Card} from "./components/Card";
import { JPMorgan } from "./components/details/JPMorgan";
import { UTexas } from "./components/details/UTexas";
import { Icon } from "./components/Icon";

export const App = () => {

    const Cards = [
        {
            title: "University of Texas at Austin",
            icon: <Icon src={"/images/longhorns.png"} />, // Make this an svg
            size: "small",
            details: <UTexas/>
        },
        {
            title: "JPMorgan Chase & Co.",
            icon: <div className=" font-serif font-bold text-3xl text-white">JPMorgan Chase & Co.</div>, // Make this an svg
            size: "small",
            details: <JPMorgan/>
        },

        /*
        Center Piece
        JPMorgan
        AWS
        Patents
        DS
        Programming Languages
        Tooling
        Frameworks
        */
    ]

    return (
        <div className="p-2 h-screen w-full bg-black grid grid-cols-2 grid-rows-3 gap-2">
            {Cards.map((card) => {
                return <Card 
                    title={card.title}
                    icon={card.icon}
                    size={card.size}
                    details={card.details}
                />
            })}
        </div>
    );
}