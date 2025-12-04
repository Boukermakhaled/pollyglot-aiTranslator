import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function FilledAlerts() {
  return (
    <Stack sx={{ width: '90%' }} spacing={2}  >
      
      <Alert variant="filled" severity="error">
        Somthing wrong please try again
      </Alert>
    </Stack>
  );
}