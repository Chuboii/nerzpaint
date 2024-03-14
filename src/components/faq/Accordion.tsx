'use client'
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
      
          <Typography sx={{ color: 'text.secondary' }}>Who are we?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nerzpaints is a new paint company with products that would make you smile and makes yoour space a beautiful and colorful place to live in.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
      
          <Typography sx={{ color: 'text.secondary' }}>
       How to purchase our products?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           You can purchase our products by coming to our office or sending us a direct message in any of our social media platforms.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
        
          <Typography sx={{ color: 'text.secondary' }}>
           How durable is our product
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           Nerzpaints is durable and long-lasting. You do not have to fear washing or peeling off your walls. As long as you use the right type of paint and quality for your space.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
        
          <Typography sx={{ color: 'text.secondary' }}>
          How do we deliver our products to you?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
         Delivery cost is covered by the customer.
          </Typography>
        </AccordionDetails>
      </Accordion>
 
    </div>
  );
}
