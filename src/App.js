import logo from './logo.svg';
import './App.css';

function isAdult(age){
    return age >= 18 ? "TAK" : "NIE";
}

function formatting(text){
    return text.toLowerCase().charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

const list = [
    {"firstname":"adam", "lastname":"KOWALSKI", "age":"10"},
    {"firstname":"izabela", "lastname":"mAKOWSKA", "age":"15"},
    {"firstname":"JAn", "lastname":"Urbański", "age":"46"},
]

function App() {
    return (
        <div className="App">
            <table cellPadding="0" cellSpacing="0">
                <tr>
                    <th>Imię</th>
                    <th>Nazwisko</th>
                    <th>Wiek</th>
                </tr>
                <tr>
                    <td>{formatting(list[0].firstname)}</td>
                    <td>{formatting(list[0].lastname)}</td>
                    <td>{isAdult(list[0].age)}</td>
                </tr>
                <tr>
                    <td>{formatting(list[1].firstname)}</td>
                    <td>{formatting(list[1].lastname)}</td>
                    <td>{isAdult(list[1].age)}</td>
                </tr>
                <tr>
                    <td>{formatting(list[2].firstname)}</td>
                    <td>{formatting(list[2].lastname)}</td>
                    <td>{isAdult(list[2].age)}</td>
                </tr>
            </table>
        </div>
    );
}

export default App;
