import { GalleryProps } from "@/types/gallery";

function Profile(props : GalleryProps) {
  return (
  <section className="profile">
        <h2>{props.scientist.name}</h2>
        <img
          className="avatar"
          src={'https://i.imgur.com/' + props.scientist.imageId + 's.jpg'}
          alt={props.scientist.name}
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b>
            {props.scientist.profession}
          </li>
          <li>
            <b>Awards: {props.scientist.awards.split(',').length} </b>
            {props.scientist.awards}
          </li>
          <li>
            <b>Discovered: </b>
            {props.scientist.discovery}
          </li>
        </ul>
      </section>);
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        scientist={{
          name: "Maria Skłodowska-Curie",
          imageId: "szV5sdG",
          profession: "physicist and chemist",
          awards: "(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)",
          discovery: "polonium (element)"
        }}
        />
        <Profile
        scientist={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
          profession: "geochemist",
          awards: "(Miyake Prize for geochemistry, Tanaka Prize)",
          discovery: "a method for measuring carbon dioxide in seawater"
        }}
        />
    </div>
  );
}
