import React from "react";

function Navigation({handlePageChange, currentPage}) {
    const tabs = ['About Me', 'Contact', 'Projects', 'Resume'];
    return (
        <div className=" row navigation" id="navigation">
            <ul className="nav nav-tabs">
                {tabs.map(tab => (
                    <li className="nav-item" key={tab}>
                        <a
                            href={'#' + tab.toLowerCase()}
                            // Whenever a tab is clicked on,
                            // the current page is set through the handlePageChange props.
                            onClick={() => handlePageChange(tab)}
                            className={
                                'nav-link' + (currentPage === tab ? ' active' : '')
                            }
                        >
                            {tab}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Navigation;