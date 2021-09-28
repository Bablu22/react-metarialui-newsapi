import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Rating, Typography } from '@mui/material';
import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './News.css'
const News = (props) => {
    const { description, urlToImage, publishedAt } = props.article
    return (
        <div>
            <Card sx={{ maxWidth: 345 }} className="card">
                <CardHeader
                    avatar={
                        <Avatar alt="Profile Picture" src={urlToImage} />
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={props.article.source.name}
                    subheader={publishedAt}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={urlToImage}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <div className="card-footer">
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                    </CardActions>
                    <Rating name="read-only" value={3} readOnly />
                </div>

            </Card>

        </div>
    );
};

export default News;