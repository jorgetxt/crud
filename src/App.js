import './App.css';
import Navbar from "./components/navbar/Navbar"
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Form from "./components/form/Form"
import List from "./components/list/List"



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Grid container spacing={1}>
        <Grid container item xs={12}  sm ={4} >
          <Form></Form>

        </Grid>
        <Grid container item xs={12} sm ={8} >
          <List></List>
        </Grid>
      
    </Grid>
      
    </div>
  );
}

export default App;
