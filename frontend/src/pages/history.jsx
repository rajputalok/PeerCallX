import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';

import { IconButton } from '@mui/material';
export default function History() {


    const { getHistoryOfUser } = useContext(AuthContext);

    const [meetings, setMeetings] = useState([])


    const routeTo = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            routeTo('/auth');
            return;
        }

        const fetchHistory = async () => {
            try {
                const history = await getHistoryOfUser();
                setMeetings(history);
            } catch {
                // IMPLEMENT SNACKBAR
            }
        }

        fetchHistory();
    }, [routeTo, getHistoryOfUser])

    let formatDate = (dateString) => {

        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0")
        const year = date.getFullYear();

        return `${day}/${month}/${year}`

    }

    return (
        <div>

            <IconButton onClick={() => {
                routeTo("/home")
            }}>
                <HomeIcon />
            </IconButton >
            <Button variant="outlined" onClick={() => routeTo('/home')}>Go to Home Page</Button>
            {
                (meetings.length !== 0) ? meetings.map((e, i) => {
                    return (
                        <Card key={i} variant="outlined" sx={{ mb: 2, mx: { xs: 1, sm: 2 }, p: 1 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Code: {e.meetingCode}
                                </Typography>

                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    Date: {formatDate(e.date)}
                                </Typography>

                            </CardContent>
                        </Card>
                    )
                }) : <Typography sx={{ mt: 2, px: 2 }}>No meeting history found.</Typography>

            }

        </div>
    )
}