import { Component } from "react";

class ClassComponentProfessions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            professions: []
        };
    }

    componentDidMount() {
        this.fetchProfessions("http://localhost:3001/api/professions");
    }

    fetchProfessions(url) {
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
                {professions.map((profession, index) => (
				<button key={index} type="button" className="list-group-item list-group-item-action text-center">{profession.professions}</button>
                ))}
            </>
        );
    }
}

export default ClassComponentProfessions;
