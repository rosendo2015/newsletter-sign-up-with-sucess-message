import { Card } from "../components/Card"
import { Header } from "../components/Header"
import { Title } from "../components/Title"
import IconList from "../assets/icon-list.svg"
import { Input } from "../components/Input"
import { Button } from "../components/Button"

export function Home() {
    return (
        <main className="flex items-center justify-center w-full lg:h-screen">
            <div className="bg-white max-w-sm mx-auto flex flex-col items-center justify-center mt-2 lg:max-w-4xl lg:rounded-[2rem] overflow-hidden">
                <main className="lg:flex flex-row-reverse ">
                    <Header />
                    <div className="px-6 lg:px-12 lg:py-12 lg:max-w-[450px] lg:mx-2">
                        <Title>Stay updates!</Title>
                        <Card>Join 60,000+ product managers receiving monthly updates on:</Card>
                        <Card svgSrc={IconList}>Product discovery and building what matters</Card>
                        <Card svgSrc={IconList}>Measuring to ensure updates are a success</Card>
                        <Card svgSrc={IconList}>And much more!</Card>
                        <form action="" className="mt-10">
                            <Input />
                            <Button >Subscribe to monthly newsletter</Button>
                        </form>
                    </div>
                </main>
            </div>
        </main>
    )
}