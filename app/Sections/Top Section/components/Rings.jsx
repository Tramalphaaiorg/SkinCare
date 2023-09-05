export default function Rings() {
    return (
        <div className="absolute -top-52 -left-52 grid place-items-center z-30 opacity-70 pointer-events-none">
            <div className="h-[35rem] w-[35rem] rounded-full border-2 dark:border-white/20 border-black/20"></div>
            <div className="absolute h-[45rem] w-[45rem] rounded-full border-2 dark:border-white/10 border-black/10"></div>
            <div className="absolute h-[55rem] w-[55rem] rounded-full border-2 dark:border-white/5 border-black/5"></div>
        </div>
    );
}