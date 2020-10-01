import React, { Component } from 'react'

class CoctailComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoaded: false,
            error: null,
            coctails: []
        }
    }

    componentDidMount() {
        setTimeout(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result)
                this.setState({
                    isLoaded: true, 
                    coctails: result.drinks
                })
            },
            (error) => {
                this.setState({
                    isLoaded: true, 
                    error
                })
            }
        )
        }, 1000
        )
    }

    render() {
        const {isLoaded, error, coctails} = this.state
            if (error) {
                return (
                    <h1 className="p-2">Error: {error.message}</h1>
                )
            }
            else if (isLoaded) {
                return (
                <ul className="p-2">
                    {coctails.map(item => <li key={item.idDrink} className="p-2">
                    {item.strDrink}
                    <img width="50" height="50" alt={item.strDrink} src={item.strDrinkThumb} />
                    </li>)}
                </ul>
                )
            }
            else if(!isLoaded) {
                return (
                    <h1 className="p-2">Loading...</h1>
                )
            }
    }
}

export default CoctailComponent