import React, { Component } from 'react'

class IngredientsForm extends Component {
    state = {
        name: ""
    }

    handleChange = (e) => {
        this.setState({
            name:  e.target.value})
            
    }

    handleSubmit = (e) => {
        e.preventDefault()

        console.log(e.target.name)
        fetch(`http://www.recipepuppy.com/api/?i=${e.target.querySelector('input').value}&p=1`)
        .then(res => res.json())
        .then(data => console.log(data))
    }


    render() {
        return (

            <div>
                <h3>Search by Ingredients (comma separated):</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Ingredient:  </label>
                    <input name='ingredient' type="text" value={this.state.name} onChange={this.handleChange} />
                    <input type="submit" value="Find Recipes" />
                </form>
                <hr />
            </div>
        )
    }
}

export default IngredientsForm
