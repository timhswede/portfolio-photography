import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        textAlign: 'left',
        fontSize: '3rem',
        fontWeight: '300',
        margin: 'auto',
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default function JustifyContent() {
  return (
    <div style={{ width: '100%' }}>
      <Box sx={{ display: 'flex', marginLeft: 10, mr: 10, }}>
        <Item sx={{ width: '70%' }}>Tim Huang</Item>
        <Item sx={{ fontSize: '1rem', lineHeight: '1.5em', letterSpacing: '.1em' }}>Coder, Photographer, & Automotive Enthusiast. Combining passions into one space. Currently based in the United States in Los Angeles, California.</Item>
      </Box>
    </div>
    
  
  );
}