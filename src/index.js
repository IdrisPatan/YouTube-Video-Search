import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = "AIzaSyCVBqo2cDJxXfhGBr3yxG5DHuaCmXIPI1s";

// Create a new class component this should produce some HTML
class App extends Component {
    constructor(props){
        super(props);

        this.state ={ videos:[] };

        YTSearch ({key: API_KEY, term: 'surfboards'}, (videoData) => {
            // if i named videoData as just videos then we can also say "this.setState({videos})
            this.setState({videos:videoData});
            console.log(videoData);
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos ={this.state.videos}/>
            </div>
        );
    }
}


// // Create a new functional component this should produce some HTML ####### Went from Functional Component to Class component the following code is for functional component
// const App = () => {
//     return (
//     <div>
//         <SearchBar />
//     </div>
//     );
// }


// Take this component's generated HTML and put it on the page (DOM)

ReactDOM.render(<App />, document.querySelector('.container'));