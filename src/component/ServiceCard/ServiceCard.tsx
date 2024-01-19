import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";
import { Link } from "react-router-dom";

type ServiceCardProps = {
	image: string
	title: string
	body: string
	actionUrl: string
}

function ServiceCard({ actionUrl, body, image, title }: ServiceCardProps) {
	return (
    <Card sx={{ maxWidth: 350 }}>
      <CardMedia
        sx={{ height: 300 }}
        image={image}
        title="elevador"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
					{body}
        </Typography>
      </CardContent>
      <CardActions>
				<Link to={actionUrl}>
          <Button size="small">Saiba mais</Button>
				</Link>
      </CardActions>
    </Card>
  );
}

export default ServiceCard;