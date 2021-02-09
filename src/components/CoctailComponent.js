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
                <>
                    <h3 className="m-3">Cards are received with fetch request and layouted with bootstrap:</h3>
                    <div className="coctails">
                        {coctails.map(item => <div key={item.idDrink} className="card coctail">
                        <div className="card-body text-center">
                            <p className="card-title">{item.strDrink}</p>
                            <img width="100" height="100" alt={item.strDrink} src={item.strDrinkThumb} />
                        </div>
                        </div>)}
                    </div>
                </>
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