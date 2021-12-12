import React from 'react';
import myStyled from 'styled-components'
import { styled } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import SignIntab from './SignInTab'
import Adrresstab from './AddressDetails'

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
    expandIcon={<KeyboardArrowDownIcon sx={{ fontSize: '0.9rem' }} style={{color: '#FFFFFF' , fontWeight: 600}} />}
    {...props}
  />
    ))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(180deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));



const LeftSide = () => {
     const [ expanded, setExpanded ] = React.useState('panel1');

     const handleChange = (panel) => (event, newExpanded) => {
         setExpanded(newExpanded ? panel : false);
     };
  return (
    <>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary  style={{backgroundColor: '#273c75' , color: '#FFFFFF'}} aria-controls="panel1d-content" id="panel1d-header">
          <Typography style={{fontWeight: 600}} >SIGN IN OR SIGN UP</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <SignIntab/>
        </AccordionDetails>
      </Accordion>

        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary style = {
                {
                    backgroundColor: '#273c75',
                    color: '#FFFFFF'
                }
            }
            aria-controls = "panel2d-content"
            id = "panel2d-header" >
            <Typography style={{fontWeight: 600}}   >Collapsible Group Item #2</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Adrresstab/>
            </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary style={{backgroundColor: '#273c75' , color: '#FFFFFF'}} aria-controls="panel3d-content" id="panel3d-header">
          <Typography style={{fontWeight: 600}} >Collapsible Group Item #3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography >
            Add Apyment Methode here
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default LeftSide;
