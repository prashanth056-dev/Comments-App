import './index.css'
import {Component} from 'react'
import {v4} from 'uuid'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {name: '', comment: '', list: []}

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  onLike = id => {
    this.setState(prevState => ({
      list: prevState.list.map(eachItem => {
        if (eachItem.id === id) {
          return {...eachItem, isLiked: !eachItem.isLiked}
        }
        return eachItem
      }),
    }))
  }

  onDelete = id => {
    const {list} = this.state
    const dubLst = [...list]
    const filteredList = dubLst.filter(eachItem => eachItem.id !== id)
    this.setState({list: filteredList})
  }

  onComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    if (name !== '' && comment !== '') {
      const newComment = {
        id: v4(),
        name,
        comment,
        isLiked: false,
      }
      this.setState(prevState => ({
        list: [...prevState.list, newComment],
        name: '',
        comment: '',
      }))
    }
  }

  render() {
    const {list, name, comment} = this.state

    return (
      <div className="mainBg">
        <div className="mainCard">
          <h1>Comments</h1>
          <div className="inputCont">
            <div className="commentBox">
              <p>Say something abut 4.0 Technologies</p>
              <form className="commentBox" onSubmit={this.onComment}>
                <input
                  type="text"
                  placeholder="Your Name"
                  onChange={this.onChangeName}
                  value={name}
                />
                <textarea
                  placeholder="Your Comment"
                  onChange={this.onChangeComment}
                  value={comment}
                />
                <button type="submit">Add Comment</button>
              </form>
            </div>

            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
          <hr />
          <p>
            <span>{list.length}</span> Comments
          </p>
          <ul>
            {list.map(eachItem => (
              <CommentItem
                key={eachItem.id}
                obj={eachItem}
                func1={this.onLike}
                func2={this.onDelete}
                classes={initialContainerBackgroundClassNames}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Comments
