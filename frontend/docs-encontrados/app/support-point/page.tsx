'use client'
import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabaseClient'
import { SupportPointsOverviewView } from '@/types/supabase'

export default function SupportPointDashboard() {
  const [overview, setOverview] = useState<SupportPointsOverviewView[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('support_points_overview_view').select('*')
      if (!error && data) setOverview(data)
    }
    fetchData()
  }, [])

  return (
    <div>
      <h2>Pontos de Apoio</h2>
      <ul>
        {overview.map((row, i) => (
          <li key={i}>
            {row.name} - Responsável: {row.manager_name} - Documentos: {row.documents_received}
          </li>
        ))}
      </ul>
    </div>
  )
}
