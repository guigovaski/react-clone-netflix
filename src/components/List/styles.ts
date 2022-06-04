import styled from 'styled-components'; 

type Props = {
    width: number;
    scrollX: number;
}

export const Container = styled.div<Props>`
    margin-bottom: 30px;
    padding-left: 30px;

    h2 {
        margin: 0;
    }

    .movie-list--area {
        overflow-x: hidden;
    }

    .movie-list {
        width: ${props => props.width}px;
        margin-left: ${props => props.scrollX}px;
        transition: all ease .4s;
    }

    .movie-item {
        display: inline-block;
        width: 150px;
        
        img {
            width: 100%;
            cursor: pointer;
            transform: scale(.9);
            transition: all ease .3s;
        
            &:hover {
                transform: scale(1);
            }
        }
    }

    .arrow-left,
    .arrow-right {
        position: absolute;
        height: 225px;
        width: 40px;
        margin-top: 28px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 99;
        background-color: rgba(0,0,0, 0.6);
        cursor: pointer;
        opacity: 0;
        transition: all ease .4s;
    }

    &:hover .arrow-left,
    &:hover .arrow-right {
        opacity: 1;
    }

    .arrow-left {
        left: 0;
    }

    .arrow-right {
        right: 0;
    }

    @media(max-width: 800px) {
        .arrow-left,
        .arrow-right {
            opacity: 1;
        }
    }
`;
