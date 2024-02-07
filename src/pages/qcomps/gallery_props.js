function Profile({name, imageId, profession, awards, discovered, size=70}) {
  return (
    <section className="profile">
        <h2>{name}</h2>
        <img
          className="avatar"
          src={`https://i.imgur.com/${imageId}.jpg`}
          alt={name}
          width={size}
          height={size}
        />
        <ul>
          <li>
            <b>Profession: </b>
            {profession}
          </li>
          <li>
            <b>Awards: {awards.length} </b>
            ({formatAwards(awards)})
          </li>
          <li>
            <b>Discovered: </b>
            {discovered}
          </li>
        </ul>
      </section>
  );
}

function formatAwards(awards) {
  let s = "";
  for (let n = 0; n < awards.length; n++) {
    if (n != 0) {
      s += ", ";
    }
    s += awards[n];
  }
  return s
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile 
        name="Maria Skłodowska-Curie"
        imageId="szV5sdGs"
        profession="physicist and chemist"
        awards={["Nobel Prize in Physics", "Nobel Prize in Chemistry", "Davy Medal", "Matteucci Medal"]}
        discovered="polonium (element)"
      />
      <Profile 
        name="Katsuko Saruhashi"
        imageId="YfeOqp2s"
        profession="geochemist"
        awards={["Miyake Prize for geochemistry", "Tanaka Prize"]}
        discovered="a method for measuring carbon dioxide in seawater"
      />
    </div>
  );
}