import {useNavigate, useParams} from "react-router-dom";
import {useState} from "react";
import {Button, Paper} from "@mui/material";

const Second = ({content}) => {

    const {id} = useParams();
    const navigate = useNavigate();

    const [pagination, setPagination] = useState(Number(id))
    //console.log(pagination)
    return (
        <>
            <Paper className='content' elevation={3}> {content[pagination]}</Paper>
            <div className='btn'>
                <Button variant="contained" onClick={() => navigate(-1)}>Back</Button>
                <Button variant="contained" disabled={(pagination === 0 ? true : false)} onClick={() => setPagination(pagination - 1)}>Previous</Button>
                <Button variant="contained" disabled={(pagination === 4 ? true : false)} onClick={() => setPagination(pagination + 1)}>Forward</Button>
            </div>
        </>    )
}

export {Second}