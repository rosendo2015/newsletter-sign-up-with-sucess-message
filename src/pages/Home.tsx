import { Card } from "../components/Card"
import { Header } from "../components/Header"
import { Title } from "../components/Title"
import IconList from "../assets/icon-list.svg"
import { Input } from "../components/Input"
import { Button } from "../components/Button"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigate } from "react-router-dom"

const schema = z.object({
    email: z.email("Valid email required")
})
type FormData = z.infer<typeof schema>

export function Home() {
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>({
        resolver: zodResolver(schema)
    })

    const onSubmit = (data: FormData) => {
        console.log("Email valido:", data.email)
        navigate("/success")
    }

    return (
        <main className="flex items-center justify-center w-full lg:h-screen">
            <div className="bg-white max-w-sm mx-auto flex flex-col items-center justify-center mt-2 lg:max-w-4xl lg:rounded-[2rem] overflow-hidden">
                <div className="lg:flex flex-row-reverse ">
                    <Header />
                    <div className="px-6 lg:px-12 lg:py-12 lg:max-w-[450px] lg:mx-2">
                        <Title>Stay updates!</Title>
                        <Card>Join 60,000+ product managers receiving monthly updates on:</Card>
                        <Card svgSrc={IconList}>Product discovery and building what matters</Card>
                        <Card svgSrc={IconList}>Measuring to ensure updates are a success</Card>
                        <Card svgSrc={IconList}>And much more!</Card>
                        <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
                            <Input
                                label="Email_Address"
                                {...register("email")}
                                error={errors.email?.message}
                            />

                            <Button>Subscribe to monthly newsletter</Button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}
