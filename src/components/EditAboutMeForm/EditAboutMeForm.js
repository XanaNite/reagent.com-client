import React from 'react';
import './EditAboutMeForm.css';
import AgentContext from '../../contexts/AgentContext';
import AgentApiService from '../../services/agents-api-service';

export default class EditAboutMeForm extends React.Component {
    static contextType = AgentContext;

    state = {
        error: null,
        updatedFields: []
    }

    handleChangeFirstName = e =>{
        this.setState({updatedFields: {first_name: e.target.value}})
    }

    handleChangeLastName = e =>{
        this.setState({updatedFields: {last_name: e.target.value}})
    }

    handleChangePhone = e =>{
        this.setState({updatedFields: {agent_phone: e.target.value}})
    }

    handleChangePhoneType = e =>{
        this.setState({updatedFields: {agent_phone_type: e.target.value}})
    }

    handleChangeTitle = e =>{
        this.setState({updatedFields: {title: e.target.value}})
    }

    handleChangeExperience = e =>{
        this.setState({updatedFields: {experience: e.target.value}})
    }

    handleChangeBio = e =>{
        this.setState({updatedFields: {bio: e.target.value}})
    }

    handleSubmit = ev => {
        ev.preventDefault()
        const agentId = localStorage.getItem('user_id')
        const {updatedFields} = this.state;

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
            experience: newFields.experience || '',
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
                                onChange={this.handleChangeFirstName} 
                            />
                        </div>
                        <div className="newLastName-container flexbox-between editFormSpacing">
                            <label htmlFor="newLastName">Last name</label>
                            <input 
                                type="text" 
                                name="newLastName" 
                                id="newLastName" 
                                defaultValue={this.props.agent.last_name}
                                onChange={this.handleChangeLastName}
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
                                    onChange={this.handleChangePhone}
                                />
                            </div>
                            <div className='phoneType-container'>
                                <select name="phoneType" id="phoneType" onChange={this.handleChangePhoneType}>
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
                                onChange={this.handleChangeTitle}
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
                                onChange={this.handleChangeExperience}
                            />
                            <span>years</span>
                            </div>
                        </div>
                        <div className="newBio-container flexbox-between editFormSpacing">
                            <label htmlFor="newBio">Bio</label>
                            <textarea 
                                name="newBio" 
                                id="newBio" 
                                defaultValue={this.props.agent.bio} 
                                onChange={this.handleChangeBio}
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