import React, { Component } from 'react';

// 1. props.onRemoveFriend(friend.name) Array.concat({item: 'name'})
// 2. props.onRemoveFriend              Array.concat
//
// 1. <button onClick={props.onRemoveFriend}>Remove</button>
// 2. <button onClick={props.onRemoveFriend(friend.name)}>Remove</button>
// 3. <button onClick={() => props.onRemoveFriend(friend.name)}>Remove</button>

function ActiveFriends (props) {
  return (
    <div>
      <h2>Active Friends</h2>
      <ul>
        {props.list.map((friend) => (
          <li key={friend.name}>
            <span>{friend.name}</span>
            <button onClick={() => props.onRemoveFriend(friend.name)}>Remove</button>
            <button onClick={() => props.onToggleFriend(friend.name)}>Deactivate</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
function InactiveFriends (props) {
  return (
    <div>
      <h2>Inactive Friends</h2>
      <ul>
        {props.list.map((friend) => (
          <li key={friend.name}>
            <span>{friend.name}</span>
            <button onClick={() => props.onToggleFriend(friend.name)}>Activate</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
class TestApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      friends: [
        {
          name: 'Jordyn',
          active: true,
        },
        {
          name: 'Mikenzi',
          active: true,
        },
        {
          name: 'Jake',
          active: false
        }
      ],
      input: '',
    }
    this.handleRemoveFriend = this.handleRemoveFriend.bind(this)
    this.updateInput = this.updateInput.bind(this)
    this.handleAddFriend = this.handleAddFriend.bind(this)
    this.handleToggleFriend = this.handleToggleFriend.bind(this)
  }
  handleAddFriend() {
    this.setState((currentState) => {
      return {
        friends: currentState.friends.concat([{
          name: this.state.input,
          active: true
        }]),
        input: ''
      }
    })
  }
  handleRemoveFriend(name) {
    this.setState((currentState) => {
      return {
        friends: currentState.friends.filter((friend) => friend.name !== name)
      }
    })
  }
  handleToggleFriend(name) {
    this.setState((currentState) => {
      const friend = currentState.friends.find((friend) => friend.name === name)
      return {
        friends: currentState.friends.filter((friend) => friend.name !== name)
          .concat([{
            name,
            active: !friend.active
          }])
      }
    })
  }
  updateInput(e) {
    const value = e.target.value
    this.setState({
      input: value
    })
  }
  render() {
    return (
      <div>
        <input
          type='text'
          placeholder='new friend'
          value={this.state.input}
          onChange={this.updateInput}
        />
        <button onClick={this.handleAddFriend}>
          Submit
        </button>
        <div>
          <button onClick={() => this.setState({
            friends: []
          })}>Clear All</button>
        </div>
        <ActiveFriends
          list={this.state.friends.filter((friend) => friend.active === true)}
          onRemoveFriend={this.handleRemoveFriend}
          onToggleFriend={this.handleToggleFriend}
        />
        <InactiveFriends
          list={this.state.friends.filter((friend) => friend.active === false)}
          onToggleFriend={this.handleToggleFriend}
        />
      </div>
    )
  }
}

export default TestApp
