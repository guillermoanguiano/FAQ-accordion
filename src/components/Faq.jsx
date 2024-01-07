import React, { useState } from 'react'
import IconMinus from '.././assets/images/icon-minus.svg'
import IconPlus from '.././assets/images/icon-plus.svg'

const Faq = () => {


    const preguntasRespuestas = [
        {
            pregunta: 'What is Frontend Mentor, and how will it help me?',
            respuesta: 'Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It\'s suitable for all levels and ideal for portfolio building'
        },
        {
            pregunta: 'Is Frontend Mentor free?',
            respuesta: 'Yes, it is'
        },
        {
            pregunta: 'Can I use Frontend Mentor projects in my portfolio?',
            respuesta: 'Yes'
        },
        {
            pregunta: 'How can I get help if I\'m stuck on a challenge?',
            respuesta: 'Join Discord'
        }
    ]

    const [isOpenStates, setIsOpenStates] = useState(
        preguntasRespuestas.map(() => false) 
    )

    // Crear funcion

    const handleClick = (questionIndex) => {
        setIsOpenStates((prevState) =>
          prevState.map((isOpen, index) => (index === questionIndex ? !isOpen : isOpen))
        )
    }

  return (
    <div className="list mt">
      <div className="list-item">
        {preguntasRespuestas.map((pregunta, index) => (
          <div key={index} className="item">
            <div
              onClick={() => handleClick(index)}
              className="question"
            >
              <p className="question-text">{pregunta.pregunta}</p>
              <img
                className="question-icon"
                src={isOpenStates[index] ? IconMinus : IconPlus}
                alt="icon"
              />
            </div>
            {isOpenStates[index] && (
              <p className="answer">{pregunta.respuesta}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Faq