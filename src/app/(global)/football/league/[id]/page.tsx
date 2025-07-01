import Navigation from '@/components/football/league/Navigation'
import TeamsNavbar from '@/components/football/league/TeamsNavbar'
import React from 'react'

export default function page() {
  return (
    <div>
        <div>

        <Navigation title='Laliga' image='http://localhost:8080/image/football/league/laliga/4.png' />
        </div>
        <div>
            <TeamsNavbar />
        </div>
    </div>
  )
}
