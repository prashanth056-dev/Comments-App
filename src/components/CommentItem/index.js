// Write your code here
import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {obj, func1, func2, classes} = props
  const {id, name, comment, isLiked} = obj
  const profileName = name[0]

  const onLike = () => {
    func1(id)
  }
  const onDelete = () => {
    func2(id)
  }
  const likeImg = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const time = formatDistanceToNow(new Date())

  return (
    <li className="listItem">
      <div className="row">
        <div
          className={`profile ${
            classes[Math.floor(Math.random() * classes.length)]
          }`}
        >
          <h1>{profileName}</h1>
        </div>
        <div>
          <h1>
            {name} <span>{time}</span>
          </h1>
          <p>{comment}</p>
        </div>
      </div>
      <div className="row2">
        <button type="button" onClick={onLike} className="btn row">
          <img src={likeImg} alt="like" />
          <p className={isLiked ? 'liked' : 'unliked'}>Like</p>
        </button>
        <button
          type="button"
          onClick={onDelete}
          className="btn"
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="Delete"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}
export default CommentItem
