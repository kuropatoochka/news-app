export const formatPublishTime = (dateString) => {
  const now = Date.now()
  const date = Date.parse(dateString)
  let dif = now - date
  return (dif >= 3600000 ? `${Math.round(dif/(60 * 60 * 1000))}h ago` : `${Math.round(dif/(60 * 1000))}min ago` )
}