import React, { useState } from 'react'; 
import * as C from './styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { MoviesType } from '../../types/MoviesType';

type Props = {
    data: MoviesType;
}

const List = ({ data }: Props) => {
    const [scrollX, setScrollX] = useState(-500);

    function handleLeftArrow() {
        let leftScroll = scrollX + Math.round(window.innerWidth / 2);
        
        if (leftScroll > 0) {
            leftScroll = 0;
        }
        setScrollX(leftScroll);
    }

    function handleRightArrow() {
        let rightScroll = scrollX - Math.round(window.innerWidth / 2);
        let listWidth = data.items.results.length * 150;
        if ((window.innerWidth - listWidth) > rightScroll) {
            rightScroll = (window.innerWidth - listWidth) - 80;
        }
        setScrollX(rightScroll);
    }

    return (
        <C.Container 
            width={data.items.results.length * 150}
            scrollX={scrollX}
        >
            <div className="arrow-left" onClick={handleLeftArrow}>
                <ArrowBackIosIcon style={{fontSize: 40}} />
            </div>
            <div className="arrow-right" onClick={handleRightArrow}>
                <ArrowForwardIosIcon style={{fontSize: 40}} />
            </div>
            <h2>{data.title}</h2>
            <div className="movie-list--area">
                <div className="movie-list">
                    {data.items.results.length > 0 && data.items.results.map((item: any, index: number) => (
                        <div className="movie-item" key={index}>
                            <img src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} alt={item.original_title} />
                        </div>      
                    ))}
                </div>
            </div>
        </C.Container>
    );
}

export default List;