import { useState, useEffect } from 'react'

interface TextAnimationProps {
  fullText: string
  interval?: number
}

export const useTextAnimation = ({
  fullText,
  interval = 100,
}: TextAnimationProps) => {
  const [displayText, setDisplayText] = useState<string>('')

  useEffect(() => {
    let currentIndex = 0

    const intervalId = setInterval(() => {
      setDisplayText(fullText.substring(0, currentIndex))
      currentIndex++

      if (currentIndex > fullText.length) {
        clearInterval(intervalId)
      }
    }, interval)

    return () => {
      clearInterval(intervalId)
    }
  }, [fullText, interval])

  return displayText
}
