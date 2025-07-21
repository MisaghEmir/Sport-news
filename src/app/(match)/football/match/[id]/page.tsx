import MatchNavigation from '@/components/football/matches/Match-Navigation'
import React from 'react'

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const {id} = await params
  return (
    <div>
        <MatchNavigation id={id} />
        </div>
  )
}
