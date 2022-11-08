import "./Footer.css";
import Icon1 from "../images/icon1.png";
import Icon2 from "../images/icon2.png";
import Icon3 from "../images/icon3.png";
import Icon4 from "../images/icon4.png";
import FooterMenu from "./FooterMenu";

const footersMenu = [
  { name: Icon1, text: "React makes ir painless to create interavtive UIs", title:"Declarative" },
  {
    name: Icon2,
    text: "Build encapsulated components that manage their state",
    title:"Components" 
  },
  {
    name: Icon3,
    text: "A set of immutable values are passed to the component's",
    title:"Single-Way" 
  },
  { name: Icon4, text: "Statically-typed, designed to run on modern browsers",title:"JSX"  },
];

function Footer() {
  return (
    <footer className="flex-jc-space-between">
      {footersMenu.map((element) => {
        return <FooterMenu name={element.name} text={element.text} title={element.title} />;
      })}
    </footer>
  );
}

export default Footer;
