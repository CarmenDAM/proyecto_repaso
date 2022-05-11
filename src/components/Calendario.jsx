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


import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';


function App({ children }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      {children}
    </LocalizationProvider>
  );
}
