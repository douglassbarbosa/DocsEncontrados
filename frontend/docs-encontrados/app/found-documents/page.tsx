'use client'
import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabaseClient'
import { FoundDocument } from '@/types/supabase'

export default function FoundDocuments() {
  const [docs, setDocs] = useState<FoundDocument[]>([])

  useEffect(() => {
    const fetchDocs = async () => {
      const { data, error } = await supabase.from('found_documents_summary_view').select('*')
      if (!error && data) setDocs(data)
    }
    fetchDocs()
  }, [])

  return (
    <div>
      <h2>Documentos Encontrados</h2>
      <ul>
        {docs.map(doc => (
          <li key={doc.document_number}>
            {doc.document_name} - {doc.document_type} - {doc.found_location}
          </li>
        ))}
      </ul>
    </div>
  )
}
