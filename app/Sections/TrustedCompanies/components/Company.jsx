import Image from "next/image";

export default function CompanyElement({imgElement}) {
    return (
        <div className={`px-6 py-6 rounded-lg hover:bg-white/5 hover:scale-110 pointer-events-none select-none`}>
            <Image
                src={`https://ablexerb.sirv.com/Images/sponsors/${imgElement}`}
                alt={`${imgElement}`}
                height={1000}
                width={1000}
                className="h-[3rem] w-full pointer-events-none select-none"
            />
        </div>
    )
}
