import Hero from "@/src/components/Hero"
import Destinations from "@/src/sections/Destinations"
import Resorts from "@/src/sections/Resorts"
import Blog from "@/src/sections/Blog"

export default function Page() {
  return (
    <main>
      <Hero />
      <Destinations />
      <Resorts />
     <Blog /> 
    </main>
  )
}