import styled from 'styled-components'; 
import { Link } from 'react-router-dom';

export const Container = styled.div<{ bg: string }>`
    height: 100vh;
    background-image: url(https://image.tmdb.org/t/p/original/${props => props.bg});
    background-size: cover;
    background-position: center;
    

    .featured-effect--vertical {
        height: inherit;
        width: inherit;
        background: linear-gradient(to top, #111 10%, transparent 90%);

        .featured-effect--horizontal {
            height: inherit;
            width: inherit;
            background: linear-gradient(to right, #111 25%, transparent 75%);
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 70px 0 150px 30px;

            h2 {
                margin: 0;
                font-size: 40px;
            }

            p {
                margin: 0;
                max-width: 40%;
                font-size: 17px;
                line-height: 25px;
                max-height: 175px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 7;
                -webkit-box-orient: vertical;
                color: #999;
            }

            .featured-genres {
                font-size: 17px;
                color: #999;

                strong {
                    color: #FFF;
                }
            }

            @media(max-width: 800px) {

                & {
                margin-right: 30px;

                h2 {
                    font-size: 35px;
                }

                p {
                    font-size: 14px;
                    max-width: 100%;
                    max-height: 125px;
                    -webkit-line-clamp: 5;
                }

                .link-buttons a {
                    font-size: 14px;
                    padding: 0 15px;
                    height: 40px;
                }

                .featured-genres {
                    font-size: 14px;
                }

                .featured-infos--vote {
                    font-size: 14px;
                }

                .featured-infos--date {
                    font-size: 14px;
                }

                .featured-infos--seasons {
                    font-size: 14px;
                }
        }
    }

        }
    }

    .link-buttons {
        margin: 15px 0;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
`;

export const Infos = styled.div`
    font-weight: bold;
    font-size: 18px;
    margin: 15px 0;

    .featured-infos--vote,
    .featured-infos--date,
    .featured-infos--seasons {
        display: inline-block;
        margin-left: 10px; 
    }

    .featured-infos--vote {
        margin-left: 0;
        color: #46d369;
    }
`;

export const LinkButton = styled(Link)<{ bgColor: string, textColor: string }>`
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    padding: 0 20px;
    height: 50px;
    background-color: ${props => props.bgColor};
    color: ${props => props.textColor};
    border-radius: 5px;
    opacity: 1;
    transition: all ease .3s;

    &:hover {
        opacity: 0.8;
    }
`;
