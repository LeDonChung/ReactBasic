import React from "react";
import './Demo.scss'
class ChildComponent extends React.Component {
    state = {
        showJob: false
    }

    handlerShowHide = () => {
        this.setState({ showJob: !this.state.showJob });
    }

    handlerDelete = (job) => {
        this.props.deleteAJob(job);
    }
    render() {
        let { arrJobs } = this.props;
        let { showJob } = this.state;
        let check = showJob === true ? 'showJobs = true' : 'showJobs = false';
        console.log(check);
        return (
            // React.Fragment: giúp return nhiều block
            // <> </>: cách viết tắt của React.Fragment
            <>
                {showJob === false 
                    ?
                    <div><button style={{color: 'red'}} onClick={() => this.handlerShowHide()}>Show</button></div>
                    :
                    <>
                        <div className="job-list">
                            {
                                arrJobs.map((job, index) => {
                                    if (job.salary >= 500) {
                                        return (
                                                <div key={job.id}>
                                                    <p>Job: {job.title}</p>
                                                    <p>Salary: ${job.salary}</p>
                                                    <></> <span onClick={() => this.handlerDelete(job)}>X</span>
                                                </div>
                                        )
                                    }
                                })
                            }
                        </div>
                        <div><button onClick={() => this.handlerShowHide()}>Hide</button></div>
                    </>
                }
            </>
        )
    }
}

export default ChildComponent;