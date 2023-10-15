import Image from "next/image";

export default function ImgSection() {
    return (
        <section>
            <div className="min-w-[20rem] sm:w-[30rem] w-[20rem] h-[25rem] grid gap-4 overflow-hidden relative">
                <Image
                    src={"https://ablexerb.sirv.com/Images/model02.jpg"}
                    alt=""
                    height={1000}
                    width={1000}
                    className="maskE"
                />
            </div>
        </section>
    );
}