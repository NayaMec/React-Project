import "../App.css"
import thumbImg from "../assets/img/images";


function Topbar(props) {
    return(
        <div id="navBar">
            <img src={thumbImg.logo1} class="w-2/12 rounded-xl"/>
            <ul class="flex flex-row justify-between gap-10 ml-10 text-sm text-darkGrey">
                <li>
                    <a>
                        Flavours 
                    </a>
                </li>
                <li>
                    <a>
                        Icecream
                    </a>
                </li>
                <li>
                    <a>
                        Locate
                    </a>
                </li>
                <li>
                    <a>
                        About
                    </a>
                </li>
                <li>
                    <a>
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    )
}
 export default Topbar;