import React from "react";
import { AiFillApi } from "react-icons/ai";
import {
  TextField,
  Grid,
  InputLabel,
  Card,
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
  MenuItem,
  TextareaAutosize,
  FormGroup,
  Checkbox,
  Button,
} from "@material-ui/core";
import './formStyle.css'
const RegistrationForm = () => {
  return (
    <div>
      <Grid container >
        <Grid item xs={12}  className='deltin'>
          <Card>
            <Typography variant="h5"><AiFillApi/>|DELTON<span className='group'>GROUP</span></Typography>
            <p style={{fontSize:'7px'}}>HOTELS AND CASINOS</p>
            <Typography>Cash Transaction Report</Typography>
          </Card>
        </Grid>

        <Card className='card'>
          <Grid container >
            <Grid item xs={3} style={{margin:'20px'}}>
              Mobile No <span style={{ color: "red" }}>*</span>
            </Grid>
            <Grid item xs={8} style={{margin:'20px'}}>
              <TextField
                id="outlined-basic"
                label="Mobile Number"
                type="number"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={3} style={{margin:'20px'}}>
              Full Name <span style={{ color: "red" }}>*</span>
            </Grid>
            <Grid item xs={8} style={{margin:'20px'}}>
              <TextField
                id="outlined-basic"
                label=" Full Name"
                type="String"
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item xs={3} style={{margin:'20px'}}>
              Date of Birth <span style={{ color: "red" }}>*</span>
            </Grid>
            <Grid item xs={2} style={{margin:'20px'}}>
              <TextField id="outlined-basic" type="number" variant="outlined" />
            </Grid>
            <Grid item xs={2}style={{margin:'20px'}}>
              <TextField id="outlined-basic" type="month" variant="outlined" />
            </Grid>
            <Grid item xs={2} style={{margin:'20px'}}>
              <TextField id="outlined-basic" type="number" variant="outlined" />
            </Grid>

            <Grid item xs={12}style={{margin:'20px'}}>
              <Grid container>
                <Grid item xs={3}style={{margin:'20px'}}>
                  Gender <span style={{ color: "red" }}>*</span>
                </Grid>
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <Grid xs={4}>
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                    </Grid>
                    <Grid xs={4}>
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                    </Grid>
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
            <Grid item xs={3}style={{margin:'20px'}}>
              Nationality <span style={{ color: "red" }}>*</span>
            </Grid>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <Grid item xs={4}>
                  <FormControlLabel
                    value="Indian"
                    control={<Radio />}
                    label="Indian"
                  />
                </Grid>
                <Grid item xs={4}>
                  <FormControlLabel
                    value="Others"
                    control={<Radio />}
                    label="Others"
                  />
                </Grid>
              </RadioGroup>
            </FormControl>
          </Grid>
        </Card>
      </Grid>

      <Card className='card'>
        <Grid container className='container'>
          <Grid item xs={3}style={{margin:'20px'}}>
            Email ID
          </Grid>
          <Grid item xs={8}style={{margin:'20px'}}>
            <TextField
              id="outlined-basic"
              label="email"
              type="email"
              variant="outlined"
              fullWidth
            />
          </Grid>

          <Grid item xs={3}style={{margin:'20px'}}>
            Occupation
          </Grid>
          <Grid item xs={8}style={{margin:'20px'}}>
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                variant="outlined"
              >
                <MenuItem>Private Job</MenuItem>
                <MenuItem>Public Job</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}style={{margin:'20px'}}>
            Communication Address <span style={{ color: "red" }}>*</span>
          </Grid>
          <Grid item xs={8}style={{margin:'20px'}}>
            <TextareaAutosize minRows={3} style={{ width: "100%" }} />
          </Grid>

          <Grid item xs={3}style={{margin:'20px'}}>
            Country
          </Grid>
          <Grid item xs={8}style={{margin:'20px'}}>
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                defaultValue="India"
                variant="outlined"
                
              >
                <MenuItem>India</MenuItem>
                <MenuItem>USA</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={3}style={{margin:'20px'}}>
            State
          </Grid>
          <Grid item xs={8}style={{margin:'20px'}}>
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                defaultValue="India"
                variant="outlined"
              >
                <MenuItem>Kerala</MenuItem>
                <MenuItem>Karnataka</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={3}style={{margin:'20px'}}>
            City
          </Grid>
          <Grid item xs={8}style={{margin:'20px'}}>
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                defaultValue="India"
                variant="outlined"
              >
                <MenuItem>Bangalore</MenuItem>
                <MenuItem>Kochi</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={3}style={{margin:'20px'}}>
            Pincode <span style={{ color: "red" }}>*</span>
          </Grid>
          <Grid item xs={8}style={{margin:'20px'}}>
            <TextField
              id="outlined-basic"
              label="Pin code"
              type="number"
              variant="outlined"
              fullWidth
            />
          </Grid>

          <Grid item xs={3}style={{margin:'20px'}}>
            Identification Document <span style={{ color: "red" }}>*</span>
          </Grid>
          <Grid item xs={8} style={{margin:'20px'}}>
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                defaultValue="India"
                variant="outlined"
              >
                <MenuItem>Aadhar</MenuItem>
                <MenuItem>Voters ID</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={3}style={{margin:'20px'}}>
            Identification Number <span style={{ color: "red" }}>*</span>
          </Grid>
          <Grid item xs={8}style={{margin:'20px'}}>
            <TextField
              id="outlined-basic"
              label="Identification  Number"
              type="number"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={3}style={{margin:'20px'}}>
            Use Existing Document
          </Grid>
          <Grid item xs={8}style={{margin:'20px'}}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="View Document"
              />
            </FormGroup>
          </Grid>

          <Grid item xs={12}style={{margin:'20px'}}>
            <Grid container>
              <Grid item xs={3}style={{margin:'20px'}}>
                Transaction Type <span style={{ color: "red" }}>*</span>
              </Grid>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel control={<Radio />} label="Cash In" />

                  <FormControlLabel control={<Radio />} label="Cash Out" />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>

          <Grid item xs={3}style={{margin:'20px'}}>
            Mode of Payment <span style={{ color: "red" }}>*</span>
          </Grid>
          <Grid item xs={8}style={{margin:'20px'}}>
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                defaultValue="India"
                variant="outlined"
              >
                <MenuItem>Cash</MenuItem>
                <MenuItem>Online</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={3}style={{margin:'20px'}}>
            Currency <span style={{ color: "red" }}>*</span>
          </Grid>
          <Grid item xs={8}style={{margin:'20px'}}>
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                defaultValue="India"
                variant="outlined"
              >
                <MenuItem>INR-Indian Rupee</MenuItem>
                <MenuItem>Dollar</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={3}style={{margin:'20px'}}>
            Source of Funds
          </Grid>
          <Grid item xs={8}style={{margin:'20px'}}>
            <TextField
              id="outlined-basic"
              label=" Test"
              type="String"
              fullWidth
              variant="outlined"
            />
          </Grid>

          <Grid item xs={3}style={{margin:'20px'}}>
            Transaction Amount <span style={{ color: "red" }}>*</span>
          </Grid>
          <Grid item xs={8}style={{margin:'20px'}}>
            <TextField
              id="outlined-basic"
              label=" Amount"
              type="number"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={3}style={{margin:'20px'}}>
            Employee ID <span style={{ color: "red" }}>*</span>
          </Grid>
          <Grid item xs={8}style={{margin:'20px'}}>
            <TextField
              id="outlined-basic"
              label=" Employee Id"
              type="String"
              variant="outlined"
              fullWidth
            />
          </Grid>

          <Grid item xs={3}style={{margin:'20px'}}>
            DECLARATION<span style={{ color: "red" }}>*</span>
          </Grid>
          <Grid item xs={8}style={{margin:'20px'}}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="I Confirm the above mentioned transation"
              />
            </FormGroup>
          </Grid>
        </Grid>
      </Card>

      <Card>
        <Grid container className='container'>
          <Grid item xs={3}style={{margin:'20px'}}>
            DECLARATION<span style={{ color: "red" }}>*</span>
          </Grid>
          <Grid item xs={8}style={{margin:'20px'}}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="I Confirm the above mentioned transation"
              />
            </FormGroup>
            <p>
              I say that, source of money spent by me on buying chips is not
              stolen or is not part any Benami Transactions.I futher say that I
              am entering the casino premises voluntarily and that no one has
              induced or forced me to enter the Casino premises.

            </p>
            <Button style={{ justifyContent:'center'}}>Submit</Button>
          </Grid>
        </Grid>
     
      </Card>
    </div>
  );
};

export default RegistrationForm;
