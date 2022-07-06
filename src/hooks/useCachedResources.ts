import { FontAwesome } from '@expo/vector-icons'
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect, useState } from 'react'

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false)

  useEffect(() => {
    const loadResourcesAndDataAsync = async () => {
      try {
        SplashScreen.preventAutoHideAsync()

        await Font.loadAsync({
          ...FontAwesome.font,
          editor: require('../../assets/fonts/Editor.otf')
        })
      } finally {
        setLoadingComplete(true)
        SplashScreen.hideAsync()
      }
    }

    loadResourcesAndDataAsync()
  }, [])

  return isLoadingComplete
}
