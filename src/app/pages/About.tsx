import { Header } from "../ui"

export const About = () => {
  return (
    <div className="flex flex-col items-center w-full h-full p-8">
      <div className="flex w-full">
        <Header name="About" description="" />
      </div>
      <div className="flex flex-grow flex-col h-full w-full items-center">
        <p className="flex text-2xl pt-8 font-bold">Star Wars Planetarium was created as a React test.</p>
        <div className="flex flex-col p-10 items-center">
          <p className="flex text-lg p-4 pt-10 px-10 text-center">I know there are a lot of improvements in the table but for the time i decided to let it as it is. Anyway, there's a lot of reusable code and inherited code across the application.</p>
          <p className="flex text-lg p-4 px-10 text-center">About the way i loaded the data. I decided to load all the data at the beggining due to the size of the data, due to this the application feels faster after the first load.</p>
        </div>
        <p className="flex flex-grow items-end font-bold">
          Created by Fernando Lugo - 2024
        </p>
      </div>

    </div>
  )
}
