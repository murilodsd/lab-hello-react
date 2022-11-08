import './Header.css'
import Button from './Button';

function Header (){
    return (
        <header>
            <div>
                <h1>
                    Say Hello to ReactJS
                </h1>
                <p>You will learn how to use the most popular frontend library and become a super Ninja developer</p>
                <Button buttonText='Awesome!'/>
            </div>
        </header>

    )
}

export default Header;