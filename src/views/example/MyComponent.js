import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';
class MyComponent extends React.Component {
    // key: value
    state = {
        arrJobs: [
            { id: 'job1', title: 'Developer', salary: 500 },
            { id: 'job2', title: 'Designer', salary: 400 },
            { id: 'job3', title: 'Tester', salary: 300 },
            { id: 'job4', title: 'PM', salary: 1000 }
        ]
    }

    addNewJob = (job) => {
        // let currentJobs = this.state.arrJobs;
        // currentJobs.push(job);
        this.setState({
            // Không nên dùng kiểu này
            // arrJobs: this.state.arrJobs.push(job)
            // ... là toán tủ copy mảng
            arrJobs: [...this.state.arrJobs, job]
        });
    }

    deleteAJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter((item) => {
            return item.id !== job.id;
        });
        this.setState({
            arrJobs: currentJobs
        })
    }

    

    
    /*
    JSX => return block: chỉ cho return 1 block duy nhất
    * @returns {JSX.Element}
    */
    render() {

        return (
            // React.Fragment: giúp return nhiều block
            // <> </>: cách viết tắt của React.Fragment
            <>
                <AddComponent
                    addNewJob = {this.addNewJob}
                />

                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}
                />
            </>
        );
    }
}

export default MyComponent;