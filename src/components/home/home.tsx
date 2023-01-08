import { Cloud, Tv } from '@mui/icons-material';
import { Box, Button, ButtonGroup } from '@mui/material';
import MenuApp from '../ui/menu/menu';

const options = [
  { "name": 'AWS', "icon": Cloud },
  { "name": 'Local', "icon": Tv }
];


export default function Home() {
  return (
    <div>
      <MenuApp />
      <div>
        <Box sx={{ display: 'flex', '& > *': { m: 1, }, }}        >
          <ButtonGroup
            orientation="vertical"
            aria-label="vertical contained button group"
            variant="text"
          >
            {options.map((option) => (
              <Button
                key={option.name}
                startIcon={<option.icon />}
                // onClick={handleCloseNavMenu}
                sx={{ my: 1, color: 'primary' }}
              >
                {option.name}
              </Button>
            ))}
          </ButtonGroup>
        </Box>
      </div>
    </div>
  );
}


