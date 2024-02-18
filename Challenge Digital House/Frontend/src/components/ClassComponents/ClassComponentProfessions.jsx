import { Component } from "react";

class ClassComponentProfessions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            professions: []
        };
    }

    componentDidMount() {
        this.apiCall("http://localhost:3001/api/professions");
    }

    apiCall(url) {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                this.setState({ professions: data.professions }); 
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }

    render() {
        const { professions } = this.state; 

        return (
            <>
				<h2 className="mt-3">Profesiones</h2>
				<div className="list-group shadow-sm p-3 mb-5 rounded">
                
					<h4 className="list-group-item list-group-item-action active text-center"
						aria-current="true">
						Listado de Profesiones
					</h4>
                    {professions.map((profession, index) => (
					<button key={index} type="button" className="list-group-item list-group-item-action text-center">{profession.professions}</button>
                    ))}
				</div>
                
            </>
        );
    }
}

export default ClassComponentProfessions;
