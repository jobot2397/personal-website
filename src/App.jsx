import {Card} from "./components/Card";
import { AWS } from "./components/details/AWS";
import { DS } from "./components/details/DS";
import { JPMorgan } from "./components/details/JPMorgan";
import { Patents } from "./components/details/Patents";
import { UTexas } from "./components/details/UTexas";
import { Languages } from "./components/details/Languages";
import { Frameworks } from "./components/details/Frameworks";
import { Icon } from "./components/Icon";
import { Icons } from "./components/Icons";

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
            size: "wide",
            details: <JPMorgan/>
        },
        {
            title: "Languages",
            icon: <Icons icons={[
                "/images/spring-boot.svg",
                "/images/java.svg",
                "/images/python.svg",
                "/images/react.svg",
                "/images/javascript.png",
                "/images/tailwindcss.png",
            ]}
            orientation={'vertical'}
            />, // Make this an svg
            size: "tall",
            details: <Languages/>
        },
        {
            title: "AWS Certifications",
            icon: <Icon src={"/images/aws.png"}/>, // Make this an svg
            size: "small",
            details: <AWS/>
        },
        {
            title: "Portfolio",
            icon: <img src="/images/profile-laptop.jpeg" width={"50%"}/>, // Make this an svg
            size: "large",
            details: <DS/>
        },
        {
            title: "Patents",
            icon: <Icon src={"/images/lightbulb.png"}/>, // Make this an svg
            size: "small",
            details: <Patents/>
        },
        {
            title: "Embedded Systems Design Lab",
            icon: <Icon src={"/images/ds.png"}/>, // Make this an svg
            size: "small",
            details: <DS/>
        },
        {
            title: "Embedded Systems Design Lab",
            icon: <Icon src={"/images/ds.png"}/>, // Make this an svg
            size: "small",
            details: <DS/>
        },
        {
            title: "Tooling",
            icon: <Icons icons={[
                "/images/kubernetes.png",
                "/images/docker.png",
                "/images/git.png",
                "/images/kafka.png"
                // penguin
                // nixos
            ]}
            orientation={'horizontal'}
            />, // Make this an svg
            size: "wide",
            details: <Frameworks/>
        }, 
        {
            title: "Embedded Systems Design Lab",
            icon: <Icon src={"/images/benchy.png"}/>, // Make this an svg
            size: "small",
            details: <DS/>
        },         
    ]

    // Resume download
    // Hobbies

    //         <div className="h-screen bg-bg flex justify-center w-screen">
    // <div className="p-2 grid grid-cols-4 grid-rows-4 gap-2 place-items-center aspect-square max-h-screen max-w-svh">

    return (
        <div className="h-screen bg-bg flex w-screen">
            <div className="p-2 grid grid-cols-4 grid-rows-4 gap-2 place-items-center w-screen">
                {Cards.map((card) => {
                    return <Card 
                        title={card.title}
                        icon={card.icon}
                        size={card.size}
                        details={card.details}
                    />
                })}
            </div>
        </div>
    );
}