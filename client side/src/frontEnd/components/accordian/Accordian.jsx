import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    {...props}
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{marginTop: '15px'}} >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Typography>Brands</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           <FormGroup style={{fontSize: '10px'}} >
                <FormControlLabel control={<Checkbox />} label="Brand 01" />
                <FormControlLabel control={<Checkbox />} label="Brand 02" />
                <FormControlLabel control={<Checkbox />} label="Brand 03" />
                <FormControlLabel control={<Checkbox />} label="Brand 04" />
                <FormControlLabel control={<Checkbox />} label="Brand 05" />
            </FormGroup>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} style={{marginTop: '15px'}} >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Typography>Offers</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           <FormGroup style={{fontSize: '10px'}} >
                <FormControlLabel control={<Checkbox />} label="Excahnge Offer" />
                <FormControlLabel control={<Checkbox />} label="No Cost EMI" />
                <FormControlLabel control={<Checkbox />} label="special Price" />
            </FormGroup>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} style={{marginTop: '15px'}} >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Typography>Brands</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           <FormGroup style={{fontSize: '10px'}} >
                <FormControlLabel control={<Checkbox />} label="Brand 01" />
                <FormControlLabel control={<Checkbox />} label="Brand 02" />
                <FormControlLabel control={<Checkbox />} label="Brand 03" />
                <FormControlLabel control={<Checkbox />} label="Brand 04" />
                <FormControlLabel control={<Checkbox />} label="Brand 05" />
            </FormGroup>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel14'} onChange={handleChange('panel4')} style={{marginTop: '15px'}} >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Typography>Discounts</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           <FormGroup style={{fontSize: '10px'}} >
                <FormControlLabel control={<Checkbox />} label="Brand 01" />
                <FormControlLabel control={<Checkbox />} label="Brand 02" />
                <FormControlLabel control={<Checkbox />} label="Brand 03" />
                <FormControlLabel control={<Checkbox />} label="Brand 04" />
                <FormControlLabel control={<Checkbox />} label="Brand 05" />
            </FormGroup>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
