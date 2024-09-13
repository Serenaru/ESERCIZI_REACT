//dichiaro il nome e scrivo un markup con JSX usando HTML 

const profile_name= "Bernarda";
const profile_description= "Schiacciatrice di pannocchie";

export function Profile({ name, description}) {
    return (
        <div>
          <h2>{name}</h2>
            <img
                src="https://i.imgur.com/MK3eW3As.jpg"
                alt="Katherine Johnson"
            />
            <p> {description} </p>
        </div>
    )
}

export default function Gallery() {
    return (
      <section>
        <h1>Amazing scientists</h1>
        <Profile name= {profile_name} description= {profile_description}/>
        <Profile name= {profile_name} description= {profile_description}/>
        <Profile name= {"Barbara"} description= {"Pannocchia"}/>           
      </section>
    );
  }

//Nel terzo profile name posso aggiungere un nominativo indipendente, con sintassi js. Specificando nome e descrizione posso modificare le info di tutti e tre i componenti.