import React from 'react';
import { Card, CardMedia, Box } from '@material-ui/core';
function ImageComponent({ imageUrl, altText }) {
    return (
        <Box display="flex" justifyContent="center" alignItems="center">
            <Card>
                <CardMedia
                    component="img"
                    alt={altText}
                    height="300" // Altezza dell'immagine, puoi personalizzarla
                    image={imageUrl}
                    title={altText}
                />
            </Card>
        </Box>
    );
}

export default ImageComponent;