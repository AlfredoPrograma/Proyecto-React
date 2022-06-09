import './PersonalCard.scss'

const PersonalCard = ({ nombre, email, telefono }) => {
  return (
    <div className='card'>
      <h3 className='title'>{nombre}</h3>

      <div>
        <h4>Datos de contacto</h4>
        <p>{email}</p>
        <p>{telefono}</p>
      </div>
    </div>
  )
}

export default PersonalCard