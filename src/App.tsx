import './App.css';
import img from "./assets/unnamed.jpg"


function App() {
  return (
    <div className="App">
      <section className="section1">
          <div className="my-container">
              <div className="wrap">
                  <img className="img" src={img} alt=""/>
                  <div className="text-wrap">
                      <p className="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                          In, ad perspiciatis facilis repellendus nihil dolorem laborum asperiores,
                          quam illo fugiat debitis consequatur. Ulla autem harum voluptatibus dignissimos cupiditate?
                          Aliquid, in?</p>
                      <button className="btn">Click Me!</button>
                  </div>
              </div>
          </div>
      </section>
    </div>
  );
}

export default App;
