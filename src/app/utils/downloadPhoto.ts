export async function downloadPhoto(url: string, filename: string) {
  try {
    const response = await fetch(url)
    const blob = await response.blob()
    const objectUrl = window.URL.createObjectURL(blob)
    const anchor = document.createElement('a')
    anchor.href = objectUrl
    anchor.download = filename
    document.body.appendChild(anchor)
    anchor.click()
    document.body.removeChild(anchor)
    window.URL.revokeObjectURL(objectUrl)
  } catch (error) {
    console.error('Failed to download image:', error)
  }
}

export async function downloadAllPhotos(
  photos: { url: string }[],
  title: string,
) {
  const slug = title.toLowerCase().replace(/\s+/g, '-')

  for (let i = 0; i < photos.length; i++) {
    await downloadPhoto(photos[i].url, `${slug}-${i + 1}.jpg`)
    await new Promise((resolve) => setTimeout(resolve, 300))
  }
}
