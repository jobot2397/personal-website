import {Card} from "./components/Card";
import { AWS } from "./components/details/AWS";
import { DS } from "./components/details/DS";
import { JPMorgan } from "./components/details/JPMorgan";
import { Patents } from "./components/details/Patents";
import { UTexas } from "./components/details/UTexas";
import { Languages } from "./components/details/Languages";
import { Frameworks } from "./components/details/Frameworks";
import { Icon } from "./components/Icon";
import { VerticalIcons } from "./components/VerticalIcons";
import { Portfolio } from "./components/details/Portfolio";
import { Resume } from "./components/details/Resume";
import { Hobbies } from "./components/details/Hobbies";

export const App = () => {

    const Cards = [
        {
            title: "University of Texas at Austin",
            icon: <Icon src={"/images/longhorns.png"} />, // Make this an svg
            size: "small",
            singleIcon: true,
            details: <UTexas/>
        },
        {
            title: "JPMorgan Chase & Co.",
            icon: <div className=" font-serif font-bold text-sm lg:text-4xl text-white px-2">JPMorgan Chase & Co.</div>, // Make this an svg
            size: "wide",
            singleIcon: false,
            details: <JPMorgan/>
        },
        {
            title: "Languages",
            icon: <div className="py-2 w-full h-full"><VerticalIcons icons={[
                "/images/spring-boot.svg",
                "/images/java.svg",
                "/images/python.svg",
                "/images/react.svg",
                "/images/javascript.svg",
                "/images/tailwindcss.png",
            ]}
            orientation={'vertical'}
            />
            </div>,
            size: "tall",
            singleIcon: false,
            details: <Languages/>
        },
        {
            title: "AWS Certifications",
            icon: <Icon src={"/images/aws.svg"}/>, // Make this an svg
            size: "small",
            singleIcon: true,
            details: <AWS/>
        },
        {
            title: "Portfolio",
            icon: <div className="w-full h-full lg:p-10 p-4 flex items-center justify-center flex-col">
                <img className="max-w-full max-h-full p-2" src="/images/profile-laptop.png"/>
                <div className="py-2 text-xs lg:text-4xl text-center text-white w-full">Hi, my name is Joseph Lawler</div>
                <div className="py-2 text-xs lg:text-xl text-center text-white ">I am an electrical engineer by background, software engineer by trade, and innovator at heart </div>
                </div>, // Make this an svg
            size: "large",
            singleIcon: false,
            details: <Portfolio/>
        },
        {
            title: "Tooling",
            icon:  <div className="py-2 w-full h-full"><VerticalIcons icons={[
                "/images/kubernetes.svg",
                "/images/docker.svg",
                "/images/git.svg",
                "/images/kafka.svg",
                "/images/linux.svg",
                "/images/nix.svg"
            ]}
            orientation={'horizontal'}
            /></div>,
            size: "tall",
            singleIcon: false,
            details: <Frameworks/>
        }, 
        {
            title: "Patents",
            icon: <Icon src={"/images/lightbulb.png"}/>, // Make this an svg
            size: "small",
            singleIcon: true,
            details: <Patents/>
        },
        {
            title: "Resume",
            icon: <Icon src={"/images/resume.png"}/>, // Make this an svg
            size: "small",
            singleIcon: true,
            details: <Resume/>
        },
        {
            title: "Embedded Systems Design Lab",
            icon: <Icon src={"/images/ds.png"}/>, // Make this an svg
            size: "small",
            singleIcon: true,
            details: <DS/>
        },
        {
            title: "Hobbies",
            icon: <Icon src={"/images/benchy.png"}/>, // Make this an svg
            size: "small",
            singleIcon: true,
            details: <Hobbies/>
        },         
    ]

    // Resume download
    // Hobbies

    //         <div className="h-screen bg-bg flex justify-center w-screen">
    // <div className="p-2 grid grid-cols-4 grid-rows-4 gap-2 place-items-center aspect-square max-h-screen max-w-svh">

    return (
        <div className="h-screen bg-bg flex w-screen justify-center">
            <div className="p-2 grid grid-cols-4 grid-rows-4 gap-2 place-items-center w-screen max-w-7xl">
                {Cards.map((card) => {
                    return <Card 
                        title={card.title}
                        icon={card.icon}
                        size={card.size}
                        details={card.details}
                        singleIcon={card.singleIcon}
                    />
                })}
            </div>
        </div>
    );
}