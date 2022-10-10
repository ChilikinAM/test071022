import { useNavigate} from "react-router-dom";
import {Button, Card, CardActionArea, CardActions, CardContent, Typography} from "@mui/material";

const Main = ({content, request}) => {

    let navigate = useNavigate();

    return (
        <>
            <div className='content'>
                {content.map((text, index) => (
                    //<Link key={`/${index}`} to={`/${index}`}><p>{text.split('.')[0]} ... read more</p></Link>
                    <Card sx={{ maxWidth: 345 }} key={`/${index}`}>
                        <CardActionArea>
                            <CardContent onClick={() => setTimeout(() => {navigate(`/${index}`)}, 500)}>
                                <Typography gutterBottom variant="h5" component="div" >
                                    {text.split(' ')[0]}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {text.split('.')[0]}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" onClick={() => navigate(`/${index}`)}>
                                Learn more
                            </Button>
                        </CardActions>
                    </Card>
                ))}
            </div>

            <div className='btn'>
                <Button variant="contained" onClick={() => request()}>Next</Button>
            </div>
        </>
    )
}

export {Main}