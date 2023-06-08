import Menu from "./Menu";

export default function MenuItem(  { menuItem, lable } ) {
    return (
        <div>
            <li style = { menuItem }  >
                { lable }
            </li>
        </div>
    )
}