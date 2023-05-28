import Header from "./components/Header.js";
import Clock from "./components/Timer.js";
import Menu from "./components/Menu.js";
import Todo from "./components/Todo.js";
import "./styles/App.css"


function App() {
    // const [pageColor, setPageColor] = useState(null)
    return (
        <div className='container'>
            <Header />
            <Menu />
            <Clock />
            <Todo />
        </div>
    )
}

export default App;


