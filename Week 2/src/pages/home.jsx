import Me from "../assets/me.png"

function Home() {
    return (
    <>
     <div className="card-container">
          <div className="info card">
            <img src={Me} width={200} height={200}/>
            <p>
            My name is Ruien Cao and I love C.P. I am a student in Bayside High School and is currently in my junior year. As I said before, I enjoy C.P (Computer Programming) and it's by far my favorite hobby. I also enjoy hanging out with friends outside of school. I live in a family of 4 which consists of my dad, my mom, my little sister, and me.
            </p>
          </div>

        <div className="card info">
            <div className="outline">
            <h1>Projects</h1>
            <hr/>
            </div>
            <a href="https://thecoder77-web.github.io/Mexico-Website/" target="_blank">Country Website</a>
            <br/>
            <br/>
            <a href="https://thecoder77-web.github.io/NYCOpenDataProject/" target="_blank">NYC Open Data Website</a>
            <br/>
            <br/>
            <a href="https://docs.google.com/presentation/d/1cCQ_h6PDwDS4InPclREi718PN6dIPeckeS6Md06_5Wo/edit?slide=id.p#slide=id.p" target="_blank">Encryption Project</a>
        </div> 
        </div>
     </>
    )
}

export default Home;