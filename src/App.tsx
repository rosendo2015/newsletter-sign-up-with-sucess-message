import { Card } from "./components/Card"
import { Header } from "./components/Header"
import { Title } from "./components/Title"
import Iconlist from "./assets/icon-list.svg"
import { Input } from "./components/Input"
import { Button } from "./components/Button"

export function App() {
  return (
    <div className="bg-white max-w-[375px] mx-auto flex flex-col items-center border">
      <main >
        <Header />
        <div className="px-6">
          <Title>Stay updates!</Title>
          <Card>Join 60,000+ product managers receiving monthly updates on:</Card>
          <Card svgSrc={Iconlist}> Product discovery and building what matters</Card>
          <Card svgSrc={Iconlist}>Measuring to ensure updates are a success</Card>
          <Card svgSrc={Iconlist}>And much more!</Card>
          <form action="" className="mt-10">
            <Input />
            <Button>Subscribe to monthly newsletter</Button>
          </form>
        </div>
      </main>
    </div>
  )
}