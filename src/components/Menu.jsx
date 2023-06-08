import MenuItem from "./MenuItem"

export default function Menu( { menu, menuItem } ){
    return(
        <div style={ menu }>
            <h4> This Is My Menu</h4>
            <ul>
                <li>
                < MenuItem menuItem = { menuItem } lable = "Home" />
                < MenuItem menuItem = { menuItem } lable = "About" />
                < MenuItem menuItem = { menuItem } lable = "Stuff" />
                < MenuItem menuItem = { menuItem } lable = "Things" />
                </li>
            </ul>
        </div>
    )
}