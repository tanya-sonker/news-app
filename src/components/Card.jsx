import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const NewsCard = (props) => {
    return(
    <>
        <Card variant="outlined">
        <CardMedia
          component="img"
          height="140"
          image={props.image}
          alt="green iguana"
        />
        <CardContent>
        <Typography variant="h4">
            {props.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {props.source}
        </Typography>
        <Typography variant="body2">
            {props.description}
        </Typography>
        </CardContent>
        <CardActions>
        <a href={props.url} target="_blank" rel="noopener noreferrer">
            <Button size="small">Read More</Button>
        </a>
        </CardActions>
        </Card>
    </>
    )
}

export default NewsCard;
