import React, { PureComponent } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class Preperation extends PureComponent {
    render() {
        
        if(this.props.steps) {
            return (  
                <div className="w-50">
                    <h3 className= 'mb-0'>Schritte</h3>
                    {this.props.steps.map((step, index) => {
                        return <div >
                            <h3>{index+1}</h3>
                            {step.description}
                            <div>
                            <img className="w-100" src={step.imageURL}></img>
                            </div>
                           
                        </div>
                    })}
                </div>
            )
        }
        return null


       /*  return (
            <div>
                <h3>Preperation</h3>
                <ol>
                    <li>Dip the apple slice in lemon juice to prevent it from turning yellow.</li>
                    <li>Combine all the liquid ingredients in a cocktail mixing cup. Fill it with ice and shake well.</li>
                    <li>Strain into a cocktail glass.</li>
                    <li>Garnish with the apple slice.</li>
                </ol>
            </div>
        ) */
    }
}
