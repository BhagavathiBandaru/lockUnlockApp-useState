import {useState} from 'react'

import {AppContainer, Text, Button, ImageElement} from './styledComponents'

const Unlock = () => {
  const [isStatusUnlocked, setStatus] = useState(false)
  const buttonText = isStatusUnlocked ? 'Lock' : 'Unlock'
  const imageSrc = isStatusUnlocked
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
  const altText = isStatusUnlocked ? 'unlock' : 'lock'
  const state = isStatusUnlocked
    ? 'Your Device is Unlocked'
    : 'Your Device is Locked'

  const changeLockUnlock = () => setStatus(prevState => !prevState)

  return (
    <>
      <AppContainer>
        <ImageElement src={imageSrc} alt={altText} />
        <Text>Your Device is {state}</Text>
        <Button onClick={changeLockUnlock}>{buttonText}</Button>
      </AppContainer>
    </>
  )
}

export default Unlock
