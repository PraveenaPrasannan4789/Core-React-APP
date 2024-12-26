function HeaderData(props){
    return(
        <div>
            <p>Demo {props.data}</p>
        </div>
    )
}

// import { Component } from "react";

// class HeaderData extends Component{
//     render(){
//         return(
//             <div>
//             <p>Demo {this.props.data}</p>
//             </div>
//         )
//     }
// }

function HeaderData1(props){
    return(
        <div>
            <p>Demo {props.data}</p>
        </div>
    )
}

export const x= HeaderData1;
export default HeaderData;