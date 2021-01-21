import React, { useContext, useEffect } from 'react'
import { Nav, ConnectorId } from '@pancakeswap-libs/uikit'
import { useWeb3React } from '@web3-react/core'
import { allLanguages } from 'constants/localisation/languageCodes'
import { LanguageContext } from 'hooks/LanguageContext'
import useTheme from 'hooks/useTheme'
import { injected, walletconnect } from 'connectors'
import links from './links'

const Menu = () => {
  const { account, activate, deactivate } = useWeb3React()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()

  useEffect(() => {
    console.log(isDark)
    const checkLogo = () => {
      const label = document.querySelector('[aria-label="Pancake home page"]')
      if (label !== null) {
        label.innerHTML = '<img src="/images/logo@2x.png" />'
        label.setAttribute('aria-label', 'Swap Dex')
        setTimeout(() => {
          checkLogo()
        }, 100)
      }
    }
    checkLogo()
  }, [])

  return (
    <Nav
      links={links}
      account={account as string}
      login={(connectorId: ConnectorId) => {
        if (connectorId === 'walletconnect') {
          return activate(walletconnect)
        }
        return activate(injected)
      }}
      logout={deactivate}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={selectedLanguage?.code || ''}
      langs={allLanguages}
      setLang={setSelectedLanguage}
    />
  )
}

export default Menu
