import { Header } from "../ui"

export const About = () => {
  return (
    <div className="flex flex-col items-center w-full h-full p-8">
      <div className="flex w-full">
        <Header name="About" description="" />
      </div>
      <div className="flex flex-grow flex-col h-full w-full items-center">
        <p className="flex text-2xl pt-8 font-bold">Star Wars Planetarium was created as a React test.</p>
        <div className="flex flex-col gap-4 p-10 items-center">
          <p className="flex text-lg p-4 pt-10 px-10 text-center">I know there are a lot of improvements that I can make to the table to reuse it as a UI component, but for now, I've decided to leave it as it is. Nevertheless, there's a significant amount of reusable code, contributing to the scalability and maintainability of the application.</p>
          <p className="flex text-lg p-4 px-10 text-center">Regarding how I loaded the data, I chose to load all of it at the beginning due to its size. As a result, the application feels faster after the initial load</p>
        </div>
        <p className="flex flex-grow items-end font-bold">
          Created by Fernando Lugo - 2024
        </p>
      </div>

    </div>
  )
}
