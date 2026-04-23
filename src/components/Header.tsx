import MobileImg from "../assets/illustration-sign-up-mobile.svg"
import DesktopImg from "../assets/illustration-sign-up-desktop.svg"
type HeaderProps = {
    children?: string
}
export function Header({ children }: HeaderProps) {
    return (
        <header className="lg:w-full lg:flex">
            {children}
            <img className="w-full lg:hidden" src={MobileImg} alt="mobile image" />
            <img className="sm:hidden lg:block lg:w-95" src={DesktopImg} alt="desktop image" />
        </header>
    )
}