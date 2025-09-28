import React, { useState, useEffect } from 'react';
import {
  Paper,
  Typography,
  Card,
  CardContent,
  Box,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import { useParams } from 'react-router-dom';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`student-tabpanel-${index}`}
      aria-labelledby={`student-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const StudentDetails = () => {
  const { id } = useParams();
  const [tabValue, setTabValue] = useState(0);
  const [student] = useState({
    id,
    name: 'John Doe',
    grade: 'A',
    email: 'john@example.com',
    phone: '123-456-7890',
    address: '123 Main St, City, Country',
    enrollmentDate: '2023-09-01',
    parentName: 'Jane Doe',
    parentContact: '123-456-7899',
  });

  const [academicHistory] = useState([
    { semester: 'Fall 2023', gpa: '3.8', status: 'Completed' },
    { semester: 'Spring 2023', gpa: '3.9', status: 'Completed' },
  ]);

  const [attendance] = useState([
    { date: '2023-09-25', status: 'Present' },
    { date: '2023-09-24', status: 'Present' },
    { date: '2023-09-23', status: 'Absent' },
  ]);

  useEffect(() => {
    // Fetch student data
    // This would be replaced with actual API call
    console.log('Fetching student data for ID:', id);
  }, [id]);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Student Details
      </Typography>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
        <Box>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Personal Information
              </Typography>
              <Typography><strong>Name:</strong> {student.name}</Typography>
              <Typography><strong>Email:</strong> {student.email}</Typography>
              <Typography><strong>Phone:</strong> {student.phone}</Typography>
              <Typography><strong>Address:</strong> {student.address}</Typography>
            </CardContent>
          </Card>
        </Box>

        <Box>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Academic Information
              </Typography>
              <Typography><strong>Current Grade:</strong> {student.grade}</Typography>
              <Typography><strong>Enrollment Date:</strong> {student.enrollmentDate}</Typography>
              <Typography><strong>Parent Name:</strong> {student.parentName}</Typography>
              <Typography><strong>Parent Contact:</strong> {student.parentContact}</Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>

      <Box sx={{ width: '100%', mt: 3 }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={tabValue} onChange={handleTabChange}>
            <Tab label="Academic History" />
            <Tab label="Attendance" />
          </Tabs>
        </Box>

        <TabPanel value={tabValue} index={0}>
          <List>
            {academicHistory.map((semester, index) => (
              <React.Fragment key={semester.semester}>
                <ListItem>
                  <ListItemText
                    primary={semester.semester}
                    secondary={`GPA: ${semester.gpa} | Status: ${semester.status}`}
                  />
                </ListItem>
                {index < academicHistory.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <List>
            {attendance.map((record, index) => (
              <React.Fragment key={record.date}>
                <ListItem>
                  <ListItemText
                    primary={record.date}
                    secondary={`Status: ${record.status}`}
                  />
                </ListItem>
                {index < attendance.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        </TabPanel>
      </Box>
    </Paper>
  );
};

export default StudentDetails;