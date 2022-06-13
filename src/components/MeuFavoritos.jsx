import React from 'react'

function MeuFavoritos() {
  return (
    <div>MeuFavoritos</div>
  )
}

export default MeuFavoritos


<Card sx={{
  width:{ md: 250},
  margin: 3,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}}>
<Link to={`${dataMovie.id}`}>
<CardMedia
component="img"

alt={dataMovie.title}
/>
<CardContent>
<Typography variant="body2" color="text.secondary">
  {dataMovie.title}
</Typography>
<Typography variant="body2" color="text.secondary">
  {dataMovie.release_date}
</Typography>
</CardContent>
</Link>
</Card>