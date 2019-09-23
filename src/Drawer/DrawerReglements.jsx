import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import './DrawerVentes.css'




export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });
        
  const toggleDrawerReglements = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div className='drawerContainer'
      role="presentation"
      onClick={toggleDrawerReglements(side, false)}
      onKeyDown={toggleDrawerReglements(side, false)}
    >
      <List>
        {['Saisir un réglement', 'Réglement différé', 'Suivit de caisse', 'Bordereau remise chèques'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  
  return (
    <div className='toggleButton'>
      <Button onClick={toggleDrawerReglements('left', true)}>Saisie des Règlements </Button>
      <Drawer open={state.left} onClose={toggleDrawerReglements('left', false)}>
        {sideList('left')}
      </Drawer>
      
    </div>
  );
}
