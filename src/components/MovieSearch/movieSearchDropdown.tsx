import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// component imports

// services

const Dropdown = styled.div`
	display: flex;
	width: 30rem;
	padding: 1rem;
	max-height: 50rem;
	overflow-y: auto;
	border-radius: 10px;
	z-index: 5;
	position: relative;
	top: 0.5rem;
	background-color: #223767;
	box-shadow: 0 0 30px rgba(0, 0, 0, 0.15);

	&::-webkit-scrollbar-track {
		background-color: #f5f5f5;
	}

	&::-webkit-scrollbar {
		width: 10px;
		background-color: #f5f5f5;
	}

	&::-webkit-scrollbar-thumb {
		background-color: #ea8f00;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	.movieCard {
		display: flex;
		width: 100%;
		padding: 0.5rem;

		img {
			height: 8rem;
			border-radius: 6px;
			margin-left: auto;
		}

		h5 {
			margin-right: auto;
		}

		&:hover {
			border-left: 2px solid #ea8f00;
			cursor: pointer;
		}
	}
`;

function MovieSearchDropdown(props: any) {
	return (
		<Dropdown className="dropdown">
			<ul>
				{props.movies.map((movie: any) => {
					return (
						<li className="movieCard">
							<h5>
								{movie.title} ({movie.release_date.substring(0, 4)})
							</h5>
							<img alt="Movie Poster" src={`http://image.tmdb.org/t/p/w185${movie.poster_path}`} />
						</li>
					);
				})}
			</ul>
		</Dropdown>
	);
}

export default MovieSearchDropdown;
