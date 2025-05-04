import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function LostDocuments() {
  const [docData, setDocData] = useState({
    document_number: '',
    document_name: '',
    document_type: '',
    document_issuer: '',
    lost_location: ''
  })

  const handleChange = e => {
    setDocData({ ...docData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    const user = supabase.auth.getUser()
    const { error } = await supabase.from('lost_documents').insert({
      ...docData,
      owner_id: (await user).data.user.id
    })
    if (error) alert('Erro: ' + error.message)
    else alert('Documento perdido cadastrado.')
  }

  return (
    <div>
      <h2>Cadastrar Documento Perdido</h2>
      <input name="document_number" placeholder="Número" onChange={handleChange} />
      <input name="document_name" placeholder="Nome no documento" onChange={handleChange} />
      <input name="document_type" placeholder="Tipo (RG, CNH...)" onChange={handleChange} />
      <input name="document_issuer" placeholder="Órgão Emissor" onChange={handleChange} />
      <input name="lost_location" placeholder="Local da perda" onChange={handleChange} />
      <button onClick={handleSubmit}>Salvar</button>
    </div>
  )
}
