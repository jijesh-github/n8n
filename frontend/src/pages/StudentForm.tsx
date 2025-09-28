import React, { useState, useEffect } from 'react';
import {
  Paper,
  TextField,
  Button,
  Typography,
  Box,
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

interface StudentFormData {
  name: string;
  email: string;
  phone: string;
  grade: string;
  address: string;
  parentName: string;
  parentContact: string;
}

const initialFormData: StudentFormData = {
  name: '',
  email: '',
  phone: '',
  grade: '',
  address: '',
  parentName: '',
  parentContact: '',
};

const StudentForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState<StudentFormData>(initialFormData);

  useEffect(() => {
    if (id) {
      // Fetch student data if editing
      // This would be replaced with actual API call
      console.log('Fetching student data for ID:', id);
    }
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    // This would be replaced with actual API call
    console.log('Form data:', formData);
    navigate('/students');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>
        {id ? 'Edit Student' : 'Add New Student'}
      </Typography>

      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: 3 }}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            label="Grade"
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            required
          />
          <Box sx={{ gridColumn: '1 / -1' }}>
            <TextField
              fullWidth
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              multiline
              rows={3}
            />
          </Box>
          <TextField
            fullWidth
            label="Parent Name"
            name="parentName"
            value={formData.parentName}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Parent Contact"
            name="parentContact"
            value={formData.parentContact}
            onChange={handleChange}
          />
        </Box>

        <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
          >
            {id ? 'Update' : 'Create'} Student
          </Button>
          <Button
            variant="outlined"
            onClick={() => navigate('/students')}
          >
            Cancel
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default StudentForm;