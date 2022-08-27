import React from "react";
import HornedBeast from "./hornedBeast";


class Main extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.jsonData.map(element =>
                        <HornedBeast
                            id={element._id}
                            img={element.image_url}
                            title={element.title}
                            description={element.description}
                            keyword={element.keyword}
                            horns={element.horns}
                            openModal={this.props.openModal}
                        />
                    )
                }
            </div>
        )
    }
}
export default Main;