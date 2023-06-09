import { styled } from "@mui/material/styles";
import { deepPurple } from '@mui/material/colors';
import { AppBar, Typography, Avatar, Toolbar, Button } from "@mui/material";

const styles = {
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
  },
  image: {
    marginLeft: '15px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: deepPurple[500],
    backgroundColor: deepPurple[500],
  },
};

const StyledAppBar = styled(AppBar)(styles.appBar);
const BrandContainer = styled("div")(styles.brandContainer);
const StyledTypography = styled(Typography)(styles.heading);
const PurpleAvatar = styled(Avatar)(styles.purple);
const StyledToolbar = styled(Toolbar)(styles.toolbar);
const Profile = styled("div")(styles.profile);
const StyledImage = styled("img")(styles.image);
const UserName = styled(Typography)(styles.userName);
const LogoutButton = styled(Button)(styles.log);

export { StyledAppBar, BrandContainer, StyledTypography, StyledToolbar, StyledImage, PurpleAvatar, Profile, UserName, LogoutButton };