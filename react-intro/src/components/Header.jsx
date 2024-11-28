import style from "../App.module.css"
import '../App.css'

function Header() {
    console.log(style)
    return(
        <header className={style['active-tag']}>
            <h1 className="active-tag">Header</h1>
        </header>
    )
}

export default Header