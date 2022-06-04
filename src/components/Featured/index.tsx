import React from 'react'; 
import * as C from './styles';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const Featured = ({ data }: {data: any}) => { 

    let date = new Date(data.first_air_date);

    const genres = data.genres.map((item: any) => item.name)
        .join(', '); 

    return (
        <C.Container bg={data.backdrop_path}>
            <div className="featured-effect--vertical">
                <div className="featured-effect--horizontal">
                    <h2>{data.original_name}</h2>
                    <C.Infos>
                        <div className="featured-infos--vote">{data.vote_average}</div>
                        <div className="featured-infos--date">{date.getFullYear()}</div>
                        <div className="featured-infos--seasons">{data.number_of_seasons} Temporada{data.number_of_seasons > 1 ? 's' : ''}</div>
                    </C.Infos>
                    <p>{data.overview}</p>
                    <div className="link-buttons">
                        <C.LinkButton to="/" bgColor="#FFF" textColor="#000" style={{marginRight: '10px'}}>
                            <PlayArrowIcon />
                            Assistir
                        </C.LinkButton>
                        <C.LinkButton to="/" bgColor="#333" textColor="#FFF">+ Adicionar à lista</C.LinkButton>
                    </div>
                    <div className="featured-genres"><strong>Gêneros: </strong>{genres}</div>
                </div>
            </div>
        </C.Container>
    );
}

export default Featured;
