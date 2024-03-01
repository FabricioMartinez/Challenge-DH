import { Component } from "react";
import '../Home/style.css';
import { withRouter } from "react-router-dom";

class Info extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            applicant: null,
            professions: []
        };
    }

    componentDidMount() {
        const applicantId = this.props.match.params.id;
        this.fetchApplicant(`http://localhost:3001/api/applicants/${applicantId}`);
        this.fetchProfessions("http://localhost:3001/api/professions");
    }

    fetchApplicant(url) {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                this.setState({ applicant: data.applicant }); 
            })
            .catch((error) => {
                console.error('Error fetching applicant data:', error);
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
        const { applicant } = this.state;

        if (!applicant) {
            return <div>Loading...</div>;
        }

        const professionName = this.getProfessionNameById(applicant.professionsId);

        return (
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
        );
    }
}    

export default withRouter(Info);
