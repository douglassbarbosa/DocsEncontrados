import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function MatchView() {
  const [matches, setMatches] = useState([])

  useEffect(() => {
    const fetchMatches = async () => {
      const { data, error } = await supabase.from('possible_matches_view').select('*')
      if (!error) setMatches(data)
    }
    fetchMatches()
  }, [])

  return (
    <div>
      <h2>Possíveis Matches</h2>
      <ul>
        {matches.map((match, i) => (
          <li key={i}>
            {match.document_name} - Match Score: {match.match_score}%
          </li>
        ))}
      </ul>
    </div>
  )
}