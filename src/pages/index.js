import React from "react"

export default function Home() {

  return (
  <div>
  <div id="contact2">
    <form method="post" netlify-honeypot="bot-field" data-netlify="true" 
    name="contact2" >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact2" />
      <div>
        <p>Nimi2</p>
        <input type='text' name='name' />
      </div>
      <div>
        <p>Sposti</p>
        <input type='email' name='email' />
      </div>
      <div>
        <p>Puhelin</p>
        <input type='text' name='tel' />
      </div>
      <div>
        <p>Viesti</p>
        <textarea type='text' name='message' />
      </div>
      <p>Hyväksyn 
        <input type='checkbox' />
      </p>
      <button type='submit'>Lähetä</button>
    </form>
  </div>)
   <div id="training_contact">
   <form
     method="post"
     netlify-honeypot="bot-field"
     data-netlify="true"
     name="training_contact"
   >
     <input type="hidden" name="bot-field" />
     <input type="hidden" name="form-name" value="training_contact" />
     <div>
       <p>Nimi</p>
       <input type="text" name="name" />
     </div>
     <div>
       <p>Sposti</p>
       <input type="email" name="email" />
     </div>
     <div>
       <p>Puhelin</p>
       <input type="text" name="tel" />
     </div>
     <div>
       <p>Viesti</p>
       <textarea type="text" name="message" />
     </div>
     <p>
       Hyväksyn
       <input type="checkbox" />
     </p>
     <button type="submit">Lähetä</button>
   </form>
 </div>
</div>
}
