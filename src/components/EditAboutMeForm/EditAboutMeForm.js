import React from 'react';
import './EditAboutMeForm.css';
import AgentContext from '../../contexts/AgentContext';
import AgentApiService from '../../services/agents-api-service';

export default class EditAboutMeForm extends React.Component {
    static contextType = AgentContext;

    state = {
        error: null,
        updatedFields: {
            first_name: '',
            last_name: '',
            agent_phone: '',
            agent_phone_type: '',
            title: '',
            city: '',
            state: '',
            zip: '',
            office: '',
            experience: '',
            brokerage: '',
            slogan: '',
            bio: ''
        }
    }

    handleChange = e =>{
        this.setState({updatedFields: {
            first_name: document.getElementById("newFirstName").value,
            last_name: document.getElementById("newLastName").value,
            agent_phone: document.getElementById("newPhone").value,
            agent_phone_type: document.getElementById("phoneType").value,
            title: document.getElementById("newTitle").value,
            city: document.getElementById("newCity").value,
            state: document.getElementById("newState").value,
            zip: document.getElementById("newZip").value,
            office: document.getElementById("newOffice").value,
            experience: document.getElementById("newExperience").value,
            brokerage: document.getElementById("newBrokerage").value,
            slogan: document.getElementById("newSlogan").value,
            bio: document.getElementById("newBio").value
        }})
    }

    handleSubmit = ev => {
        ev.preventDefault()
        const agentId = localStorage.getItem('user_id')
        const {updatedFields} = this.state;
        console.log(updatedFields)
        AgentApiService.updateAgent(agentId, updatedFields)
            .then(() =>{
                this.resetFields(updatedFields);
                window.location.assign('/myprofile');
            })
            .catch(this.context.setError);
        
    }

    resetFields = (newFields) => {
        this.setState({
            first_name: newFields.first_name || '',
            last_name: newFields.last_name || '',
            agent_phone: newFields.agent_phone || '',
            agent_phone_type: newFields.agent_phone_type || '',
            title: newFields.title || '',
            city: newFields.city || '',
            state: newFields.state || '',
            zip: newFields.zip || '',
            office: newFields.office || '',
            experience: newFields.experience || '',
            brokerage: newFields.brokerage || '',
            slogan: newFields.slogan || '',
            bio: newFields.bio || '',
        })
    }

    render(){
        const {error} =this.state;

        return (
            <div className="editAboutMe-container sectionBorders">
                <form className="editAboutMe-form" onSubmit={this.handleSubmit}>
                    <h3>Update Your Profile</h3>
                    <div className="editForm-container">
                        <div className='editForm__error' role='alert'>
                            {error && <p>{error.message}</p>}
                        </div>
                        <div className="newFirstName-container flexbox-between editFormSpacing">
                            <label htmlFor="newFirstName">First name</label>
                            <input 
                                type="text" 
                                name="newFirstName" 
                                id="newFirstName" 
                                defaultValue={this.props.agent.first_name}
                                onChange={this.handleChange} 
                            />
                        </div>
                        <div className="newLastName-container flexbox-between editFormSpacing">
                            <label htmlFor="newLastName">Last name</label>
                            <input 
                                type="text" 
                                name="newLastName" 
                                id="newLastName" 
                                defaultValue={this.props.agent.last_name}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="newPhone-container editFormSpacing">
                            <div className='flexbox-between'>
                                <label htmlFor="newPhone">Phone number</label>
                                <input 
                                    type="text" 
                                    name="newPhone" 
                                    id="newPhone" 
                                    defaultValue={this.props.agent.agent_phone} 
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className='phoneType-container'>
                                <select name="phoneType" id="phoneType" onChange={this.handleChange}>
                                    <option value="home">home</option>
                                    <option value="mobile">mobile</option>
                                    <option value="business">business</option>
                                    <option value="fax">fax</option>
                                </select>
                            </div> 
                        </div>
                        <div className="newTitle-container flexbox-between editFormSpacing">
                            <label htmlFor="newTitle">Professional title</label>
                            <input 
                                type="text" 
                                name="newTitle" 
                                id="newTitle" 
                                defaultValue={this.props.agent.title} 
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="newCity-container flexbox-between editFormSpacing">
                            <label htmlFor="newCity">City</label>
                            <input 
                                type="text" 
                                name="newCity" 
                                id="newCity" 
                                defaultValue={this.props.agent.city}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="newState-container flexbox-between editFormSpacing">
                            <label htmlFor="newState">State</label>
                            <input 
                                type="text" 
                                name="newState" 
                                id="newState" 
                                defaultValue={this.props.agent.state}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="newZip-container flexbox-between editFormSpacing">
                            <label htmlFor="newZip">Zip</label>
                            <input 
                                type="text" 
                                name="newZip" 
                                id="newZip" 
                                defaultValue={this.props.agent.zip}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="newOffice-container flexbox-between editFormSpacing">
                            <label htmlFor="newOffice">Office</label>
                            <input 
                                type="text" 
                                name="newOffice" 
                                id="newOffice" 
                                defaultValue={this.props.agent.office}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="newExperience-container flexbox-between editFormSpacing">
                            <label htmlFor="newExperience">Experience</label>
                            <div>
                            <input 
                                type="number" 
                                name="newExperience" 
                                id="newExperience" 
                                max="75"
                                defaultValue={this.props.agent.experience} 
                                onChange={this.handleChange}
                            />
                            <span>years</span>
                            </div>
                        </div>
                        <div className="newBrokerage-container flexbox-between editFormSpacing">
                            <label htmlFor="newBrokerage">Brokerage</label>
                            <input 
                                type="text" 
                                name="newBrokerage" 
                                id="newBrokerage" 
                                defaultValue={this.props.agent.brokerage} 
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="newSlogan-container flexbox-between editFormSpacing">
                            <label htmlFor="newSlogan">Slogan</label>
                            <input 
                                type="text" 
                                name="newSlogan" 
                                id="newSlogan" 
                                defaultValue={this.props.agent.slogan} 
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="newBio-container flexbox-between editFormSpacing">
                            <label htmlFor="newBio">Bio</label>
                            <textarea 
                                name="newBio" 
                                id="newBio" 
                                defaultValue={this.props.agent.bio} 
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className='editForm-button'>
                        <button type="submit">Update</button>
                    </div>
                </form>
            </div>
        )
    }
}