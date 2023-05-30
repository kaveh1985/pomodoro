import "../styles/Header.css"

function Header({header}) {
    return <div className="Header">
        <h3>{header? header : "Please select a todo from the list"}</h3>
    </div>
}

export default Header;
