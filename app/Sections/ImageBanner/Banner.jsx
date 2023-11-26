import Image from "next/image";

export default function Banner() {
    return (
        <div className="w-full my-12">
            <Image 
                src={"https://ablexerb.sirv.com/Images/Desktop%20-%201%20(1)%207.png"}
                alt="Banner"
                height={1000}
                width={1000}
                className="w-full"
            />
        </div>
    );
}