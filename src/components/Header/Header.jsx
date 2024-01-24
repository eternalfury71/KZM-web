import { Logo } from "../../assets/Logo"
import './header.css'

export const Header = () => {
    return (
        <header>
            <nav>
                <div className="nav-logo">
                    <a href="/"><Logo /></a>
                </div>
                <div className="nav-list">
                    <li className="nav-list_item">Главное</li>
                    <li className="nav-list_item">О компании</li>
                    <li className="nav-list_item">Проекты</li>
                    <li className="nav-list_item">Контакты</li>
                </div>
            </nav>
        </header>
    )
}