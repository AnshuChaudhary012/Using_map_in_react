import { cards } from '../utility/cardData.js'
import Card from '../components/Card.jsx'

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-57px)] flex-1 bg-[#050505] p-2 text-[#f5f5f5] ">
      <h1 className="text-center max-w-151.25 text-[50px] mx-auto ">Explore the Waves of Innovation Ecosystem</h1>
      <section
        aria-label="Resources"
        className="grid mt-15 max-w-328 w-full px-4 mx-auto grid-cols-1 gap-2 min-[461px]:grid-cols-2 min-[701px]:grid-cols-3"
      >
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </section>
    </main>
  )
}
