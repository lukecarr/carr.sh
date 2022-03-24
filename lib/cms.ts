import { createClient } from 'contentful'
import dayjs from 'dayjs'

dayjs.locale('en-gb')

export const cms = () => typeof window === 'undefined' && createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export const getCareers = async () => {
  if (typeof window !== 'undefined') return undefined

  const { items } = await cms().getEntries({ content_type: 'career' })
  
  return items.map(({ fields }: { fields: any }) => ({
    ...fields,
    period: `${dayjs(fields.startDate).format('MMMM YYYY')} - ${fields.endDate ? dayjs(fields.endDate).format('MMMM YYYY') : 'Present'}`,
  }))
}

export const getEducation = async () => {
  if (typeof window !== 'undefined') return undefined

  const { items } = await cms().getEntries({ content_type: 'education' })
  
  return items.map(({ fields }: { fields: any }) => ({
    ...fields,
    period: `${dayjs(fields.startDate).format('MMMM YYYY')} - ${fields.endDate ? dayjs(fields.endDate).format('MMMM YYYY') : 'Present'}`,
  }))
}

export const getShields = async () => {
  if (typeof window !== 'undefined') return undefined

  const { items } = await cms().getEntries({ content_type: 'shield', order: 'fields.left' })
  
  return items.map(({ fields }: { fields: any }) => ({
    ...fields,
    color: fields.color ?? 'brightgreen',
  }))
}