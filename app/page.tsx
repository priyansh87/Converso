import { Button } from '@/components/ui/button'
import React from 'react'
import CompanionCard from '../components/CompanionCard'
import CompanionsList from '../components/CompanionsList'
import CTA from '../components/CTA'
import { recentSessions } from '@/constants'

const Page = () => {
  return (
    <main >
      <h1 className='text-2xl underline '>Popular Comapnion</h1>

      <section className='home-section'>
        <CompanionCard
          id="123" name= "Neura the Brainly Explorer" topic= "Neural Network of the brain" subject="science" duration={45} color="#ffda6e"
        />
        <CompanionCard
          id="456" name= "Neura the Brainly Explorer" topic= "Neural Network of the brain" subject="science" duration={45} color="#ffda6e"
        />
        <CompanionCard
          id="789" name= "Neura the Brainly Explorer" topic= "Neural Network of the brain" subject="science" duration={45} color="#ffda6e"
        />
      </section>

      <section className='home-section'>
        <CompanionsList
          title = "Recently Completed Session" 
          companions = {recentSessions}
          className="w-2/3 max-lg:w-full"
        />
        <CTA/>
      </section>
    </main>
  )
}

export default Page