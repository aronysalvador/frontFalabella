import React, {useState } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { TextField, Typography, Button } from "@material-ui/core";
import { getComunStyle } from "./css/comun";
import { getArrayTest, updateForm2 } from "./redux/actions/testOneAction";
import { getArrayTest2, getArrayTest3, updateForm } from "./redux/actions/testSecondAction"
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
      <div className="App-header">
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
                        dispatch(updateForm2("arrayFinal" , "" ))
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
                  {arrayFinal &&  <Typography style={{height:"auto", display:"block", overflow:"auto"}}>{arrayFinal.toString()}</Typography>}
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
                        dispatch(updateForm("arrayFinalSecond" , "" ))
                      }}
                    >
                      Clear
                    </Button>
                </div>
            </div>
            <div className="col-md-5" style={{textAlign:"left" , backgroundColor: "#9fbcc7", border:" 2px solid #f9fafb", padding: "10px",borderRadius: "25px", marginLeft: "10px" ,wordWrap:"break word"}}>
                  <Typography >
                      Data output
                  </Typography>
                  <br/>
                  {arrayFinalSecond && <Typography style={{height:"auto", display:"block", overflow:"auto"}}>{arrayFinalSecond.toString()}</Typography>}
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
                  <Typography >                   
                  The number less than or equal to <b>1000000</b> with the longest length in Collatz's conjecture is: <b>837799</b>. Check it here
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
                      Get length
                    </Button>
                    <Button
                      variant="contained"
                      className={comunClass.buttonAchs}
                      disabled={!number3}
                      onClick={() => {
                        setNumber3("")
                        dispatch(updateForm("objectoFinal" , "" ))
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
                  {objectoFinal && <Typography >The longest sequence of the Collatz Conjecture up to the number <b>{number3}</b> is <b>{objectoFinal[0]}</b> with a logintud of <b>{objectoFinal[1]}</b> </Typography>}
            </div>
          </div>  
        </div>
      </div>
    </div>
  );
}

export default App;
