'use client'
import { useState } from 'react'
import { supabase } from '../../lib/supabaseClient'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) alert('Erro: ' + error.message)
    else alert('Login realizado: ' + data.user.email)
  }

  return (
    <div>
      <h2>Login</h2>
      <input type="email" placeholder="E-mail" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Senha" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  )
}