import './FooterMenu.css'

function FooterMenu (props){
    return (
        <div className="flex-column menu-item">
            <img src={props.name} alt='' />
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </div>
    )
}

export default FooterMenu;