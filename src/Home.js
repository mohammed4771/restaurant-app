import chef from "./assets/svgs/chef.JPG"
import banner3 from "./assets/banner3.png"
const Home = () => {
    return (
        <div className="home">
            <div className="banner">
                <h1>AL-Sultan</h1>
            </div>

            <div className="homeContent">
                <div className="headChef">
                    <h3>Head Chef</h3>
                    <h1>Donte Owens</h1>
                    <p>​Paragraph Text. Praesent commodo cursus magna,
                    vel scelerisque nisl consectetur et. Sed posuere consectetur est
                    at lobortis. Cras, dapibus ac facilisis in,
                    meet head chef - Donte Owens.</p>
                </div>
                <div className="chefImg">
                    <img src={chef} alt="" />
                </div>
            </div>

        </div>
    );
}
 
export default Home;