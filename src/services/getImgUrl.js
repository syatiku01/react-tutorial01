export const getImgUrl = (main) => {
  const baseIconUrl = 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/'

  console.log('main: ', main)

  switch (main) {
    case 'Clear':
      return baseIconUrl + 'clear-day.svg'
    case 'Clouds':
      return baseIconUrl + 'cloudy.svg'
    case 'Rain':
      return baseIconUrl + 'rain.svg'
    case 'Snow':
      return baseIconUrl + 'snow.svg'
    case 'Thunderstorm':
      return baseIconUrl + 'thunderstorms.svg'
    case 'Drizzle':
      return baseIconUrl + 'drizzle.svg'
    case 'Mist':
      return baseIconUrl + 'mist.svg'
    case 'Smoke':
      return baseIconUrl + 'smoke.svg'
    case 'Haze':
      return baseIconUrl + 'haze.svg'
    case 'Dust':
      return baseIconUrl + 'dust.svg'
    case 'Fog':
      return baseIconUrl + 'fog.svg'
    case 'Sand':
      return baseIconUrl + 'dust.svg'
    case 'Ash':
      return baseIconUrl + 'dust.svg'
    case 'Squall':
      return baseIconUrl + 'rain.svg'
    case 'Tornado':
      return baseIconUrl + 'tornado.svg'
    default:
      return baseIconUrl + 'clear-day.svg'
  }
}
