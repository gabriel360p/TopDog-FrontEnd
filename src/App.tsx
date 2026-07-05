

import { ToastContainer } from 'react-toastify'
import { Roteamento } from './routes'

function App() {

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        draggable
        theme="dark"
      />
      <Roteamento />
    </>
  )
}

export default App
