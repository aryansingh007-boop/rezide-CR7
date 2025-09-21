// Utility function to get image paths that work both locally and on Vercel
export const getImagePath = (imageName: string): string => {
  // For Vercel deployment, images should be in public folder
  // For local development, they should also be in public folder
  return `/images/${imageName}`
}

// Image configuration for the project
export const images = {
  logo: getImagePath('rezide-logo.png'),
  presentation: getImagePath('presentation.jpg'),
  workshop: getImagePath('workshop.jpg'),
  event: getImagePath('event.jpg'),
  additional: getImagePath('additional.jpg'),
} as const

// Fallback images in case the main images don't load
export const fallbackImages = {
  logo: 'https://via.placeholder.com/48x48/2563eb/ffffff?text=R',
  presentation: 'https://via.placeholder.com/600x400/2563eb/ffffff?text=Real+Estate+Presentation',
  workshop: 'https://via.placeholder.com/300x200/10b981/ffffff?text=Workshop',
  event: 'https://via.placeholder.com/300x200/f97316/ffffff?text=Event',
  additional: 'https://via.placeholder.com/300x200/9c27b0/ffffff?text=Additional',
} as const
