import { Card } from "./components/Card"
import { Header } from "./components/Header"
import { Title } from "./components/Title"
import IconList from "./assets/icon-list.svg"
import { Input } from "./components/Input"
import { Button } from "./components/Button"


export function App() {
  return (
    <div className=" sm:mx-auto sm:flex sm:flex-col sm:items-center lg:max-w-200 lg:rounded-4xl">
      <main className="sm:bg-white lg:flex flex-row-reverse">
        <Header />
        <div className="sm:px-6 lg:py-12 lg:w-190 ">
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
  )
}