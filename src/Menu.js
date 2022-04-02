import { useState } from "react"
import { useParams } from "react-router"
import searchIcon from "./assets/svgs/search.png"


const Menu = ({ dishes, title, url }) => {
    url = "http://localhost:5000/dishes?_sort=id"
    const [isPending, setIsPending] = useState(false);
    const [term, setTerm] = useState('')

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(term)
        url += "&q={}"

    }

    const handleAdd = (title, price) => {
        const dish = {title, price}

        setIsPending(true)

        fetch("http://localhost:5000/orders", {
            method: "POST",
            headers: { "Content-type": "application/json"},
            body: JSON.stringify(dish)
        }).then(() => {
            console.log("added successfully")
            setIsPending(false)
        })
    }

    return (
        <div className="menu">
            <div className="container">
                <h1>{title}</h1>
                <div className="menu-list">
                    <form onSubmit={(e) => handleSearch(e)}>
                        <input
                            type="text"
                            autoComplete="off"
                            value={term}
                            onChange={(e) => setTerm(e.target.value)}
                            />
                        <button><img src={searchIcon} width="20px" alt="" /></button>
                    </form>
                    <div className="boxes">
                        {
                            dishes && dishes.map(dish => (
                                <div className="box" key={dish.id}>
                                    <div className="head">
                                        <h1>{dish.title}</h1>
                                    </div>
                                    <div className="btn">
                                        <div className="btns">
                                            { !isPending && <button className="add" onClick={() => handleAdd(dish.title, dish.price)}>Add</button>}
                                        </div>
                                        <p>{dish.price}$</p>
                                    </div>
                                    
                                </div>
                            ))  
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Menu;