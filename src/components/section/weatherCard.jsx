import React, { useState } from 'react'
import { css } from '@emotion/react'
import { getImgUrl } from '../../services/getImgUrl'

const WeatherCard = ({ data }) => {
  const card = css`
    background-color: black;
    color: white;
    padding: 1.5em;
    width: max-content;
    margin: 0 auto;
    ${!data
      ? `
				height: 0px;
				opacity: 0;
			`
      : `
		height: 250px;
		opacity: 1;
		`}
    transition: all 1s ease-in-out;
  `

  return (
    <div css={card}>
      {data &&
        (data.cod != '200' ? (
          <p>ないってよ</p>
        ) : (
          <>
            <img src={getImgUrl(data.weather[0].main)} alt="" />
            <p>{data.weather[0].main}</p>
            <p>{data.main.temp}</p>
            <p>{data.main.humidity}</p>
            <p>{data.wind.speed}</p>
          </>
        ))}
    </div>
  )
}

export default WeatherCard
