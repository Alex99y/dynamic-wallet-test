import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDynamicContext, useWalletOptions } from '@dynamic-labs/sdk-react-core'
import { getSigner } from "@dynamic-labs/ethers-v6"

function App() {
  const { primaryWallet, handleLogOut } = useDynamicContext()
  const { selectWalletOption } = useWalletOptions()

  useEffect(() => {
    const fetchSigner = async () => {
      if (primaryWallet) {
        console.log(await getSigner(primaryWallet as any))
      }
    }
    const interval = setInterval(() => {
      fetchSigner().catch(console.error)
    }, 1000)
    return () => clearInterval(interval)
  }, [primaryWallet])

  const onClick = async () => {
    if (!primaryWallet)
      await selectWalletOption("metamask")
    else
      handleLogOut()
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => onClick()}>
          Click here!
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
