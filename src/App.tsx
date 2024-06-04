import { useState } from 'react';
import './App.css'

function App() {
  // let name: string;
  let [name, setName] = useState<string>()
  let [email, setEmail] = useState<string>()
  let [cpf, setCpf] = useState<string>()
  let [tel, setTel] = useState<string>()
  let [adress, setAdress] = useState<string>()
  let [country, setCountry] = useState<string>()

  return( 
  <>
    <section>
      <form action="submit">
        <fieldset>
          <label htmlFor="name">Nome:</label>
          <input name='name' type="text" onChange={(e)=>setName(e.target.value)} value={name} />
        </fieldset>

        <fieldset>
          <label htmlFor="email">Email:</label>
          <input name='email' type="text" onChange={(e)=>setEmail(e.target.value)} value={email} />
        </fieldset>

        <fieldset>
          <label htmlFor="cpf">CPF:</label>
          <input name='cpf' type="text" onChange={(e)=>setCpf(e.target.value)} value={cpf}/>
        </fieldset>

        <fieldset>
          <label htmlFor="tel">Telefone:</label>
          <input name='tel' type="text" onChange={(e)=>setTel(e.target.value)} value={tel} />
        </fieldset>

        <fieldset>
          <label htmlFor="adress">Endereço:</label>
          <input name='adress' type="text"  onChange={(e)=>setAdress(e.target.value)} value={adress}/>
        </fieldset>

        <fieldset>
          <label htmlFor="country">Cidade:</label>
          <input name='country' type="text" onChange={(e)=>setCountry(e.target.value)} value={country} />
        </fieldset>
         
         <button type='submit'>Enviar</button>
         
      </form>
    </section>

  </>)
}

export default App
