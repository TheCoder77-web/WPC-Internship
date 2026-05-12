import './home.css'
import Me from "../assets/me.png"

function Home() {
    return (
    <>
     <div className="card-container">
          <div className="info card">
            <img src={Me} width={200} height={200}/>
            <p style={{color:"blue", fontSize:"20px"}}>
            My name is Ruien Cao and I love C.P (Computer Programming). I am a student in Bayside High School and is currently in my junior year. As I said before, I enjoy C.P and it's by far my favorite hobby. I also enjoy hanging out with friends outside of school. I live in a family of 4 which consists of my dad, my mom, my little sister, and me.
            </p>
          </div>

        <div className="container intro center">
          <div>
            <h2>This is an introduction of me. Check it out before moving on to the other pages.</h2>
          </div>
        </div>

        <div className="card info">
          <div className="outline">
            <h1>Hobbies</h1>
            <hr/>
          </div>

            <li>Computer Programming</li>
            <li>Video Games</li>  
            <li>Hanging Out With Friends</li>
            <li>Badminton</li>

        </div> 
      </div>
     </>
    )
}

export default Home;