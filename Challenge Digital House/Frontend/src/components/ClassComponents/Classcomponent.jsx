import { Component } from "react";

class ClassComponents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            applicants: []
        };
    }

    componentDidMount() {
        this.apiCall("http://localhost:3001/api/applicants");
    
    }

    apiCall(url) {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                this.setState({ applicants: data.product }); 
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }

    render() {
        const { applicants } = this.state; 

        return (
            <>
               
                    <h2>Aspirantes</h2>
                    <article className="person-boxes">
                        {applicants.map((applicant, index) => (
                            <div key={index} className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
                                <div className="box-avatar">
                                    <img src={applicant.image} alt={applicant.name}/>
                                </div>
                                
                                <div className="box-bio">
                                    <h2 className="bio-name">{applicant.name} {applicant.lastName}</h2>
                                    <p className="bio-position">Profecion</p>
                                </div>
                                <div className="box-actions">
                                    <button>
                                        <i className="bi bi-star"></i>
                                    </button>
                                    <button>
                                        <i className="bi bi-chat"></i>
                                    </button>
                                    <button>
                                        <i className="bi bi-envelope"></i>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </article>
                
            </>
        );
    }
}

export default ClassComponents;
