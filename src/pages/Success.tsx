import { Button } from "../components/Button";
import IconSuccess from "../assets/icon-success.svg"

export function Success() {
    return (
        <main className="flex items-center justify-center w-full h-screen">
            <div className="flex px-16 py-8 w-lg mx-auto items-start justify-center flex-col bg-white rounded-[30px]">
                <img src={IconSuccess} alt="" />
                <h1 className="font-bold text-5xl my-6 text-[var(--Blue-700)]">Thanks for subscribing!</h1>
                <p className="text-sm font-light text-[var(--Blue-700)] mb-2">
                    A confirmation email has been sent to <strong>ash@loremcompany.com.</strong> Please open it and click the button inside to confirm your subscription.
                </p>
                <Button>Dismiss message</Button>
            </div>
        </main>
    )
}