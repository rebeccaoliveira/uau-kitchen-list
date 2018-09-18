import React from 'react';

function FriendsList(props) {
  return (
    <ul>
      {props.list.map((name)=>(
        <li key={name}>
          <span>{name}</span>
          <button onClick={()=> props.onRemoveFriend(name)}>Remove</button>
        </li>
      ))}
    </ul>
  )
}

class PurchaseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: ['lala', 'lana', 'lulu']
    }
    this.handleRemoveFriend=this.handleRemoveFriend.bind(this)
  }

  handleAddFriend(name) {
  }

  handleRemoveFriend(name) {
    this.setState((currentState) =>{
      return{
        friends: currentState.friends.filter((friend) => friend !== name)
      }
    })
  }

  render() {
    return (
      <div>
        <FriendsList list={this.state.friends} onRemoveFriend={this.handleRemoveFriend} />
      </div>
    );
  }
}

export default PurchaseList;
