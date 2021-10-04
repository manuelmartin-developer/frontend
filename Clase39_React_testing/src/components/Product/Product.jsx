import React, { useState } from 'react'
import './Product.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Product = (props) => {

    const [empresa] = useState(props.info.empresa || "Vendehumo S.A");

    const { name, price, url } = props.info;

    return (
        <section className="product">

            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={url}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Empresa: {empresa}
                        Precio:{price}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={props.remove}>Borrar</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </section>
    )
}

export default Product
