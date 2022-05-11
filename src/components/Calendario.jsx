/*
First you have to install the adapter package for the date-library you want to use:

// date-fns
npm install @date-io/date-fns
// or for Day.js
npm install -s @date-io/dayjs
// or for Luxon
npm install -s @date-io/luxon
// or for Moment.js
npm install @date-io/moment
*/

//https://mui.com/x/react-date-pickers/getting-started/
//https://mui.com/x/api/date-pickers/date-picker/

import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';


//import DatePicker from '@mui/x-date-pickers/DatePicker';

 
export default function App({ children }) {


  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
        {children}
    </LocalizationProvider>
    
  );
}
