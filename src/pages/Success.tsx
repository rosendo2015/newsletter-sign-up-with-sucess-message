import { Button } from "../components/Button";

export function Success() {
    return (
        <div>
            <h1>Thanks for subscribing!</h1>
            <p>
                A confirmation email has been sent to <strong>ash@loremcompany.com.</strong> Please open it and click the button inside to confirm your subscription.
            </p>

            <Button>Dismiss message</Button>
        </div>
    )
}