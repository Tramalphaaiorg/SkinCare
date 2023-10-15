import Base from "./sections/Base";
import Top from "./sections/Top";

export default function Footer() {
    return (
        <footer className="mt-16 flex flex-col items-center">
            <Top />
            <Base />
        </footer>
    )
}
