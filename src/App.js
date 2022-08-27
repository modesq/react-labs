import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'
import SelectedBeast from './components/selectedBeast'
import './App.css';
import Data from "./components/data.json";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            title: undefined,
            description: undefined,
            img: undefined
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        
    }
    openModal(title, description, img) {
        this.setState({ show: true,title: title,description: description,img: img});
    }

    closeModal() {
        this.setState({ show: false})
    }

    render() {
        return (
            <div>
                <Header />
                <Main jsonData={Data} openModal={this.openModal} />
                <SelectedBeast
                show = {this.state.show} title = {this.state.title} description = {this.state.description} img = {this.state.img} closeModal = {this.closeModal} />
                <Footer />
            </div>
        )
    }
}

export default App;
