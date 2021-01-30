const devBaseURL = "http://localhost:3000"

// const proBaseURL = `http://18.162.61.114:3000`

const proBaseURL = `${window.location.origin.substring(0, window.location.origin.lastIndexOf(':'))}:3000`


export const BASE_URL = process.env.NODE_ENV === "development" ? devBaseURL: proBaseURL

export const TIMEOUT = 5000