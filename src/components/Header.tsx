import MobileImg from "../assets/illustration-sign-up-mobile.svg"
import DesktopImg from "../assets/illustration-sign-up-desktop.svg"
type HeaderProps = {
    children?: string
}
export function Header({ children }: HeaderProps) {
    return (
        <header className="lg:flex">
            {children}
            <img className="w-full block lg:hidden" src={MobileImg} alt="mobile image" />
            <img className="hidden lg:block lg:max-h-full lg:my-6 lg:mr-12" src={DesktopImg} alt="desktop image" />
        </header>
    )
}