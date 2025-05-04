'use client'
import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabaseClient'
import type { MatchView } from '../../types/supabase'

export default function MatchView() {
  const [matches, setMatches] = useState<MatchView[]>([])

  useEffect(() => {
    const fetchMatches = async () => {
      const { data, error } = await supabase.from('possible_matches_view').select('*')
      if (!error && data) setMatches(data)
    }
    fetchMatches()
  }, [])

  return (
    <div>
      <h2>Possíveis Matches</h2>
      <ul>
        {matches.map((match) => (
          <li key={match.document_name}>
            {match.document_name} - Match Score: {match.match_score}%
          </li>
        ))}
      </ul>
    </div>
  )
}
