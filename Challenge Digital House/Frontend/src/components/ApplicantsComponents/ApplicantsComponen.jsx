import { Component } from "react";
import '../Home/style.css';
import { withRouter } from "react-router-dom";

class ClassComponents extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            applicants: [],
            professions: []
        };
    }

    componentDidMount() {
        this.fetchApplicants("http://localhost:3001/api/applicants");
        this.fetchProfessions("http://localhost:3001/api/professions");
    }

    fetchApplicants(url) {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                this.setState({ applicants: data.applicants }); 
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }
    
    fetchProfessions(url) {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                this.setState({ professions: data.professions });
            })
            .catch((error) => {
                console.error('Error fetching professions data:', error);
            });
    }
    
    getProfessionNameById(professionsId) {
        const { professions } = this.state;
        const profession = professions.find(profession => profession.id === professionsId);
        return profession ? profession.professions : "No profession"; 
    }
    
    render() {
        const { applicants } = this.state; 
        const { match } = this.props; // Obtener el objeto match de los props

        console.log(match.params);
        return (
            <>
                {applicants.map((applicant) => {
                    const professionName = this.getProfessionNameById(applicant.professionsId);
                    return (
                        <a key={applicant.id} href={`./applicants/${applicant.id}`}>
                            <div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
                                <div className="box-avatar">
                                    <img src={`../src/assets/img/${applicant.image}`} alt={applicant.name}/>
                                </div>
                                <div className="box-bio">
                                    <h2 className="bio-name">{applicant.name} {applicant.lastName}</h2>
                                    <p className="bio-position">{professionName}</p>
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
                        </a>
                    );
                })}
            </>
        );
    }
}    

export default withRouter(ClassComponents);
