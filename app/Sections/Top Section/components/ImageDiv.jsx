import Image from "next/image";

export default function ImageDiv() {
    return (
        <div className="h-full flex items-center justify-center select-none pointer-events-none w-full">
            <Image
                src={"https://ablexerb.sirv.com/Images/Group%201000005895.png"}
                alt="Model"
                height={1000}
                width={1000}
                className="md:scale-110 w-full max-h-full aspect-auto"
            />
        </div>
    );
}