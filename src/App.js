import './App.css';
import { Button, FormControl, Grid, InputAdornment, makeStyles, OutlinedInput, Paper, Toolbar, Typography } from '@material-ui/core';
import { useState } from 'react';

const useStyles = makeStyles(theme => ({
  calculatorContainer: {
    width: 400,
    height: 600,
    margin: "40%",
    marginTop: theme.spacing(16),
    backgroundColor: "grey",
    padding: 50
  },

}));



function App() {
  const classes = useStyles();
  const [numbers, setNumbers] = useState([]);
  const [num, setNum] = useState(0);
  const [screen, setScreen] = useState("");
  const [showAns, setShowAns] = useState(false);
  const [ans, setAns] = useState(0);

  const calculate = () => {
    const x = numbers.reduce((a, b) => a + b);
    setAns(x + num);
    setShowAns(true);
    setNum(0);
  }

  return (
    <div style={{}}>
      <Paper className={classes.calculatorContainer}>
        <Toolbar style={{ alignItems: "center" }}><Typography variant="h5">Calculator</Typography></Toolbar>
        <Grid container alignItems="center" spacing={2}>
          <Grid xs={12}>
            <FormControl variant="outlined" style={{ margin: 20 }}>
              <OutlinedInput
                id="outlined-adornment-weight"
                value={screen}
                // onChange={() => { }}
                readOnly
                fullWidth
                autoFocus
                endAdornment={<InputAdornment position="end">
                  I<Grid container>
                    <Grid item xs={12}>
                      Ans
                    </Grid>
                    {showAns && <Grid item xs={12}>
                      {ans}
                    </Grid>}
                  </Grid>
                </InputAdornment>}
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  'aria-label': 'weight',
                }}
              />
              {/* <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText> */}
            </FormControl>
          </Grid>

          {/* Row 1 */}
          <Grid item xs={4} spacing={1}>
            <Button
              variant="outlined"
              color="default"
              onClick={() => { setNum(state => (state * 10) + 1); setScreen(state => state + "1") }}
            >
              <Typography variant="h4">1</Typography>
            </Button>
          </Grid>
          <Grid item xs={4} spacing={1}>
            <Button
              variant="outlined"
              color="default"
              onClick={() => { setNum(state => (state * 10) + 2); setScreen(state => state + "2") }}
            >
              <Typography variant="h4">2</Typography>
            </Button>
          </Grid>
          <Grid item xs={4} spacing={1}>
            <Button
              variant="outlined"
              color="default"
              onClick={() => { setNum(state => (state * 10) + 3); setScreen(state => state + "3") }}
            >
              <Typography variant="h4">3</Typography>
            </Button>
          </Grid>

          {/* Row 2 */}
          <Grid item xs={4} spacing={1}>
            <Button
              variant="outlined"
              color="default"
              onClick={() => { setNum(state => (state * 10) + 4); setScreen(state => state + "4") }}
            >
              <Typography variant="h4">4</Typography>
            </Button>
          </Grid>
          <Grid item xs={4} spacing={1}>
            <Button
              variant="outlined"
              color="default"
              onClick={() => { setNum(state => (state * 10) + 5); setScreen(state => state + "5") }}
            >
              <Typography variant="h4">5</Typography>
            </Button>
          </Grid>
          <Grid item xs={4} spacing={1}>
            <Button
              variant="outlined"
              color="default"
              onClick={() => { setNum(state => (state * 10) + 6); setScreen(state => state + "6") }}
            >
              <Typography variant="h4">6</Typography>
            </Button>
          </Grid>

          {/* Row 3 */}
          <Grid item xs={4} spacing={1}>
            <Button
              variant="outlined"
              color="default"
              onClick={() => { setNum(state => (state * 10) + 7); setScreen(state => state + "7") }}
            >
              <Typography variant="h4">7</Typography>
            </Button>
          </Grid>
          <Grid item xs={4} spacing={1}>
            <Button
              variant="outlined"
              color="default"
              onClick={() => { setNum(state => (state * 10) + 8); setScreen(state => state + "8") }}
            >
              <Typography variant="h4">8</Typography>
            </Button>
          </Grid>
          <Grid item xs={4} spacing={1}>
            <Button
              variant="outlined"
              color="default"
              onClick={() => { setNum(state => (state * 10) + 9); setScreen(state => state + "9") }}
            >
              <Typography variant="h4">9</Typography>
            </Button>
          </Grid>

          {/* Row 4 */}
          <Grid item xs={4} spacing={1}>
            <Button
              variant="outlined"
              color="default"
              onClick={() => { setNum(state => (state * 10) + 0); setScreen(state => state + "0") }}
            >
              <Typography variant="h4">0</Typography>
            </Button>
          </Grid>
          <Grid item xs={4} spacing={1}>
            <Button
              variant="outlined"
              color="default"
            >
              <Typography variant="h4">.</Typography>
            </Button>
          </Grid>
          <Grid item xs={4} spacing={1}>
            <Button
              variant="outlined"
              color="default"
              onClick={() => { calculate(); }}
            >
              <Typography variant="h4">=</Typography>
            </Button>
          </Grid>

          {/* Last Row */}
          <Grid item xs={10} spacing={1}>
            <Button
              variant="outlined"
              color="default"
              onClick={() => { setNumbers(state => [...state, num]); setNum(0); setScreen(state => state + " + ") }}
              fullWidth
            >
              <Typography variant="h4">+</Typography>
            </Button>
          </Grid>
          <Grid item xs={10} spacing={1}>
            <Button
              variant="outlined"
              color="default"
              onClick={() => { setScreen(""); setAns(0); setNum(0); setShowAns(false); setNumbers([]); }}
              fullWidth
            >
              <Typography variant="h4">Clear</Typography>
            </Button>
          </Grid>

        </Grid>

      </Paper>
    </div>
  );
}

export default App;
