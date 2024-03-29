import * as React from "react";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Action, Keyword } from "../../../KeywordService";

const styles = (theme: any): any => ({
    card: {
        // maxWidth: 400,
        marginBottom: 20,
        height: 245,
        minWidth: 300,
    },
    media: {
        height: 0,
        paddingTop: "56.25%", // 16:9
    },
    actions: {
        display: "flex",
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
        backgroundColor: red[500],
    },
    header: {
        textTransform: "capitalize",
    },
});

const images: any = {
    john:
        "https://media.gq.com/photos/5ab5691f8b43895c76b4087c/16:9/w_1280%2Cc_limit/john-legend-style-evolution-.jpg",
    tom: "https://dbpost.com/wp-content/uploads/2018/07/hardy-shirtless-esquire-uk.jpg",
    wolfgang:
        "https://www.wwe.com/f/styles/talent_champion_full/public/all/2017/01/CWC_UK_Wolfgang--f531110263582bdf7ccee1923ff66c96.jpg",
};

export interface PersonCardProps {
    classes: any;
    action: Action;
    keyword: Keyword;
    createdAt: string;
}

export interface PersonCardState {
    expanded: boolean;
}

class PersonCardComponent extends React.Component<PersonCardProps, PersonCardState> {
    public state = { expanded: false };

    public handleExpandClick = () => {
        this.setState((state: PersonCardState) => ({ expanded: !state.expanded }));
    };

    public render(): JSX.Element {
        const { classes, action, keyword, createdAt } = this.props;

        const personCard = (
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="Recipe" className={classes.avatar}>
                            P
                        </Avatar>
                    }
                    action={
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={keyword}
                    subheader={"BMW"}
                    className={classes.header}
                />
                <CardMedia className={classes.media} image={images[keyword]} title="John Legend" />
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>Method:</Typography>
                        <Typography paragraph>
                            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                            aside for 10 minutes.
                        </Typography>
                        <Typography paragraph>
                            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                            large plate and set aside, leaving chicken and chorizo in the pan. Add
                            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and
                            cook, stirring often until thickened and fragrant, about 10 minutes. Add
                            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                        </Typography>
                        <Typography paragraph>
                            Add rice and stir very gently to distribute. Top with artichokes and
                            peppers, and cook without stirring, until most of the liquid is
                            absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
                            shrimp and mussels, tucking them down into the rice, and cook again
                            without stirring, until mussels have opened and rice is just tender, 5
                            to 7 minutes more. (Discard any mussels that don’t open.)
                        </Typography>
                        <Typography>
                            Set aside off of the heat to let rest for 10 minutes, and then serve.
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        );

        const contractCard = (
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="Recipe" className={classes.avatar}>
                            $
                        </Avatar>
                    }
                    action={
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={`Financing Contract`}
                    subheader={"New office equipment"}
                    className={classes.header}
                />
                <CardMedia
                    className={classes.media}
                    image={
                        "https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    }
                    title="John Legend"
                />
            </Card>
        );

        const sendEmailCard = (
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="Recipe" className={classes.avatar}>
                            M
                        </Avatar>
                    }
                    action={
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={`..Email sent!`}
                    subheader={"Attachment: Contract Details"}
                    className={classes.header}
                />
                <CardMedia
                    className={classes.media}
                    image={"https://images.wisegeek.com/letter-delivered-by-mail-carrier.jpg"}
                    title="John Legend"
                />
            </Card>
        );

        switch (action) {
            case "get-person":
                return personCard;
                break;
            case "contract-info":
                return contractCard;
                break;
            case "send-email":
                return sendEmailCard;
                break;
            default:
                break;
        }
    }
}
export const PersonCard = withStyles(styles)(PersonCardComponent);
