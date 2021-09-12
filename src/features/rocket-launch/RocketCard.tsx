import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import {
  pink,
  red,
  deepPurple,
  teal,
  lightBlue,
} from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Ships } from "../../components/ships";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 300,
      margin: theme.spacing(2),
    },
    card: {
      maxWidth: 300,
      margin: theme.spacing(4),
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundColor: pink[300],
    },
  })
);

export const RocketCard = ({ rocketLaunched }: any) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  console.log("rocket ", rocketLaunched);
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {rocketLaunched.flight_number}
          </Avatar>
        }
        title={rocketLaunched.mission_name}
        subheader={new Date(rocketLaunched.launch_date_utc).toDateString()}
      />
      <CardMedia
        className={classes.media}
        image={rocketLaunched.links.flickr_images[0]}
        title="Paella dish"
      />
      <CardContent>
        <Typography
          color="textSecondary"
          variant="subtitle2"
          component="p"
          paragraph
        >
          <span>
            {" "}
            Rocket name - {rocketLaunched.rocket.rocket_name} (
            {rocketLaunched.rocket.rocket_type})
          </span>{" "}
          <br />
          <span>
            {" "}
            Total Missions - {rocketLaunched.mission_id.length}{" "}
          </span>{" "}
          <br />
          <span> Total ships used - {rocketLaunched.ships.length} </span> <br />
          <span>
            {" "}
            {rocketLaunched.ships.length ? (
              <Ships ships={rocketLaunched.ships} />
            ) : null}{" "}
          </span>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Details</Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            paragraph
          >
            <span> Site name - {rocketLaunched.launch_site.site_name} </span>{" "}
            <br />
            <span>{rocketLaunched.details} </span>
          </Typography>
          <Typography color="textSecondary" variant="subtitle2" paragraph>
            <span>
              <Link href={rocketLaunched.links.article_link} target="_blank">
                Article
              </Link>
            </span>{" "}
            <span>
              <Link href={rocketLaunched.links.wikipedia} target="_blank">
                Wiki
              </Link>
            </span> {" "}
            <span>
              <Link href={rocketLaunched.links.video_link} target="_blank">
                Youtube
              </Link>
            </span>
          </Typography>
          <Typography>
            {/* Set aside off of the heat to let rest for 10 minutes, and then serve. */}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};
