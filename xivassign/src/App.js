
import './App.css';
import Collaborate from './Components/Collaborate';
function App(props) {
  return (
    <div className="App">
      <div className='letsTalk'>
          <div className='letsTalkChild'>
              <p className='letsTalkChild2'>Let's Collaborate</p>
          </div>
      </div>
      <Collaborate 
      src="https://www.xivtech.io./rp2.jpg"
      name="AI + RPA is what we do"
      des="Future-Proof your business. Drive efficiency, profitability and deliver on customer experience"
      
      />
       <Collaborate 
      src="https://www.xivtech.io./p1.png"
      name="Make Bolder Choices"
      des="Digital focused strategies to realize market-changing ideas"
      
      />
       <Collaborate 
      src="https://www.xivtech.io./p2.jpg"
      name="Innovate with Speed"
      des="Create higher quality software, deliver on customer expectations and business goals"
      
      />
       <Collaborate 
      src="https://www.xivtech.io./p3.jpg"
      name="Embrace Cloud"
      des="With Cloud-First accelerate innovation and optimize performance"
      
      />
    </div>
  );
}

export default App;
