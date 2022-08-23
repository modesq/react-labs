import React from "react";
import HornedBeast from "./hornedBeast";
import Data from "./data.json";


let dataEntry = Data.map(element =>
    <HornedBeast
        id={element._id}
        img={element.image_url}
        title={element.title}
        description={element.description}
        keyword={element.keyword}
        horns={element.horns}
    />
);


class Main extends React.Component {

    render() {
        return (
            dataEntry
        )
    }
}
export default Main;