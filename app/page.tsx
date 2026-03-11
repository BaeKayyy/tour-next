import Hero from "@/src/components/Hero"
import Destinations from "@/src/sections/Destinations"
import Resorts from "@/src/sections/Resorts"
import Blog from "@/src/sections/Blog"
import MapSection from "@/src/sections/MapSection"
import CTA from "@/src/sections/CTA"

export default function Page() {
  return (
    <main>
      <Hero />
      <Destinations />
      <Resorts />
      <Blog /> 
      <MapSection />
      <CTA />
    </main>
  )
}