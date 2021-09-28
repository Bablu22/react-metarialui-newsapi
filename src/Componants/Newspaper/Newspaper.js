import { CircularProgress, Container, CssBaseline, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import News from '../News/News';
import Rechart from '../ReChart/Rechart';
import './Newspaper.css'
const Newspaper = () => {

    const [newsArticles, setNewsArticles] = useState([])
    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-28&sortBy=publishedAt&apiKey=d87b6f093cf949de96c088b48653a9c1')
            .then(res => res.json())
            .then(data => setNewsArticles(data.articles))
    }, [])
    return (
        <div>
            <Header></Header>
            <CssBaseline />
            <Container maxWidth="lg">
                {
                    newsArticles.length === 0 ?
                        <Box sx={{ display: 'flex' }} className="spiner">
                            <CircularProgress />
                        </Box>

                        :
                        <div className="card-container">
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                    {
                                        newsArticles.map(article => <Grid item xs={12} sm={12} md={4}>
                                            <News article={article}></News>

                                        </Grid>
                                        )}
                                </Grid>
                            </Box>
                        </div>
                }
                {
                    newsArticles.length === 0 ?
                        <Box sx={{ display: 'flex' }} className="spiner">

                        </Box>

                        : <Rechart></Rechart>
                }



            </Container>
        </div>
    );
};

export default Newspaper;