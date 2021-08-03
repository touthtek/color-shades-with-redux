
import {useSelector, useDispatch} from 'react-redux'
import { bindActionCreators } from 'redux';
import {colorActionCreator} from './state/action-creator/index'


function App() {

  const color = useSelector((state) => state.colorCount);
  const dispatch = useDispatch();
  const {IncreaseShade, decreaseShade} = bindActionCreators(colorActionCreator, dispatch)
   console.log(color);

    const renderShades = () =>{
      const shades = [];
      for(let i=1; i <= color; i++)
      {
          shades.push(
            <div key = {i}
        
            style = {{
              backgroundColor : `rgba(212,113,211,${i/10})`,
              height : '100%',
              width : '10%'
            }}
    
            ></div>
          )
      }
      return shades;
    }


  return (
    <>
    <div className="App">
     <h1 style={{textAlign:'center'}}>Color Shade</h1>
      <div
        style ={{
          border : '1px solid rgba(0,0,0,0.3)',
          height : '100px',
          width : '80%',
          margin : '2rem auto',
          display : 'flex'
        }}
      >
        {renderShades()}
        

      </div>
     
    </div>
       <div 
       className='row' 
       style={{
           textAlign : 'center'
       }}>
         <div 
         className = 'col-md-6'
         style={{
          textAlign : 'right'
      }}
         >
         <button 
      onClick = {IncreaseShade}
      className = 'btn btn-success'
     >Add Shades</button>
         </div>

         <div 
         className = 'col-md-6'
         style={{
          textAlign : 'left'
      }}
         >
     <button
      onClick ={decreaseShade}
      className = 'btn btn-danger'
     >Remove Shades</button>
         </div>

       </div>
     </>
  );
}

export default App;
