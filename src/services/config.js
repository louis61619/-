const devBaseURL = "http://localhost:3001"

const proBaseURL = "http://production.org"


export const BASE_URL = process.env.NODE_ENV === "development" ? devBaseURL: proBaseURL

export const TIMEOUT = 5000