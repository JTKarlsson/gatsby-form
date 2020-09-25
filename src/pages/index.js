import React from "react"
import axios from "axios";

export default function Home() {

  return (<div id="contact">
    <form method="post" netlify-honeypot="bot-field" data-netlify="true" 
    name="contact" action='https://gatsby-form-joni.netlify.app/#contact'>
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <div>
        <p>Nimi</p>
        <input type='text' name='nimi' />
      </div>
      <div>
        <p>Sposti</p>
        <input type='email' name='sposti' />
      </div>
      <div>
        <p>Puhelin</p>
        <input type='text' name='puhelin' />
      </div>
      <div>
        <p>Viesti</p>
        <textarea type='text' name='viesti' />
      </div>
      <p>Hyväksyn 
        <input type='checkbox' />
      </p>
      <button type='submit'>Lähetä</button>
    </form>
  </div>)
}
