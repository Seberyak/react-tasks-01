import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const headerStyles = {color: "black", backgroundColor: "white"}

const Header = ({title, onAdd, showAddTask}) => {
    return (
        <header className="header">
            <h1 style={headerStyles}>{title}</h1>
            <Button color={showAddTask ? "red" : "green"} text={showAddTask ? "Close" : "Add"} onClick=
                {onAdd}/>
        </header>
    )
}


Header.defaultProps = {
    title: "Task Tracker",
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header;