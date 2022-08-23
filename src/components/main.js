import React from "react";
import HornedBeast from "./hornedBeast";
import image1 from "./assets/Gemsbok.jpg"

class Main extends React.Component {
    render() {
        return (
            <div>
                <HornedBeast title='Gemsbok' img = {image1} description='The gemsbok is a large antelope of genus Oryx. Also known as the South African oryx, the species is found in the southern African countries Botswana, Namibia, South Africa and Zimbabwe. It inhabits deserts, savannas and grasslands.' ></HornedBeast>
                <HornedBeast title='Markhor' img= {require('./assets/Markhor.jpg')} description='The markhor is a member of the goat genus Capra found in Central Asia. It lives at high altitudes on mountainous, rocky terrain, and is present on both the Karakoram and Himalaya mountain ranges. The species is the national animal of Pakistan.' ></HornedBeast>
                <HornedBeast title='American Bison / Buffalo' img= {require('./assets/American-Bison-Buffalo.jpg')} description='The American bison is one of North America’s iconic species. In terms of both weight and body length, this huge and powerfully-built species is the continent’s largest land animal. The heaviest-recorded American bison weighed 1,270 kg / 2,800 lb.; about the same as a modern compact family car.' ></HornedBeast>
            </div>
        )
    }
}
export default Main;