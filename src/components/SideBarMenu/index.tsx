import {
  Button,
  Hidden,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from "@material-ui/core";
import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import HouseOutlinedIcon from "@material-ui/icons/HouseOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import ListAltOutlinedIcon from "@material-ui/icons/ListAltOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import SearchIcon from "@material-ui/icons/Search";
import { HomeStyles } from "../../pages/Home";

interface ISideBarProps {
  classes: ReturnType<typeof HomeStyles>;
}

export const SideBarMenu: React.FC<ISideBarProps> = ({
  classes,
}: ISideBarProps): React.ReactElement => {
  return (
    <List className={classes.sideBarMenuWrapper}>
      <ListItem>
        <ListItemIcon>
          <IconButton disableRipple size="small">
            <TwitterIcon
              color="primary"
              className={classes.homeIcon}
            />
          </IconButton>
        </ListItemIcon>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <Button
            className={classes.homeIconSize}
            startIcon={
              <HouseOutlinedIcon fontSize="large" />
            }
          >
            <Hidden smDown>
              <Link href={"/"}>
                <Typography variant="h6">
                  Главная
                </Typography>
              </Link>
            </Hidden>
          </Button>
        </ListItemIcon>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <Button
            className={classes.homeIconSize}
            startIcon={<SearchIcon />}
          >
            <Hidden smDown>
              <Link href={"/search"}>
                <Typography variant="h6">
                  Поиск
                </Typography>
              </Link>
            </Hidden>
          </Button>
        </ListItemIcon>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <Button
            className={classes.homeIconSize}
            startIcon={
              <NotificationsNoneOutlinedIcon />
            }
          >
            <Hidden smDown>
              <Typography variant="h6">
                Уведомления
              </Typography>
            </Hidden>
          </Button>
        </ListItemIcon>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <Button
            className={classes.homeIconSize}
            startIcon={<EmailOutlinedIcon />}
          >
            <Hidden smDown>
              <Typography variant="h6">
                Сообщения
              </Typography>
            </Hidden>
          </Button>
        </ListItemIcon>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <Button
            className={classes.homeIconSize}
            startIcon={
              <BookmarkBorderOutlinedIcon />
            }
          >
            <Hidden smDown>
              <Typography variant="h6">
                Закладки
              </Typography>
            </Hidden>
          </Button>
        </ListItemIcon>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <Button
            className={classes.homeIconSize}
            startIcon={<ListAltOutlinedIcon />}
          >
            <Hidden smDown>
              <Typography variant="h6">
                Списки
              </Typography>
            </Hidden>
          </Button>
        </ListItemIcon>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <Button
            className={classes.homeIconSize}
            startIcon={
              <PersonOutlineOutlinedIcon />
            }
          >
            <Hidden smDown>
              <Typography variant="h6">
                Профиль
              </Typography>
            </Hidden>
          </Button>
        </ListItemIcon>
      </ListItem>
      <ListItem>
        <Button
          className={classes.sideBarMenuButton}
          variant="contained"
          color="primary"
          fullWidth
        >
          Твитануть
        </Button>
      </ListItem>
    </List>
  );
};
