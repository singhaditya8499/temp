import React from 'react';

class App1 extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            age: 13,
            gender: "",
            location: "",
            dietaryRestriction: []
        }
        this.handleOnChange = this.handleOnChange.bind(this);
    }
    handleOnChange(event) {
        console.log(event);
        const {name,value,options} = event.target;
        if(options.length) {
            this.setState(() => {
                return {[name]: options}
            });
        }
        else
        {
            this.setState(() =>{
                return {[name] : value}
            })
        }
    }
    render() {
        return(
            <div>
                <form>
                    <input type="text" value={this.state.firstName} name="firstName" placeholder="Your first name" onChange={this.handleOnChange}/>
                    <br/>
                    <input type="text" value={this.state.lastName} name="lastName" placeholder="Your last name" onChange={this.handleOnChange}/>
                    <br/>
                    <input type="number" value={this.state.age} name="age" placeholder="Your age" onChange={this.handleOnChange}/>
                    <br/>
                    <input type="radio" id="male" name="gender" value="male" checked={this.state.gender==="male"} onChange={this.handleOnChange}/>
                    <label htmlFor="male">Male</label><br/>
                    <input type="radio" id="female" name="gender" value="female" checked={this.state.gender==="female"} onChange={this.handleOnChange}/>
                    <label htmlFor="female">Female</label><br/>

                    <label htmlFor="location">Select yout location: </label>
                    <select name="location" id="location" onChange={this.handleOnChange}>
                        <option value="India">India</option>
                        <option value="America">America</option>
                        <option value="Antartica">Antartica</option>
                        <option value="Sri lanka">Sri lanka</option>
                    </select>
                    <select name="dietaryRestriction" onChange={this.handleOnChange} multiple>
                        <option value="Daliya">Daliya</option>
                        <option value="Milk">Milk</option>
                        <option value="Paneer">Paneer</option>
                        <option value="Pizza">Pizza</option>
                        <option value="Burger">Burger</option>
                    </select>
                </form>
                <h1>Entered Information:</h1>
                <h3>Your Name: {this.state.firstName} {this.state.lastName}</h3>
                <h3>Your age: {this.state.age}</h3>
                <h3>Your gender: {this.state.gender}</h3>
                <h3>Your location: {this.state.location}</h3>
                <h3>Your dietary restriction: {this.state.dietaryRestriction}</h3>
            </div>
        )
    }
}

export default App1;