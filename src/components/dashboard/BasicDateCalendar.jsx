import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export function BasicDateCalendar() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className='bg-white border-solid border-custom-blue border-[0.5px] border-opacity-50 rounded-2xl'>
      <DateCalendar />
      </div>
    </LocalizationProvider>
  );
}