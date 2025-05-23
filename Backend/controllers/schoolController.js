import { addSchools, listSchools } from '../models/schoolModel.js'
import { calculateDistance } from '../utils/geoUtils.js'

export async function getSchools(req, res) {
    try {
        const { latitude, longitude } = req.query
        
        if (!latitude || !longitude || isNaN(latitude) || isNaN(longitude)) {
            return res.status(400).json({ error: 'Valid latitude and longitude required' })
        }

        const schools = await listSchools()
        const schoolsWithDistance = schools.map(school => ({
            ...school,
            distance: calculateDistance(
                parseFloat(latitude), 
                parseFloat(longitude), 
                school.latitude, 
                school.longitude
            )
        }))

        schoolsWithDistance.sort((a, b) => a.distance - b.distance)
        res.json(schoolsWithDistance)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export async function createSchool(req, res) {
    try {
        const {name, address, latitude, longitude} = req.body

        if (!name?.trim()) return res.status(400).json({ error: 'Valid school name is required' })
        if (!address?.trim()) return res.status(400).json({ error: 'Valid address is required' })
        if (!latitude || isNaN(latitude) || latitude < -90 || latitude > 90) {
            return res.status(400).json({ error: 'Valid latitude is required (-90 to 90)' })
        }
        if (!longitude || isNaN(longitude) || longitude < -180 || longitude > 180) {
            return res.status(400).json({ error: 'Valid longitude is required (-180 to 180)' })
        }

        const school = await addSchools(name.trim(), address.trim(), parseFloat(latitude), parseFloat(longitude))
        res.status(201).json(school)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
