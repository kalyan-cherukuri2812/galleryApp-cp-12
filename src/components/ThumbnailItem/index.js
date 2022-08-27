import './index.css'

const ThumbnailItem = props => {
  const {imagesList, onChangeStatus, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = imagesList

  const onClicking = () => {
    onChangeStatus(id)
  }
  return (
    <div>
      <li className={isActive === true ? 'active list' : 'list'}>
        <button type="button" onClick={onClicking}>
          <img src={thumbnailUrl} alt={thumbnailAltText} />
        </button>
      </li>
    </div>
  )
}

export default ThumbnailItem
