import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
        
  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };
  

  const sideList = side => (
    <div className='drawerContainer'
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {['Devis', 'Bon de livraison', 'Commandes', 'OR' , 'Factures'].map((text, index) => (
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
      <Button onClick={toggleDrawer('left', true)}>Saisie des Ventes </Button>
      <Button onClick={toggleDrawer('left', true)}>Saisie des Règlements </Button>
      <Button onClick={toggleDrawer('left', true)}>Gestion de caisse </Button>
      <Button onClick={toggleDrawer('left', true)}>Gestion des fournisseurs </Button>
      <Button onClick={toggleDrawer('left', true)}>Gestion des stocks </Button>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
      
    </div>
  );
}
