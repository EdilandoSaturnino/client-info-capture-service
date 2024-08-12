import type { Request, Response } from 'express'
import { getGeoLocation } from '../services/geoLocationService'
import { isPrivateIP } from '../services/ipUtils'

export const getClientInfo = async (req: Request, res: Response) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress

  let location = {}

  if (!isPrivateIP(ip as string)) {
    location = await getGeoLocation(ip as string)
  } else {
    location = { status: 'fail', message: 'private range', query: ip as string }
  }

  const clientInfo = {
    ip: ip as string,
    userAgent: req.headers['user-agent'] || 'N/A',
    language: req.headers['accept-language'] || 'N/A',
    host: req.headers['host'] || 'N/A',
    connection: req.headers['connection'] || 'N/A',
    encoding: req.headers['accept-encoding'] || 'N/A',
    referer: req.headers['referer'] || 'N/A',
    timeOfAccess: new Date().toISOString(),
    location: location,
  }

  console.log('infos capturadas:', clientInfo)

  res.json({
    message: 'Informações capturadas com sucesso!',
    data: clientInfo,
  })
}
