import Faq from './components/Faq'

import IconStar from './assets/images/icon-star.svg'

function App() {

  return (
    <div className="faq-contenedor">
        <div className="heading mb">
          <img src={IconStar} alt="icono star" />

          <h1 className="heading-text">FAQs</h1>
        </div>

        <Faq />
    </div>
  )
}

export default App
