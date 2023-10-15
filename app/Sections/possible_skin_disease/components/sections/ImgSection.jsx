import Image from "next/image";

export default function ImgSection() {
    return (
        <div className="max-w-md group overflow-hidden rounded-2xl">
            <Image
                    src={"https://ablexerb.sirv.com/Images/acne.jpg"}
                    alt=""
                    height={1000}
                    width={1000}
                    className="filter grayscale h-full object-cover group-hover:scale-105"
                />
        </div>
    )
}