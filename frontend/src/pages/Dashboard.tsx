import { Box, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Dashboard = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' }, gap: 3 }}>
        <Box>
          <Item>
            <Typography variant="h6">Total Students</Typography>
            <Typography variant="h3">150</Typography>
          </Item>
        </Box>
        <Box>
          <Item>
            <Typography variant="h6">Active Classes</Typography>
            <Typography variant="h3">8</Typography>
          </Item>
        </Box>
        <Box>
          <Item>
            <Typography variant="h6">Average Grade</Typography>
            <Typography variant="h3">B+</Typography>
          </Item>
        </Box>
        <Box>
          <Item>
            <Typography variant="h6">Attendance Rate</Typography>
            <Typography variant="h3">95%</Typography>
          </Item>
        </Box>
      </Box>
    </div>
  );
};

export default Dashboard;