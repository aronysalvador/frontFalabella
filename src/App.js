import React, {useState } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { TextField, Typography, Button } from "@material-ui/core";
import { getComunStyle } from "./css/comun";
import { getArrayTest } from "./redux/actions/testOneAction";
import { getArrayTest2, getArrayTest3 } from "./redux/actions/testSecondAction"
import './App.css';

const App = () => {

  const {
    testOneForm: {arrayFinal}, testSecondForm:{arrayFinalSecond, objectoFinal}
  } = useSelector((state) => state, shallowEqual);

  //StateOne
  const [number, setNumber] = useState(null);
  const [arrayInitial, setArrayInitial] = useState([])

  //StateTwo
  const [number2, setNumber2] = useState(null);

  //StateTwo
  const [number3, setNumber3] = useState(null);

  const dispatch = useDispatch();
  const comunClass = getComunStyle();

  return (
    <div className="App">
      <body className="App-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
                Test Number 1
            </div>
          </div>  
          <div className="row justify-content-center">
          <div className="col-md-5" style={{textAlign:"left" , backgroundColor: "#45b1d9", border:" 2px solid #f9fafb", padding: "10px",borderRadius: "25px"}}>
                <Typography>
                  Start Data or Input Data
                </Typography>
                
                <div className="col-md-12">
                  <Typography >                   
                    Enter number in array
                  </Typography>
                  <TextField
                      id="number1"
                      type="number"
                      style={{backgroundColor:"white"}}
                      value={number}
                      variant="outlined"
                      size="small"
                      margin="dense"
                      fullWidth
                      onChange={(e) => {
                        setNumber(e.target.value)
                      }}
                    />
                    <br/>
                    <Button
                      variant="contained"
                      className={comunClass.buttonAchs}
                       disabled={!number}
                      onClick={() => {

                        setArrayInitial( arrayInitial =>[...arrayInitial, parseInt(number)])
                        setNumber("")
                      }}
                    >
                      Include Number
                    </Button>
                    <br/>
                    {arrayInitial && arrayInitial.map((item,index) => {
                      return  `${item},`
                     })}

                    <br/>
                    <Button
                      variant="contained"
                      className={comunClass.buttonAchs}
                      onClick={() => {
                        dispatch(getArrayTest(arrayInitial));
                        
                      }}
                    >
                      Get array
                    </Button>
                    <Button
                      variant="contained"
                      className={comunClass.buttonAchs}
                      disabled={!arrayInitial}
                      onClick={() => {
                        setArrayInitial("")
                      }}
                    >
                      Clear
                    </Button>
                </div>
            </div>
            <div className="col-md-5" style={{textAlign:"left" , backgroundColor: "#9fbcc7", border:" 2px solid #f9fafb", padding: "10px",borderRadius: "25px", marginLeft: "10px"}}>
                  <Typography >
                      Data output
                  </Typography>
                  <br/>
                  <br/>
                  {arrayFinal && arrayFinal?.map((item,index) => {
                      return  `${item},`
                  })}
            </div>
          </div>        
          <br/>
          <div className="row">
            <div className="col-md-12">
                Test Number 2
            </div>
          </div>
          <div className="row justify-content-center">
          <div className="col-md-5" style={{textAlign:"left" , backgroundColor: "#45b1d9", border:" 2px solid #f9fafb", padding: "10px",borderRadius: "25px"}}>
                <Typography>
                  Start Data or Input Data
                </Typography>
                <div className="col-md-12">
                  <Typography >                   
                    Enter number
                  </Typography>
                  <TextField
                      id="number2"
                      type="number"
                      style={{backgroundColor:"white"}}
                      value={number2}
                      variant="outlined"
                      size="small"
                      margin="dense"
                      fullWidth
                      onChange={(e) => {
                        setNumber2(e.target.value)
                      }}
                    />
                   
                    <Button
                      variant="contained"
                      className={comunClass.buttonAchs}
                      onClick={() => {
                        dispatch(getArrayTest2(number2));                       
                      }}
                    >
                      Get array
                    </Button>
                    <Button
                      variant="contained"
                      className={comunClass.buttonAchs}
                      disabled={!number2}
                      onClick={() => {
                        setNumber2("")
                      }}
                    >
                      Clear
                    </Button>
                </div>
            </div>
            <div className="col-md-5" style={{textAlign:"left" , backgroundColor: "#9fbcc7", border:" 2px solid #f9fafb", padding: "10px",borderRadius: "25px", marginLeft: "10px"}}>
                  <Typography >
                      Data output
                  </Typography>
                  <br/>
                  <br/>
                  {arrayFinalSecond && arrayFinalSecond?.map((item,index) => {
                      return  `${item},`
                  })}
            </div>
          </div>  
          
          <br/>
          <div className="row">
            <div className="col-md-12">
                Bonus
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-5" style={{textAlign:"left" , backgroundColor: "#45b1d9", border:" 2px solid #f9fafb", padding: "10px",borderRadius: "25px"}}>
                <Typography>
                  Start Data or Input Data
                </Typography>
                <div className="col-md-12">
                  <Typography >                   
                    Enter number
                  </Typography>
                  <TextField
                      id="number3"
                      type="number"
                      style={{backgroundColor:"white"}}
                      value={number3}
                      variant="outlined"
                      size="small"
                      margin="dense"
                      fullWidth
                      onChange={(e) => {
                        setNumber3(e.target.value)
                      }}
                    />
                   
                    <Button
                      variant="contained"
                      className={comunClass.buttonAchs}
                      onClick={() => {
                        dispatch(getArrayTest3(number3));                       
                      }}
                    >
                      Get array
                    </Button>
                    <Button
                      variant="contained"
                      className={comunClass.buttonAchs}
                      disabled={!number3}
                      onClick={() => {
                        setNumber3("")
                      }}
                    >
                      Clear
                    </Button>
                </div>
            </div>
            <div className="col-md-5" style={{textAlign:"left" , backgroundColor: "#9fbcc7", border:" 2px solid #f9fafb", padding: "10px",borderRadius: "25px", marginLeft: "10px"}}>
                  <Typography >
                      Data output
                  </Typography>
                  <br/>
                  <br/>
                  {objectoFinal && `The longest sequence of the Collatz Conjecture up to the number ${number3} is ${objectoFinal[0]} with a logintud of ${objectoFinal[1]}`}
            </div>
          </div>  
        </div>
      </body>
    </div>
  );
}

export default App;
