import React, { Component } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export class Product extends Component {

    constructor(props) {
        super(props)

        this.state = {
            empresa: this.props.info.empresa || "Vendehumo S.A"
        }
    }

    render() {
        const { name, desc, price, url } = this.props.info
        const empresa = this.state.empresa
        return (
            <section className="product">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={url}
                        alt={name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {desc}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {empresa}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Precio {price}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={this.props.remove} size="small">Delete</Button>
                    </CardActions>
                </Card>
            </section>
        )
    }
}

export default Product
